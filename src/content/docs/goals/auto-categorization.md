---
title: "Auto-Categorization"
description: "How NeoCash automatically classifies your financial goals using AI."
personas: ["power-user", "developer"]
section: "Goals"
order: 5
---

## How Auto-Categorization Works

When you create a custom goal, NeoCash does not require you to manually pick a category. Instead, it sends your goal description to an AI classification system that analyzes the text and determines which of the eight goal categories best fits your objective. This happens in seconds and ensures your goal gets the right dashboard layout, metrics, and AI guidance context from the start.

## The Classification Model

Auto-categorization is powered by Claude Haiku, a fast and efficient language model from Anthropic. Haiku was chosen for this task because it offers the right balance of speed and accuracy for text classification. The categorization request needs to return near-instantly so there is no noticeable delay when creating a goal, and Haiku delivers sub-second responses while maintaining high classification accuracy.

The model receives your goal description along with a system prompt that defines the eight categories and their boundaries. It returns a structured response containing the suggested category and a brief rationale.

## The Classification Request

When you submit a custom goal, the client sends a request to the `/api/suggest-category` endpoint. Here is what happens in that request:

### Input

The endpoint receives the raw text of your goal description. This is exactly what you typed into the goal creation field, with no preprocessing or modification.

### Processing

The endpoint constructs a prompt for Claude Haiku that includes:

- The eight category definitions with clear descriptions of what each one covers
- Boundary guidance for ambiguous cases, such as distinguishing between Savings and Investment goals or between Tax Planning and Retirement goals
- Your goal description text
- Instructions to return a structured response with a category name and explanation

### Output

The endpoint returns a JSON response containing:

- **category**: One of the eight category identifiers (emergency-fund, debt-payoff, retirement, investment, savings, tax-planning, insurance, estate-planning)
- **confidence**: A confidence level indicating how certain the model is about the classification
- **explanation**: A one-to-two sentence rationale explaining why this category was chosen

## Confidence Levels

The classification system returns one of three confidence levels.

### High Confidence

The goal description clearly maps to a single category with no ambiguity. This is the most common result. Examples include "Pay off my credit card debt" (clearly Debt Payoff) or "Set up a will for my family" (clearly Estate Planning).

### Medium Confidence

The goal description could plausibly fit more than one category, but one is a stronger match. For example, "Decide how to invest my tax refund" touches both Tax Planning and Investment, but the primary action is investment allocation. The system picks the stronger match and notes the ambiguity in its explanation.

### Low Confidence

The goal description is vague, unusually complex, or spans multiple categories without a clear primary fit. For example, "Get my finances in order" is too broad for confident classification. In low-confidence cases, the system still assigns its best guess but the UI gives the suggestion less visual emphasis and more prominently offers the option to change categories.

## How It Analyzes Goal Text

The classification model looks at several signals in your goal text to determine the right category.

### Keyword Signals

Certain words and phrases are strong indicators of specific categories. Terms like "emergency," "rainy day," or "unexpected expenses" point to Emergency Fund. Phrases like "pay off," "balance," "interest rate," or "debt-free" indicate Debt Payoff. Words like "401(k)," "IRA," "retire," or "pension" map to Retirement.

### Intent Signals

Beyond keywords, the model analyzes the underlying intent. "Save $30,000 for a house" and "Invest $30,000 in real estate" both mention real estate and dollar amounts, but the intent is different. The first is a Savings goal (accumulating funds for a purchase), while the second is an Investment goal (deploying capital for returns).

### Context Signals

The model considers the full context of the description. "I want to reduce my taxes by contributing more to my 401(k)" mentions taxes and retirement, but the mechanism is a retirement contribution, so it maps to Retirement rather than Tax Planning. The model weighs which category is most actionable for the stated objective.

## Fallback Behavior

The auto-categorization system is designed to always return a result. Even if the goal text is unusual or ambiguous, the system will assign its best-guess category rather than failing or returning no result. Here is how edge cases are handled:

- **Completely unrelated text**: If someone enters text that has nothing to do with financial planning, the system defaults to Savings as the most general category and returns low confidence.
- **Multi-category goals**: For goals that genuinely span multiple categories, the system picks the category matching the primary objective. Cross-pollination signals will handle the connections to other categories once the goal thread is active.
- **Very short input**: Single-word or very brief descriptions like "taxes" or "debt" are classified based on the keyword alone. The system returns medium confidence and the AI conversation will gather more specifics.
- **Network or API errors**: If the classification request fails for any technical reason, the goal creation flow falls back to manual category selection. You pick the category yourself and continue without delay.

## Overriding the Suggestion

The auto-categorization result is always a suggestion, never a final decision. After receiving the suggested category, you can change it to any of the eight categories before creating the goal. This override takes effect immediately and configures the goal with the selected category's dashboard and guidance context.

Common reasons to override include:

- Your goal emphasizes a different aspect than the classifier detected
- You want the dashboard metrics from a different category type
- The goal is genuinely multi-category and you have a preference for which framing to use

## Technical Details for Developers

The `/api/suggest-category` endpoint is a lightweight API route that proxies the classification request to Claude Haiku. It uses a structured output schema to ensure consistent response formatting. The endpoint is stateless and does not persist any data. The goal text is sent to the Anthropic API for classification and the response is returned directly to the client.

Key implementation details:

- **Model**: Claude Haiku (selected for speed and cost efficiency in classification tasks)
- **Response format**: Structured JSON with category, confidence, and explanation fields
- **Latency**: Typical response time is under 500 milliseconds
- **Rate limiting**: The endpoint inherits the application's standard rate limiting
- **Privacy**: Goal text is sent to the Anthropic API for classification but is not stored or logged on any server. The Anthropic API processes the text and discards it according to their data retention policy. All goal data is stored locally in IndexedDB on your device.

## Accuracy and Iteration

The classification system achieves high accuracy on straightforward financial goals. For ambiguous or multi-faceted goals, the manual override ensures you always end up with the right category. Over time, the prompt engineering behind the classification can be refined to handle edge cases better without requiring any changes to the user experience.
