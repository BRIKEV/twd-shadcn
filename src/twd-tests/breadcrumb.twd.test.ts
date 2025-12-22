import { twd, screenDom, screenDomGlobal, userEvent, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Breadcrumb Component', () => {
  it('renders breadcrumb navigation with ellipsis dropdown', async () => {
    await twd.visit('/breadcrumb');

    // Check breadcrumb container
    const breadcrumb = await screenDom.findByRole('navigation');
    twd.should(breadcrumb, 'be.visible');

    // Check individual breadcrumb items
    const homeLink = await screenDom.findByRole('link', { name: 'Home' });
    twd.should(homeLink, 'be.visible');

    const componentsLink = await screenDom.findByRole('link', { name: 'Components' });
    twd.should(componentsLink, 'be.visible');

    // Check current page (BreadcrumbPage)
    const currentPage = await screenDom.findByRole('link', { name: 'Breadcrumb' });
    twd.should(currentPage, 'be.visible');

    // Check separators exist
    const separators = await twd.getAll('[data-slot="breadcrumb-separator"]');
    expect(separators.length).to.be.greaterThan(0);

    // Open dropdown menu
    const ellipsisButton = await screenDom.findByRole('button', { name: 'Toggle menu' });
    await userEvent.click(ellipsisButton);

    // Verify dropdown items appear (using screenDomGlobal for portal)
    const docOption = await screenDomGlobal.findByRole('menuitem', { name: 'Documentation' });
    twd.should(docOption, 'be.visible');

    const themesOption = await screenDomGlobal.findByRole('menuitem', { name: 'Themes' });
    twd.should(themesOption, 'be.visible');

    const githubOption = await screenDomGlobal.findByRole('menuitem', { name: 'GitHub' });
    twd.should(githubOption, 'be.visible');
  });
});
