import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const SelectPage = () => {
  const [value, setValue] = useState("");

  const testCode = `import { twd, screenDom, screenDomGlobal, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Select Component', () => {
  it('should render select and allow choosing options', async () => {
    // Navigate to the Select page
    await twd.visit('/select');
    
    // Find the select trigger button
    const selectTrigger = await screenDom.findByRole('combobox', { name: 'Select a fruit' });
    twd.should(selectTrigger, 'be.visible');
    twd.should(selectTrigger, 'have.text', 'Select a fruit');
    
    // Click to open the select
    await userEvent.click(selectTrigger);
    
    // Find and click an option using screenDomGlobal as it is rendered in a portal
    const appleOption = await screenDomGlobal.findByRole('option', { name: 'Apple' });
    twd.should(appleOption, 'be.visible');
    await userEvent.click(appleOption);
    
    // Verify the selected value is displayed
    const updatedSelectTrigger = await screenDom.findByRole('combobox', { name: 'Select a fruit' });
    twd.should(updatedSelectTrigger, 'have.text', 'Apple');
  });
});
  `;

  const componentCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function SelectDemo() {
  const [value, setValue] = useState("");

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger aria-label="Select a fruit">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
      </SelectContent>
    </Select>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Select</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger aria-label="Select a fruit">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test select dropdown interactions with TWD, including opening the menu and selecting options."
        componentCode={componentCode}
        componentDescription="Simple select dropdown implementation with multiple options."
      />
    </div>
  );
};

export default SelectPage;
