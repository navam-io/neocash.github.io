---
title: "Extended Thinking"
description: "See the AI's reasoning process with extended thinking mode."
personas: ["power-user"]
section: "Chat"
order: 5
---

## What Is Extended Thinking

Extended thinking is a feature that lets the AI reason through complex problems step by step before providing its final response. When activated, the AI generates a detailed internal reasoning chain -- exploring different angles, checking its logic, and considering edge cases -- before composing the answer you see.

In standard mode, the AI produces a response directly. With extended thinking, it first "thinks out loud" in a structured reasoning block, then synthesizes that reasoning into a polished response. You get both: the transparent thought process and the clear conclusion.

This is particularly valuable in financial contexts where the reasoning behind a recommendation matters as much as the recommendation itself. Understanding why the AI suggests a particular tax strategy or investment allocation helps you make informed decisions.

## When Extended Thinking Activates

Extended thinking is available when using models that support it, and it engages based on the complexity of your question. The system may activate extended thinking when it detects:

- **Multi-step financial calculations** -- Retirement projections with multiple variables, compound interest scenarios, or tax optimization across accounts
- **Tradeoff analysis** -- Questions that require weighing competing factors, such as "Should I pay off my mortgage early or invest the difference?"
- **Scenario comparison** -- When you ask the AI to evaluate multiple options side by side
- **Complex document analysis** -- Cross-referencing figures from multiple uploaded documents
- **Ambiguous or nuanced questions** -- Situations where the answer depends on several factors that need careful consideration

You can also explicitly request extended thinking by asking the AI to "think through" a problem or "show your reasoning."

## Collapsible Thinking Blocks

When extended thinking is used, the reasoning appears in a collapsible block above the final response. This block is collapsed by default, showing a brief label like "Thinking..." or a summary of the reasoning topic.

### Viewing the Reasoning

Click the thinking block to expand it and see the full reasoning chain. Inside, you will find the AI's step-by-step analysis, including:

- Identifying the key variables and constraints
- Exploring different approaches or scenarios
- Running through calculations and checking results
- Considering edge cases and potential pitfalls
- Weighing tradeoffs before reaching a conclusion

### Collapsing and Expanding

The thinking block can be toggled open and closed at any time. This design keeps the chat clean -- you can read the final response without the reasoning getting in the way, but the full analysis is always one click away when you want to verify the logic.

For conversations with multiple extended thinking responses, each message has its own independent thinking block.

## Thinking Budget Management

Extended thinking uses a portion of the model's context and processing capacity. NeoCash manages this with a thinking budget that controls how much reasoning the AI performs before it begins composing the response.

### How the Budget Works

- The thinking budget determines the maximum length of the reasoning chain
- For straightforward questions, the AI may use only a small portion of the budget
- For complex multi-factor analyses, the AI may use the full budget to explore the problem thoroughly
- The budget is managed automatically -- you do not need to configure it

### Budget and Response Quality

A larger thinking budget generally produces more thorough analysis. When the AI has more room to reason, it can:

- Explore more scenarios and edge cases
- Double-check its calculations
- Consider alternative perspectives
- Provide more nuanced conclusions

For most financial questions, the default budget provides excellent results. Power users who want the deepest possible analysis can pair extended thinking with the Opus model for maximum reasoning depth.

## How Extended Thinking Improves Financial Analysis

Financial decisions involve interconnected variables, long time horizons, and significant consequences. Extended thinking adds value in several specific ways:

### Calculation Verification

The AI can show its work on financial calculations, stepping through compound interest formulas, tax bracket math, or loan amortization tables. This lets you verify that the numbers are correct before acting on them.

### Assumption Surfacing

Complex financial questions involve assumptions that are not always obvious. Extended thinking makes these assumptions visible. For example, a retirement projection might assume a specific inflation rate, market return, and Social Security benefit -- the thinking block will show these assumptions explicitly.

### Risk Identification

By reasoning through a problem step by step, the AI is more likely to identify risks and edge cases. The thinking block might reveal considerations like "If interest rates rise above 6%, this refinancing strategy becomes less favorable" -- details that might be omitted from a more concise direct response.

### Decision Transparency

When the AI recommends one strategy over another, the thinking block shows the comparison process. You can see which factors the AI weighted most heavily and decide whether you agree with that weighting.

## Practical Usage

- **Use extended thinking for big decisions** -- Retirement planning, major purchases, tax strategy changes, and investment rebalancing all benefit from visible reasoning
- **Review thinking blocks selectively** -- You do not need to read every thinking block. Save deep reviews for high-stakes decisions
- **Pair with Opus for maximum depth** -- The Opus model produces the most thorough extended thinking chains
- **Ask follow-up questions about reasoning** -- If something in the thinking block is unclear, ask the AI to elaborate on that specific step
