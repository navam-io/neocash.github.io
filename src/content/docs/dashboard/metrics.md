---
title: "Metrics"
description: "Understanding the typed metric system in NeoCash dashboards."
personas: ["power-user"]
section: "Dashboard"
order: 2
---

## What Are Metrics?

Metrics are the individual data points that make up your dashboard. Each metric represents a specific measurable aspect of your financial goal -- a dollar amount, a percentage, a date, a count, or a descriptive status. Together, your metrics form a structured snapshot of where you stand and where you are headed.

Every metric in NeoCash is typed. The type determines how the metric is displayed, formatted, and interpreted. A currency metric shows a dollar sign and proper decimal formatting. A percentage metric shows a percent symbol. A date metric renders as a human-readable date. This typing system ensures that your dashboard is not just a collection of raw numbers but a properly formatted, easy-to-read summary of your goal.

## Metric Types

NeoCash supports five metric types. Each type is designed for a specific category of financial data.

### Currency

Currency metrics represent monetary values. They are displayed with a dollar sign prefix and formatted to two decimal places. Use currency metrics for balances, targets, contributions, payments, expenses, and any other dollar-denominated figure.

**Examples:**
- Current Savings -- $14,200.00
- Target Amount -- $60,000.00
- Monthly Contribution -- $850.00
- Outstanding Balance -- $3,420.75

Currency is the most common metric type in financial dashboards. Most goals involve at least two or three currency metrics tracking where you are, where you want to be, and how much you are putting in.

### Percentage

Percentage metrics express ratios and rates. They are displayed with a percent symbol and typically formatted to one decimal place. Use percentage metrics for progress tracking, rates of return, allocation splits, and completion ratios.

**Examples:**
- Goal Progress -- 23.7%
- Savings Rate -- 18.2%
- Interest Rate -- 6.5%
- Portfolio Allocation -- 40.0%

Percentage metrics are particularly useful for giving you a quick sense of relative progress. Seeing "23.7% complete" is often more immediately meaningful than seeing raw dollar figures alone.

### Number

Number metrics represent plain counts and quantities without units. They are displayed as formatted integers or decimals depending on the value. Use number metrics for counts of items, scores, multipliers, or any numeric value that is not a dollar amount or a percentage.

**Examples:**
- Credit Score -- 742
- Number of Accounts -- 4
- Months Remaining -- 18
- Emergency Fund Months -- 3.5

Number metrics are intentionally unit-free in their formatting. If you need to convey what the number represents, the metric name and description handle that context.

### Date

Date metrics represent specific points in time. They are rendered as human-readable dates (for example, "March 15, 2028") rather than raw timestamps. Use date metrics for deadlines, target completion dates, review dates, and milestones.

**Examples:**
- Target Date -- March 2028
- Next Review -- June 15, 2026
- Account Opening Date -- January 10, 2025
- Loan Maturity -- December 2030

Date metrics help you maintain a time-aware view of your goals. When paired with currency or percentage metrics, they let you understand not just how much progress you have made but whether you are on pace relative to your timeline.

### Text

Text metrics hold descriptive strings rather than numeric values. They are displayed as plain text. Use text metrics for statuses, categories, qualitative assessments, and any data point that does not fit neatly into a number.

**Examples:**
- Status -- On Track
- Risk Level -- Moderate
- Account Type -- Roth IRA
- Priority -- High

Text metrics add qualitative context that numbers alone cannot capture. A dashboard that shows $14,200 saved toward a $60,000 goal is informative, but adding a text metric reading "On Track" provides immediate reassurance without requiring mental math.

## How Metrics Are Populated

Metrics are populated from your conversations with NeoCash. As you chat about your goal, the AI identifies data points that map to your dashboard metrics and updates them accordingly.

### Extraction From Conversation

When you mention specific numbers, dates, or statuses during a conversation, the AI parses that information and matches it against your dashboard schema. For example, if you say "I just checked my savings account and it is at $15,800 now," the AI recognizes this as an update to your Current Savings metric and applies the change.

The extraction is contextual. The AI understands which metric a piece of information belongs to based on the conversation flow and the metric descriptions in your schema. You do not need to use any special syntax or commands -- just talk naturally about your finances.

### Initial Population

When a dashboard is first created for a new goal, the AI reviews the conversation history for that goal and populates as many metrics as it can from the available context. If you discussed specific numbers or dates when setting up the goal, those values appear in the dashboard immediately.

Metrics that cannot be determined from the existing conversation are left empty until you provide the relevant information in a future message.

### Ongoing Updates

As your financial situation changes and you share updates through conversation, the AI keeps your metrics current. Mentioning a new balance, a changed contribution amount, or a revised target date triggers an update to the corresponding metric. This means your dashboard stays accurate over time without requiring you to manually edit values.

## Tracking Progress Over Time

Metrics are not just point-in-time snapshots. NeoCash maintains the history of metric updates so you can see how your numbers have changed over time. When a metric value is updated, the previous value is preserved in the metric history.

This historical tracking is especially valuable for currency and percentage metrics where trends matter. Seeing that your savings balance has grown from $8,000 to $14,200 over six months tells a more compelling story than the current number alone. It confirms that your plan is working and that your momentum is real.

### Progress Indicators

Dashboards display visual indicators alongside metrics to show directional movement. A metric that has improved since its last update shows a positive indicator. A metric that has moved in an unfavorable direction shows a cautionary indicator. These small visual cues let you scan your dashboard quickly and spot areas that need attention.

## Metric Relationships

While each metric is an independent data point, metrics often relate to each other in meaningful ways. Your Goal Progress percentage is derived from your Current Savings and Target Amount. Your Months Remaining is connected to your Monthly Contribution and the gap between current and target values.

The AI understands these relationships. When you update one metric, related metrics may also be recalculated. If you increase your monthly contribution, the AI might update your projected completion date and progress percentage in the same operation.

## Next Steps

- See how [Action Items](/docs/dashboard/action-items) complement your metrics with concrete next steps.
- Learn to define custom metrics using the [Schema Editor](/docs/dashboard/schema-editor).
- Return to the [Dashboard Overview](/docs/dashboard) for the full picture.
