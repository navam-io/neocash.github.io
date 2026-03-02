---
title: "Agents Overview"
description: "How NeoCash's specialist AI agents provide expert financial guidance."
personas: ["general-user", "power-user"]
section: "Agents"
order: 1
heroScreenshot: "research-mode"
---

## What Are AI Agents in NeoCash?

NeoCash does not rely on a single, general-purpose AI to handle every financial question. Instead, it employs a team of five specialist AI agents, each trained and configured for a distinct area of personal finance. When you send a message in chat, the system determines which specialist is best equipped to respond and routes your question accordingly.

This approach mirrors how a comprehensive wealth management firm operates. You would not ask your tax attorney about life insurance, and you would not consult your estate planner about quarterly earnings. NeoCash applies the same principle to AI: each agent carries domain-specific knowledge, specialized tools, and a system prompt tuned for its area of expertise.

## Why Specialists Matter

A general-purpose AI can answer surface-level financial questions competently. But financial planning involves nuance that benefits from focused expertise. Here is what specialist agents provide that a single generalist cannot:

### Deeper Domain Knowledge

Each agent's system prompt includes detailed context about its specialty. The Tax Advisor understands the interplay between different deduction strategies. The Investment Analyst knows how to evaluate asset allocation across market conditions. This depth means you get responses grounded in domain-specific reasoning rather than generic advice.

### Purpose-Built Tools

Agents have access to different tool sets depending on their specialty. The Financial Advisor can run compound interest calculators and retirement projection models. The Investment Analyst can perform web research on market conditions and analyze portfolio allocations. Each agent uses the tools that matter for its domain, avoiding the noise of irrelevant capabilities.

### Tailored Communication Style

Financial advice about estate planning requires a different tone and structure than advice about monthly budgeting. Each agent's system prompt shapes how it communicates -- the Estate Planner emphasizes long-term implications and legal considerations, while the Financial Advisor focuses on actionable steps and practical strategies.

## How Agent Routing Works

When you type a message in chat, a routing layer powered by Claude analyzes your input before any agent responds. The router considers two signals:

1. **Keyword matching** -- Your message is scanned for domain-specific terms. Mentions of "deductions," "1099," or "tax bracket" point toward the Tax Advisor. References to "portfolio," "asset allocation," or "market trends" signal the Investment Analyst.

2. **AI classification** -- Beyond keywords, Claude evaluates the semantic intent of your message. A question like "How should I prepare for my parents' financial future?" involves multiple domains but is best handled by the Estate Planner.

The routing decision happens in milliseconds. You never need to select an agent manually, and you never need to know which specialist is responding in order to get accurate advice.

## The User Experience

### Agent Chips

Every response in your chat thread includes a small agent chip that identifies which specialist generated it. These chips appear alongside the message, giving you transparency into the routing decision. If you ask about tax implications of selling an investment, you might see the Tax Advisor chip on the response -- confirming that the system understood the tax-focused nature of your question.

### Seamless Transitions

Conversations often span multiple financial domains. You might start by asking about your investment portfolio, then follow up with a question about the tax consequences of rebalancing. NeoCash handles these transitions automatically. The Investment Analyst answers your first question, and when your follow-up shifts to tax territory, the Tax Advisor takes over. The conversation context carries across agents, so you never have to repeat yourself.

### Natural Language Interaction

You interact with agents the same way you interact with any chat -- by typing naturally. There are no special commands, syntax, or mode switches required. Ask your question as you would ask a human advisor, and the system handles the rest.

## What Agents Can Do

Across all five specialists, NeoCash agents share a common set of core capabilities:

- **Financial calculations** -- Run projections, compare scenarios, and model outcomes using built-in calculators
- **Web research** -- Pull current market data, tax law updates, and insurance rates from the web
- **Document analysis** -- Read and extract insights from uploaded financial documents like statements, tax returns, and policies
- **Goal operations** -- Create, update, and track financial goals based on your conversations
- **Memory operations** -- Store and recall your financial preferences, risk tolerance, and key details for future reference

Each agent applies these capabilities through the lens of its specialty. The same document analysis tool yields different insights when used by the Tax Advisor versus the Investment Analyst, because each agent knows what to look for.

## Privacy and Agent Processing

Agent routing and response generation follow the same privacy-first architecture as the rest of NeoCash. Your messages are sent to the Claude API for processing, but no data is stored on external servers after the response is returned. The routing classification, agent selection, and conversation history all remain local to your browser. Your financial questions and the specialist advice you receive stay entirely under your control.

## Exploring Further

The following pages in this section cover each aspect of the agent system in detail:

- [Specialist Agents](./specialists) -- A deep dive into each of the five agents and their capabilities
- [Agent Routing](./routing) -- How the routing system classifies and directs your messages
- [Background Tasks](./background-tasks) -- How agents handle long-running operations like research and analysis
