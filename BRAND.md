# NeoCash Brand Asset Generation Guide

> **Purpose**: This document encodes the complete NeoCash brand system so any AI tool or human designer can generate brand-consistent assets. Read the full identity and visual system first, then use the interactive asset menu to generate what you need.

---

## 1. Brand Identity & Voice

### Mission

Privacy-first AI wealth management that runs entirely on-device. No servers, no accounts, no compromises.

### Tagline

**"Your Money. Your Data. Your Device."**

### Subtitle

"Personal wealth management, without the institution."

### Brand Personality

- **Sophisticated yet accessible** — editorial gravitas without pretension
- **Warm yet secure** — copper and cream, not cold steel
- **Technical yet human** — explains complex finance in plain language
- **Confident yet reassuring** — declarative honesty, not hype

### Voice Pillars

| Pillar | Description | Example |
|--------|-------------|---------|
| Declarative honesty | State facts boldly, no hedging | "Zero servers. Zero accounts. Zero compromises." |
| Conversational | Talk like a knowledgeable friend, not a bank | "It remembers what matters." |
| Editorial gravitas | Newsreader serif headlines convey authority | "The fintech trade-off" |
| Reassuring confidence | Calm certainty about privacy claims | "Your financial data never leaves your browser. Not to our servers. Not to anyone's servers. Not ever." |

### Messaging Pillars

1. **Privacy as default** — not a feature, not an add-on. The architecture.
2. **Simplicity** — "Three steps. Zero complexity."
3. **Completeness** — "Eight goals. One financial picture."
4. **Transparency** — open source, inspectable, verifiable
5. **Freedom** — "No sign-up. No accounts. Just open and start."

### Copy Patterns

- **Em-dash emphasis**: "AI-powered wealth management that runs entirely on your device — not even once."
- **Zero/No/Your repetition**: "No cloud. No accounts. No data leaves your device."
- **Contrasting pairs**: powerful insights *or* privacy → NeoCash breaks this trade-off
- **Humanized AI**: "Five experts, one conversation" — agents as specialists, not robots
- **Declarative headlines**: "Upload. Analyze. Understand." / "Goals that talk to each other."

---

## 2. Design System — "Warm Vault"

### Design Philosophy

The **"Warm Vault"** metaphor: warmth of copper and cream communicates trust, approachability, and human care. The vault (dark charcoal, privacy sections) communicates security, protection, and technical rigor. Together they say: *your finances are safe here, and it feels good.*

### Color Palette

#### Primary Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Warm Cream | `#faf9f5` | `--color-bg` | Page background, light text on dark |
| Alt Cream | `#f0efe9` | `--color-bg-alt` | Alternating sections, trust bar, footer |
| Charcoal | `#2a2622` | `--color-bg-dark` | Dark sections (Privacy), terminal blocks |
| Copper | `#c4704b` | `--color-accent` | CTAs, icons, accents, numbered circles |
| Copper Hover | `#b3603d` | `--color-accent-hover` | Button hover states |

#### Text Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Body Text | `#2a2622` | `--color-text` | Primary body and headline text |
| Muted Text | `#6b6b67` | `--color-text-muted` | Secondary text, descriptions, nav links |
| Light Text | `#faf9f5` | `--color-text-light` | Text on dark backgrounds |

#### Utility Colors

| Name | Value | Usage |
|------|-------|-------|
| Border | `#e5e3dc` | Card borders, dividers, BrowserMockup frame |
| Accent/10 | `rgba(196, 112, 75, 0.10)` | Icon backgrounds, subtle copper tints |
| Accent/30 | `rgba(196, 112, 75, 0.30)` | Gradient midpoints, decorative lines |
| White/5 | `rgba(255, 255, 255, 0.05)` | Glass card backgrounds (dark sections) |
| White/10 | `rgba(255, 255, 255, 0.10)` | Glass card borders (dark sections) |

#### Forbidden Colors

- Pure black (`#000000`) — always use Charcoal (`#2a2622`)
- Cold blues, teals, or neon greens
- Saturated reds (except traffic light dots in UI chrome)
- Pure white (`#ffffff`) for backgrounds — always use Warm Cream (`#faf9f5`)

### Typography

| Role | Font | Weights | CSS Variable | Usage |
|------|------|---------|-------------|-------|
| Display | Newsreader | 400, 400 italic, 700 | `--font-display` | Headlines, wordmark, section titles, numbered circles |
| Body | Inter | 400, 500, 600 | `--font-body` | Paragraphs, descriptions, nav links, buttons |
| Mono | JetBrains Mono | 400 | `--font-mono` | Eyebrow labels, code blocks, tech specs, terminal |

