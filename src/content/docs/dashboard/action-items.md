---
title: "Action Items"
description: "AI-generated action items and insights to keep your financial goals on track."
personas: ["general-user", "power-user"]
section: "Dashboard"
order: 3
---

## What Are Action Items?

Action items are concrete, practical tasks that NeoCash generates from your financial conversations. While metrics tell you where you stand numerically, action items tell you what to do next. They bridge the gap between understanding your finances and actually making progress on your goals.

Every action item is tied to a specific goal and appears on that goal's dashboard. When you finish a task, you mark it complete, and your dashboard reflects the progress. Over time, your completed action items form a record of the practical steps you have taken toward your financial objectives.

## How Action Items Are Generated

Action items emerge naturally from your conversations with NeoCash. You do not need to ask for them explicitly -- the AI identifies actionable suggestions as they come up in discussion and adds them to your dashboard.

### Conversational Extraction

When the AI recommends a specific step during a conversation, it recognizes that recommendation as a potential action item. For example, if you are discussing your emergency fund and the AI suggests opening a high-yield savings account, that suggestion becomes an action item on your dashboard.

Common triggers for action item generation include:

- The AI recommending a specific financial action
- You and the AI agreeing on a next step during planning
- The AI identifying a time-sensitive opportunity or deadline
- A conversation revealing a gap in your current financial setup

### Context-Aware Generation

The AI tailors action items to your specific situation. It does not produce generic financial advice checklists. If you mention that you already have a high-yield savings account, the AI will not create an action item telling you to open one. Instead, it might suggest increasing your automatic transfer amount or shopping for a better rate.

This context awareness extends across your conversation history. The AI remembers what you have already discussed and what actions you have already taken, so the items it generates are always relevant and non-redundant.

## Working With Action Items

### Viewing Action Items

Action items appear in the action items section of your goal dashboard. Each item displays its title, a brief description of what the task involves, and its current status. Active items that you have not yet addressed appear at the top of the list.

### Marking Items Complete

When you finish a task, click the completion checkbox next to the action item. The item moves to the completed section of your list, and your dashboard reflects the change. Marking items complete is satisfying and helps you maintain momentum -- you can see a growing list of concrete steps you have taken.

You can also mention in conversation that you have completed a task, and the AI will update the action item status for you. Saying something like "I opened that high-yield savings account yesterday" prompts the AI to mark the corresponding item as done.

### Completion Tracking

Your dashboard keeps a running tally of completed versus outstanding action items. This gives you a quick sense of how much you have accomplished and how much remains. Goals with a high completion rate indicate strong follow-through, while goals with many outstanding items might need more attention.

The completion history is preserved over time. Even after you mark all current items complete, the record of past items remains available so you can review the full arc of actions you have taken for each goal.

## Priority Levels

Not all action items carry the same urgency. NeoCash assigns priority levels to help you focus on what matters most.

### High Priority

High-priority items are time-sensitive or have a significant financial impact. These are tasks you should address soon to avoid missed opportunities or potential problems. Examples include:

- Enrolling in your employer's 401(k) match before the deadline
- Transferring funds to avoid an overdraft
- Responding to a loan pre-approval that expires next week

### Medium Priority

Medium-priority items are important but not urgent. They represent solid next steps that will advance your goal when you get to them. Most action items fall into this category. Examples include:

- Setting up automatic monthly transfers to your savings account
- Reviewing your investment allocation quarterly
- Comparing insurance quotes for better rates

### Low Priority

Low-priority items are nice-to-have improvements or long-term considerations. They are worth doing eventually but will not materially affect your progress if delayed. Examples include:

- Organizing your financial documents into labeled folders
- Reading up on tax-advantaged account options for next year
- Setting up a spreadsheet to track net worth over time

The AI assigns priorities based on the context of your conversations, the urgency of deadlines, and the potential financial impact of each action. You can always adjust priorities mentally -- the levels are guidance, not mandates.

## AI Insights

Alongside action items, your dashboard surfaces AI-generated insights. Insights are different from action items: while action items are tasks you perform, insights are observations and analysis that help you understand your financial picture more deeply.

### What Insights Look Like

Insights appear as short analytical statements on your dashboard. They synthesize information from your conversations and metrics to surface patterns, trends, and opportunities you might not have noticed on your own.

**Example insights:**

- "Your savings rate has increased from 12% to 18% over the past four months. At this pace, you will reach your emergency fund target three months early."
- "Your monthly discretionary spending has dropped by $340 since you started tracking. This freed-up cash flow could accelerate your debt payoff timeline."
- "You have not discussed your investment allocation in over two months. Consider reviewing it given recent market changes."

### How Insights Are Generated

The AI generates insights by analyzing the combination of your conversation history, current metric values, and metric trends over time. Insights are refreshed as your dashboard data changes, so they always reflect your latest financial state.

Insights are designed to be genuinely useful rather than generic. The AI draws on the specific context of your goals and the details you have shared to produce observations that are relevant to your situation.

### Insights vs. Action Items

The distinction is straightforward: insights inform, action items direct. An insight might tell you that your savings pace has accelerated. An action item might tell you to increase your automatic transfer to capitalize on that momentum. Both live on your dashboard, but they serve complementary purposes.

## Privacy Note

Action items and insights, like all dashboard data, are stored locally in your browser's IndexedDB. The AI generates them during your conversations via API calls to Claude, but the resulting data never leaves your machine. No external service sees your task list, your completion history, or the insights generated about your finances.

## Next Steps

- Customize what your dashboard tracks using the [Schema Editor](/docs/dashboard/schema-editor).
- Review the different [Metrics](/docs/dashboard/metrics) types that pair with your action items.
- Return to the [Dashboard Overview](/docs/dashboard) to see how all three components fit together.
