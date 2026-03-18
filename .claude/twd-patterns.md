# TWD Project Patterns

## Project Configuration

- **Framework**: React 19
- **Vite base path**: `/` (dev) / `/twd-shadcn/` (build)
- **Dev server port**: `5173`
- **Entry point**: `src/main.tsx`
- **Public folder**: `public/`

### Relay Commands

```bash
# Run all tests
npx twd-relay run
```

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
