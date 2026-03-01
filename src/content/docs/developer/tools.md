---
title: "Tools"
description: "Complete reference for all 18 AI tools available to NeoCash's specialist agents."
personas: ["developer"]
section: "Developer"
order: 4
---

## Overview

NeoCash provides 18 tools to Claude, organized into **read tools** (6) and **write tools** (12). Each specialist agent has access to a filtered subset based on its domain. Tools are defined in `src/lib/tool-schemas.ts` and executed by `src/lib/tool-executor.ts`.

## Read Tools

### list_goals

Lists all financial goals with summary information.

- **Input**: `{ status?: "active" | "paused" | "completed" }`
- **Returns**: Array of goals with ID, title, status, category, signal count, action item counts
- **Use**: When the user asks about their goals or needs an overview

### get_goal

Retrieves full details for a specific goal including dashboard and signals.

- **Input**: `{ goalId: string }`
- **Returns**: Full goal details including dashboard schema/values, action items, insights, recent signals
- **Use**: Diving into a specific goal after `list_goals`

### list_signals

Retrieves cross-pollinated signals for a specific goal.

- **Input**: `{ goalId: string }`
- **Returns**: Array of signals from other conversations relevant to this goal
- **Use**: Checking what data points have been captured for a goal

### list_memories

Retrieves stored user profile information.

- **Input**: `{ type?: "fact" | "decision" }`
- **Returns**: Array of stored profile facts and financial decisions
- **Use**: Checking what's already known about the user before asking

### list_documents

Lists uploaded documents with metadata.

- **Input**: `{ chatId?: string }`
- **Returns**: Array of uploaded files with filename, type, size, metadata
- **Use**: Referencing user uploads in conversation context

### list_chats

Lists recent conversations for context.

- **Input**: `{ limit?: number }` (default: 10)
- **Returns**: Recent conversations excluding goal threads
- **Use**: Getting context from past discussions

## Write Tools

### save_memory

Stores a fact or decision about the user.

- **Input**: `{ type: "fact" | "decision", key: string, value: string, category: MemoryCategory, confidence: number, context?: string, keywords?: string[] }`
- **Returns**: `{ saved: boolean, key: string }`
- **Confidence**: 0.7-0.9 for inferred data, 0.9+ for explicitly stated
- **Dedup**: Uses `key` (snake_case) as the dedup anchor

### update_memory

Updates an existing memory with new information.

- **Input**: `{ memoryId: string, newValue: string, confidence?: number }`
- **Returns**: `{ updated: true, memoryId: string }`

### delete_memory

Removes an incorrect or outdated memory.

- **Input**: `{ memoryId: string }`
- **Returns**: `{ deleted: true, memoryId: string }`

### save_signal

Cross-pollinates conversation findings to a relevant goal.

- **Input**: `{ goalId: string, summary: string, category: string, extractedValues?: Record<string, any>, actionItems?: Array<{ text: string, priority: string }>, insights?: Array<{ text: string, type: InsightType }> }`
- **Returns**: `{ saved: boolean, goalId: string }`

### update_dashboard

Populates dashboard metric values for a goal.

- **Input**: `{ goalId: string, values: Record<string, string | number | boolean> }`
- **Returns**: `{ updated: true, goalId: string }`
- **Keys**: Use snake_case attribute IDs from the dashboard schema

### add_action_items

Adds actionable next steps to a goal.

- **Input**: `{ goalId: string, items: Array<{ text: string, priority: "high" | "medium" | "low" }> }`
- **Returns**: `{ added: number, goalId: string }`
- **Limit**: Maximum 15 non-completed action items per goal

### complete_action_item

Marks an action item as done.

- **Input**: `{ goalId: string, actionItemId: string }`
- **Returns**: `{ completed: true, goalId: string, actionItemId: string }`

### add_insights

Adds AI observations or recommendations to a goal.

- **Input**: `{ goalId: string, items: Array<{ text: string, type: InsightType }> }`
- **Returns**: `{ added: number, goalId: string }`
- **Limit**: Maximum 10 non-dismissed insights per goal
- **Types**: `missing_info`, `recommendation`, `warning`, `opportunity`

### update_goal_status

Changes the status of a goal.

- **Input**: `{ goalId: string, status: "active" | "paused" | "completed" }`
- **Returns**: `{ updated: true, goalId: string, status: string }`

### generate_dashboard

Auto-generates dashboard metric schema for a new goal.

- **Input**: `{ goalId: string, title: string, description: string, category?: string }`
- **Returns**: `{ generated: true, goalId: string, attributes: DashboardSchema }`
- **Output**: 3-8 typed attributes appropriate to the goal

### scan_chats_for_signals

Scans past conversations for data relevant to a new goal.

- **Input**: `{ goalId: string, title: string, description: string, category?: string }`
- **Returns**: `{ scanned: number, signalsFound: number, summaries: string[] }`

### run_background_agent

Launches a multi-agent analysis task in the background.

- **Input**: `{ task: TaskType, goalIds?: string[] }`
- **Task Types**: `financial_health_check`, `tax_review`, `portfolio_analysis`, `budget_optimization`, `estate_review`, `cross_goal_report`
- **Returns**: `{ completed: true, task: string, summary: string, changeCount: number, goalUpdates: any, newInsights: any, newSignals: any }`

## Tool Access by Agent

| Tool | Generalist | Tax | Portfolio | Budget | Estate |
|------|-----------|-----|-----------|--------|--------|
| All read tools | Yes | Yes | Yes | Yes | Yes |
| save_memory | Yes | Yes | Yes | Yes | Yes |
| save_signal | Yes | Yes | Yes | Yes | Yes |
| update_dashboard | Yes | Yes | Yes | Yes | Yes |
| add_action_items | Yes | Yes | — | Yes | Yes |
| add_insights | Yes | Yes | Yes | Yes | Yes |
| run_background_agent | Yes | Yes | Yes | Yes | Yes |

## Tool Executor

The `executeToolCall` function in `src/lib/tool-executor.ts` maps tool names to their implementations:

```typescript
async function executeToolCall(
  toolName: string,
  input: Record<string, unknown>,
  context: ExecutorContext
): Promise<unknown>
```

The `ExecutorContext` provides the current chat ID, message ID, and an optional `onAgentProgress` callback for background task streaming.
