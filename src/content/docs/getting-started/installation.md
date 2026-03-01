---
title: "Installation"
description: "Get NeoCash running locally on your machine in under 5 minutes."
personas: ["general-user", "developer"]
section: "Getting Started"
order: 1
---

## Overview

NeoCash runs entirely on your machine. There is no cloud service to sign up for, no data leaving your device, and no account to create. This guide walks you through cloning the repository, installing dependencies, and launching the app locally.

The entire process takes under five minutes on a typical development machine.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js 18 or later** -- NeoCash uses modern JavaScript features that require Node.js 18 as a minimum. You can check your version by running `node --version` in your terminal.
- **npm** -- Comes bundled with Node.js. Verify it is available with `npm --version`.
- **Git** -- Needed to clone the repository. Any recent version will work.

If you need to install or update Node.js, visit [nodejs.org](https://nodejs.org) and download the LTS release. Package managers like `nvm`, `fnm`, or Homebrew also work well.

### Optional but Recommended

- A modern browser such as Chrome, Firefox, or Safari for the best experience.
- A terminal you are comfortable with (the built-in macOS Terminal, iTerm2, Windows Terminal, or VS Code's integrated terminal all work).

## Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/neocash/neocash.git
cd neocash
```

This creates a local copy of the NeoCash source code on your machine.

## Step 2: Install Dependencies

From inside the project directory, install all required packages:

```bash
npm install
```

This pulls down the dependencies NeoCash needs, including the AI SDK, the local database layer, and the UI framework. The install typically completes in under a minute.

### Tip: Lock File

The repository includes a `package-lock.json` to ensure reproducible builds. Avoid deleting it before running `npm install` -- it guarantees you get the exact dependency versions that have been tested.

## Step 3: Configure Your Environment

NeoCash uses the Anthropic API to power its AI conversations, goal analysis, and agent workflows. You need to provide your own API key.

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Then open `.env` in your editor and set your key:

```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

You can obtain an API key from [console.anthropic.com](https://console.anthropic.com). If you do not have an account, you will need to create one and add credits.

### Tip: Keep Your Key Private

Your `.env` file is already listed in `.gitignore`, so it will never be committed to version control. Never share your API key or paste it into a public location.

## Step 4: Start the Development Server

Launch NeoCash with:

```bash
npm run dev
```

You should see output indicating the server is running:

```
  Local:   http://localhost:3000/
```

Open your browser and navigate to **http://localhost:3000**. The NeoCash interface will load and you are ready to start your first conversation.

## Verifying the Installation

Once the app loads in your browser, confirm the following:

1. The chat interface appears with a greeting screen showing financial goal categories.
2. The sidebar is visible on the left with navigation for conversations, goals, memory, and documents.
3. The model selector dropdown is accessible at the top of the chat area.

If all three check out, your installation is complete.

## Privacy by Design

Everything you do in NeoCash stays on your machine:

- **All data is stored in IndexedDB** within your browser. Nothing is sent to a remote database.
- **AI requests go directly to the Anthropic API** using your personal key. NeoCash does not route traffic through any intermediary server.
- **No analytics, no telemetry, no tracking.** The app makes zero network requests beyond the AI API calls you initiate.

This architecture means you are in full control of your financial data at all times.

## Troubleshooting

### Port 3000 is already in use

If another application is using port 3000, you can specify a different port:

```bash
npm run dev -- --port 3001
```

### Node.js version too old

If you see syntax errors or unexpected token messages during install or startup, verify your Node.js version is 18 or higher. Use `nvm install 18` or download the latest LTS from nodejs.org.

### API key not working

Double-check that your `.env` file is in the project root (not inside `src/` or another subdirectory) and that the key starts with `sk-ant-`. Restart the dev server after making changes to environment variables.

## Next Steps

With NeoCash running, head to [First Conversation](/docs/getting-started/first-conversation) to learn how to start your first AI-powered financial chat.
