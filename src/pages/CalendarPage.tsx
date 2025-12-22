import { Link } from "react-router";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { ComponentDocs } from "@/components/component-docs";

const CalendarPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const testCode = `import { twd, screenDom, userEvent, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Calendar Component', () => {
  it('selects dates by data-day and verifies selected state', async () => {
    await twd.visit('/calendar');

    // Compute today's date string using the same locale as the component
    const now = new Date();
    const todayStr = now.toLocaleDateString();

    // Find the button for today's date by role, then filter by data-day
    const todayBtn = (await screenDom
      .findAllByRole('button'))
      .find((el) => el.getAttribute('data-day') === todayStr);
    expect(todayBtn).to.not.equal(undefined, 'Today button should exist');

    // The current date should be selected initially
    twd.should(todayBtn as HTMLElement, 'have.attr', 'data-selected-single', 'true');

    // Pick a different day in the same month to change selection
    const targetDay = now.getDate() === 15 ? 16 : 15;
    const target = new Date(now.getFullYear(), now.getMonth(), targetDay);
    const targetStr = target.toLocaleDateString();
    let targetBtn = (await screenDom
      .findAllByRole('button'))
      .find((el) => el.getAttribute('data-day') === targetStr);
    expect(targetBtn).to.not.equal(undefined, 'Target button should exist');

    await userEvent.click(targetBtn!);
    // Verify the new selection and that the previous date is no longer selected
    targetBtn = (await screenDom
      .findAllByRole('button'))
      .find((el) => el.getAttribute('data-day') === targetStr);
    twd.should(targetBtn as HTMLElement, 'have.attr', 'data-selected-single', 'true');
  });

  it('changes month/year via selects and navigates months with buttons', async () => {
    await twd.visit('/calendar');

    // Controls
    const monthSelect = await screenDom.findByRole('combobox', { name: /month/i });
    const yearSelect = await screenDom.findByRole('combobox', { name: /year/i });

    // Target a different month/year than "now" using calendar's abbreviated month labels (e.g., "dic", "jan", "feb")
    const targetYear = new Date().getFullYear() - 1; // previous year to ensure change
    const targetMonthLabel = 'dic';

    await userEvent.selectOptions(monthSelect, targetMonthLabel);
    await userEvent.selectOptions(yearSelect, \`\${targetYear}\`);

    // Verify a day in the chosen month/year exists and can be selected
    const targetDate = new Date(targetYear, 11, 15); // Dec 15 of target year
    const targetStr = targetDate.toLocaleDateString();
    let decBtn = (await screenDom
      .findAllByRole('button'))
      .find((el) => el.getAttribute('data-day') === targetStr);
    expect(decBtn).to.not.equal(undefined, 'December target day should exist');

    await userEvent.click(decBtn!);
    decBtn = (await screenDom
      .findAllByRole('button'))
      .find((el) => el.getAttribute('data-day') === targetStr);
    twd.should(decBtn as HTMLElement, 'have.attr', 'data-selected-single', 'true');

    // Navigate to next month and check a date from that month renders
    const nextBtn = await screenDom.findByRole('button', { name: /next month/i });
    await userEvent.click(nextBtn);

    const janStr = new Date(targetYear + 1, 0, 15).toLocaleDateString();
    const janBtn = (await screenDom
      .findAllByRole('button'))
      .find((el) => el.getAttribute('data-day') === janStr);
    expect(janBtn).to.not.equal(undefined, 'January target day should appear after next month');

    // Navigate back to previous month and ensure January date is still reachable
    const prevBtn = await screenDom.findByRole('button', { name: /previous month/i });
    await userEvent.click(prevBtn);

    const decBtnBack = (await screenDom
      .findAllByRole('button'))
      .find((el) => el.getAttribute('data-day') === targetStr);
    expect(decBtnBack).to.not.equal(undefined, 'December target day should reappear after previous month');
  });
});`;

  const componentCode = `"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
      <p className="text-sm text-muted-foreground">
        Selected: {date ? date.toLocaleDateString() : 'None'}
      </p>
    </div>
  )
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-6">Calendar</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-6 bg-background">
          <div className="space-y-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow-sm"
              captionLayout="dropdown"
            />
            <p className="text-sm text-muted-foreground">
              Selected: {date ? date.toLocaleDateString() : 'None'}
            </p>
          </div>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="Select dates using the `data-day` attribute added by the calendar. Verify selection via the `data-selected-single` attribute on the clicked day button."
        componentCode={componentCode}
        componentDescription="Simple single-date calendar demo with dropdown month/year caption."
      />
    </div>
  );
};

export default CalendarPage;
