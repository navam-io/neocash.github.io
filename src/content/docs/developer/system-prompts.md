---
title: "System Prompts"
description: "How NeoCash builds and composes system prompts for different contexts."
personas: ["developer"]
section: "Developer"
order: 7
---

## Overview

NeoCash uses a layered system prompt architecture defined in `src/lib/system-prompt.ts`. Prompts are composed from modular building blocks depending on the conversation context (regular chat vs. goal thread) and the active specialist agent.

## Prompt Composition

The final system prompt is built by combining these layers:

```
Base Prompt
  + Agent Extension (specialist-specific)
  + Memory Context (user profile facts + decisions)
  + Tool Instructions (when and how to use tools)
```

### For Regular Chats

```typescript
buildSpecialistSystemPrompt(agentProfile)
  = basePrompt + agentProfile.systemPromptExtension
  + buildMemoryContext(memories, userMessage)
  + buildToolInstructions(false)
```

### For Goal Threads

```typescript
buildSpecialistSystemPrompt(agentProfile, goalContext)
  = buildGoalSystemPrompt(title, goal, signals)
  + agentProfile.systemPromptExtension
  + buildMemoryContext(memories, userMessage)
  + buildToolInstructions(true)
```

## Base Prompt

The core system prompt establishes NeoCash's identity and behavior:

- **Domain**: Tax planning, investing, portfolio management, budgeting, financial planning
- **Guidelines**: Be precise, actionable, explain reasoning, show the full picture, stay concise, be interactive
- **Disclaimers**: Educational nature, recommend professional consultation
- **Tone**: Warm, professional, empowering

## buildGoalSystemPrompt

Extends the base prompt with goal-specific context:

```typescript
function buildGoalSystemPrompt(
  title: string,
  goal: GoalMeta,
  signals: SignalRecord[]
): string
```

Adds:
- Goal status, category, and description
- Cross-pollinated signals (insights from other conversations)
- Dashboard schema and current metric values
- Goal thread behavioral rules (stay focused, track progress, suggest actions)

## buildMemoryContext

Injects the user's personal financial profile into the prompt:

```typescript
function buildMemoryContext(
  memories: MemoryRecord[],
  userMessage?: string
): string
```

### How It Works

1. **Facts** are grouped by category (income, tax, accounts, debt, family, employment, property, goals, general)
2. **Decisions** are ranked by keyword relevance to the current user message, and the top 5 are included
3. Output is capped at approximately 200 tokens

This gives Claude personalized context without overwhelming the prompt. For example, if the user asks about retirement, decisions related to 401k contributions or IRA rollovers will be prioritized.

## buildToolInstructions

Provides guidance on when and how to use each tool category:

```typescript
function buildToolInstructions(isGoalThread: boolean): string
```

### Key Rules

- **Memory**: Save when user states concrete financial facts (income, filing status, account balances). Use confidence 0.7-0.9 for inferred data, 0.9+ for explicit statements.
- **Signals**: Cross-pollinate when conversation data is relevant to other active goals
- **Dashboard**: Populate ALL metrics when data is available, not just explicitly stated values. Infer from context.
- **Goal threads**: On the first message, auto-generate dashboard schema and scan past chats for signals

### Goal Thread Special Behaviors

When `isGoalThread` is true, additional instructions are included:
- Call `generate_dashboard` on the first message to create tracking metrics
- Call `scan_chats_for_signals` to find relevant data in past conversations
- Proactively update dashboard values whenever relevant data surfaces
- Add action items for concrete next steps
- Add insights for observations and recommendations

## Agent Extensions

Each specialist agent adds domain-specific instructions via `systemPromptExtension`:

| Agent | Extension Focus |
|-------|----------------|
| Generalist | None (uses base prompt as-is) |
| Tax Advisor | Tax brackets, deductions, credits, tax-advantaged accounts, AMT, quarterly payments |
| Portfolio Analyzer | Asset allocation, rebalancing, diversification, benchmarking, risk assessment |
| Budget Planner | Cash flow, spending categories, savings rate, emergency fund, debt payoff strategies |
| Estate Planner | Beneficiaries, trusts, wills, POA, healthcare directives, gifting, succession |
