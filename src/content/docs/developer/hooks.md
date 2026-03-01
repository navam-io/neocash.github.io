---
title: "Hooks"
description: "Complete reference for all 7 custom React hooks that power NeoCash's data layer."
personas: ["developer"]
section: "Developer"
order: 3
---

## Overview

NeoCash uses custom React hooks as its data access layer. Each hook wraps IndexedDB operations through the `idb` library, providing async CRUD functions for each data domain.

## useChatHistory

Manages conversations and messages stored in IndexedDB.

### Functions

| Function | Signature | Description |
|----------|-----------|-------------|
| `getChat` | `(id: string) → Promise<ChatRecord \| undefined>` | Fetch a single conversation |
| `saveChat` | `(chat: ChatRecord) → Promise<void>` | Save or update a conversation (auto-updates `updatedAt`) |
| `deleteChat` | `(id: string) → Promise<void>` | Delete a conversation |
| `listChats` | `() → Promise<ChatRecord[]>` | List all conversations sorted by `updatedAt` desc |
| `createChat` | `(id: string, model: string) → Promise<ChatRecord>` | Create a new empty conversation |
| `deleteChatWithCascade` | `(id: string) → Promise<void>` | Delete conversation and associated documents |
| `clearAllChats` | `() → Promise<void>` | Delete all conversations |

## useGoalStore

Manages goals and their associated dashboards, action items, and insights. Goals are a superset of chats — they're `ChatRecord` objects with a `goal` property containing `GoalMeta`.

### Goal Management

| Function | Signature | Description |
|----------|-----------|-------------|
| `createGoal` | `(id, model, title, category?, description?, origin?) → Promise<ChatRecord>` | Create a new goal with metadata |
| `deleteGoal` | `(id: string) → Promise<void>` | Delete a goal and its data |
| `listGoals` | `() → Promise<ChatRecord[]>` | List goals sorted by status then date |
| `listRegularChats` | `() → Promise<ChatRecord[]>` | List conversations that are not goals |
| `updateGoalStatus` | `(id, status, disableCapture?) → Promise<void>` | Change goal status (active/paused/completed) |
| `toggleCrossPollination` | `(id: string) → Promise<void>` | Enable/disable signal detection |

### Dashboard Operations

| Function | Signature | Description |
|----------|-----------|-------------|
| `setDashboardSchema` | `(id, schema: DashboardSchema) → Promise<void>` | Set metric definitions |
| `updateDashboardValues` | `(id, newValues) → Promise<void>` | Update metric values (merges with existing) |
| `updateDashboardAttribute` | `(id, attrId, updates) → Promise<void>` | Modify a single metric definition |

### Action Items & Insights

| Function | Signature | Description |
|----------|-----------|-------------|
| `addActionItems` | `(goalId, items) → Promise<void>` | Add action items (max 15 active, deduped) |
| `toggleActionItem` | `(goalId, itemId) → Promise<void>` | Mark action item complete/incomplete |
| `addInsights` | `(goalId, items) → Promise<void>` | Add insights (max 10 active, deduped) |
| `dismissInsight` | `(goalId, insightId) → Promise<void>` | Dismiss an insight |

## useMemoryStore

Long-term user profile management with fact and decision storage.

### Functions

| Function | Signature | Description |
|----------|-----------|-------------|
| `saveMemory` | `(memory: MemoryRecord) → Promise<void>` | Save a new memory |
| `getMemory` | `(id: string) → Promise<MemoryRecord \| undefined>` | Fetch a memory by ID |
| `deleteMemory` | `(id: string) → Promise<void>` | Delete a memory |
| `listAllMemories` | `() → Promise<MemoryRecord[]>` | All memories sorted by `updatedAt` desc |
| `listMemoriesByType` | `(type: MemoryType) → Promise<MemoryRecord[]>` | Filter by fact or decision |
| `findMemoryByKey` | `(key: string) → Promise<MemoryRecord \| undefined>` | Dedup lookup by snake_case key |
| `updateMemoryValue` | `(id, newValue, source, confidence?) → Promise<void>` | Update a memory's value |
| `clearAllMemories` | `() → Promise<void>` | Delete all memories |

## useSignalStore

Cross-pollinated insights that connect goals to conversation data.

### Functions

| Function | Signature | Description |
|----------|-----------|-------------|
| `saveSignal` | `(signal: SignalRecord) → Promise<void>` | Save a new signal |
| `getSignal` | `(id: string) → Promise<SignalRecord \| undefined>` | Fetch a signal by ID |
| `deleteSignal` | `(id: string) → Promise<void>` | Delete a signal |
| `listSignalsForGoal` | `(goalId: string) → Promise<SignalRecord[]>` | Signals for a specific goal, sorted by date |
| `deleteSignalsForGoal` | `(goalId: string) → Promise<void>` | Delete all signals for a goal |
| `clearAllSignals` | `() → Promise<void>` | Delete all signals |

## useDocumentStore

Uploaded file metadata management (actual file content is handled separately).

### Functions

| Function | Signature | Description |
|----------|-----------|-------------|
| `saveDocument` | `(doc: DocumentRecord) → Promise<void>` | Save document metadata |
| `getDocument` | `(id: string) → Promise<DocumentRecord \| undefined>` | Fetch document by ID |
| `deleteDocument` | `(id: string) → Promise<void>` | Delete document record |
| `listDocuments` | `() → Promise<DocumentRecord[]>` | All documents sorted by date |
| `listUniqueDocuments` | `() → Promise<DocumentRecord[]>` | Deduplicated by filename |
| `updateDocumentMetadata` | `(id, metadata) → Promise<void>` | Update metadata string |
| `deleteDocumentsForChat` | `(chatId: string) → Promise<void>` | Delete all documents for a chat |

## useLocalStorage

Generic browser localStorage wrapper with React state synchronization.

```typescript
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void]
```

Used for preferences like selected model, UI state, etc.

## useAgentProgress

Real-time tracking of background agent task progress using `useSyncExternalStore`.

```typescript
function useAgentProgress(): AgentProgress | null
```

Returns the current background task status or `null` if no task is running. Subscribes to an external progress store that receives SSE events from the background agent endpoint.
