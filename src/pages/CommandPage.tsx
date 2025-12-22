import { Link } from "react-router";
import { useState, useEffect } from "react";
import { ComponentDocs } from "@/components/component-docs";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const CommandPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const testCode = `import { twd, screenDom, screenDomGlobal, userEvent } from 'twd-js';
import { describe, it, expect } from 'twd-js/runner';

describe('Command Component', () => {
  it('opens command dialog with keyboard shortcut and searches items', async () => {
    await twd.visit('/command');

    // Verify hint is visible
    const hint = await screenDom.findByText(/⌘J/);
    twd.should(hint, 'be.visible');

    // Trigger keyboard shortcut (Cmd/Ctrl + J)
    await userEvent.keyboard('{Control>}j{/Control}');

    // Dialog should open (portal element)
    const searchInput = await screenDomGlobal.findByPlaceholderText('Type a command or search...');
    twd.should(searchInput, 'be.visible');

    // Verify all groups and items are visible
    await screenDomGlobal.findByText('Suggestions');
    await screenDomGlobal.findByText('Calendar');
    await screenDomGlobal.findByText('Search Emoji');
    await screenDomGlobal.findByText('Calculator');

    await screenDomGlobal.findByText('Settings');
    await screenDomGlobal.findByText('Profile');
    await screenDomGlobal.findByText('Billing');

    // Test search/filter functionality
    await userEvent.type(searchInput, 'cal');

    // Calendar and Calculator should match, Settings group should be filtered
    const calendarItem = await screenDomGlobal.findByText('Calendar');
    twd.should(calendarItem, 'be.visible');

    const calculatorItem = await screenDomGlobal.findByText('Calculator');
    twd.should(calculatorItem, 'be.visible');

    // Empty state when no matches
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'xyz');
    const noResults = await screenDomGlobal.findByText('No results found.');
    twd.should(noResults, 'be.visible');

    // Close dialog with Escape
    await userEvent.keyboard('{Escape}');
    const closedInput = screenDomGlobal.queryByPlaceholderText('Type a command or search...');
    expect(closedInput).eql(null);
  });
});`;

  const componentCode = `import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="text-muted-foreground text-sm">
        Press{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Command</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <div className="w-full">
            <p className="text-muted-foreground text-sm">
              Press{" "}
              <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
                <span className="text-xs">⌘</span>J
              </kbd>
            </p>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="Tests the command palette dialog with keyboard shortcuts, search filtering, empty states, and portal rendering using screenDomGlobal."
        componentCode={componentCode}
        componentDescription="A command palette (Cmd+K style) with keyboard shortcut activation, searchable command groups, and shortcuts display. Press ⌘J to open."
      />
    </div>
  );
};

export default CommandPage;
