import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const ContextMenuPage = () => {
  const testCode = `import { twd, screenDom, screenDomGlobal, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

// Context Menu test using right-click and portal-aware queries

describe('Context Menu Component', () => {
  it('opens on right-click and exposes menu items (portal)', async () => {
    await twd.visit('/context-menu');

    const trigger = await screenDom.findByText(/right click here/i, {
      selector: 'span[data-slot="context-menu-trigger"]',
    });

    // Open via context-click
    await userEvent.pointer({
      target: trigger,
      keys: '[MouseRight]',
    });

    // Menu is rendered in a portal; use screenDomGlobal
    const menu = await screenDomGlobal.findByRole('menu');
    twd.should(menu as HTMLElement, 'be.visible');

    const openItem = await screenDomGlobal.findByRole('menuitem', { name: /open/i });
    const copyItem = await screenDomGlobal.findByRole('menuitem', { name: /copy/i });
    const pasteItem = await screenDomGlobal.findByRole('menuitem', { name: /paste/i });

    twd.should(openItem as HTMLElement, 'be.visible');
    twd.should(copyItem as HTMLElement, 'be.visible');
    twd.should(pasteItem as HTMLElement, 'be.visible');

    // Submenu
    const moreTrigger = await screenDomGlobal.findByRole('menuitem', { name: /more/i });
    await userEvent.hover(moreTrigger);

    const shareItem = await screenDomGlobal.findByRole('menuitem', { name: /share/i });
    twd.should(shareItem as HTMLElement, 'be.visible');
  });
});`;

  const componentCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

export function DemoContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="border rounded-lg p-8 bg-background flex items-center justify-center">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Share</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Context Menu</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="">
          <ContextMenu>
            <ContextMenuTrigger className="border rounded-lg p-8 bg-background flex items-center justify-center">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuLabel>Actions</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuItem>Open</ContextMenuItem>
              <ContextMenuItem>Copy</ContextMenuItem>
              <ContextMenuItem>Paste</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Share</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="Right-click opens a portal-rendered menu; use screenDomGlobal to assert menu items."
        componentCode={componentCode}
        componentDescription="Radix ContextMenu with a basic content + submenu."
      />
    </div>
  );
};

export default ContextMenuPage;
