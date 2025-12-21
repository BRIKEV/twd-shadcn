import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Radio Group Component', () => {
  it('should render radio group and allow selection', async () => {
    // Navigate to the Radio Group page
    await twd.visit('/radio-group');
    
    // Find the default selected radio
    const defaultRadio = await screenDom.findByRole('radio', { name: 'Default' });
    twd.should(defaultRadio, 'have.attr', 'aria-checked', 'true');
    
    // Find the comfortable radio (not selected)
    const comfortableRadio = await screenDom.findByRole('radio', { name: 'Comfortable' });
    twd.should(comfortableRadio, 'have.attr', 'aria-checked', 'false');
    
    // Click on comfortable option
    await userEvent.click(comfortableRadio);
    const updatedComfortableRadio = await screenDom.findByRole('radio', { name: 'Comfortable' });
    twd.should(updatedComfortableRadio, 'have.attr', 'aria-checked', 'true');
    
    // Verify default is no longer checked
    const updatedDefaultRadio = await screenDom.findByRole('radio', { name: 'Default' });
    twd.should(updatedDefaultRadio, 'have.attr', 'aria-checked', 'false');
  });
});
