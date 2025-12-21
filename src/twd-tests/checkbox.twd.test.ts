import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Checkbox Component', () => {
  it('should render checkboxes and allow toggling', async () => {
    // Navigate to the Checkbox page
    await twd.visit('/checkbox');
    
    // Find the unchecked checkbox
    const uncheckedBox = await screenDom.findByRole('checkbox', { name: 'Accept terms and conditions' });
    twd.should(uncheckedBox, 'have.attr', 'aria-checked', 'false');
    
    // Find the checked checkbox
    const checkedBox = await screenDom.findByRole('checkbox', { name: 'Subscribe to newsletter' });
    twd.should(checkedBox, 'have.attr', 'aria-checked', 'true');
    
    // Click the unchecked checkbox
    await userEvent.click(uncheckedBox);
    const updatedUncheckedBox = await screenDom.findByRole('checkbox', { name: 'Accept terms and conditions' });
    twd.should(updatedUncheckedBox, 'have.attr', 'aria-checked', 'true');
    
    // Click the checked checkbox to uncheck it
    await userEvent.click(checkedBox);
    const updatedCheckedBox = await screenDom.findByRole('checkbox', { name: 'Subscribe to newsletter' });
    twd.should(updatedCheckedBox, 'have.attr', 'aria-checked', 'false');
  });
});
