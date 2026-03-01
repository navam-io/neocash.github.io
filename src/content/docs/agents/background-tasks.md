---
title: "Background Tasks"
description: "Long-running AI agent tasks that work in the background."
personas: ["power-user", "developer"]
section: "Agents"
order: 4
---

## What Are Background Tasks?

Some financial questions require more than an instant response. When you ask for a comprehensive portfolio analysis, a multi-scenario tax projection, or deep market research, the work involved exceeds what a single conversational turn can deliver well. Background tasks handle these long-running operations, letting agents work on complex requests without blocking your chat.

A background task is an agent operation that runs asynchronously. You submit a request, the system acknowledges it, and the agent works through the analysis in the background. You can continue using chat, ask other questions, or navigate to other parts of NeoCash while the task completes. When results are ready, they are delivered back to your conversation.

## When Background Tasks Trigger

Not every request becomes a background task. The system distinguishes between questions that can be answered quickly and those that require extended processing. Background tasks are triggered in several scenarios:

### Complex Analysis

Requests that involve multiple calculation steps, data aggregation, or scenario modeling are candidates for background processing. Examples include:

- Full portfolio risk analysis across multiple time horizons
- Comprehensive retirement projection with variable assumptions (inflation, returns, spending)
- Multi-year tax impact modeling for Roth conversion ladders
- Estate plan evaluation covering trusts, beneficiary designations, and tax implications

### Research Operations

When an agent needs to gather information from external sources, the research phase runs in the background. This includes:

- Market research across multiple sectors or asset classes
- Insurance rate comparisons from current provider data
- Tax law updates and regulation changes affecting your situation
- Economic indicator aggregation for investment decision support

### Document Processing

Uploading a complex financial document -- a full tax return, a multi-page insurance policy, or a lengthy investment prospectus -- can trigger background processing. The agent extracts, categorizes, and cross-references information from the document, which takes longer than a simple chat response.

### Multi-Step Operations

Some requests require the agent to perform a sequence of dependent operations. For example, analyzing your current portfolio allocation, running a rebalancing simulation, projecting the tax impact of the recommended trades, and then summarizing the complete picture. Each step feeds into the next, and the full sequence runs as a background task.

## The Progress Panel

When a background task is running, a progress panel appears in the chat interface. This panel provides real-time visibility into what the agent is doing and how far along it is.

### Panel Components

- **Task title** -- A brief description of what the agent is working on, such as "Portfolio Risk Analysis" or "Tax Scenario Modeling"
- **Current step** -- The specific operation the agent is performing right now, updated as the task progresses through its stages
- **Progress indicator** -- A visual representation of completion, showing how many steps have been completed out of the total
- **Status messages** -- Descriptive updates that explain what the agent is doing at each stage, providing context beyond a simple percentage

### Status Update Examples

A portfolio analysis task might show status updates like:

1. "Parsing portfolio holdings from uploaded statement..."
2. "Calculating current allocation across asset classes..."
3. "Running Monte Carlo simulations for risk assessment..."
4. "Comparing allocation against target based on your risk profile..."
5. "Generating rebalancing recommendations..."
6. "Compiling final analysis report..."

These updates give you confidence that the task is progressing and help you understand the depth of analysis being performed.

## How Results Are Delivered

When a background task completes, the results appear in your conversation thread as a message from the specialist agent that ran the task. The delivery is designed to feel like a natural part of the conversation flow.

### Result Structure

Background task results are typically more structured and comprehensive than standard chat responses. They often include:

- **Executive summary** -- A concise overview of findings and recommendations at the top
- **Detailed analysis** -- The full breakdown of the work performed, including calculations, comparisons, and data points
- **Action items** -- Specific steps you can take based on the analysis
- **Assumptions and limitations** -- Transparency about the inputs, assumptions, and boundaries of the analysis

### Notification Behavior

If you are still in the chat when a task completes, the result message appears inline in your conversation. If you have navigated away from the chat, the system surfaces a notification indicating that results are available. Clicking the notification returns you to the conversation at the point where the results were delivered.

## Managing Background Tasks

### Concurrent Tasks

You can have multiple background tasks running simultaneously. Each task operates independently, and their progress panels stack in the interface. This is useful when you want to run parallel analyses -- for example, comparing different investment strategies or modeling multiple tax scenarios at the same time.

### Task Lifecycle

Every background task follows this lifecycle:

1. **Initiated** -- The agent acknowledges your request and the task begins
2. **Processing** -- The agent works through the required steps, with progress updates displayed in real time
3. **Completed** -- Results are delivered to your conversation
4. **Error** -- If a task encounters an issue (such as a failed web research request), it reports the error with context about what went wrong and what partial results may be available

### Conversation Continuity

While a background task runs, your conversation remains fully functional. You can ask the same or different agents other questions, and those responses arrive independently of the background task. When the task completes, its results are inserted at the appropriate point in the conversation timeline, maintaining a coherent thread.

## Background Tasks and Privacy

Background tasks follow the same privacy model as all other NeoCash operations. The processing happens through the Claude API, but no intermediate states, partial results, or task data are stored on external servers. Your progress updates, final results, and task history remain in your browser's local storage. The extended processing time of a background task does not change the fundamental privacy guarantee: your financial data stays on your device.

## Common Background Task Scenarios

Here are practical examples of when you might encounter background tasks:

- **"Analyze my complete portfolio and suggest rebalancing moves"** -- The Investment Analyst runs allocation analysis, risk modeling, and generates trade recommendations
- **"What would my tax situation look like if I converted $50K to Roth each year for the next 5 years?"** -- The Tax Advisor models five years of conversions with varying income projections
- **"Review my uploaded insurance policies and identify any coverage gaps"** -- The Insurance Specialist extracts terms from multiple documents and cross-references coverage areas
- **"Create a comprehensive estate plan outline based on my family situation"** -- The Estate Planner evaluates your assets, family structure, and goals to produce a detailed planning framework
- **"Compare the total cost of renting vs. buying over the next 10 years in my area"** -- The Financial Advisor runs parallel projections with local market data, tax implications, and opportunity cost calculations