#### Type Scale (from components)

| Element | Font | Size | Weight | Additional |
|---------|------|------|--------|------------|
| Hero headline | Newsreader | 56px (desktop), 36px (mobile) | 400 (normal) | text-center |
| Section headline | Newsreader | 44-48px (desktop), 30px (mobile) | 400 | — |
| Feature headline | Newsreader | 40px (desktop), 30px (mobile) | 400 | — |
| Eyebrow label | JetBrains Mono | 12px (xs) | 400 | uppercase, tracking-[0.2em], copper color |
| Body text | Inter | 16px (base) | 400 | leading-relaxed, muted color |
| Subtitle | Inter | 18-20px (lg-xl) | 400 | muted color |
| Nav links | Inter | 14px (sm) | 400 | muted color |
| Button text | Inter | 14-18px | 500 (medium) | white on copper |
| Wordmark | Newsreader | 24px (2xl) | 700 (bold) | tracking-tight |

### Paper-Grain Texture

A CSS-only noise overlay applied to the entire page via `body::before`:

- **Method**: SVG `feTurbulence` (fractalNoise, baseFrequency 0.9, 4 octaves)
- **Opacity**: 4% (`opacity: 0.04`)
- **Tile size**: 256×256px, repeated
- **Layer**: Fixed position, full viewport, `pointer-events: none`, `z-index: 9999`
- **Effect**: Subtle paper-grain texture that adds warmth and tactile quality

### Shadows (Copper-Tinted)

| Name | Value | Usage |
|------|-------|-------|
| Warm SM | `0 1px 3px rgba(42,38,34,0.08), 0 1px 2px rgba(42,38,34,0.06)` | Cards at rest, scrolled nav |
| Warm | `0 4px 12px rgba(42,38,34,0.1), 0 2px 4px rgba(42,38,34,0.06)` | Card hover, CTA buttons |
| Warm LG | `0 12px 32px rgba(42,38,34,0.12), 0 4px 8px rgba(42,38,34,0.08)` | Hero mockup, terminal blocks |
| Mockup | `0 24px 48px rgba(196,112,75,0.08)` | BrowserMockup component |

### Shapes & Corners

| Element | Border Radius | Notes |
|---------|--------------|-------|
| Cards | `rounded-2xl` (16px) | Agent cards, feature blocks |
| BrowserMockup | `rounded-2xl` (16px) | Outer frame |
| Smaller elements | `rounded-xl` (12px) | Glass cards, icon containers, terminal |
| Buttons / Pills | `rounded-full` | CTAs, nav pills, labels |
| Favicon | `rx="6"` | Logo mark background |

### Glassmorphism (Dark Sections Only)

Used in the Privacy section on charcoal backgrounds:

```
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(4px);         /* backdrop-blur-sm */
border-radius: 12px;                /* rounded-xl */
border: 1px solid rgba(255, 255, 255, 0.10);
```

### Nav Frosted Glass (Light)

On scroll, the sticky nav gains a frosted glass effect:

```
background-color: rgba(250, 249, 245, 0.8);
backdrop-filter: blur(16px);
box-shadow: var(--shadow-warm-sm);
```

---

## 3. Logo System

### Logo Mark

A copper **"N" lettermark** on a charcoal rounded rectangle.

**SVG specification** (favicon.svg):
- **Background**: `#2a2622` charcoal, 32×32 viewBox, `rx="6"` rounded corners
- **Letterform**: `#c4704b` copper, geometric "N" constructed as a single path
- **Path**: `M8 24V8h2.5l9.5 12V8H22v16h-2.5L10 12v12H8z`
- **Style**: Geometric, constructed from straight strokes with diagonal connector

### Wordmark

"NeoCash" rendered in text:
- **Font**: Newsreader, bold (700)
- **Size**: 24px (nav), 18px (footer)
- **Tracking**: tight (`tracking-tight`)
- **Color**: Charcoal (`#2a2622`) on light backgrounds

### Color Variations

| Context | Mark Background | Mark Letter | Wordmark Color |
|---------|----------------|-------------|----------------|
| Light backgrounds | Charcoal `#2a2622` | Copper `#c4704b` | Charcoal `#2a2622` |
| Dark backgrounds | Copper `#c4704b` | Cream `#faf9f5` | Cream `#faf9f5` |
| Monochrome light | Charcoal `#2a2622` | Cream `#faf9f5` | Charcoal `#2a2622` |
| Monochrome dark | Cream `#faf9f5` | Charcoal `#2a2622` | Cream `#faf9f5` |

### Clear Space & Sizing

