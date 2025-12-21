import { twd, screenDom, screenDomGlobal, userEvent, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Dropdown Menu Component', () => {
  it('should open dropdown menu and click menu items', async () => {
    // Navigate to the Dropdown Menu page
    await twd.visit('/dropdown-menu');
    
    // Find and click the trigger button
    const triggerButton = await screenDom.findByRole('button', { name: 'Open Menu' });
    twd.should(triggerButton, 'be.visible');
    await userEvent.click(triggerButton);
    
    // Verify dropdown menu appears (using screenDomGlobal since it's rendered in a portal)
    const profileOption = await screenDomGlobal.findByRole('menuitem', { name: 'Profile' });
    twd.should(profileOption, 'be.visible');
    
    // Verify other menu items are present
    const settingsOption = await screenDomGlobal.findByRole('menuitem', { name: 'Settings' });
    const logoutOption = await screenDomGlobal.findByRole('menuitem', { name: 'Log out' });
    twd.should(settingsOption, 'be.visible');
    twd.should(logoutOption, 'be.visible');
    
    // Click a menu item
    await userEvent.click(profileOption);
    await twd.wait(500); // wait for the menu to close
    // Verify menu is closed after selection
    const closedMenu = await screenDomGlobal.queryByRole('menuitem', { name: 'Profile' });
    expect(closedMenu).to.eql(null);
  });
});
