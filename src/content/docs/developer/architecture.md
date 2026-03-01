---
title: "Architecture"
description: "System architecture, data flow, and component structure of the NeoCash application."
personas: ["developer"]
section: "Developer"
order: 2
---

## System Architecture

NeoCash follows a **local-first** architecture where all user data lives in the browser's IndexedDB. The only external dependency is the Anthropic Claude API for AI inference.

### Stack Overview

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 15 (App Router) | SSR, API routes, routing |
| UI | React 19 | Component rendering |
| Styling | Tailwind CSS | Utility-first styles |
| Storage | IndexedDB via `idb` | Local persistent storage |
| AI | Anthropic Claude API | Chat, classification, analysis |
| Agent SDK | Claude Agent SDK | Background multi-agent tasks |

## Data Flow

### Chat Message Flow

When a user sends a message, the following pipeline executes:

1. **Message preparation** — Recent messages are windowed to fit the 160k token budget
2. **Agent routing** — The message is classified to select a specialist agent
3. **System prompt assembly** — Base prompt + agent extension + memory context + tool instructions
4. **API streaming** — Claude responds with text and tool calls via SSE
5. **Tool execution** — Tool calls are executed against IndexedDB stores
6. **Signal detection** — After response, Haiku analyzes for cross-goal signals
7. **Dashboard updates** — Extracted values update goal dashboards

### Goal Creation Flow

1. User types a goal title
2. `/api/suggest-category` classifies into one of 8 categories
3. `/api/generate-dashboard-schema` creates 3-8 typed metrics
4. `/api/generate-goal-prompt` creates a rich opening prompt
5. First chat message triggers `scan_chats_for_signals` to find relevant history

## Component Architecture

### Store Layer (Hooks)

Seven custom hooks provide the data access layer. Each wraps IndexedDB operations with a clean async API:

- **useChatHistory** — Conversations and messages
- **useGoalStore** — Goals, dashboards, action items, insights
- **useMemoryStore** — Facts and decisions
- **useSignalStore** — Cross-pollination signals
- **useDocumentStore** — Uploaded documents
- **useLocalStorage** — Browser localStorage wrapper
- **useAgentProgress** — Real-time background task tracking

### API Layer

Six API routes handle all server-side logic:

- `POST /api/chat` — Main streaming chat endpoint (60s max)
- `POST /api/detect-signals` — Signal detection via Haiku
- `POST /api/generate-dashboard-schema` — Dashboard metrics generation
- `POST /api/suggest-category` — Goal classification
- `POST /api/background-agent` — Multi-agent orchestration (120s max, SSE)
- `GET /api/models` — Available model listing

### Agent Layer

Five specialist agents share a common architecture:

- **Profile**: keywords, tool subset, goal categories, system prompt extension
- **Router**: Three-tier classification (category → Haiku → keywords)
- **Execution**: Shared tool executor with agent-specific tool access

## Storage Schema

All data is stored in a single IndexedDB database with object stores for:

| Store | Key | Contents |
|-------|-----|----------|
| `chats` | `id` | ChatRecord (messages, model, goal metadata) |
| `memories` | `id` | MemoryRecord (facts/decisions with categories) |
| `signals` | `id` | SignalRecord (cross-goal insights with extracted values) |
| `documents` | `id` | DocumentRecord (file metadata, no binary content) |

## Security Model

- **No server-side storage** — API routes are stateless proxies
- **API key in env** — `ANTHROPIC_API_KEY` on the server, never exposed to client
- **Local-only data** — IndexedDB is origin-scoped and browser-sandboxed
- **No telemetry** — Zero analytics or tracking
