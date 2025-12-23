import { twd, screenDom, screenDomGlobal, userEvent, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Drawer Component', () => {
  it('should open drawer and close it', async () => {
    // Navigate to the Drawer page
    await twd.visit('/drawer');
    
    // Find and click the trigger button
    const triggerButton = await screenDom.findByRole('button', { name: 'Open Drawer' });
    twd.should(triggerButton, 'be.visible');
    await userEvent.click(triggerButton);
    
    // Verify drawer appears (using screenDomGlobal since it's rendered in a portal)
    const drawerTitle = await screenDomGlobal.findByRole('heading', { name: 'Drawer Title' });
    twd.should(drawerTitle, 'be.visible');
    
    // Verify drawer description
    const drawerDescription = await screenDomGlobal.findByText('This is a drawer sidebar component.');
    twd.should(drawerDescription, 'be.visible');
    
    // Verify close button is present
    const closeButton = await screenDomGlobal.findByRole('button', { name: 'Close' });
    twd.should(closeButton, 'be.visible');
    
    // Click close button
    await userEvent.click(closeButton);
    await twd.wait(600); // wait for the drawer to close
    // Verify drawer is closed
    const closedDrawer = await screenDomGlobal.queryByRole('heading', { name: 'Drawer Title' });
    expect(closedDrawer).to.eql(null);
  });
});