- **Minimum clear space**: Equal to the height of the "N" crossbar on all sides
- **Minimum size**: 16×16px (favicon), 32×32px (general use)
- **Preferred sizes**: 32, 64, 128, 256, 512, 1024px

### Logo Don'ts

- Don't rotate or skew the mark
- Don't change the copper/charcoal color relationship
- Don't add drop shadows, glows, or gradients to the mark itself
- Don't outline or stroke the letterform
- Don't place on busy or photographic backgrounds without a solid backing
- Don't use pure black or pure white — always use the brand palette

---

## 4. Visual Language

### Iconography

- **Style**: Stroke-based outline icons
- **Stroke weight**: 1.5px
- **Color**: Copper (`#c4704b`) as primary icon color
- **Size**: 24×24 default, 32×32 for feature sections
- **Line caps**: Round (`stroke-linecap="round"`)
- **Line joins**: Round (`stroke-linejoin="round"`)
- **Fill**: `none` (stroke-only, no filled icons)
- **Source**: Inline SVG (no icon library dependency)

### Photography & Imagery Direction

- **No stock photos** — the brand is built on real app screenshots and diagrams
- **App screenshots** are framed in the BrowserMockup component (macOS-style title bar with traffic light dots: red `#ff5f56`, yellow `#ffbd2e`, green `#27c93f`)
- **Architecture diagrams** use the brand color palette with pill-shaped labels
- **Illustrations** should be flat, geometric, using brand colors only

### Decorative Elements

| Element | Specification | Usage |
|---------|--------------|-------|
| Copper radial glow | `radial-gradient(ellipse at center, rgba(196,112,75,0.06), transparent)` | Behind hero mockup, feature screenshots |
| Gradient line | `bg-gradient-to-r from-transparent via-accent/30 to-transparent`, 1px height | Section dividers (top of Privacy) |
| Decorative rule | `border-accent/10` | Before CTA section |
| Numbered circles | 48×48px, `rounded-full`, copper bg, white Newsreader text | How It Works steps |
| Arrow connectors | Copper/40 opacity, stroke-based SVG arrows | Between How It Works steps |

### Dark Mode Treatment

The Privacy section demonstrates the dark treatment:
- **Background**: Warm charcoal (`#2a2622`), never pure black
- **Text**: Cream (`#faf9f5`) for headlines, Cream/70 for body text
- **Cards**: Glassmorphic (white/5 + blur + white/10 border)
- **Icons**: Copper accent persists unchanged
- **Eyebrow labels**: Copper, uppercase mono — same as light sections
- **Decorative line**: Gradient from transparent → copper/30 → transparent at section top

### Composition Principles

- **Max content width**: 1280px with 24px (px-6) horizontal padding
- **Generous whitespace**: `py-16 md:py-24` for sections, `py-20 md:py-32` for emphasis sections
- **Editorial layout**: Two-column grid with alternating text/image placement
- **Staggered reveals**: Cards animate in with 100ms delay increments
- **Scroll animations**: Elements fade in + translate up 20px on viewport intersection
- **Alternating backgrounds**: Cream → Alt Cream → Cream → Alt Cream pattern

---

## 5. Asset Generation Menu

Use this menu to select what you'd like to generate. Each asset type includes recommended dimensions and a description. After choosing, proceed to Section 6 for generation instructions.

### Core Assets

| # | Asset | Dimensions | Description |
|---|-------|-----------|-------------|
| C1 | Logo mark | 512×512, 1024×1024 | Copper "N" on charcoal rounded rect. SVG and PNG. |
| C2 | Logo wordmark | 2400×600 | Full "NeoCash" wordmark in Newsreader bold. Horizontal lockup. |
| C3 | Logo lockup | 2400×600 | Mark + wordmark combined, horizontal or stacked. |
| C4 | Favicon | 32×32, 16×16 | SVG primary, PNG fallbacks. Current design in use. |
| C5 | OG image | 1200×630 | Social preview card for link sharing. Warm cream bg, wordmark, tagline. |
| C6 | App icon | 512×512 | PWA / app store icon. Mark with rounded corners per platform spec. |
| C7 | Touch icon | 180×180 | Apple touch icon. Mark on cream background. |

### Marketing Assets

