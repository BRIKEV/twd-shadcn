import { twd, screenDom, screenDomGlobal, userEvent, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Command Component', () => {
  it('opens command dialog with keyboard shortcut and searches items', async () => {
    await twd.visit('/command');

    // Verify hint is visible
    const hint = await screenDom.findByText(/⌘J/);
    twd.should(hint, 'be.visible');

    // Trigger keyboard shortcut (Cmd/Ctrl + J)
    await userEvent.keyboard('{Control>}j{/Control}');

    // Dialog should open (portal element)
    const searchInput = await screenDomGlobal.findByPlaceholderText('Type a command or search...');
    twd.should(searchInput, 'be.visible');

    // Verify all groups and items are visible
    await screenDomGlobal.findByText('Suggestions');
    await screenDomGlobal.findByText('Calendar');
    await screenDomGlobal.findByText('Search Emoji');
    await screenDomGlobal.findByText('Calculator');

    await screenDomGlobal.findByRole('option', { name: /Settings/ });
    await screenDomGlobal.findByRole('option', { name: /Profile/ });
    await screenDomGlobal.findByRole('option', { name: /Billing/ });

    // Test search/filter functionality
    await userEvent.type(searchInput, 'cal');

    // Calendar and Calculator should match
    const calendarItem = await screenDomGlobal.findByText('Calendar');
    twd.should(calendarItem, 'be.visible');

    const calculatorItem = await screenDomGlobal.findByText('Calculator');
    twd.should(calculatorItem, 'be.visible');

    // Empty state when no matches
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'xyz');
    const noResults = await screenDomGlobal.findByText('No results found.');
    twd.should(noResults, 'be.visible');
    // Close dialog with Escape
    await userEvent.keyboard('{Escape}');
    await twd.wait(300);
    const closedInput = screenDomGlobal.queryByPlaceholderText('Type a command or search...');
    expect(closedInput).eql(null);
  });
});
