import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Button Component', () => {
  it('should render the button with correct text and interaction', async () => {
    // Navigate to the Button page
    await twd.visit('/button');
    const button = await screenDom.getByRole('button', { name: 'Click Me 0' });
    twd.should(button, 'be.visible');
    
    // Simulate a user click
    await userEvent.click(button);
    const updatedButton = await screenDom.getByRole('button', { name: 'Click Me 1' });
    twd.should(updatedButton, 'be.visible');
  });
});
