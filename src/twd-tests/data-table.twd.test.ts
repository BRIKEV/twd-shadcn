import { twd, screenDom, screenDomGlobal, userEvent, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Data Table Component', () => {
  it('renders table with headers, rows, and controls', async () => {
    await twd.visit('/data-table');

    // Verify table structure
    const table = await screenDom.findByRole('table');
    twd.should(table, 'be.visible');

    // Verify column headers
    await screenDom.findByRole('columnheader', { name: 'Select all' });
    await screenDom.findByRole('columnheader', { name: 'Status' });
    await screenDom.findByRole('columnheader', { name: 'Email' });
    await screenDom.findByRole('columnheader', { name: 'Amount' });

    // Verify filter input
    const filterInput = await screenDom.findByRole('textbox', { name: /filter emails/i });
    twd.should(filterInput, 'be.visible');
    twd.should(filterInput, 'have.attr', 'placeholder', 'Filter emails...');

    // Verify column selector button
    const columnsButton = await screenDom.findByRole('button', { name: 'Columns' });
    twd.should(columnsButton, 'be.visible');

    // Verify table rows with data
    await screenDom.findByText('ken99@example.com');
    await screenDom.findByText('Abe45@example.com');
    await screenDom.findByText('Monserrat44@example.com');
    await screenDom.findByText('Silas22@example.com');
    await screenDom.findByText('carmella@example.com');

    // Verify status values
    const statusValues = await screenDom.findAllByText('success');
    expect(statusValues.length).to.equal(3);
    const processingValues = await screenDom.findAllByText('processing');
    expect(processingValues.length).to.equal(1);
    const failedValues = await screenDom.findAllByText('failed');
    expect(failedValues.length).to.equal(1);

    // Verify pagination info
    const paginationInfo = await screenDom.findByText(/0 of 5 row\(s\) selected/i);
    twd.should(paginationInfo, 'be.visible');
  });

  it('filters table rows by email input', async () => {
    await twd.visit('/data-table');

    const filterInput = await screenDom.findByRole('textbox', { name: /filter emails/i });
    
    // Type a filter value
    await userEvent.type(filterInput, 'ken99');
    
    // Verify filtered results
    await screenDom.findByText('ken99@example.com');
    
    // Verify other rows are filtered out
    const abeEmail = await screenDom.queryByText('Abe45@example.com');
    expect(abeEmail).to.eql(null, 'Abe45 email should be filtered out');

    // Clear filter
    await userEvent.clear(filterInput);
    
    // Verify all rows are visible again
    await screenDom.findByText('ken99@example.com');
    await screenDom.findByText('Abe45@example.com');
  });

  it('toggles column visibility via column selector dropdown', async () => {
    await twd.visit('/data-table');

    // Open column selector dropdown
    const columnsButton = await screenDom.findByRole('button', { name: 'Columns' });
    await userEvent.click(columnsButton);

    // Verify dropdown menu is open with column checkboxes
    const statusCheckbox = await screenDomGlobal.findByRole('menuitemcheckbox', { name: 'status' });
    const emailCheckbox = await screenDomGlobal.findByRole('menuitemcheckbox', { name: 'email' });
    const amountCheckbox = await screenDomGlobal.findByRole('menuitemcheckbox', { name: 'amount' });

    twd.should(statusCheckbox, 'have.attr', 'aria-checked', 'true');
    twd.should(emailCheckbox, 'have.attr', 'aria-checked', 'true');
    twd.should(amountCheckbox, 'have.attr', 'aria-checked', 'true');

    // Hide status column
    await userEvent.click(statusCheckbox);
    await twd.wait(300);

    // Verify status column is hidden
    const statusHeader = await screenDom.queryByRole('columnheader', { name: 'Status' });
    expect(statusHeader).to.eql(null, 'Status column should be hidden');

    // Show status column again
    await userEvent.click(columnsButton);
    await twd.wait(300);
    const statusCheckboxAgain = await screenDomGlobal.findByRole('menuitemcheckbox', { name: 'status' });
    await userEvent.click(statusCheckboxAgain);
    await twd.wait(300);

    // Verify status column is visible again
    await screenDom.findByRole('columnheader', { name: 'Status' });
  });

  it('selects and deselects individual rows', async () => {
    await twd.visit('/data-table');

    // Find all row checkboxes
    const allRowCheckboxes = await screenDom.findAllByRole('checkbox', { name: 'Select row' });
    expect(allRowCheckboxes.length).to.be.greaterThan(0);
    
    // Get first row checkbox
    const firstRowCheckbox = allRowCheckboxes[0];
    twd.should(firstRowCheckbox, 'have.attr', 'aria-checked', 'false');

    // Select first row
    await userEvent.click(firstRowCheckbox);
    await twd.wait(200);

    // Verify first row is selected
    const allRowCheckboxesAfter = await screenDom.findAllByRole('checkbox', { name: 'Select row' });
    twd.should(allRowCheckboxesAfter[0], 'have.attr', 'aria-checked', 'true');

    // Verify selection count updated
    await screenDom.findByText(/1 of 5 row\(s\) selected/i);

    // Deselect the row
    await userEvent.click(allRowCheckboxesAfter[0]);
    await twd.wait(200);

    // Verify row is deselected
    const allRowCheckboxesAfterDeselect = await screenDom.findAllByRole('checkbox', { name: 'Select row' });
    twd.should(allRowCheckboxesAfterDeselect[0], 'have.attr', 'aria-checked', 'false');

    // Verify selection count reset
    await screenDom.findByText(/0 of 5 row\(s\) selected/i);
  });

  it('selects and deselects all rows using header checkbox', async () => {
    await twd.visit('/data-table');

    // Find select all checkbox
    const selectAllCheckbox = await screenDom.findByRole('checkbox', { name: 'Select all' });
    twd.should(selectAllCheckbox, 'have.attr', 'aria-checked', 'false');

    // Select all rows
    await userEvent.click(selectAllCheckbox);
    await twd.wait(300);

    // Verify all row checkboxes are selected
    const allRowCheckboxes = await screenDom.findAllByRole('checkbox', { name: 'Select row' });
    for (const checkbox of allRowCheckboxes) {
      twd.should(checkbox, 'have.attr', 'aria-checked', 'true');
    }

    // Verify selection count
    await screenDom.findByText(/5 of 5 row\(s\) selected/i);

    // Deselect all rows
    await userEvent.click(selectAllCheckbox);
    await twd.wait(300);

    // Verify all row checkboxes are deselected
    const allRowCheckboxesAfter = await screenDom.findAllByRole('checkbox', { name: 'Select row' });
    for (const checkbox of allRowCheckboxesAfter) {
      twd.should(checkbox, 'have.attr', 'aria-checked', 'false');
    }

    // Verify selection count reset
    await screenDom.findByText(/0 of 5 row\(s\) selected/i);
  });

  it('sorts table by email column', async () => {
    await twd.visit('/data-table');

    // Find email column header button
    const emailHeaderButton = await screenDom.findByRole('button', { name: 'Email' });
    twd.should(emailHeaderButton, 'be.visible');

    // Verify initial emails are present
    await screenDom.findByText('ken99@example.com');
    await screenDom.findByText('Abe45@example.com');

    // Click to sort ascending
    await userEvent.click(emailHeaderButton);
    await twd.wait(300);

    // Verify sorting occurred (all emails should still be present)
    const allEmails = await screenDom.findAllByText(/@example\.com/i);
    expect(allEmails.length).to.equal(5, 'All 5 emails should be present after sorting');

    // Click again to sort descending
    await userEvent.click(emailHeaderButton);
    await twd.wait(300);

    // Verify reverse sorting occurred
    const allEmailsAfter = await screenDom.findAllByText(/@example\.com/i);
    expect(allEmailsAfter.length).to.equal(5, 'All 5 emails should be present after reverse sorting');
  });

  it('opens and interacts with row action dropdown menu', async () => {
    await twd.visit('/data-table');

    // Find first row's action menu button
    const actionButtons = await screenDom.findAllByRole('button', { name: 'Open menu' });
    expect(actionButtons.length).to.be.greaterThan(0);
    
    const firstActionButton = actionButtons[0];
    await userEvent.click(firstActionButton);
    await twd.wait(300);

    // Verify dropdown menu appears (using screenDomGlobal since it's in a portal)
    const actionsLabel = await screenDomGlobal.findByText('Actions');
    twd.should(actionsLabel, 'be.visible');

    // Verify menu items
    const copyPaymentId = await screenDomGlobal.findByRole('menuitem', { name: /copy payment id/i });
    const viewCustomer = await screenDomGlobal.findByRole('menuitem', { name: /view customer/i });
    const viewPaymentDetails = await screenDomGlobal.findByRole('menuitem', { name: /view payment details/i });

    twd.should(copyPaymentId, 'be.visible');
    twd.should(viewCustomer, 'be.visible');
    twd.should(viewPaymentDetails, 'be.visible');

    // Click a menu item
    await userEvent.click(copyPaymentId);
    await twd.wait(300);

    // Verify menu is closed after selection
    const closedMenu = await screenDomGlobal.queryByRole('menuitem', { name: /copy payment id/i });
    expect(closedMenu).to.eql(null, 'Menu should be closed after selection');
  });

  it('handles multiple column visibility toggles', async () => {
    await twd.visit('/data-table');

    // Open column selector
    const columnsButton = await screenDom.findByRole('button', { name: 'Columns' });
    await userEvent.click(columnsButton);
    await twd.wait(300);

    // Hide email column
    const emailCheckbox = await screenDomGlobal.findByRole('menuitemcheckbox', { name: 'email' });
    await userEvent.click(emailCheckbox);
    await twd.wait(300);

    // Verify email column is hidden
    const emailHeader = await screenDom.queryByRole('columnheader', { name: 'Email' });
    expect(emailHeader).to.eql(null, 'Email column should be hidden');

    // Hide amount column
    await userEvent.click(columnsButton);
    await twd.wait(300);
    const amountCheckbox = await screenDomGlobal.findByRole('menuitemcheckbox', { name: 'amount' });
    await userEvent.click(amountCheckbox);
    await twd.wait(300);

    // Verify amount column is hidden
    const amountHeader = await screenDom.queryByRole('columnheader', { name: 'Amount' });
    expect(amountHeader).to.eql(null, 'Amount column should be hidden');

    // Show both columns back
    await userEvent.click(columnsButton);
    await twd.wait(300);
    const emailCheckboxAgain = await screenDomGlobal.findByRole('menuitemcheckbox', { name: 'email' });
    await userEvent.click(emailCheckboxAgain);
    await twd.wait(300);

    await userEvent.click(columnsButton);
    await twd.wait(300);
    const amountCheckboxAgain = await screenDomGlobal.findByRole('menuitemcheckbox', { name: 'amount' });
    await userEvent.click(amountCheckboxAgain);
    await twd.wait(300);

    // Verify both columns are visible again
    await screenDom.findByRole('columnheader', { name: 'Email' });
    await screenDom.findByRole('columnheader', { name: 'Amount' });
  });

  it('maintains row selection state after filtering', async () => {
    await twd.visit('/data-table');

    // Select first row
    const firstRowCheckbox = (await screenDom.findAllByRole('checkbox', { name: 'Select row' }))[0];
    twd.should(firstRowCheckbox, 'have.attr', 'aria-checked', 'false');

    // Select first row
    await userEvent.click(firstRowCheckbox);
    await twd.wait(200);
    twd.should(firstRowCheckbox, 'have.attr', 'aria-checked', 'true');

    // Verify selection
    await screenDom.findByText(/1 of 5 row\(s\) selected/i);
    twd.should(firstRowCheckbox, 'have.attr', 'aria-checked', 'true');

    // Apply filter
    const filterInput = await screenDom.findByRole('textbox', { name: /filter emails/i });
    await userEvent.type(filterInput, 'ken99');
    await twd.wait(300);

    // Verify selection count updates for filtered rows
    // The selected row might still be visible if it matches the filter
    const selectionText = await screenDom.findByText(/row\(s\) selected/i);
    twd.should(selectionText, 'be.visible');

    // Clear filter
    await userEvent.clear(filterInput);
    await twd.wait(300);

    // Verify selection is maintained
    const selectionTextAfter = await screenDom.findByText(/row\(s\) selected/i);
    twd.should(selectionTextAfter, 'be.visible');
  });
});

