---
title: "Signal Detection"
description: "How the AI automatically detects financial connections between your goals."
personas: ["power-user", "developer"]
section: "Signals"
order: 2
---

## How Detection Works

Signal detection is an automated process that runs in the background as you use NeoCash. After each message you send in a goal thread, the system evaluates whether the content of that message -- combined with the broader goal context -- has implications for any of your other goals. When a meaningful connection is found, a signal is created and surfaced in your goal thread.

The detection is designed to be lightweight and non-intrusive. You do not need to request it or configure it. It simply runs as part of the normal conversation flow, adding value without adding friction.

## Detection via Claude Haiku

Signal detection uses Claude Haiku, a fast and efficient model optimized for quick analytical tasks. Haiku was chosen for this role because signal detection needs to happen after every message without introducing noticeable latency to your conversation experience.

### Why Haiku?

Detecting cross-goal connections requires understanding financial context and reasoning about relationships, but it does not require the deep analytical depth of a larger model. Haiku strikes the right balance:

- **Speed** -- Detection completes in a fraction of a second, so signals appear almost immediately after you send a message.
- **Cost efficiency** -- Since detection runs after every message, using a lighter model keeps API costs low while still producing high-quality signals.
- **Sufficient reasoning** -- Financial connection detection is a pattern-matching task that Haiku handles well. It identifies when concepts, numbers, or strategies in one goal are relevant to another.

The main conversation in your goal thread still uses the model you have selected (such as Claude Sonnet or Opus). Signal detection is a separate, parallel process that uses Haiku specifically.

## The Detection Endpoint

Signal detection is handled by the `/api/detect-signals` endpoint. This endpoint is called automatically after each message in a goal conversation. Understanding how it works is useful for power users and developers who want to know what is happening under the hood.

### What the Endpoint Receives

The endpoint receives the following context for analysis:

- **Current goal** -- The full context of the goal you are chatting about, including its title, description, conversation history, and dashboard metrics.
- **Other goals** -- Summary context for each of your other goals, including their titles, descriptions, and key metrics.
- **Current message** -- The most recent message in the conversation that triggered the detection.

### What the Endpoint Returns

The endpoint returns zero or more signal objects. Each signal contains:

- **Source goal ID** -- The goal where the triggering conversation is happening.
- **Target goal ID** -- The related goal that the connection points to.
- **Description** -- A natural language explanation of the connection between the two goals.
- **Relevance indicator** -- How strong or significant the detected connection is.

If no meaningful connections are found, the endpoint returns an empty result and no signals are created. Not every message will produce signals, and that is expected. Signals are surfaced only when genuine connections exist.

## Comparing Goals

The core of signal detection is the comparison between the current goal context and every other goal in your system. The AI examines the current conversation for themes, numbers, strategies, and decisions that might affect other goals.

### What the AI Looks For

The detection process evaluates several categories of potential connections:

**Cash flow impacts** -- Does a change in spending, saving, or earning in one goal affect the available cash flow for another? For example, increasing your 401(k) contribution reduces take-home pay, which affects your ability to save for other goals.

**Timeline dependencies** -- Does the timing of one goal affect the timeline of another? Paying off a loan early might free up funds to accelerate a savings goal. Delaying a major purchase might extend the runway for an investment goal.

**Risk relationships** -- Does the risk profile of one goal affect another? Building an emergency fund reduces the risk of needing to liquidate investments at a bad time. Taking on new debt affects the risk calculus for aggressive investment strategies.

**Tax implications** -- Do actions in one goal have tax consequences that affect another? Realizing capital gains in an investment goal can affect the tax planning in another goal. Contributing to a traditional IRA affects your taxable income calculations.

**Strategic conflicts** -- Are two goals working against each other? Saving aggressively for a home purchase while simultaneously funding a taxable brokerage account might not be optimal if the home purchase has a nearer deadline and the opportunity cost of invested capital is high.

**Strategic synergies** -- Do two goals reinforce each other? Building an emergency fund enables more aggressive investment strategies. Career development leading to higher income accelerates all savings-related goals.

## Signal Strength and Relevance

Not all connections are equally significant. The detection system assesses the strength and relevance of each potential signal before deciding to surface it.

### Strong Signals

Strong signals represent direct, quantifiable connections between goals. They involve specific dollar amounts, concrete timeline impacts, or clear strategic implications. An example: "Paying off your $12,000 car loan by September frees up $520/month that directly impacts your ability to hit your emergency fund target by year-end."

### Moderate Signals

Moderate signals represent meaningful but less immediately quantifiable connections. They point out relationships that are worth considering but may not require immediate action. An example: "Your career development goal mentions pursuing a management role. The higher compensation range for that role could affect your long-term retirement contribution strategy."

### Filtered Out

Weak or trivial connections are filtered out and not surfaced. The system avoids creating noise by suppressing signals that are technically true but not practically useful. For instance, nearly all goals are loosely connected through overall cash flow, but a signal saying "this goal uses money and so does that goal" would not be helpful.

## Detection Triggers

Signal detection runs after each message you send in a goal conversation. However, not every message will trigger signal creation. The system is selective about when it surfaces new signals.

### Messages That Often Produce Signals

- Mentioning a change in income, expenses, or savings rate
- Discussing a new financial decision or strategy shift
- Sharing updated numbers that significantly change the goal's trajectory
- Talking about timelines, deadlines, or milestone dates
- Describing a major life event (job change, relocation, family change)

### Messages That Rarely Produce Signals

- Casual follow-up questions about a previous topic
- Requests for general financial education
- Messages that do not introduce new financial information
- Conversations that stay narrowly within the scope of a single goal

This selective approach ensures that signals are meaningful rather than noisy. You receive a signal when there is something genuinely worth knowing about the connection between your goals.

## Next Steps

- See how detected signals are displayed in the [Signal Panel](/docs/signals/panel).
- Return to the [Signals Overview](/docs/signals) for the big-picture view.
- Explore [Dashboards](/docs/dashboard) to understand the metrics that signals often reference.
