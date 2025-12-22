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

    // Find the button for today's date via the data-day attribute
    const todayBtn = document.querySelector(\`[data-day="\${todayStr}"]\`);
    twd.should(todayBtn, 'exist');

    // The current date should be selected initially
    expect(todayBtn?.getAttribute('data-selected-single')).eql('true');

    // Pick a different day in the same month to change selection
    const targetDay = now.getDate() === 15 ? 16 : 15;
    const target = new Date(now.getFullYear(), now.getMonth(), targetDay);
    const targetStr = target.toLocaleDateString();
    const targetBtn = document.querySelector(\`[data-day="\${targetStr}"]\`);
    twd.should(targetBtn, 'exist');

    await userEvent.click(targetBtn!);

    // Verify the new selection and that the previous date is no longer selected
    expect(targetBtn?.getAttribute('data-selected-single')).eql('true');
    expect(todayBtn?.getAttribute('data-selected-single')).eql('false');
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
