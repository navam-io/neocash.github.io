---
title: "Conversations"
description: "Managing your financial conversations — creating, organizing, and revisiting chats."
personas: ["general-user"]
section: "Chat"
order: 2
---

## Starting a New Conversation

Every interaction in NeoCash begins with a conversation. To start one, click the new conversation button in the sidebar or simply type your first message into the input field. There is no setup required -- just describe what you need, and the AI will respond.

Each conversation is an independent thread. This means you can have a conversation about retirement planning, another about tax optimization, and a third about monthly budgeting, all without the topics mixing together. The AI treats each conversation as its own context, drawing on your persistent financial memory but keeping the discussion focused.

## The Conversation Sidebar

The sidebar displays all your conversations in reverse chronological order, with the most recent at the top. Each entry shows:

- **Title** -- An auto-generated summary of the conversation topic
- **Timestamp** -- When the conversation was last active
- **Preview** -- The first line of the most recent message

You can scroll through your conversation history to find past discussions. As your list grows, the sidebar provides a quick way to revisit previous analyses, decisions, and plans.

## Auto-Generated Titles

When you start a new conversation, NeoCash automatically generates a descriptive title based on the content of your first few messages. For example, if you ask about Roth IRA contribution limits, the conversation might be titled "Roth IRA Contribution Strategy."

This automatic titling saves you time and makes it easy to scan your sidebar for specific topics. The title is generated after your initial exchange, so it captures the actual direction of the conversation rather than guessing from a single message.

## Switching Between Conversations

Click any conversation in the sidebar to switch to it. The chat panel updates immediately, showing the full message history for that thread. Your place in the previous conversation is preserved -- you can return to it at any time and pick up where you left off.

Switching conversations does not interrupt any ongoing processes. If an AI response is streaming in one conversation and you switch to another, the response continues generating in the background. When you return, the completed response will be waiting for you.

## Conversation Context

Each conversation maintains its own context window. This means the AI remembers everything discussed within that thread and uses it to inform subsequent responses. If you mention early in a conversation that you have a $500,000 portfolio, the AI will reference that detail in later messages without you needing to repeat it.

### Context and Long Conversations

For especially long conversations, NeoCash uses message windowing to manage the context efficiently. The system keeps recent messages in the active context and summarizes older messages so the AI can still reference them without exceeding model limits. This means you can have extended planning sessions without worrying about the AI losing track of earlier details.

### Cross-Conversation Memory

While each conversation has its own context, NeoCash also maintains a persistent financial memory that spans all conversations. Key facts about your finances -- income levels, account types, risk tolerance, family situation -- are stored locally and available to every new conversation. This gives you the continuity of a long-running advisory relationship without needing to start from scratch each time.

## Local Storage with IndexedDB

All conversations are stored in your browser's IndexedDB, a robust local database built into modern browsers. This means:

- **Your data stays on your device** -- No conversation content is stored on external servers
- **Instant access** -- Loading conversations is fast because the data is local
- **Offline availability** -- Past conversations are accessible even without an internet connection
- **Full control** -- You can clear your conversation history at any time

IndexedDB provides ample storage for extensive conversation histories, including messages, metadata, and file references. Your financial discussions remain private and under your sole control.

## Practical Tips

- **One topic per conversation** -- Keeping conversations focused makes them easier to find later and gives the AI better context for its responses
- **Revisit old conversations** -- If you discussed tax strategy six months ago, pull up that conversation to review the advice before tax season
- **Let auto-titles work for you** -- Start with a clear question or topic statement so the generated title is descriptive and scannable
- **Use memory for recurring details** -- If you find yourself repeating the same financial facts across conversations, the memory system should pick them up automatically over time

## Data Management

You can delete individual conversations from the sidebar when they are no longer needed. Deletion removes the conversation and its messages from your local IndexedDB storage. Since the data is entirely local, deletion is permanent -- there is no server backup to recover from. Be intentional about which conversations you remove.
