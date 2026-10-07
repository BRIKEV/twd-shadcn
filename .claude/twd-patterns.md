# TWD Project Patterns

## Project Configuration

- **Framework**: React 19
- **Vite base path**: `/` (dev) / `/twd-shadcn/` (build)
- **Dev server port**: `5173`
- **App URL**: `http://localhost:5173`
- **Dev command**: `npm run dev`
- **Default branch**: `main`
- **Entry point**: `src/main.tsx`
- **Public folder**: `public/`
- **Closing run**: full suite

### Runner Commands

twd-cli drives its own headless browser — only the dev server has to be up (`npm run dev`).

```bash
# Run all tests
npm run test:ci

# Run specific tests by name (matches "suite > test", case-insensitive; repeatable)
npx twd-cli run --test "should render the list"
npx twd-cli run --test "should create" --test "should show the error"

# Only the tests this branch added or changed
npx twd-cli run --changed-since origin/main

# Record a run to video (one clip per matched test, needs ffmpeg)
npx twd-cli run --record --test "should render the list"
```

Every run writes `.twd/report/`: `run.json` (the result), `summary.md` and `index.html`. The folder is replaced on each run.

## Standard Imports

```typescript
import { twd, userEvent, screenDom, expect } from "twd-js";
import { describe, it, beforeEach, afterEach } from "twd-js/runner";
```

## Visit Paths

All `twd.visit()` calls use the dev base path `/`:

```typescript
await twd.visit("/");
await twd.visit("/some-page");
```

## Standard beforeEach / afterEach

```typescript
beforeEach(() => {
  twd.clearRequestMockRules();
  twd.clearComponentMocks();
  Sinon.restore();
});

afterEach(() => {
  twd.clearRequestMockRules();
});
```

## CSS / Component Library

- **Library**: shadcn/ui (Radix UI + Tailwind CSS)
- **Docs**: https://ui.shadcn.com

When writing tests, refer to library docs for correct ARIA roles and component structure. shadcn/ui components are built on Radix UI primitives, so use Radix ARIA roles (e.g., `dialog`, `combobox`, `checkbox`, `switch`, `slider`, `tablist`).

## Portals and Dialogs

Use `screenDomGlobal` instead of `screenDom` for elements rendered in portals (modals, dropdowns, tooltips, popovers, select menus, context menus):

```typescript
import { screenDomGlobal } from "twd-js";
const modal = screenDomGlobal.getByRole("dialog");
```
