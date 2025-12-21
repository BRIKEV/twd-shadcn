import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Pagination Component', () => {
  it('navigates via page links and next/previous controls', async () => {
    await twd.visit('/pagination');

    // Initial page
    const initial = await screenDom.findByText('Page: 2');
    twd.should(initial, 'be.visible');

    // Click page 3
    const page3 = await screenDom.findByRole('link', { name: '3' });
    await userEvent.click(page3);
    const afterPage3 = await screenDom.findByText('Page: 3');
    twd.should(afterPage3, 'be.visible');

    // Click Next (to 4)
    const next = await screenDom.findByRole('link', { name: 'Go to next page' });
    await userEvent.click(next);
    const afterNext = await screenDom.findByText('Page: 4');
    twd.should(afterNext, 'be.visible');

    // Click Previous (to 3)
    const prev = await screenDom.findByRole('link', { name: 'Go to previous page' });
    await userEvent.click(prev);
    const afterPrev = await screenDom.findByText('Page: 3');
    twd.should(afterPrev, 'be.visible');
  });
});
