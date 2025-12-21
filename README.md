# TWD + shadcn/ui Testing Guide

A comprehensive interactive guide demonstrating how to test shadcn/ui components using **TWD (Testing While Developing)**.

## 🎯 What is This?

This repository showcases testing patterns for 22+ shadcn/ui components. Each component page displays:
- **Live Component Preview** – Interactive demonstration
- **Component Code** – Reusable implementation example
- **TWD Test Code** – Complete test patterns with recommended selectors

Perfect for developers learning how to test shadcn/ui components effectively.

## 📦 Features

- **16 Fully Documented Components** with TWD tests
- **7 WIP Placeholder Pages** (Breadcrumb, Calendar, Command, Context Menu, Sonner, Data Table)
## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with TWD test sidebar enabled in dev mode.

### Build

```bash
npm run build
```

Optimized production build ready for GitHub Pages or any static host.

## 📋 Component Coverage

### ✅ Fully Implemented (With TWD Tests)

- Accordion
- Alert Dialog
- Button
- Checkbox
- Collapsible
- Dialog
- Drawer
- Dropdown Menu
- Pagination
- Popover
- Radio Group
- Select
- Slider
- Switch
- Table (Basic)
- Tabs
- Tooltip

### 🚧 Work in Progress (WIP)

- Breadcrumb
- Calendar
- Command
- Context Menu
- Data Table (TanStack)
- Sonner

## 🧪 Testing Patterns

### Key Testing Concepts

**screenDom** – Standard DOM queries
```javascript
await screenDom.findByRole('button', { name: 'Click me' });
```

**screenDomGlobal** – Portal-rendered elements (dialogs, popovers, tooltips)
```javascript
await screenDomGlobal.findByText('Tooltip content');
```

**Assertions**
```javascript
twd.should(element, 'be.visible');
expect(element).eql(null);  // For non-existence
```

### Selector Best Practices

- **Tables:** Use `role:'table'`, `columnheader`, text content for rows
- **Portals:** Use `screenDomGlobal` for dialogs, drawers, popovers, tooltips
- **Forms:** Use `findByLabelText()`, `findByRole()` for inputs
- **Navigation:** Use link text and button names

## 📖 Resources

- [TWD Official Docs](https://brikev.github.io/twd/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Router v7](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📝 License

MIT

---

**Happy TWD Testing! 🎉**
