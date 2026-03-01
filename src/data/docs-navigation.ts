export interface NavItem {
  label: string;
  slug: string;
}

export interface NavSection {
  label: string;
  slug: string;
  items: NavItem[];
}

export const docsNav: NavSection[] = [
  {
    label: 'Getting Started',
    slug: 'getting-started',
    items: [
      { label: 'Installation', slug: 'getting-started/installation' },
      { label: 'First Conversation', slug: 'getting-started/first-conversation' },
      { label: 'Interface Tour', slug: 'getting-started/interface-tour' },
    ],
  },
  {
    label: 'Chat',
    slug: 'chat',
    items: [
      { label: 'Overview', slug: 'chat/index' },
      { label: 'Conversations', slug: 'chat/conversations' },
      { label: 'Streaming & Models', slug: 'chat/streaming' },
      { label: 'File Uploads', slug: 'chat/file-uploads' },
      { label: 'Extended Thinking', slug: 'chat/extended-thinking' },
      { label: 'Tool Calls', slug: 'chat/tool-calls' },
    ],
  },
  {
    label: 'Goals',
    slug: 'goals',
    items: [
      { label: 'Overview', slug: 'goals/index' },
      { label: 'Categories', slug: 'goals/categories' },
      { label: 'Preset Prompts', slug: 'goals/preset-prompts' },
      { label: 'Custom Goals', slug: 'goals/custom-goals' },
      { label: 'Auto-Categorization', slug: 'goals/auto-categorization' },
    ],
  },
  {
    label: 'Dashboard',
    slug: 'dashboard',
    items: [
      { label: 'Overview', slug: 'dashboard/index' },
      { label: 'Metrics', slug: 'dashboard/metrics' },
      { label: 'Action Items', slug: 'dashboard/action-items' },
      { label: 'Schema Editor', slug: 'dashboard/schema-editor' },
    ],
  },
  {
    label: 'Signals',
    slug: 'signals',
    items: [
      { label: 'Overview', slug: 'signals/index' },
      { label: 'Detection', slug: 'signals/detection' },
      { label: 'Signal Panel', slug: 'signals/panel' },
    ],
  },
  {
    label: 'Memory',
    slug: 'memory',
    items: [
      { label: 'Overview', slug: 'memory/index' },
      { label: 'Facts & Decisions', slug: 'memory/facts-decisions' },
      { label: 'Categories', slug: 'memory/categories' },
      { label: 'Extraction & Injection', slug: 'memory/extraction-injection' },
    ],
  },
  {
    label: 'Documents',
    slug: 'documents',
    items: [
      { label: 'Overview', slug: 'documents/index' },
      { label: 'Upload Formats', slug: 'documents/upload-formats' },
      { label: 'Metadata', slug: 'documents/metadata' },
    ],
  },
  {
    label: 'Agents',
    slug: 'agents',
    items: [
      { label: 'Overview', slug: 'agents/index' },
      { label: 'Specialists', slug: 'agents/specialists' },
      { label: 'Routing', slug: 'agents/routing' },
      { label: 'Background Tasks', slug: 'agents/background-tasks' },
    ],
  },
  {
    label: 'Privacy',
    slug: 'privacy',
    items: [
      { label: 'Overview', slug: 'privacy/index' },
      { label: 'Local-First', slug: 'privacy/local-first' },
      { label: 'Data Model', slug: 'privacy/data-model' },
    ],
  },
  {
    label: 'Developer',
    slug: 'developer',
    items: [
      { label: 'Overview', slug: 'developer/index' },
      { label: 'Architecture', slug: 'developer/architecture' },
      { label: 'Hooks', slug: 'developer/hooks' },
      { label: 'Tools', slug: 'developer/tools' },
      { label: 'API Routes', slug: 'developer/api-routes' },
      { label: 'Types', slug: 'developer/types' },
      { label: 'System Prompts', slug: 'developer/system-prompts' },
      { label: 'Message Windowing', slug: 'developer/message-windowing' },
    ],
  },
];

/** Flat ordered list of all doc slugs for prev/next navigation */
export function getFlatSlugs(): string[] {
  return docsNav.flatMap((section) => section.items.map((item) => item.slug));
}

/** Get prev/next pages for a given slug */
export function getPrevNext(slug: string): { prev: NavItem | null; next: NavItem | null } {
  const flat = docsNav.flatMap((section) => section.items);
  const idx = flat.findIndex((item) => item.slug === slug);
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}

/** Find which section a slug belongs to */
export function getSectionForSlug(slug: string): NavSection | undefined {
  return docsNav.find((section) => section.items.some((item) => item.slug === slug));
}
