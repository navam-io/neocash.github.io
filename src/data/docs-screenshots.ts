import type { ImageMetadata } from 'astro';

// Desktop screenshots
import newChat from '../assets/screenshots/desktop/01-new-chat.png';
import activeChat from '../assets/screenshots/desktop/02-active-chat.png';
import chatFileUpload from '../assets/screenshots/desktop/04-chat-file-upload.png';
import goalCreation from '../assets/screenshots/desktop/05-goal-creation.png';
import goalThread from '../assets/screenshots/desktop/06-goal-thread.png';
import goalDashboard from '../assets/screenshots/desktop/07-goal-dashboard.png';
import dashboardSchema from '../assets/screenshots/desktop/08-dashboard-schema.png';
import memoryFacts from '../assets/screenshots/desktop/09-memory-facts.png';
import memoryDecisions from '../assets/screenshots/desktop/10-memory-decisions.png';
import sidebarFull from '../assets/screenshots/desktop/11-sidebar-full.png';
import researchMode from '../assets/screenshots/desktop/14-research-mode.png';
import toolCalls from '../assets/screenshots/desktop/16-tool-calls-expanded.png';
import modelSelector from '../assets/screenshots/desktop/17-model-selector.png';

// Mobile screenshots
import mobileChat from '../assets/screenshots/mobile/12-mobile-chat.png';
import mobileDashboard from '../assets/screenshots/mobile/13-mobile-dashboard.png';

export const docsScreenshots: Record<string, ImageMetadata> = {
  'new-chat': newChat,
  'active-chat': activeChat,
  'file-upload': chatFileUpload,
  'goal-creation': goalCreation,
  'goal-thread': goalThread,
  'goal-dashboard': goalDashboard,
  'dashboard-schema': dashboardSchema,
  'memory-facts': memoryFacts,
  'memory-decisions': memoryDecisions,
  'sidebar-full': sidebarFull,
  'research-mode': researchMode,
  'tool-calls': toolCalls,
  'model-selector': modelSelector,
  'mobile-chat': mobileChat,
  'mobile-dashboard': mobileDashboard,
};
