import { twd, screenDom, screenDomGlobal, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Select Component', () => {
  it('should render select and allow choosing options', async () => {
    // Navigate to the Select page
    await twd.visit('/select');
    
    // Find the select trigger button
    const selectTrigger = await screenDom.findByRole('combobox', { name: 'Select a fruit' });
    twd.should(selectTrigger, 'be.visible');
    twd.should(selectTrigger, 'have.text', 'Select a fruit');
    
    // Click to open the select
    await userEvent.click(selectTrigger);
    
    // Find and click an option using screenDomGlobal as it is rendered in a portal
    const appleOption = await screenDomGlobal.findByRole('option', { name: 'Apple' });
    twd.should(appleOption, 'be.visible');
    await userEvent.click(appleOption);
    
    // Verify the selected value is displayed
    const updatedSelectTrigger = await screenDom.findByRole('combobox', { name: 'Select a fruit' });
    twd.should(updatedSelectTrigger, 'have.text', 'Apple');
  });
});