| # | Asset | Dimensions | Description |
|---|-------|-----------|-------------|
| M1 | Twitter/X post | 1200×675 | Feature announcements, privacy quotes, launch updates. |
| M2 | LinkedIn post | 1200×627 | Professional updates, technical deep-dives, milestones. |
| M3 | Instagram square | 1080×1080 | Visual content, feature showcases, brand moments. |
| M4 | Instagram story | 1080×1920 | Vertical format for stories and reels covers. |
| M5 | Blog post header | 1200×630 | Article featured images. Editorial style. |
| M6 | Email banner | 600×200 | Newsletter header with wordmark and tagline. |
| M7 | Presentation slide | 1920×1080 | Pitch deck backgrounds. Light and dark variants. |
| M8 | Ad creative (horizontal) | 1200×628 | Display ad template, horizontal. |
| M9 | Ad creative (square) | 1080×1080 | Display ad template, square. |
| M10 | Ad creative (vertical) | 1080×1920 | Display ad template, vertical/story format. |

### Documentation Assets

| # | Asset | Dimensions | Description |
|---|-------|-----------|-------------|
| D1 | Architecture diagram | Flexible | System design illustrations using brand pill labels. |
| D2 | Feature illustration | 800×600 | Concept art for feature explanations. |
| D3 | Icon set | 24×24, 32×32, 48×48 | Custom stroke icons matching brand style. |
| D4 | Tutorial screenshot | 1200×800 | Annotated UI screenshots in BrowserMockup frame. |
| D5 | Comparison graphic | 1200×630 | Side-by-side or before/after comparisons. |
| D6 | Flow diagram | Flexible | Step-by-step process flows with numbered circles. |
| D7 | Badge / shield | Variable | "Built with NeoCash", "Privacy-first" trust badges. |

---

## 6. Generation Instructions

### Universal Style Keywords

When prompting any image generation tool, include these keywords for brand consistency:

```
warm cream background, copper accent color (#c4704b), charcoal text (#2a2622),
editorial design, sophisticated minimal, paper texture, serif headlines,
warm earth tones, no cold blues, no pure black, generous whitespace
```

### Per-Asset Prompt Templates

#### C5 — OG Image (1200×630)

```
Create a social preview image at 1200x630 pixels.
Background: warm cream (#faf9f5) with subtle paper-grain texture.
Center the "NeoCash" wordmark in Newsreader bold, charcoal (#2a2622).
Below the wordmark: tagline "Your Money. Your Data. Your Device." in Inter,
muted text (#6b6b67).
Optional: copper (#c4704b) horizontal rule between wordmark and tagline.
Bottom edge: thin copper gradient line fading from transparent edges.
Style: editorial, minimal, sophisticated. No illustrations or photos.
```

#### M1 — Twitter/X Post (1200×675)

```
Create a social media graphic at 1200x675 pixels.
Background: [cream #faf9f5 | charcoal #2a2622] (choose based on content).
Top-left: small "N" logo mark or "NeoCash" wordmark.
Center: [HEADLINE TEXT] in Newsreader, [charcoal | cream] depending on bg.
Below headline: [SUPPORTING TEXT] in Inter, muted color.
Optional: copper accent line or glow as decorative element.
Ample negative space. No stock imagery. No gradients except copper accents.
```

#### M7 — Presentation Slide (1920×1080)

```
Create a presentation slide background at 1920x1080 pixels.

Light variant:
- Background: warm cream (#faf9f5) with paper-grain texture
- Top-right corner: small "N" logo mark at ~48px
- Bottom edge: thin copper gradient line
- Content area: centered, max-width ~1200px

Dark variant:
- Background: charcoal (#2a2622)
- Glass card area: white/5 with subtle border
- Copper accents for highlights and bullet points
- "NeoCash" wordmark in cream at top-left
```

#### D1 — Architecture Diagram

```
Create a system architecture diagram using these visual rules:
- Background: warm cream (#faf9f5)
- Components: pill-shaped labels with rounded-full corners
  - User-controlled: copper border (#c4704b), copper/5 fill, copper text
  - External/risky: light red border, light red fill, muted red text
  - Neutral: #e5e3dc border, cream fill, muted text
- Arrows: 1.5px stroke, copper/50 opacity
- Labels: JetBrains Mono, 12px, uppercase where appropriate
- Flow: top-to-bottom or left-to-right
- Style: flat, geometric, no 3D effects or gradients
```

#### D3 — Icon Set

```
Create a stroke-based icon for [CONCEPT].
Style: outline only, no fill.
Stroke: 1.5px weight.
Line caps: round.
Line joins: round.
Color: single color (copper #c4704b recommended, or currentColor for flexibility).
Canvas: 24x24 viewBox with 2px internal padding.
Style reference: Heroicons outline set, but simpler and warmer.
```

### Tool-Specific Tips

#### For Midjourney / DALL-E / Ideogram

