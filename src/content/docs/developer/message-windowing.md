---
title: "Message Windowing"
description: "How NeoCash manages token budgets and trims long conversations for the Claude API."
personas: ["developer"]
section: "Developer"
order: 8
---

## Overview

Long conversations can exceed Claude's context window. NeoCash's message windowing system in `src/lib/message-windowing.ts` intelligently trims conversations to fit within a 160,000-token budget while preserving the most important context.

## The Problem

A typical NeoCash conversation might include:
- Dozens of messages with detailed financial analysis
- Uploaded documents (PDFs, spreadsheets) as file attachments
- Tool call results with structured data
- Extended thinking blocks

Without windowing, a long goal thread with documents could easily exceed 200k tokens, causing API failures.

## Token Budget

### Constants

| Parameter | Default | Purpose |
|-----------|---------|---------|
| Token budget | 160,000 | Maximum estimated tokens for the API call |
| Recent count | 6 | Number of recent messages to keep fully intact |
| Char-to-token ratio | 4:1 | Approximate conversion (4 characters ≈ 1 token) |

## Three-Step Strategy

### Step 1: Convert Unsupported File Types

Before windowing, file attachments are processed:

- **DOCX/XLSX**: Extracted to plain text via `extractFileText()`
- **Other unsupported types**: Replaced with placeholder text
- **Images and PDFs**: Passed through to Claude as-is

This ensures file content is always available in some form, even if the original binary format isn't supported.

### Step 2: Strip Files from Old Messages

The most recent N messages (default: 6) keep their file attachments intact. For all older messages:

- File parts are replaced with text placeholders describing the attachment
- This dramatically reduces token count for older messages while preserving the conversation flow

For example, a 50-page PDF attachment in message #3 becomes a simple text note like "Attached: financial-report.pdf" while the same PDF in message #18 (recent) stays as the full file content.

### Step 3: Drop Old Messages if Over Budget

If the conversation still exceeds the token budget after file stripping:

1. **Keep the first user message** — this provides the original conversation context
2. **Remove the oldest non-first messages** one at a time until under budget
3. The first user message is always preserved, even if it's very old

## API

```typescript
async function prepareMessagesForAPI(
  messages: UIMessage[],
  options?: {
    tokenBudget?: number;
    recentCount?: number;
  }
): Promise<{
  messages: UIMessage[];
  trimmed: boolean;
  estimatedTokens: number;
}>
```

### Parameters

- **messages**: The full conversation message array
- **options.tokenBudget**: Override the default 160k budget
- **options.recentCount**: Override the default 6 recent messages to keep

### Return Value

- **messages**: The trimmed message array ready for the API
- **trimmed**: Whether any messages were removed
- **estimatedTokens**: Approximate token count of the output

## Design Decisions

### Why Keep the First Message?

The first user message often contains the core question or goal context. Dropping it would make the conversation incoherent — the AI would lose the "why" of the entire thread.

### Why 6 Recent Messages?

Six messages typically covers 3 complete exchange rounds (user → assistant × 3). This gives Claude enough recent context to maintain conversational coherence while leaving room for system prompts and tool definitions.

### Why 160k Budget?

Claude's context window is 200k tokens. The 160k budget leaves a 40k buffer for:
- System prompt (~2-4k tokens)
- Tool definitions (~8-10k tokens)
- Memory context (~200 tokens)
- Response generation space
