import { twd, screenDom, screenDomGlobal, userEvent, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Tooltip Component', () => {
  it('should show tooltip on hover and hide on unhover', async () => {
    // Navigate to the Tooltip page
    await twd.visit('/tooltip');
    
    // Find the button that triggers the tooltip
    const tooltipTrigger = await screenDom.findByRole('button', { name: 'Hover me' });
    twd.should(tooltipTrigger, 'be.visible');
    
    // Hover over the trigger
    await userEvent.hover(tooltipTrigger);
    
    // Verify tooltip appears (using screenDomGlobal since it's rendered in a portal)
    const tooltip = await screenDomGlobal.findByRole('tooltip');
    twd.should(tooltip, 'be.visible');
    twd.should(tooltip, 'have.text', 'This is a helpful tooltip');
    
    // Unhover
    await userEvent.unhover(tooltipTrigger);
    
    // Verify tooltip is hidden
    const hiddenTooltip = screenDomGlobal.queryByText('This is a helpful tooltip', { selector: '[data-slot="tooltip"]' });
    expect(hiddenTooltip).eql(null);
  });
});
