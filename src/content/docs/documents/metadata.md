---
title: "Document Metadata"
description: "How NeoCash extracts and uses metadata from your uploaded documents."
personas: ["power-user"]
section: "Documents"
order: 3
---

## What Is Document Metadata?

When you upload a document to NeoCash, the system extracts metadata -- structured information about the document itself. This metadata helps organize your document library, enables the AI to understand document context before reading the full content, and makes it easier to find and reference documents across conversations.

## Extracted Metadata Fields

NeoCash extracts and stores four key metadata fields for every uploaded document.

### Title

The document title is extracted from the file itself when possible, or derived from the filename. The system checks multiple sources in order of priority:

1. **Embedded document title** -- Many PDFs and Word documents have a title property set by the creating application
2. **First heading** -- If no embedded title exists, the first prominent heading in the document may be used
3. **Filename** -- As a fallback, the uploaded filename (without extension) becomes the title

You can edit the title after upload if the automatic extraction does not produce a useful result.

### Date

The document date helps establish when the information in the document is relevant. The system attempts to identify the most meaningful date:

- **Statement date** -- For bank and investment statements, the statement period end date
- **Document creation date** -- The date embedded in the file's properties
- **Upload date** -- If no other date can be determined, the upload timestamp is used

The date field is important for the AI's context. When you ask about your financial situation at a point in time, the AI can reference documents from the appropriate period.

### Type

The document type is determined by the file extension and corresponds to one of the three supported formats:

- **PDF** -- Portable Document Format files
- **DOCX** -- Microsoft Word documents
- **XLSX** -- Microsoft Excel spreadsheets

The type field tells the AI and the processing pipeline how to extract content from the document.

### Size

The file size in bytes, typically displayed as KB or MB in the interface. Size information helps you manage your local storage and understand how much context a document will consume during AI analysis.

## How Metadata Is Used

### Document Library Organization

Metadata powers the document library view. You can sort and browse documents by title, date, type, or size. This makes it straightforward to find a specific document when you have accumulated many uploads over time.

### AI Context Priming

Before the AI reads a document's full content, it receives the metadata as a preview. This helps the AI understand what kind of document it is dealing with before diving into the details. For example, knowing that a document is titled "2025 Q3 Investment Statement" and is a PDF from October 2025 helps the AI frame its analysis appropriately.

### Conversation References

When you reference a document in conversation, the metadata provides quick identification. Instead of processing the entire document to recall which one you mean, the AI can match your reference ("that tax return from last year") against document titles and dates.

### Multi-Document Analysis

When multiple documents are attached to a conversation, metadata helps the AI distinguish between them. Clear titles and dates prevent confusion when you ask comparative questions like "How did my spending change between Q1 and Q2?"

## Metadata Storage

Document metadata is stored as part of the `DocumentRecord` in IndexedDB. Each record includes:

```
DocumentRecord {
  id: string
  title: string
  date: string
  type: "pdf" | "docx" | "xlsx"
  size: number
  content: blob
  conversationId: string
  createdAt: timestamp
  updatedAt: timestamp
}
```

The metadata fields are lightweight and indexed for quick retrieval. The document content (the actual file data) is stored separately as a blob, so browsing metadata does not require loading full document contents into memory.

## Editing Metadata

You can edit the title and date fields for any document through the document library interface. Common reasons to edit metadata:

- **Clarify auto-extracted titles** -- If the system extracted "Document1" instead of a meaningful title
- **Correct dates** -- If the extracted date does not match the relevant financial period
- **Standardize naming** -- To maintain a consistent naming convention across your document library

Type and size fields cannot be edited as they are determined by the actual file.

## Tips for Better Metadata

### File Naming

Since filenames serve as a fallback for titles, using descriptive names before uploading saves time:

- **Good:** `2025-federal-tax-return.pdf`
- **Good:** `fidelity-401k-statement-q3-2025.pdf`
- **Less useful:** `download(2).pdf`
- **Less useful:** `Scan_20250115.pdf`

### Document Organization

A well-organized document library with clear metadata makes the AI more effective. When the AI can quickly identify which documents are relevant to your question, it provides faster and more accurate analysis.

Consider establishing a naming convention for your documents:

- `[year]-[institution]-[document-type].ext`
- Example: `2025-chase-checking-statement-march.pdf`
- Example: `2025-vanguard-roth-ira-statement-q1.xlsx`

This convention makes documents easy to find both in the library view and during conversations with the AI.
