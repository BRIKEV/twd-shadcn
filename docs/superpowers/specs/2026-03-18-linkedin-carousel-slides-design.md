# LinkedIn Carousel Slides for TWD + shadcn/ui

## Overview

Create LinkedIn carousel slides using Pencil to showcase how TWD tests shadcn/ui components. Each carousel is self-contained for one component, combining educational value (how to test this component) with promotion (try TWD). The proof of concept uses the Accordion component.

## Goals

- **Educate**: Show developers how to test shadcn/ui components with real browser interactions
- **Promote**: Position TWD as the easy, visual way to test UI components
- **Scale**: Design a reusable template that works for all 24 components in the twd-shadcn project

## Format & Style

- **Platform**: LinkedIn carousel (uploaded as PDF)
- **Dimensions**: 1080x1350px portrait
- **Slide count**: 5-7 per carousel
- **Style**: Dark dev aesthetic — dark backgrounds (#0f172a), light text, syntax-colored code
- **Brand color**: #228387 (teal) — used for accents, TWD API highlights, links, borders
- **Scope**: Self-contained per component (no series dependencies)

## Slide Structure — Accordion PoC

### Slide 1: Hook

- Brand tag "TWD + shadcn/ui" in teal
- Bold headline: "Testing shadcn Components?"
- Mini accordion wireframe showing expanded/collapsed states
- Footer: "Swipe to learn how →"

### Slide 2: The Problem

- Headline: "The problem with UI testing..."
- Four pain points with red ✗ marks:
  - Tests break on every refactor
  - No real browser interaction
  - Can't see what you're testing
  - Slow feedback loops

### Slide 3: Meet TWD

- "INTRODUCING" label in teal
- TWD name and "Test While Developing" tagline
- Split wireframe: app panel + TWD sidebar panel (bordered in teal)
- Footer: "Tests run next to your app as you develop"

### Slide 4: The Test Code

- Headline: "The Test Code"
- Syntax-highlighted code block with abbreviated accordion test:
  - `twd.visit('/accordion')` — navigation
  - `screenDom.findByRole('button', ...)` — ARIA queries
  - `twd.should(btn, 'have.attr', 'aria-expanded', 'true')` — assertions
  - `userEvent.click(btn)` — real user events
- TWD API methods highlighted in brand teal (#228387)
- Purple for keywords (`await`, `const`)
- Green for strings
- Footer: "Real browser queries - Real user events - Real assertions"

### Slide 5: What It Tests

- Headline: "What this test verifies"
- Four checkpoints with green ✓ marks (mirrors slide 2's red ✗):
  - Accordion renders correctly
  - First item expanded by default
  - Click expands another item
  - Only one item open at a time
- Footer: "All verified in the real browser — instant feedback as you code"

### Slide 6: CTA

- Bold headline: "Try TWD Today"
- Install command block: `$ npm install twd-js`
- Links in brand teal:
  - Full examples: github.com/BRIKEV/twd-shadcn
  - Docs: twd.dev
- Footer: "Like & share if this was helpful"

## Implementation Approach

**Pencil-native design.** All slides designed directly in a `.pen` file using Pencil's design tools:

1. Create a new `.pen` file with 6 frames at 1080x1350px
2. Design a reusable slide template (dark background, consistent typography, brand teal accents)
3. Build each slide following the structure above
4. Use Pencil's text styling for code blocks (colored text to simulate syntax highlighting)
5. Export as PDF for LinkedIn upload

## Template Reusability

The slide template should be designed so that creating a carousel for a new component requires only:

1. Swapping the component name and wireframe in slide 1
2. Updating the code snippet in slide 4 with the component's test
3. Updating the test verification points in slide 5

Slides 2 (problem), 3 (meet TWD), and 6 (CTA) remain identical across all carousels.

## Color Palette

| Role | Color | Usage |
|------|-------|-------|
| Background | #0f172a | Slide background |
| Card/code bg | #1e293b | Code blocks, wireframe panels |
| Primary text | #f8fafc | Headlines, main text |
| Secondary text | #94a3b8 | Body text, descriptions |
| Muted text | #64748b | Footers, captions |
| Brand accent | #228387 | TWD branding, API methods, links, borders |
| Success | #22c55e | Check marks, passing states |
| Error | #ef4444 | X marks, problem indicators |
| Keywords | #c084fc | Code keywords (await, const) |
| Strings | #22c55e | Code string literals |

## Out of Scope

- API mocking content (not applicable for component-level testing)
- Animated slides or video content
- Multi-component series linking
- Automated generation pipeline (future consideration)
