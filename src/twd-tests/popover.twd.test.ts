import { twd, screenDom, userEvent, screenDomGlobal, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Popover Component', () => {
  it('should open popover and interact with form inputs', async () => {
    // Navigate to the Popover page
    await twd.visit('/popover');
    
    // Find and click the trigger button
    const triggerButton = await screenDom.findByRole('button', { name: 'Open popover' });
    twd.should(triggerButton, 'be.visible');
    await userEvent.click(triggerButton);
    
    // Verify popover appears (using global since it's rendered in a portal)
    const popoverTitle = await screenDomGlobal.findByText('Dimensions');
    twd.should(popoverTitle, 'be.visible');
    
    // Verify popover description
    const popoverDescription = await screenDomGlobal.findByText('Set the dimensions for the layer.');
    twd.should(popoverDescription, 'be.visible');
    
    // Find and verify inputs
    const widthInput = await screenDomGlobal.findByLabelText('Width');
    twd.should(widthInput, 'have.value', '100%');
    
    const maxWidthInput = await screenDomGlobal.findByLabelText('Max. width');
    twd.should(maxWidthInput, 'have.value', '300px');
    
    const heightInput = await screenDomGlobal.findByLabelText('Height');
    twd.should(heightInput, 'have.value', '25px');
    
    // Change width value
    await userEvent.clear(widthInput);
    await userEvent.type(widthInput, '80%');
    
    // Verify the change
    const updatedWidthInput = await screenDomGlobal.findByLabelText('Width');
    twd.should(updatedWidthInput, 'have.value', '80%');
    
    // Click outside or press Escape to close popover
    await userEvent.keyboard('{Escape}');
    await twd.wait(500); // wait for the popover to close
    // Verify popover is closed
    const closedPopover = await screenDomGlobal.queryByText('Dimensions');
    expect(closedPopover).to.eql(null);
  });
});