- **Aspect ratios**: Use `--ar 1200:630` for OG images, `--ar 1:1` for squares, `--ar 9:16` for stories
- **Style modifiers**: Add `--style raw` (Midjourney) for less AI interpretation
- **Negative prompts**: `no cold tones, no blue, no purple, no neon, no 3D, no glossy, no stock photo`
- **Color guidance**: Reference "burnt sienna", "warm copper", "cream", "warm charcoal" — tools understand these better than hex codes

#### For SVG / Code Generation

- Use exact hex values from the color palette
- Reference the font stack: Newsreader for display, Inter for body, JetBrains Mono for code
- Apply `rx` for rounded corners: 16px for cards, 12px for smaller elements, 9999px for pills
- Include the paper-grain texture overlay for any full-page mockups

#### For Figma / Canva / Design Tools

- Set up color styles matching the palette exactly
- Import Newsreader, Inter, and JetBrains Mono fonts
- Use the warm shadows with the exact rgba values (charcoal-tinted, not pure gray)
- Apply 4% opacity noise texture overlay as a topmost locked layer

### Color Application Guide

| Context | Background | Text | Accents |
|---------|-----------|------|---------|
| Standard section | Cream `#faf9f5` | Charcoal `#2a2622` | Copper `#c4704b` |
| Alternate section | Alt Cream `#f0efe9` | Charcoal `#2a2622` | Copper `#c4704b` |
| Dark / Privacy section | Charcoal `#2a2622` | Cream `#faf9f5` | Copper `#c4704b` |
| CTA buttons | Copper `#c4704b` fill | White `#ffffff` | Copper Hover `#b3603d` |
| Cards on light bg | White `#ffffff` | Charcoal + Muted | Copper icons |
| Cards on dark bg | White/5 glass | Cream + Cream/60 | Copper icons |
| Terminal blocks | Charcoal `#2a2622` | White/85 for code | Copper `$` prompt |

---

## 7. Do's and Don'ts

### Do

- Use warm cream (`#faf9f5`) as the primary background, never pure white
- Use charcoal (`#2a2622`) for dark sections, never pure black
- Keep copper (`#c4704b`) as the sole accent color — it carries the entire brand
- Use Newsreader for headlines to maintain editorial authority
- Frame app screenshots in the BrowserMockup (macOS traffic light dots)
- Include generous whitespace — the brand breathes
- Apply paper-grain texture on full-page designs
- Use stroke-based icons at 1.5px weight
- Write headlines in declarative, confident voice
- Use "zero/no/your" patterns in privacy messaging

### Don't

- Don't use cold blues, teals, or any hue outside the warm palette
- Don't use generic sans-serif fonts (Helvetica, Arial, system fonts)
- Don't use stock photography — the brand uses real screenshots and diagrams
- Don't use gradients on backgrounds (only on decorative accent lines)
- Don't use heavy drop shadows with blue/gray tones — only warm charcoal-tinted shadows
- Don't use filled icons — always stroke-based outlines
- Don't use 3D effects, embossing, or skeuomorphic elements
- Don't use ALL CAPS for headlines — only for mono eyebrow labels
- Don't use exclamation marks in marketing copy — confidence doesn't shout
- Don't combine copper with other bright accent colors — it stands alone
- Don't add borders heavier than 1px — the brand is light and refined

### Approved Color Combinations

| Combination | Usage |
|-------------|-------|
| Cream bg + Charcoal text + Copper accents | Primary — most sections |
| Alt Cream bg + Charcoal text + Copper accents | Alternating sections |
| Charcoal bg + Cream text + Copper accents | Privacy/dark sections |
| Copper bg + White text | CTA buttons only |
| White bg + Charcoal text + Border #e5e3dc | Cards on light backgrounds |

### Forbidden Combinations

| Combination | Why |
|-------------|-----|
| Copper bg + Charcoal text | Low contrast, hard to read |
| Pure black bg + any text | Off-brand — use Charcoal |
| Pure white bg + any text | Off-brand — use Warm Cream |
| Multiple accent colors | Brand is single-accent (copper only) |
| Copper + Blue/Teal accents | Breaks warm palette, introduces cold tones |

---

## Quick Reference Card

```
Background:     #faf9f5  (Warm Cream)
Alt Background: #f0efe9  (Alt Cream)
Dark Background:#2a2622  (Charcoal)
Accent:         #c4704b  (Copper)
Accent Hover:   #b3603d  (Copper Dark)
Text:           #2a2622  (Charcoal)
Text Muted:     #6b6b67
Text Light:     #faf9f5  (Cream)
Border:         #e5e3dc

Display Font:   Newsreader (400, 400i, 700)
Body Font:      Inter (400, 500, 600)
Mono Font:      JetBrains Mono (400)

Tagline:        "Your Money. Your Data. Your Device."
```
