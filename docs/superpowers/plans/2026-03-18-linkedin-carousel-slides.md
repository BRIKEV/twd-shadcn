# LinkedIn Carousel Slides — Accordion PoC Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a 6-slide LinkedIn carousel in Pencil showcasing how TWD tests the shadcn/ui Accordion component, using a dark dev aesthetic at 1080x1350px portrait.

**Architecture:** All slides designed in a single `.pen` file using Pencil MCP tools. Each slide is a top-level frame at 1080x1350px. Slides are built sequentially using `batch_design` operations, then exported as a multi-page PDF.

**Tech Stack:** Pencil MCP tools (`open_document`, `batch_design`, `get_screenshot`, `export_nodes`)

**Spec:** `docs/superpowers/specs/2026-03-18-linkedin-carousel-slides-design.md`

**Style guide:** `mobile-03-terminalminimal_light` (adapted: brand teal #228387 replaces cyan #22D3EE)

---

## Design Tokens

These tokens are referenced throughout the tasks. Use them for every `batch_design` call.

| Token | Value | Usage |
|-------|-------|-------|
| `BG` | `#0f172a` | Slide background fill |
| `CARD_BG` | `#1e293b` | Code blocks, wireframe panels |
| `TEXT_PRIMARY` | `#f8fafc` | Headlines, main text |
| `TEXT_SECONDARY` | `#94a3b8` | Body text, descriptions |
| `TEXT_MUTED` | `#64748b` | Footers, captions |
| `BRAND` | `#228387` | TWD branding, accents, borders, API methods |
| `SUCCESS` | `#22c55e` | Check marks, passing states |
| `ERROR` | `#ef4444` | X marks, problem indicators |
| `KEYWORD` | `#c084fc` | Code keywords (await, const) |
| `STRING` | `#22c55e` | Code string literals |

**Typography:**
- Headlines: Inter, bold (700), fontSize 80–120
- Body: Inter, semibold (600), fontSize 36–48
- Code: JetBrains Mono, medium (500), fontSize 28–32
- Labels: Inter, semibold (600), fontSize 28, letterSpacing 2, uppercase
- Footers: Inter, normal (400), fontSize 28

**Slide frame:** 1080x1350px, fill `#0f172a`, padding 80px from edges

---

## Task 1: Create .pen File and Slide 1 (Hook)

**Files:**
- Create: `designs/linkedin-accordion-carousel.pen` (via Pencil MCP)

**Pencil guidelines notes:**
- Slides guidelines say minimum fontSize 28 — all text must respect this
- Use `get_guidelines("slides")` style guide name `mobile-03-terminalminimal_light` for reference
- Each slide is a top-level frame on the canvas, positioned horizontally with 100px gaps

- [ ] **Step 1: Open a new .pen document**

Use `mcp__pencil__open_document` with `filePathOrNew: "new"` to create a blank document.

- [ ] **Step 2: Get editor state with schema**

Use `mcp__pencil__get_editor_state` with `include_schema: true` to load the .pen schema. Note the document root ID for inserting frames.

- [ ] **Step 3: Create Slide 1 frame with Hook content**

Use `mcp__pencil__batch_design` to create the first slide. This slide has:
- A top-level frame (1080x1350, fill #0f172a, name "Slide 1 - Hook")
- Brand tag: "TWD + shadcn/ui" — Inter semibold 28px, fill #228387, letterSpacing 2, uppercase, centered
- Headline: "Testing shadcn\nComponents?" — Inter bold 96px, fill #f8fafc, textAlign center
- Accordion wireframe: a card-like frame (fill #1e293b, cornerRadius 12, borderLeft 3px #228387) containing:
  - Row 1: "▶ Product Information" with "▼" arrow — Inter medium 32px, fill #94a3b8
  - Row 2: "Our flagship product combines..." — Inter 28px, fill #64748b (indented, showing expanded content)
  - Row 3: "▶ Shipping Details" with "▸" — Inter medium 32px, fill #94a3b8
  - Row 4: "▶ Return Policy" with "▸" — Inter medium 32px, fill #94a3b8
- Footer: "Swipe to learn how →" — Inter 28px, fill #64748b, centered

Split this into multiple `batch_design` calls if needed (max 25 ops each). Build the outer frame first, then populate content.

- [ ] **Step 4: Screenshot and verify Slide 1**

Use `mcp__pencil__get_screenshot` on the slide 1 frame. Verify:
- Text is readable (no text smaller than 28px)
- Brand teal #228387 is visible on tag and accordion border
- Accordion wireframe looks like an accordion (expanded first item, collapsed others)
- Content is centered with generous whitespace
- Fix any issues found

---

## Task 2: Slide 2 (The Problem)

- [ ] **Step 1: Find empty space for Slide 2**

Use `mcp__pencil__find_empty_space_on_canvas` to position Slide 2 to the right of Slide 1 with 100px padding.

- [ ] **Step 2: Create Slide 2 frame with Problem content**

Use `mcp__pencil__batch_design`:
- Top-level frame (1080x1350, fill #0f172a, name "Slide 2 - Problem")
- Headline: "The problem with\nUI testing..." — Inter bold 80px, fill #f8fafc, left-aligned
- Four pain point rows, each with:
  - Red X mark: "✗" — Inter bold 48px, fill #ef4444
  - Pain text — Inter semibold 36px, fill #94a3b8
  - Pain points:
    1. "Tests break on every refactor"
    2. "No real browser interaction"
    3. "Can't see what you're testing"
    4. "Slow feedback loops"
- Vertical gap between rows: 32px

- [ ] **Step 3: Screenshot and verify Slide 2**

Verify red X marks are visible, text is readable, layout has proper spacing.

---

## Task 3: Slide 3 (Meet TWD)

- [ ] **Step 1: Find empty space for Slide 3**

Position to the right of Slide 2.

- [ ] **Step 2: Create Slide 3 frame**

Use `mcp__pencil__batch_design`:
- Top-level frame (1080x1350, fill #0f172a, name "Slide 3 - Meet TWD")
- Label: "INTRODUCING" — Inter semibold 28px, fill #228387, letterSpacing 2
- Title: "TWD" — Inter bold 120px, fill #f8fafc
- Subtitle: "Test While Developing" — Inter medium 40px, fill #94a3b8
- Split wireframe (two side-by-side panels):
  - Left panel (fill #1e293b, cornerRadius 12):
    - Label: "Your App" — Inter semibold 28px, fill #228387
    - Content: "[Accordion Component]" — Inter 28px, fill #64748b
  - Right panel (fill #1e293b, cornerRadius 12, stroke #228387 2px):
    - Label: "TWD Sidebar ✓" — Inter semibold 28px, fill #22c55e
    - Content: "Tests run here\nin real browser" — Inter 28px, fill #64748b
- Footer: "Tests run next to your app as you develop" — Inter 28px, fill #64748b, centered

- [ ] **Step 3: Screenshot and verify Slide 3**

Verify split wireframe reads clearly, brand teal on border and labels, text hierarchy works.

---

## Task 4: Slide 4 (Test Code)

- [ ] **Step 1: Find empty space for Slide 4**

Position to the right of Slide 3.

- [ ] **Step 2: Create Slide 4 frame**

Use `mcp__pencil__batch_design`:
- Top-level frame (1080x1350, fill #0f172a, name "Slide 4 - Test Code")
- Headline: "The Test Code" — Inter bold 80px, fill #f8fafc
- Code block frame (fill #1e293b, cornerRadius 12, padding 32):
  - Each line of code is a separate text node using JetBrains Mono 28px
  - Color per token type:
    - Keywords (`await`, `const`): fill #c084fc
    - TWD API methods (`.visit`, `.findByRole`, `.should`, `.click`): fill #228387
    - Strings (`'/accordion'`, `'button'`, `'Product Info'`, etc.): fill #22c55e
    - Default text: fill #94a3b8
  - Code content (abbreviated for readability):
    ```
    await twd.visit('/accordion');

    const btn = await screenDom
      .findByRole('button',
      { name: 'Product Info' });

    twd.should(btn,
      'have.attr',
      'aria-expanded', 'true');

    await userEvent.click(btn);
    ```
  - **Implementation note:** Since Pencil text nodes can have mixed styles using rich text or separate text nodes per line, use one text node per logical line. Position them vertically within the code block frame with ~8px gaps.
- Footer: "Real browser queries · Real user events · Real assertions" — Inter 28px, fill #64748b, centered

- [ ] **Step 3: Screenshot and verify Slide 4**

Verify code is readable, syntax colors are distinct, code block has proper contrast against slide bg.

---

## Task 5: Slide 5 (What It Tests)

- [ ] **Step 1: Find empty space for Slide 5**

Position to the right of Slide 4.

- [ ] **Step 2: Create Slide 5 frame**

Use `mcp__pencil__batch_design`:
- Top-level frame (1080x1350, fill #0f172a, name "Slide 5 - What It Tests")
- Headline: "What this test verifies" — Inter bold 80px, fill #f8fafc
- Four verification rows, each with:
  - Green check: "✓" — Inter bold 48px, fill #22c55e
  - Verification text — Inter semibold 36px, fill #f8fafc
  - Verifications:
    1. "Accordion renders correctly"
    2. "First item expanded by default"
    3. "Click expands another item"
    4. "Only one item open at a time"
- Vertical gap between rows: 32px
- Footer: "All verified in the real browser — instant feedback as you code" — Inter 28px, fill #64748b, centered

- [ ] **Step 3: Screenshot and verify Slide 5**

Verify green checks mirror slide 2's red X layout, text is readable.

---

## Task 6: Slide 6 (CTA) and Export

- [ ] **Step 1: Find empty space for Slide 6**

Position to the right of Slide 5.

- [ ] **Step 2: Create Slide 6 frame**

Use `mcp__pencil__batch_design`:
- Top-level frame (1080x1350, fill #0f172a, name "Slide 6 - CTA")
- Headline: "Try TWD Today" — Inter bold 96px, fill #f8fafc, centered
- Install command block (fill #1e293b, cornerRadius 12, padding 24, centered):
  - "$ npm install twd-js" — JetBrains Mono semibold 32px, "$" in fill #22c55e, rest in fill #f8fafc
- Links section (centered, vertical stack, gap 24):
  - "Full examples:" — Inter 32px, fill #94a3b8
  - "github.com/BRIKEV/twd-shadcn" — Inter semibold 32px, fill #228387
  - "Docs:" — Inter 32px, fill #94a3b8
  - "twd.dev" — Inter semibold 32px, fill #228387
- Footer: "Like & share if this was helpful" — Inter 28px, fill #64748b, centered

- [ ] **Step 3: Screenshot and verify Slide 6**

Verify install command is prominent, links are readable in brand teal, clean closing feel.

- [ ] **Step 4: Save the .pen file**

Save the document to `designs/linkedin-accordion-carousel.pen` in the project directory.

- [ ] **Step 5: Export all 6 slides as PDF**

Use `mcp__pencil__export_nodes` with:
- `nodeIds`: array of all 6 slide frame IDs
- `format`: "pdf"
- `outputDir`: `designs/exports/`
- This produces a single multi-page PDF ready for LinkedIn upload

- [ ] **Step 6: Screenshot final review of all slides**

Take screenshots of each slide and do a final visual pass:
- Consistent spacing and alignment across all slides
- Brand color #228387 used consistently
- No text below 28px
- Dark background fills are uniform
- Code syntax colors are distinct and readable

- [ ] **Step 7: Commit**

```bash
git add designs/
git commit -m "feat: add LinkedIn carousel slides for Accordion component"
```

---

## Task 7: Add .superpowers to .gitignore

- [ ] **Step 1: Check if .gitignore exists and update**

Add `.superpowers/` to `.gitignore` if not already present (brainstorm mockups should not be committed).

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: add .superpowers to gitignore"
```
