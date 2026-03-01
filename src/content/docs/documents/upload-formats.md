---
title: "Upload Formats"
description: "Supported document formats and file size limits."
personas: ["general-user"]
section: "Documents"
order: 2
---

## Supported File Formats

NeoCash supports three document formats that cover the vast majority of financial paperwork. Each format is processed differently to extract text content and metadata for AI analysis.

## PDF Documents

PDF is the most common format for financial documents. Most banks, brokerages, insurance companies, and tax software produce PDF statements and reports.

### Best For

- Tax returns (1040, W-2, 1099 forms)
- Bank and credit card statements
- Investment account statements
- Loan agreements and disclosures
- Insurance policy documents
- Mortgage documents (closing disclosures, loan estimates)
- Pay stubs and employment documents

### How PDFs Are Processed

NeoCash extracts text content from PDF files for AI analysis. The system handles:

- **Text-based PDFs** -- Direct text extraction from the document structure
- **Multi-page documents** -- All pages are processed and available for analysis
- **Tables and structured data** -- Financial tables, line items, and structured sections are preserved

### Considerations

- Scanned image PDFs (without embedded text) may have limited text extraction capability
- Password-protected PDFs must be unlocked before uploading
- Very large PDFs with hundreds of pages may take longer to process

## Word Documents (.docx)

Microsoft Word documents are common for financial plans, advisory letters, and agreements that you may have received from financial professionals.

### Best For

- Financial planning documents
- Advisory agreements and engagement letters
- Personal financial statements
- Budget plans and spending reports
- Estate planning documents
- Employment offer letters with compensation details

### How Word Documents Are Processed

NeoCash reads the text content from .docx files, preserving:

- **Headings and structure** -- Document hierarchy is maintained
- **Tables** -- Data tables are extracted with their structure
- **Lists** -- Bulleted and numbered lists are preserved
- **Body text** -- All paragraph content is available for analysis

### Considerations

- Only .docx format is supported (not the older .doc format)
- Embedded images within Word documents are not analyzed
- Complex formatting (columns, text boxes) may be simplified during extraction

## Excel Spreadsheets (.xlsx)

Excel files are ideal for financial data that lives in spreadsheets -- budgets, transaction logs, financial models, and comparison tables.

### Best For

- Personal budgets and spending trackers
- Net worth spreadsheets
- Investment tracking and portfolio allocation sheets
- Loan amortization schedules
- Tax preparation worksheets
- Business income and expense logs
- Side-by-side financial comparisons

### How Spreadsheets Are Processed

NeoCash reads data from .xlsx files, including:

- **Multiple sheets** -- All worksheets in the workbook are accessible
- **Cell values** -- Both raw values and calculated formula results
- **Headers and labels** -- Column and row headers provide context
- **Numerical data** -- Numbers, currencies, dates, and percentages are preserved

### Considerations

- Only .xlsx format is supported (not the older .xls format)
- Macros and VBA code are not executed
- Charts and graphs embedded in the spreadsheet are not analyzed
- Very large spreadsheets with thousands of rows may be summarized

## File Size Guidelines

While NeoCash does not impose strict hard limits, keep the following guidelines in mind for optimal performance:

| Format | Recommended Max Size | Notes |
|--------|---------------------|-------|
| PDF | 10 MB | Most financial statements are under 2 MB |
| DOCX | 5 MB | Text-heavy documents are typically small |
| XLSX | 5 MB | Large datasets may be summarized |

Larger files will still upload and process but may take longer and consume more of the AI's context window during analysis.

## Tips for Better Document Analysis

### Before Uploading

- **Use clear file names** -- Name files descriptively (e.g., "2025-tax-return.pdf" rather than "document(3).pdf")
- **Ensure text is selectable** -- For PDFs, verify you can select and copy text. If not, the document may be a scanned image with limited extraction support
- **Remove sensitive pages** -- If a document contains pages not relevant to your question, consider uploading only the relevant portion

### During Conversation

- **Be specific in your questions** -- "What are my top 5 expense categories on page 2?" works better than "Tell me about this document"
- **Reference specific sections** -- Point the AI to specific areas of interest for focused analysis
- **Upload related documents together** -- For comparison tasks, attach all relevant documents in the same conversation

## Unsupported Formats

The following formats are not currently supported:

- Image files (JPG, PNG) -- screenshots of statements should be converted to PDF
- CSV files -- convert to .xlsx before uploading
- Older Microsoft formats (.doc, .xls)
- Google Docs/Sheets -- export to .docx or .xlsx first
- Apple Numbers/Pages -- export to .xlsx or .docx first
