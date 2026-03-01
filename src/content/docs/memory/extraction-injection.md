---
title: "Extraction & Injection"
description: "How NeoCash automatically extracts and uses your financial memories."
personas: ["power-user", "developer"]
section: "Memory"
order: 4
---

## The Two Halves of Memory

NeoCash Memory has two automated processes that work together: **extraction** pulls facts and decisions out of your conversations, and **injection** puts relevant memories back into future conversations. Together they create a continuous loop where the AI learns from every interaction and applies that knowledge going forward.

## Memory Extraction

### How Extraction Works

After each conversation turn, NeoCash analyzes your messages for financially relevant information. The extraction process identifies two types of content:

1. **Profile Facts** -- Concrete biographical or financial data points (income, account balances, family details)
2. **Key Decisions** -- Financial choices or commitments made during the conversation

The AI uses structured prompts to parse conversation content and determine whether new memories should be created or existing ones updated.

### What Triggers Extraction

Extraction occurs when the AI detects specific patterns in your messages:

- **Numerical financial data** -- "My salary is $125,000" or "I have $34,000 in student loans"
- **Status declarations** -- "I'm married with two kids" or "I file taxes jointly"
- **Decision language** -- "I've decided to..." or "Let's go with..." or "I want to start..."
- **Change indicators** -- "I just got a raise" or "We sold our car last month"
- **Preference statements** -- "I prefer index funds" or "I'm not comfortable with crypto"

### Extraction Accuracy

The extraction system is designed to be conservative. It prefers to miss a potential memory rather than store something incorrect. Ambiguous or hypothetical statements ("I might consider..." or "What if I made $200K?") are typically not extracted.

If the AI is unsure whether something is a fact or a hypothetical, it errs on the side of not storing it. You can always add memories manually through the Memory Editor if the automatic extraction misses something.

### Deduplication and Updates

When a new extraction matches an existing memory, the system updates rather than duplicates. For example:

- **Old fact:** "Salary is $125,000 at Acme Corp"
- **New conversation:** "I got a raise, now making $140,000"
- **Result:** The existing income fact is updated to $140,000

This prevents your memory store from accumulating stale or contradictory information.

## Memory Injection

### How Injection Works

At the start of each new conversation, NeoCash constructs a system prompt for the AI. Part of this prompt includes relevant memories from your stored profile. This is the injection process -- your memories are injected into the AI's context so it can provide personalized responses from the first message.

### Relevance Selection

Not every stored memory is injected into every conversation. The injection system selects memories based on relevance to the current context. The selection considers:

- **Conversation topic** -- If you ask about tax planning, tax-related memories are prioritized
- **Related categories** -- A question about retirement might pull from Income, Assets, Goals, and Tax
- **Recency** -- Recently updated memories may receive higher priority
- **Fundamental facts** -- Core profile information (income, family status, risk tolerance) is often included regardless of topic

### The Injection Format

Memories are formatted as structured text blocks within the system prompt. The AI receives them as contextual information before you send your first message. A simplified example of what the AI sees:

```
## User Financial Profile

### Income
- Annual salary: $140,000 at Acme Corp
- Freelance consulting: $1,500/month

### Assets
- 401(k) at Fidelity: $87,000
- Roth IRA at Vanguard: $32,000
- Primary residence: $450,000

### Goals
- Retire by age 55
- Build 6-month emergency fund

### Recent Decisions
- Decided to increase 401(k) contribution to 10%
- Committed to paying $500 extra/month toward credit card
```

### Context Window Management

The AI has a finite context window, so injection must be selective. If you have accumulated a large number of memories, the system prioritizes the most relevant subset. Core profile facts (income, family, filing status) almost always make the cut, while more niche facts are included only when relevant.

## The Extraction-Injection Loop

These two processes create a virtuous cycle:

1. You converse with the AI about your finances
2. Extraction captures new facts and decisions
3. Those memories are stored locally in IndexedDB
4. In your next conversation, injection provides relevant context
5. The AI gives better, more personalized advice
6. That conversation produces new facts and decisions
7. The cycle continues

Over time, this loop builds an increasingly complete and accurate financial profile, making each conversation more valuable than the last.

## Technical Details for Developers

### Storage Layer

All memories are stored as `MemoryRecord` objects in the browser's IndexedDB. Each record includes:

- `id` -- Unique identifier
- `type` -- Either `fact` or `decision`
- `category` -- One of the nine memory categories
- `content` -- The memory text
- `conversationId` -- Reference to the source conversation
- `createdAt` -- Timestamp of creation
- `updatedAt` -- Timestamp of last modification

### Extraction Pipeline

The extraction process runs as a post-processing step after each AI response. It sends the conversation history to the AI with a specialized extraction prompt that returns structured JSON containing any new facts or decisions identified.

### Injection Pipeline

Before sending a new conversation to the Anthropic API, the system queries IndexedDB for relevant memories. These are formatted into a structured text block and prepended to the system prompt. The injection respects token budgets to avoid consuming too much of the available context window.

### No Server Involvement

Both extraction and injection happen entirely in the browser. Memory records are read from and written to IndexedDB. The only external communication is the standard API call to Anthropic, which includes the injected memories as part of the prompt payload for that single request.
