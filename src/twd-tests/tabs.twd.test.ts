import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Tabs Component', () => {
  it('should render tabs and allow navigation', async () => {
    // Navigate to the Tabs page
    await twd.visit('/tabs');
    
    // Find the Account tab (should be selected by default)
    const accountTab = await screenDom.findByRole('tab', { name: 'Account' });
    twd.should(accountTab, 'have.attr', 'aria-selected', 'true');
    
    // Verify account content is visible
    const accountContent = await screenDom.findByText('Make changes to your account here. Click save when you\'re done.');
    twd.should(accountContent, 'be.visible');
    
    // Click on Password tab
    const passwordTab = await screenDom.findByRole('tab', { name: 'Password' });
    twd.should(passwordTab, 'have.attr', 'aria-selected', 'false');
    await userEvent.click(passwordTab);
    
    // Verify Password tab is now selected
    const updatedPasswordTab = await screenDom.findByRole('tab', { name: 'Password' });
    twd.should(updatedPasswordTab, 'have.attr', 'aria-selected', 'true');
    
    // Verify password content is visible
    const passwordContent = await screenDom.findByText('Change your password here. After saving, you\'ll be logged out.');
    twd.should(passwordContent, 'be.visible');
    
    // Verify Account tab is no longer selected
    const updatedAccountTab = await screenDom.findByRole('tab', { name: 'Account' });
    twd.should(updatedAccountTab, 'have.attr', 'aria-selected', 'false');
  });
});
