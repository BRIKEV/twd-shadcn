import { twd, screenDom, screenDomGlobal, userEvent } from 'twd-js';
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
});
