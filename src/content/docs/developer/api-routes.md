---
title: "API Routes"
description: "Complete reference for all NeoCash API endpoints with request/response schemas."
personas: ["developer"]
section: "Developer"
order: 5
---

## Overview

NeoCash has 6 API routes, all implemented as Next.js App Router route handlers. They act as stateless proxies to the Anthropic Claude API — no server-side state is persisted.

## POST /api/chat

The main chat streaming endpoint. Handles message streaming with tool execution and agent routing.

### Request Body

```typescript
{
  messages: UIMessage[];
  model?: string;           // default: "claude-sonnet-4-6"
  researchMode?: boolean;
  webSearch?: boolean;
  goalContext?: {
    goal: GoalMeta;
    // ... additional context
  };
  memories?: MemoryRecord[];
}
```

### Response

Server-Sent Events (SSE) stream using the `UIMessageStreamResponse` format from the Vercel AI SDK.

### Processing Pipeline

1. **Window messages** to 160k token budget (keeps recent 6 messages with files intact)
2. **Extract latest user message** for agent classification
3. **Route to specialist agent** (tax, portfolio, budget, estate, or generalist)
4. **Build system prompt** with agent extension + memory context + tool instructions
5. **Stream response** with tools and optional web search
6. **Execute tool calls** against IndexedDB stores via `executeToolCall`

### Limits

- **Max duration**: 60 seconds
- **Token budget**: 160,000 tokens

## POST /api/detect-signals

Analyzes conversation text for cross-goal signals using Claude Haiku.

### Request Body

```typescript
{
  responseText: string;
  goals: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    dashboardSchema?: DashboardSchema;
    existingActionItems?: string[];
    existingInsights?: string[];
  }>;
}
```

### Response

```typescript
{
  signals: Array<{
    goalId: string;
    summary: string;
    category: string;
    extractedValues?: Record<string, any>;
    actionItems?: Array<{
      text: string;
      priority: "high" | "medium" | "low";
    }>;
    insights?: Array<{
      text: string;
      type: InsightType;
    }>;
  }>;
}
```

### Model

`claude-haiku-4-5-20251001` — chosen for speed since this runs after every chat message.

## POST /api/generate-dashboard-schema

Generates typed dashboard metrics for a new goal.

### Request Body

```typescript
{
  title: string;
  description?: string;
  category?: string;
}
```

### Response

```typescript
{
  schema: Array<{
    id: string;           // snake_case identifier
    name: string;         // human-readable name
    type: DashboardAttributeType;
    description: string;
  }>;
}
```

### Output

Generates 3-8 attributes with types appropriate to the goal (currency for dollar amounts, percent for rates, date for deadlines, etc.).

### Model

`claude-sonnet-4-6` — uses the more capable model for schema design quality.

## POST /api/generate-goal-prompt

Generates a rich opening prompt for a new goal conversation.

### Request Body

```typescript
{
  title: string;
  category?: string;
}
```

### Response

```typescript
{
  prompt: string;
  suggestedCategory?: string;
}
```

### Output

A 2-4 sentence first-person prompt structured to kickstart a productive goal conversation.

### Model

`claude-haiku-4-5-20251001`

## POST /api/suggest-category

Classifies a goal into one of 8 financial categories.

### Request Body

```typescript
{
  title: string;
  description: string;
}
```

### Response

```typescript
{
  category: string;  // category ID or empty string
}
```

### Categories

`tax`, `investing`, `budgeting`, `debt`, `retirement`, `estate`, `life-events`, `business`

### Model

`claude-haiku-4-5-20251001`

## POST /api/background-agent

Multi-agent financial analysis orchestrator. Streams SSE events for real-time progress tracking.

### Request Body

```typescript
{
  task: "financial_health_check" | "tax_review" | "portfolio_analysis"
        | "budget_optimization" | "estate_review" | "cross_goal_report";
  dataSnapshot: AgentDataSnapshot;
  goalIds?: string[];
}
```

### SSE Events

| Event | Payload | Description |
|-------|---------|-------------|
| `agent:heartbeat` | `{}` | Connection confirmed |
| `agent:started` | `{ task_id, agentName, description, total }` | Sub-agent begins work |
| `agent:completed` | `{ taskId, agentName, durationMs }` | Sub-agent finishes |
| `agent:result` | `{ diffs, summary, changeCount, task }` | Final results with data diffs |
| `agent:error` | `{ message }` | Error occurred |

### Execution Flow

1. Write data snapshot to temp file
2. Create in-process MCP server for tool access
3. Delegate to Claude Agent SDK with task-specific sub-agents
4. Stream lifecycle events back to client
5. Compute diffs between before/after snapshots
6. Return diffs for client-side application to IndexedDB

### Limits

- **Max duration**: 120 seconds

## GET /api/models

Lists available AI models.

### Response

```typescript
Array<{
  id: string;
  name: string;
  description: string;
  provider: string;
}>
```
