import { twd, screenDom, userEvent, screenDomGlobal, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Dialog Component', () => {
  it('should open dialog and interact with form inputs', async () => {
    // Navigate to the Dialog page
    await twd.visit('/dialog');
    
    // Find and click the trigger button
    const triggerButton = await screenDom.findByRole('button', { name: 'Open Dialog' });
    twd.should(triggerButton, 'be.visible');
    await userEvent.click(triggerButton);
    
    // Verify dialog appears (using global since it's rendered in a portal)
    const dialogTitle = await screenDomGlobal.findByRole('heading', { name: 'Edit profile' });
    twd.should(dialogTitle, 'be.visible');
    
    // Verify dialog description
    const dialogDescription = await screenDomGlobal.findByText('Make changes to your profile here. Click save when you\'re done.');
    twd.should(dialogDescription, 'be.visible');
    
    // Find and interact with inputs
    const nameInput = await screenDomGlobal.findByLabelText('Name');
    twd.should(nameInput, 'have.value', 'Pedro Duarte');
    
    const usernameInput = await screenDomGlobal.findByLabelText('Username');
    twd.should(usernameInput, 'have.value', '@peduarte');
    
    // Clear and type new value
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'John Doe');
    const updatedNameInput = await screenDomGlobal.findByLabelText('Name');
    twd.should(updatedNameInput, 'have.value', 'John Doe');
    
    // Verify buttons are present
    const cancelButton = await screenDomGlobal.findByRole('button', { name: 'Cancel' });
    const saveButton = await screenDomGlobal.findByRole('button', { name: 'Save changes' });
    twd.should(cancelButton, 'be.visible');
    twd.should(saveButton, 'be.visible');
    
    // Click Cancel to close dialog
    await userEvent.click(cancelButton);
    await twd.wait(500); // wait for the dialog to close
    // Verify dialog is closed
    const closedDialog = await screenDomGlobal.queryByRole('heading', { name: 'Edit profile' });
    expect(closedDialog).to.eql(null);
  });
});
