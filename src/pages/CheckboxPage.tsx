import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const CheckboxPage = () => {
  const [terms, setTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  const testCode = `import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Checkbox Component', () => {
  it('should render checkboxes and allow toggling', async () => {
    // Navigate to the Checkbox page
    await twd.visit('/checkbox');
    
    // Find the unchecked checkbox
    const uncheckedBox = await screenDom.findByRole('checkbox', { name: 'Accept terms and conditions' });
    twd.should(uncheckedBox, 'have.attr', 'aria-checked', 'false');
    
    // Find the checked checkbox
    const checkedBox = await screenDom.findByRole('checkbox', { name: 'Subscribe to newsletter' });
    twd.should(checkedBox, 'have.attr', 'aria-checked', 'true');
    
    // Click the unchecked checkbox
    await userEvent.click(uncheckedBox);
    const updatedUncheckedBox = await screenDom.findByRole('checkbox', { name: 'Accept terms and conditions' });
    twd.should(updatedUncheckedBox, 'have.attr', 'aria-checked', 'true');
    
    // Click the checked checkbox to uncheck it
    await userEvent.click(checkedBox);
    const updatedCheckedBox = await screenDom.findByRole('checkbox', { name: 'Subscribe to newsletter' });
    twd.should(updatedCheckedBox, 'have.attr', 'aria-checked', 'false');
  });
});`;

  const componentCode = `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function CheckboxDemo() {
  const [terms, setTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="terms" 
          checked={terms}
          onCheckedChange={(checked) => setTerms(checked as boolean)}
          aria-label="Accept terms and conditions"
        />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="newsletter" 
          checked={newsletter}
          onCheckedChange={(checked) => setNewsletter(checked as boolean)}
          aria-label="Subscribe to newsletter"
        />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
    </div>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Checkbox</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={terms}
                onCheckedChange={(checked) => setTerms(checked as boolean)}
                aria-label="Accept terms and conditions"
              />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="newsletter" 
                checked={newsletter}
                onCheckedChange={(checked) => setNewsletter(checked as boolean)}
                aria-label="Subscribe to newsletter"
              />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>
          </div>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test checkbox interactions with TWD, verifying checked states and toggle functionality."
        componentCode={componentCode}
        componentDescription="Simple checkbox implementation showing checked and unchecked states with toggle functionality."
      />
    </div>
  );
};

export default CheckboxPage;
