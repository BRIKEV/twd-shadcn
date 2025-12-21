import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Switch Component', () => {
  it('should render switch and allow toggling', async () => {
    // Navigate to the Switch page
    await twd.visit('/switch');
    
    // Find the switch by its label
    const switchElement = await screenDom.findByRole('switch', { name: 'Airplane Mode' });
    twd.should(switchElement, 'have.attr', 'aria-checked', 'false');
    
    // Click to enable
    await userEvent.click(switchElement);
    const updatedSwitch = await screenDom.findByRole('switch', { name: 'Airplane Mode' });
    twd.should(updatedSwitch, 'have.attr', 'aria-checked', 'true');
    
    // Click to disable
    await userEvent.click(updatedSwitch);
    const finalSwitch = await screenDom.findByRole('switch', { name: 'Airplane Mode' });
    twd.should(finalSwitch, 'have.attr', 'aria-checked', 'false');
  });
});
