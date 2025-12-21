import { twd, screenDom, userEvent, screenDomGlobal, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Alert Dialog Component', () => {
  it('should open alert dialog and interact with buttons', async () => {
    // Navigate to the Alert Dialog page
    await twd.visit('/alert-dialog');
    
    // Find and click the trigger button
    const triggerButton = await screenDom.findByRole('button', { name: 'Show Dialog' });
    twd.should(triggerButton, 'be.visible');
    await userEvent.click(triggerButton);
    
    // Verify dialog appears (using global since it's rendered in a portal)
    const dialogTitle = await screenDomGlobal.findByRole('heading', { name: 'Are you absolutely sure?' });
    twd.should(dialogTitle, 'be.visible');
    
    // Verify dialog description
    const dialogDescription = await screenDomGlobal.findByText('This action cannot be undone. This will permanently delete your account and remove your data from our servers.');
    twd.should(dialogDescription, 'be.visible');
    
    // Verify Cancel and Continue buttons are present
    const cancelButton = await screenDomGlobal.findByRole('button', { name: 'Cancel' });
    const continueButton = await screenDomGlobal.findByRole('button', { name: 'Continue' });
    twd.should(cancelButton, 'be.visible');
    twd.should(continueButton, 'be.visible');
    
    // Click Cancel to close dialog
    await userEvent.click(cancelButton);
    await twd.wait(500); // wait for the dialog to close
    // Verify dialog is closed
    const closedDialog = await screenDomGlobal.queryByRole('heading', { name: 'Are you absolutely sure?' });
    expect(closedDialog).to.eql(null);
  });
});
