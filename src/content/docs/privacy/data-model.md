---
title: "Data Model"
description: "The data storage schema and how NeoCash organizes your information locally."
personas: ["developer"]
section: "Privacy"
order: 3
---

## Data Model Overview

NeoCash stores all user data in the browser's IndexedDB using five structured record types. Each record type corresponds to a core feature of the application. All records are stored locally -- no record type includes server-side identifiers, remote sync metadata, or cloud references.

## Core Record Types

### ChatRecord

Stores conversation data -- the messages exchanged between the user and the AI.

- `id` -- Unique identifier generated client-side (UUID)
- `title` -- Auto-generated or user-assigned conversation title
- `messages` -- Ordered array of Message objects (each with `id`, `role`, `content`, `timestamp`)
- `documentIds` -- References to attached `DocumentRecord` objects
- `metadata` -- Model name and approximate token count
- `createdAt` / `updatedAt` -- Timestamps

ChatRecord is the central entity. Conversations produce memories (via extraction) and reference documents (via attachment).

### MemoryRecord

Stores individual facts and decisions extracted from conversations or created manually.

- `id` -- Unique identifier
- `type` -- Either `"fact"` or `"decision"`
- `category` -- One of nine values: `income`, `expenses`, `assets`, `debts`, `insurance`, `tax`, `family`, `goals`, `preferences`
- `content` -- The memory text (e.g., "Annual salary is $140,000 at Acme Corp")
- `conversationId` -- Links to the source ChatRecord; null if manually created
- `createdAt` / `updatedAt` -- Timestamps

Records are indexed by `type`, `category`, and `updatedAt` for efficient querying during the memory injection process.

### DocumentRecord

Stores uploaded documents along with their extracted metadata and content.

- `id` -- Unique identifier
- `title` -- Extracted from the document or derived from filename
- `date` -- Relevant date extracted from document content or file metadata
- `type` -- One of `"pdf"`, `"docx"`, `"xlsx"`
- `size` -- File size in bytes
- `content` -- Original file stored as a binary Blob
- `extractedText` -- Plain text extracted for AI analysis
- `conversationId` -- The conversation where the document was first uploaded
- `createdAt` / `updatedAt` -- Timestamps

The `content` Blob stores the original file. The `extractedText` field is the processed text representation used for AI context injection.

### GoalMeta

Tracks financial goals and their progress.

- `id` -- Unique identifier
- `title` / `description` -- Goal name and details
- `targetAmount` / `currentAmount` -- For quantitative goals (e.g., save $30,000)
- `targetDate` -- Optional deadline
- `category` -- Financial area the goal relates to
- `status` -- One of `"active"`, `"completed"`, `"paused"`
- `milestones` -- Array of sub-steps, each with `id`, `title`, `completed`, and `completedAt`
- `createdAt` / `updatedAt` -- Timestamps

### SignalRecord

Stores configurable financial alerts and market indicators.

- `id` -- Unique identifier
- `name` / `type` -- Signal name and category (market, portfolio, budget, etc.)
- `configuration` -- Flexible key-value store for signal-specific settings
- `lastTriggered` -- Timestamp of last trigger, or null
- `active` -- Whether the signal is currently monitoring
- `createdAt` / `updatedAt` -- Timestamps

## Record Relationships

The data model uses lightweight references rather than complex foreign key constraints.

```
ChatRecord
  ├── documentIds[] ──> DocumentRecord.id
  └── id <── MemoryRecord.conversationId

DocumentRecord
  └── conversationId ──> ChatRecord.id

MemoryRecord
  └── conversationId ──> ChatRecord.id

GoalMeta (standalone)
SignalRecord (standalone)
```

Goals and signals are standalone entities that may be discussed in conversations but are not directly linked at the data layer.

## IndexedDB Structure

The database uses one object store per record type:

| Object Store | Key Path | Indexes |
|-------------|----------|---------|
| `chats` | `id` | `createdAt`, `updatedAt` |
| `memories` | `id` | `type`, `category`, `conversationId`, `updatedAt` |
| `documents` | `id` | `type`, `conversationId`, `createdAt` |
| `goals` | `id` | `status`, `category`, `createdAt` |
| `signals` | `id` | `type`, `active`, `createdAt` |

Indexes support the most common query patterns: listing recent conversations, filtering memories by category and type, and finding active goals or signals.

## Data Lifecycle

### Creation

Records are created through user actions (starting a conversation, uploading a document, setting a goal) or automated processes (memory extraction after a conversation turn).

### Updates

Records are updated in place. The `updatedAt` timestamp is refreshed on every modification. For memories, updates typically replace the `content` field when the AI detects that a fact has changed.

### Deletion

Records are hard-deleted from IndexedDB. There is no soft-delete or trash mechanism. Deleted data is unrecoverable since there is no cloud backup.

### Schema Migrations

Database schema migrations are handled client-side. When the application detects an older schema version, it runs migration logic in the browser to update the IndexedDB structure transparently during initialization.
