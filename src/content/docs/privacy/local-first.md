---
title: "Local-First Architecture"
description: "How NeoCash keeps all your financial data on your device."
personas: ["general-user", "developer"]
section: "Privacy"
order: 2
---

## What Is Local-First?

Local-first means the application works primarily with data stored on your device. Unlike cloud-first applications that treat the server as the source of truth and the local device as a cache, NeoCash treats your browser as the sole source of truth. There is no server copy of your data.

This architecture choice has significant implications for privacy, performance, and data ownership.

## How Local Storage Works

### IndexedDB

NeoCash uses IndexedDB, a browser-native database built into every modern browser. IndexedDB provides:

- **Structured storage** -- Data is organized into object stores with indexes for efficient querying
- **Large capacity** -- IndexedDB can store hundreds of megabytes of data, far more than cookies or localStorage
- **Asynchronous access** -- Read and write operations do not block the user interface
- **Transactional integrity** -- Data operations are atomic, preventing corruption from partial writes

IndexedDB is the same technology used by many offline-capable web applications. It is mature, well-supported, and designed for exactly this kind of local data persistence.

### What Is Stored Where

All NeoCash data resides in a single IndexedDB database with multiple object stores:

| Object Store | Contents | Typical Size |
|-------------|----------|-------------|
| Conversations | Chat history with all messages | Grows with usage |
| Memories | Profile facts and key decisions | Small (text only) |
| Documents | Uploaded files and extracted content | Varies by documents |
| Goals | Financial goals and progress data | Small |
| Signals | Configured financial signals | Small |
| Settings | API keys and user preferences | Minimal |

## The Network Boundary

NeoCash enforces a strict boundary between local data and network communication.

### What Crosses the Boundary

Only one type of data leaves your device: AI conversation requests sent to the Anthropic API. Each request contains:

- The conversation messages (your input and AI responses for the current session)
- System prompt content including injected memories relevant to the conversation
- Document content if you have attached files to the conversation
- Your API key as an authentication header

### What Never Crosses the Boundary

- Your full memory store (only relevant memories are included per-conversation)
- Documents not attached to the current conversation
- Goal data
- Signal data
- Settings and configuration (except the API key used for authentication)
- Browser or device information

### No Telemetry

NeoCash does not include any analytics, tracking, or telemetry. There are no network requests for:

- Usage statistics
- Error reporting
- Feature flags
- Version checks
- A/B testing
- User behavior tracking

The application loads once and runs entirely in your browser. The network is used only when you actively request an AI response.

## API Key Management

Your Anthropic API key is stored in IndexedDB alongside your other data. It is used exclusively to authenticate requests to the Anthropic API.

### Key Security Considerations

- The key is stored in plain text in IndexedDB (as is standard for browser-side credentials)
- It is transmitted only over HTTPS to Anthropic's API endpoint
- It is never included in any other network request
- You can delete or rotate your key at any time through the settings interface

### Bring Your Own Key

The bring-your-own-key model means NeoCash never handles billing or payment. You manage your Anthropic API account directly, set your own usage limits, and pay Anthropic directly for the AI tokens you consume. NeoCash takes no cut and has no visibility into your billing.

## Offline Capabilities

Because data is stored locally, most NeoCash features work without an internet connection:

- **Memory Editor** -- Browse, edit, and delete memories offline
- **Document Library** -- View uploaded documents and their metadata
- **Goal Tracking** -- Review and update goals
- **Settings** -- Modify preferences and configuration

The only feature that requires an internet connection is the AI conversation itself, which needs to reach the Anthropic API.

## Data Portability

Since your data lives in the browser, you may wonder about backup and migration options.

### Browser Storage Persistence

IndexedDB data persists until explicitly deleted. It survives browser restarts, system reboots, and application updates. However, it can be cleared by:

- Clearing browser site data or cookies for the NeoCash domain
- Uninstalling the browser
- Using browser storage management tools to free up space

### Cross-Browser Limitations

IndexedDB databases are scoped to a single browser on a single device. Data created in Chrome is not accessible from Firefox on the same machine. This is a browser security feature, not a NeoCash limitation.

## For Developers

### Inspecting Local Data

You can inspect NeoCash's IndexedDB data using your browser's developer tools:

1. Open DevTools (F12 or Cmd+Option+I)
2. Navigate to the Application tab
3. Expand IndexedDB in the left sidebar
4. Browse the NeoCash database and its object stores

This transparency is intentional. You should be able to see exactly what data the application is storing.

### No Service Workers

NeoCash does not use service workers for caching or background sync. There are no background processes running when you are not actively using the application. This keeps the architecture simple and avoids any concern about hidden background data transmission.

### Content Security Policy

The application enforces a strict Content Security Policy that limits which external domains can be contacted. The only allowed external endpoint is the Anthropic API. This provides a verifiable, browser-enforced guarantee that your data cannot be exfiltrated to unauthorized servers.
