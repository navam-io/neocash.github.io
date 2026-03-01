---
title: "Signal Panel"
description: "Viewing and acting on cross-pollination signals in your goal threads."
personas: ["general-user", "power-user"]
section: "Signals"
order: 3
---

## Where Signals Appear

Signals appear in a dedicated panel within your goal threads. When you are viewing a goal conversation, the signal panel sits alongside your chat and dashboard, giving you a real-time view of connections between the current goal and your other financial objectives.

The panel is accessible from any goal thread that has detected signals. If no signals have been found for a particular goal, the panel will be empty -- this simply means the AI has not yet identified meaningful connections between that goal and your others. As you continue chatting and adding more goals, signals will naturally begin to appear.

## The Signal Panel Layout

The signal panel presents your signals as a list of signal cards. Each card is a self-contained summary of one connection between two goals. The most recently detected signals appear at the top, so new connections are immediately visible.

### Signal Cards

Each signal card displays three key pieces of information:

**Source goal** -- The goal where the triggering conversation happened. Since you are viewing the panel from within a goal thread, the source goal is typically the goal you are currently looking at. This is displayed as a label at the top of the card so you can quickly confirm the origin.

**Target goal** -- The other goal that the signal connects to. This is the goal that is affected by or related to what you are discussing in the current thread. The target goal name is prominently displayed, often with a visual indicator or icon that distinguishes it from the source.

**Description** -- A clear, natural language explanation of the connection. This is the core of the signal -- it tells you not just that two goals are related, but specifically how and why. Descriptions are written to be immediately actionable, helping you understand what the connection means for your financial planning.

### Example Signal Card

Here is what a typical signal card looks like in practice:

> **Source:** Emergency Fund Savings
> **Connected to:** Roth IRA Contributions
> "Reaching your three-month emergency fund target next month means you could redirect the $500/month you have been saving into your Roth IRA, getting closer to maxing out your annual contribution before the April deadline."

This signal connects two goals, explains the financial logic of the connection, and suggests a concrete implication -- all in a single card.

## Reading and Interpreting Signals

Signals are designed to be read quickly and understood immediately. When you see a new signal, consider the following:

### Does This Connection Change My Priorities?

Some signals reveal that your current approach to one goal should shift because of progress or changes in another. If you are ahead of schedule on debt payoff, a signal might suggest reallocating some of that extra payment to a savings goal that is lagging behind.

### Is There a Time-Sensitive Element?

Signals sometimes highlight urgency. A connection between your tax planning goal and your investment goal might be time-sensitive if it involves year-end contribution deadlines or tax-loss harvesting windows.

### Does This Confirm or Challenge My Current Strategy?

Signals can reinforce your current approach ("your aggressive savings rate is helping both your emergency fund and your investment goals") or challenge it ("the extra debt payments are coming at the expense of employer match contributions that would give you a guaranteed 100% return").

## Navigating Between Connected Goals

One of the most useful features of the signal panel is the ability to navigate directly to the connected goal. When a signal card shows a connection to another goal, you can click or tap on the target goal name to jump to that goal's thread and dashboard.

This navigation makes it easy to:

- **Verify the connection** -- See the context in the other goal that makes the signal relevant.
- **Take coordinated action** -- If a signal suggests adjusting your approach in the connected goal, navigate there and start the conversation.
- **Compare dashboards** -- Look at the metrics in both goals side by side to understand the quantitative relationship the signal is describing.

The back-and-forth navigation between connected goals is smooth. You can review a signal, jump to the target goal, check its dashboard, and return to your original goal thread without losing your place.

## Using Signals for Better Financial Decisions

Signals are most valuable when you treat them as decision-support inputs rather than just notifications. Here are some practical ways to use signals in your financial planning.

### Cross-Goal Strategy Sessions

When you notice several signals accumulating between the same pair of goals, it is a strong indicator that those goals are deeply interconnected. Consider having a focused conversation with NeoCash about how to optimize both goals together. Mention the signals you have seen and ask the AI to help you think through the tradeoffs.

### Monthly Reviews

During your regular financial reviews, scan the signal panels across your goals for patterns. Are most signals pointing in the same direction -- for example, suggesting that your aggressive savings rate is benefiting multiple goals simultaneously? Or are there conflicting signals that indicate tension between goals that needs to be resolved?

### Before Major Decisions

When you are about to make a significant financial decision -- taking on new debt, changing jobs, making a large purchase -- check the signal panels on your related goals. The signals can help you anticipate how the decision will ripple across your financial life.

### Rebalancing Priorities

If signals consistently highlight that one goal is being neglected in favor of another, it might be time to rebalance your priorities. A signal that keeps appearing, saying your investment contributions are suffering because of aggressive debt payoff, is worth paying attention to.

## Signal Lifecycle

Signals are not permanent fixtures. As your financial situation evolves, some signals become less relevant while new ones emerge.

### New Signals

New signals are created as you have conversations and the detection system identifies fresh connections. A new signal appears in your panel immediately after it is detected, typically within moments of sending a message that triggers the connection.

### Evolving Signals

As you act on a signal's recommendation and your metrics change, the connection it describes may shift. For example, once you complete the debt payoff that a signal was referencing, that particular connection is no longer active. The signal remains in your history, but new signals about the freed-up cash flow may replace it.

### Signal History

Your signal history is preserved so you can look back at past connections. This history is valuable for understanding how your financial goals have interacted over time and for recognizing patterns in how your decisions in one area affect others.

## Privacy Note

All signal data is stored locally in your browser's IndexedDB, consistent with NeoCash's privacy-first design. The AI API calls used to detect signals send goal context to Claude for analysis, but the resulting signal data lives only on your machine. No external service maintains a record of the connections between your financial goals.

## Next Steps

- Learn about how signals are identified in [Signal Detection](/docs/signals/detection).
- Return to the [Signals Overview](/docs/signals) for the big-picture view of cross-pollination.
- Explore [Dashboard Overview](/docs/dashboard) to understand the metrics and action items that signals often reference.
