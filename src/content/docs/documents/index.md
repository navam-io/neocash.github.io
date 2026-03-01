---
title: "Documents Overview"
description: "Upload and manage financial documents for AI-powered analysis."
personas: ["general-user", "power-user"]
section: "Documents"
order: 1
---

## What Are Documents in NeoCash?

NeoCash lets you upload financial documents directly into the app for AI-powered analysis. Tax returns, pay stubs, investment statements, loan agreements, insurance policies -- any document that is relevant to your financial life can be uploaded and discussed with the AI.

Documents are stored locally in your browser's IndexedDB. They never leave your device except when sent as part of an AI conversation request.

## Why Upload Documents?

Financial conversations are more productive when the AI can see the actual numbers. Instead of manually typing figures from your tax return or investment statement, you can upload the document and ask the AI to analyze it directly.

### Common Use Cases

- **Tax planning** -- Upload last year's tax return and ask the AI to identify optimization opportunities
- **Investment review** -- Share your brokerage statement to get allocation analysis and rebalancing suggestions
- **Debt strategy** -- Upload loan agreements to compare rates and build a payoff plan
- **Insurance review** -- Share policy documents to identify coverage gaps
- **Budget analysis** -- Upload bank or credit card statements to categorize spending
- **Mortgage comparison** -- Upload multiple loan estimates to compare terms side by side

## Supported Formats

NeoCash supports the most common document formats for financial paperwork:

- **PDF** -- Tax returns, statements, contracts, reports
- **Word (.docx)** -- Letters, agreements, financial plans
- **Excel (.xlsx)** -- Spreadsheets, budgets, financial models

For detailed information on each format, see [Upload Formats](/docs/documents/upload-formats).

## How Documents Work

### Upload Process

1. Open a conversation or start a new one
2. Use the document attachment button to select a file
3. NeoCash extracts metadata (title, date, type, file size)
4. The document is stored locally and attached to the conversation

### Document Analysis

Once a document is attached to a conversation, you can ask the AI to analyze it in various ways:

- "Summarize the key figures from this tax return"
- "What is my total investment allocation across these accounts?"
- "Compare the interest rates on these two loan offers"
- "What deductions am I missing based on this return?"
- "Break down my monthly spending from this bank statement"

The AI reads the document content and provides analysis, recommendations, and answers to your specific questions.

### Document Context

Documents attached to a conversation remain available throughout that conversation. The AI can reference document content when answering follow-up questions. If you upload a tax return and then ask several questions about it, the AI maintains access to the full document for each response.

## Managing Your Documents

You can view all uploaded documents in the document library. Each document shows:

- **Title** -- Extracted or assigned document name
- **Type** -- The document format (PDF, DOCX, XLSX)
- **Date** -- When the document was uploaded or the date extracted from its content
- **Size** -- File size in KB or MB
- **Associated conversations** -- Which chats reference this document

## Privacy and Storage

All documents are stored in your browser's IndexedDB. They are never uploaded to a cloud server or synced across devices. When you attach a document to a conversation, its content is included in the API request to Anthropic for that specific interaction only. Anthropic does not store the document content after processing the request.

For more on the privacy architecture, see [Privacy Overview](/docs/privacy/).

## Getting Started

To start using documents, simply open a conversation and attach a file. The AI will automatically detect the document type and be ready to discuss its contents. No configuration is required.

For details on supported formats and size limits, see [Upload Formats](/docs/documents/upload-formats). To learn about how NeoCash processes document metadata, see [Document Metadata](/docs/documents/metadata).
