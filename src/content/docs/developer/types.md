---
title: "Types"
description: "Complete TypeScript interface reference for all NeoCash data types."
personas: ["developer"]
section: "Developer"
order: 6
---

## Overview

All TypeScript interfaces are defined in `src/types/index.ts`. This page documents every type used across the application.

## Enums and Union Types

### GoalStatus

```typescript
type GoalStatus = "active" | "paused" | "completed";
```

### InsightType

```typescript
type InsightType = "missing_info" | "recommendation" | "warning" | "opportunity";
```

### DashboardAttributeType

```typescript
type DashboardAttributeType = "currency" | "percent" | "date" | "text" | "boolean" | "number";
```

### MemoryType

```typescript
type MemoryType = "fact" | "decision";
```

### MemoryCategory

```typescript
type MemoryCategory = "income" | "tax" | "accounts" | "debt" | "family"
                    | "employment" | "property" | "goals" | "general";
```

### AgentId

```typescript
type AgentId = "generalist" | "tax_advisor" | "portfolio_analyzer"
             | "budget_planner" | "estate_planner";
```

## Core Records

### ChatRecord

The primary conversation record. Goals are also ChatRecords with an additional `goal` property.

```typescript
interface ChatRecord {
  id: string;
  title: string;
  messages: UIMessage[];
  model: string;
  createdAt: number;
  updatedAt: number;
  goal?: GoalMeta;
}
```

### GoalMeta

Metadata attached to a ChatRecord to make it a goal.

```typescript
interface GoalMeta {
  type: "goal";
  description: string;
  status: GoalStatus;
  category?: string;
  signalCount: number;
  crossPollinate: boolean;
  origin?: "custom" | "predefined";
  dashboardSchema?: DashboardSchema;
  dashboardValues?: DashboardValues;
  actionItems?: ActionItem[];
  insights?: Insight[];
}
```

### MemoryRecord

Long-term user profile facts and financial decisions.

```typescript
interface MemoryRecord {
  id: string;
  type: MemoryType;
  key: string;              // snake_case dedup anchor
  value: string;            // human-readable value
  category: MemoryCategory;
  confidence: number;       // 0.0–1.0
  source: {
    chatId: string;
    messageId: string;
    extractedAt: number;
  };
  context?: string;         // decisions only — rationale
  keywords?: string[];      // decisions only — matching tags
  createdAt: number;
  updatedAt: number;
}
```

### SignalRecord

Cross-pollinated insights connecting conversations to goals.

```typescript
interface SignalRecord {
  id: string;
  goalId: string;
  sourceChatId: string;
  sourceMessageId: string;
  summary: string;
  category: string;
  createdAt: number;
  extractedValues?: Record<string, string | number | boolean>;
  actionItems?: Array<{
    text: string;
    priority: "high" | "medium" | "low";
  }>;
  insights?: Array<{
    text: string;
    type: InsightType;
  }>;
}
```

### DocumentRecord

Metadata for uploaded files.

```typescript
interface DocumentRecord {
  id: string;
  filename: string;
  mediaType: string;
  chatId: string;
  metadata: string;
  fileSize: number;
  createdAt: number;
}
```

## Dashboard Types

### DashboardAttribute

A single metric definition in a goal's dashboard schema.

```typescript
interface DashboardAttribute {
  id: string;               // snake_case identifier
  name: string;             // human-readable label
  type: DashboardAttributeType;
  description?: string;
  unit?: string;
}
```

### DashboardSchema

```typescript
type DashboardSchema = DashboardAttribute[];
```

### DashboardValue

A stored metric value with provenance tracking.

```typescript
interface DashboardValue {
  value: string | number | boolean;
  sourceSignalId?: string;
  updatedAt?: number;
  confidence?: number;
}
```

### DashboardValues

```typescript
type DashboardValues = Record<string, DashboardValue>;
```

## Action Items & Insights

### ActionItem

```typescript
interface ActionItem {
  id: string;
  text: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  sourceSignalId?: string;
  createdAt: number;
}
```

### Insight

```typescript
interface Insight {
  id: string;
  text: string;
  type: InsightType;
  sourceSignalId?: string;
  createdAt: number;
  dismissedAt?: number;
}
```

## Agent Types

### AgentProfile

```typescript
interface AgentProfile {
  id: AgentId;
  name: string;
  description: string;
  icon: string;                    // Lucide icon name
  systemPromptExtension: string;
  toolNames: ToolName[];
  keywords: string[];
  goalCategories: string[];
}
```

### AgentDataSnapshot

Complete state snapshot used by background agents.

```typescript
interface AgentDataSnapshot {
  goals: GoalRecord[];
  memories: MemoryRecord[];
  signals: SignalRecord[];
  documents: DocumentRecord[];
  chats: ChatSummary[];
}
```

### AgentDataDiff

Changes computed between before/after snapshots.

```typescript
interface AgentDataDiff {
  goals: DiffOperation<GoalRecord>;
  memories: DiffOperation<MemoryRecord>;
  signals: DiffOperation<SignalRecord>;
}

interface DiffOperation<T> {
  created: T[];
  updated: T[];
  deleted: string[];  // IDs
}
```
