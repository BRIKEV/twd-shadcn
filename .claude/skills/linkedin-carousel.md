---
name: linkedin-carousel
description: Generate LinkedIn carousel slides and post for a shadcn/ui component tested with TWD. Creates 6 Pencil slides + exports PDF + writes LinkedIn post text.
user_invocable: true
---

# LinkedIn Carousel Generator for TWD + shadcn/ui

Generate a 6-slide LinkedIn carousel showcasing how TWD tests a specific shadcn/ui component. Produces a PDF carousel and LinkedIn post text.

## Arguments

The component name (e.g., "dialog", "checkbox", "tabs"). If not provided, ask.

## Prerequisites

- The component must have a `.twd.test.ts` file in `src/twd-tests/`
- Pencil MCP must be available
- The existing `.pen` file should be open (or open it) to add slides alongside existing ones — **never create a new document**

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0f172a` | Slide background |
| Card/code bg | `#1e293b` | Code blocks, wireframe panels |
| Primary text | `#f8fafc` | Headlines |
| Secondary text | `#94a3b8` | Body text |
| Muted text | `#64748b` | Footers, captions, code comments |
| Brand accent | `#228387` | TWD branding, API method highlights, links |
| Success | `#22c55e` | Check marks |
| Error | `#ef4444` | X marks |
| Keywords | `#c084fc` | Code keywords (await, const) |
| Strings | `#22c55e` | Code string literals |

## Typography

- Headlines: Inter, bold (700), fontSize 80–120
- Body: Inter, semibold (600), fontSize 36–48
- Code: JetBrains Mono, medium (500), fontSize 24
- Labels: Inter, semibold (600), fontSize 28, letterSpacing 2, uppercase
- Footers: Inter, normal (400), fontSize 28

## Slide Dimensions

1080×1350px portrait (LinkedIn carousel format)

## 6-Slide Structure

### Slide 1: Hook
- Brand tag "TWD + SHADCN/UI" in teal (#228387)
- Bold headline: "Testing shadcn\n{ComponentName}?"
- Component wireframe showing key visual states
- Footer: "Swipe to learn how →"

**Wireframe guidelines:** Show the component in a recognizable state. For components with open/closed states (accordion, select, dialog), show the open state. Use `#1e293b` background with `#228387` left border accent.

### Slide 2: The Problem (SHARED — identical for all components)
- Headline: "The problem with\nUI testing..."
- Four pain points with red ✗ marks:
  1. "Tests break on every refactor"
  2. "No real browser interaction"
  3. "Can't see what you're testing"
  4. "Slow feedback loops"

### Slide 3: Meet TWD (SHARED — identical for all components)
- "INTRODUCING" label in teal
- "TWD" title, "Test While Developing" subtitle
- Split wireframe: app panel + TWD sidebar panel (bordered in teal)
- Update the component name in the left panel: "[{ComponentName} Component]"
- Footer: "Tests run next to your app as you develop"

### Slide 4: The Test Code (COMPONENT-SPECIFIC)
- Headline: "The Test Code"
- Syntax-highlighted code block from the actual `.twd.test.ts` file
- **DO NOT include `twd.visit()` — it doesn't add value**
- **Use the real test code with full parameters** (e.g., `{ name: '...' }` in findByRole)
- Abbreviate only if truly necessary for space, but prefer showing more code
- Color scheme for syntax:
  - Keywords (`await`, `const`): `#c084fc`
  - TWD API methods (`.findByRole`, `.should`, `.click`, `screenDomGlobal`): `#228387`
  - Strings: `#22c55e`
  - Default/punctuation: `#94a3b8`
  - Comments: `#64748b`
- Footer: "Real browser queries · Real user events · Real assertions"

**Code implementation:** Each line is a horizontal frame with separate text nodes per colored token. Use fontSize 24 for code to fit more content.

### Slide 5: What It Tests (COMPONENT-SPECIFIC)
- Headline: "What this test\nverifies"
- 4 verification points with green ✓ marks
- Derive these from what the actual test code checks — be specific to the component
- Footer: "All verified in the real browser — instant feedback as you code"

### Slide 6: CTA (SHARED — identical for all components)
- Headline: "Try TWD Today"
- Install command: `$ npm install twd-js`
- Links in teal: github.com/BRIKEV/twd-shadcn and twd.dev
- Footer: "Like & share if this was helpful"

## Pencil Implementation

1. **Open existing document** — use the .pen file that already has other component slides. Find empty space below or to the right of existing slides.
2. **Name frames** with component prefix: `{ComponentName} - Slide N - {Title}`
3. **Use `placeholder: true`** while building each slide, remove when done
4. **Screenshot each component-specific slide** (1, 4, 5) to verify
5. **Export the 6 slides** as PDF to `designs/exports/{component-name}/carousel.pdf`

## LinkedIn Post Guidelines

Write to `designs/exports/{component-name}/linkedin-post.txt`.

**Structure:**
1. **Opening line** — State something specific and interesting about testing this component. Lead with the insight or challenge, not a question. What makes this component tricky or interesting to test?
2. **Key points** (3-4 lines with → arrows) — Concrete testing steps or behaviors being verified. These should feel like takeaways, not questions.
3. **Call to action** — Invite people to swipe through the carousel to see the code
4. **Links** — Always include:
   - `https://github.com/BRIKEV/twd-shadcn/`
   - `https://twd.dev/`
5. **Hashtags** — `#testing #frontend #react #shadcn #webdev`

**Tone:** Educational, developer-to-developer. State facts and insights, don't ask rhetorical questions. Focus on what's interesting about testing THIS specific component.

**DO NOT use this pattern:**
```
Here's what I check:
- Question?
- Question?
```

**DO use this pattern:**
```
Testing a shadcn/ui {Component} has [interesting challenge/insight].

[Explain why or how]:
→ Concrete point 1
→ Concrete point 2
→ Concrete point 3

Swipe through to see [what they'll learn].
```

## Component-Specific Notes

When building the wireframe for Slide 1, adapt to the component type:
- **Accordion/Collapsible**: Show expanded + collapsed items
- **Select/Dropdown/ComboBox**: Show open dropdown with highlighted option
- **Dialog/AlertDialog/Drawer**: Show the modal overlay
- **Checkbox/Switch/Radio**: Show different states (checked/unchecked)
- **Tabs**: Show active + inactive tabs
- **Table/DataTable**: Show rows with headers
- **Calendar**: Show month grid with selected date
- **Tooltip/Popover**: Show the trigger + floating content

When components use portals (Dialog, Select, Dropdown, Popover, Tooltip, Context Menu), highlight `screenDomGlobal` in the code slide — this is a key teaching point.

## Commit

After generating, stage and commit:
```bash
git add designs/exports/{component-name}/
git commit -m "feat: add LinkedIn carousel slides for {ComponentName} component"
```
