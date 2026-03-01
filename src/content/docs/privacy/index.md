---
title: "Privacy Overview"
description: "NeoCash's privacy-first architecture — your data never leaves your device."
personas: ["general-user", "power-user", "developer"]
section: "Privacy"
order: 1
---

## Privacy as a Foundation

NeoCash is built on a simple principle: your financial data belongs to you and should stay on your device. Unlike traditional financial apps that upload your information to cloud servers, NeoCash operates with a local-first architecture where all data -- conversations, memories, documents, goals, and signals -- is stored in your browser's IndexedDB.

There is no NeoCash cloud. There is no account to create. There is no data to breach on a server because no server holds your data.

## What Stays on Your Device

Everything. Specifically:

- **Conversations** -- Every chat with the AI, including the full message history
- **Memories** -- All extracted profile facts and key decisions
- **Documents** -- Every uploaded PDF, Word document, and spreadsheet
- **Goals** -- Your financial goals and progress tracking data
- **Signals** -- Market and financial signals you have configured
- **Settings** -- Your preferences, configuration, and API keys

All of this data is stored in IndexedDB within your browser. It is accessible only to the NeoCash application running in that browser on that device.

## The One External Connection

NeoCash makes exactly one type of external network call: requests to the Anthropic API to generate AI responses. When you send a message in a conversation, the following data is included in the API request:

- Your message and the conversation history for that session
- Relevant memories injected into the system prompt
- Document content if you have attached documents to the conversation

This data is sent to Anthropic's API for processing and is subject to Anthropic's data handling policies. Anthropic does not store conversation data from API requests for model training when using API keys.

No other external calls are made. NeoCash does not phone home, does not send analytics, and does not sync data to any server.

## Your API Key

To use NeoCash, you provide your own Anthropic API key. This key is stored locally in your browser alongside your other data. It is never sent anywhere except to Anthropic's API as an authentication header when making conversation requests.

This means:

- You have direct control over your API usage and costs
- There is no NeoCash subscription or middleman
- Your key stays on your device

## No Account Required

NeoCash does not have a user account system. There is no sign-up, no login, no password, and no email address collected. You open the app and start using it. Your data exists only in your browser.

This eliminates entire categories of risk:

- No credential databases to breach
- No password reset vulnerabilities
- No session hijacking
- No account takeover attacks
- No third-party authentication dependencies

## What This Means in Practice

### Your data is as secure as your device

Since all data lives on your device, the security of your financial information depends on the security of your browser and operating system. Use a device with a strong password or biometric lock, keep your browser updated, and do not share your device with untrusted people.

### Clearing browser data clears NeoCash data

If you clear your browser's storage, site data, or cookies for the NeoCash domain, your data will be deleted. This is by design -- there is no cloud backup. If you want to preserve your data, avoid clearing site storage for the NeoCash application.

### Data does not sync across devices

Since there is no cloud, your data exists only on the device and browser where you created it. If you use NeoCash on your laptop and your desktop, each will have separate data stores.

### Incognito mode is ephemeral

Using NeoCash in an incognito or private browsing window means all data will be lost when the window is closed. IndexedDB storage in private windows is temporary.

## Learn More

For technical details on the local-first architecture, see [Local-First Architecture](/docs/privacy/local-first). For the complete data storage schema, see [Data Model](/docs/privacy/data-model).
