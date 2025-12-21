import { twd, screenDom, userEvent, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Collapsible Component', () => {
  it('toggles content visibility on trigger click', async () => {
    await twd.visit('/collapsible');

    const toggleButton = await screenDom.findByRole('button', { name: 'Toggle content' });
    twd.should(toggleButton, 'be.visible');

    // Initially collapsed (content not in DOM)
    const content = screenDom.queryByText('Here is some hidden content');
    expect(content).eql(null);

    // Open
    await userEvent.click(toggleButton);
    const opened = await screenDom.findByText('Here is some hidden content');
    twd.should(opened, 'be.visible');

    // Close
    await userEvent.click(toggleButton);
    const closed = screenDom.queryByText('Here is some hidden content');
    expect(closed).eql(null);
  });
});
