---
title: "Agent Routing"
description: "How NeoCash automatically routes your questions to the right specialist."
personas: ["power-user", "developer"]
section: "Agents"
order: 3
---

## How Routing Works

Every message you send in NeoCash passes through a routing layer before any specialist agent generates a response. This layer determines which of the five agents -- Financial Advisor, Tax Advisor, Investment Analyst, Insurance Specialist, or Estate Planner -- is best equipped to handle your question. The entire process is automatic and completes in milliseconds.

Routing uses a two-stage classification system that combines fast keyword matching with deeper AI-powered intent analysis. This dual approach balances speed with accuracy, ensuring that clear-cut questions are handled instantly while nuanced or multi-domain questions receive careful classification.

## Stage 1: Keyword Matching

The first stage scans your message against curated keyword sets assigned to each specialist agent. Every agent maintains a list of domain-specific terms that strongly signal its area of expertise.

### Example Keyword Sets

- **Tax Advisor** -- deduction, 1099, W-2, capital gains, tax bracket, AMT, filing, withholding, estimated tax, tax-loss harvesting, Roth conversion, depreciation
- **Investment Analyst** -- portfolio, stocks, bonds, ETF, mutual fund, asset allocation, market, returns, diversification, dividend, rebalancing, ticker symbols
- **Insurance Specialist** -- insurance, policy, premium, coverage, deductible, beneficiary, term life, whole life, disability, liability, umbrella, rider
- **Estate Planner** -- estate, will, trust, inheritance, probate, power of attorney, wealth transfer, gift tax, generation-skipping, revocable, irrevocable
- **Financial Advisor** -- budget, savings, emergency fund, retirement, debt, mortgage, refinance, credit score, net worth, cash flow

When a message contains one or more keywords from a single agent's set, routing can resolve quickly. If keywords from multiple agents appear in the same message, the system moves to the second stage for disambiguation.

## Stage 2: AI Classification

The second stage uses Claude to analyze the semantic intent of your message. This goes beyond surface-level keyword detection to understand what you are actually asking.

### What the Classifier Evaluates

- **Primary intent** -- What is the core question? A message mentioning both "tax" and "investment" might be primarily about the tax consequences of an investment decision, routing it to the Tax Advisor rather than the Investment Analyst.
- **Contextual signals** -- The classifier considers the recent conversation history. If you have been discussing estate planning and ask a follow-up about "transferring assets," the Estate Planner maintains routing even though "assets" could relate to investments.
- **Question complexity** -- Some questions span multiple domains. The classifier identifies the dominant domain and routes accordingly, with the understanding that the responding agent can reference context from other areas.

### Classification Prompt Structure

The routing classifier receives a structured prompt that includes:

1. Your current message
2. A summary of the recent conversation context
3. Descriptions of each agent's domain and capabilities
4. Instructions to return a single agent identifier

The classifier responds with an agent ID, and routing proceeds immediately. This classification adds minimal latency because it uses a fast, focused prompt rather than a full conversational response.

## Agent Chips in the UI

Once routing completes and the specialist generates its response, an agent chip appears alongside the message in your chat thread. The chip displays the specialist's name and serves as a visual indicator of which agent handled each response.

### What Chips Tell You

- **Transparency** -- You always know which specialist is advising you. If a response feels off-topic, the chip helps you understand why -- perhaps the router interpreted your question differently than you intended.
- **Conversation flow** -- As you move between topics, the chips create a visual timeline of how specialists handed off to each other. You can see the natural flow from investment questions to tax follow-ups.
- **Routing accuracy** -- Over time, chips help you develop an intuition for how the routing system interprets your questions. You might notice that phrasing a question differently routes it to a more appropriate specialist.

## Fallback Behavior

When the routing system cannot confidently classify a message into a specific domain, it falls back to the Financial Advisor. This is a deliberate design choice for several reasons:

- **Broadest scope** -- The Financial Advisor handles the widest range of financial topics and can provide useful responses even for questions that touch multiple domains.
- **Safe default** -- General financial guidance is unlikely to be harmful or misleading, whereas routing to the wrong specialist could produce advice that misses the point of your question.
- **Re-routing opportunity** -- If your follow-up message clarifies your intent, the system can route the next response to the appropriate specialist. The Financial Advisor's initial response often prompts you to be more specific, naturally improving routing accuracy.

## Context and Conversation History

Routing does not operate on each message in isolation. The system considers the trajectory of your conversation when making routing decisions.

### Context Window

The router examines the most recent messages in your conversation to detect topic continuity. If you have been discussing tax planning for five messages, a new message that says "What about next year?" stays with the Tax Advisor rather than being treated as an ambiguous standalone question.

### Topic Switches

When you deliberately change topics -- for example, shifting from tax planning to insurance questions -- the router detects the domain shift and transitions to the new specialist. The key signals for a topic switch include:

- Introduction of new domain-specific keywords
- Explicit topic changes ("Now I want to ask about my life insurance")
- Questions that clearly fall outside the current agent's expertise

### Multi-Domain Questions

Some questions genuinely span multiple domains. "How does my estate plan affect my tax situation?" involves both the Estate Planner and the Tax Advisor. In these cases, the router selects the primary domain based on the emphasis of the question. The responding agent can draw on tools and context relevant to the secondary domain, ensuring you get a comprehensive answer even though a single specialist leads the response.

## Routing for Developers

If you are interested in the technical details of the routing system, here is a summary of the architecture:

### Request Flow

1. User sends a message via the chat interface
2. The message enters the routing layer, which runs keyword matching
3. If keyword matching is inconclusive, AI classification runs as a lightweight Claude call
4. The selected agent ID is attached to the request
5. The agent's system prompt, tools, and context are loaded
6. The full message is sent to Claude with the agent's configuration
7. The response streams back to the UI with the agent chip attached

### System Prompt Composition

Each agent's system prompt is composed at request time from:

- A base prompt shared across all agents (covering privacy principles, tool usage patterns, and response formatting)
- The agent-specific prompt (domain knowledge, communication style, and specialty guidance)
- Relevant conversation context and user memory

### Performance Considerations

Keyword matching adds negligible latency. AI classification, when triggered, adds a small overhead because it requires an additional Claude API call. However, this call uses a minimal prompt and does not generate a full conversational response, keeping the latency impact low. In practice, most messages resolve at the keyword stage, and the AI classification step is only invoked for ambiguous cases.
