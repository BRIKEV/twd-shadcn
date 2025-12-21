import { twd, screenDom } from 'twd-js';
import { describe, it } from 'twd-js/runner';

// Recommended selectors for documentation:
// - Table: role 'table'
// - Caption: text content
// - Column headers: role 'columnheader' with header names
// - Rows: assert presence of individual cell texts within rows

describe('Basic Table Component', () => {
  it('renders headers, caption, and rows', async () => {
    await twd.visit('/table');

    // Table and caption
    const table = await screenDom.findByRole('table');
    twd.should(table, 'be.visible');
    const caption = await screenDom.findByText('A list of your recent invoices.');
    twd.should(caption, 'be.visible');

    // Column headers
    await screenDom.findByRole('columnheader', { name: 'Invoice' });
    await screenDom.findByRole('columnheader', { name: 'Status' });
    await screenDom.findByRole('columnheader', { name: 'Method' });
    await screenDom.findByRole('columnheader', { name: 'Amount' });

    // Body rows and cells
    await screenDom.findByText('INV001');
    await screenDom.findByText('Paid');
    await screenDom.findByText('Credit Card');
    await screenDom.findByText('$250.00');

    await screenDom.findByText('INV002');
    await screenDom.findByText('Pending');
    await screenDom.findByText('PayPal');
    await screenDom.findByText('$150.00');

    // Footer total
    const totalFooter = await screenDom.findByText('$2,500.00');
    twd.should(totalFooter, 'be.visible');
  });
});
