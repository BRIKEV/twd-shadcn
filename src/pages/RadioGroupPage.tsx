import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const RadioGroupPage = () => {
  const [value, setValue] = useState("default");

  const testCode = `import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Radio Group Component', () => {
  it('should render radio group and allow selection', async () => {
    // Navigate to the Radio Group page
    await twd.visit('/radio-group');
    
    // Find the default selected radio
    const defaultRadio = await screenDom.findByRole('radio', { name: 'Default' });
    twd.should(defaultRadio, 'be.checked');
    
    // Find the comfortable radio (not selected)
    const comfortableRadio = await screenDom.findByRole('radio', { name: 'Comfortable' });
    twd.should(comfortableRadio, 'not.be.checked');
    
    // Click on comfortable option
    await userEvent.click(comfortableRadio);
    const updatedComfortableRadio = await screenDom.findByRole('radio', { name: 'Comfortable' });
    twd.should(updatedComfortableRadio, 'be.checked');
    
    // Verify default is no longer checked
    const updatedDefaultRadio = await screenDom.findByRole('radio', { name: 'Default' });
    twd.should(updatedDefaultRadio, 'not.be.checked');
  });
});`;

  const componentCode = `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function RadioGroupDemo() {
  const [value, setValue] = useState("default");

  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" aria-label="Default" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" aria-label="Comfortable" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" aria-label="Compact" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Radio Group</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <RadioGroup value={value} onValueChange={setValue}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" aria-label="Default" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" aria-label="Comfortable" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" aria-label="Compact" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test radio group selections with TWD, verifying exclusive selection behavior."
        componentCode={componentCode}
        componentDescription="Simple radio group implementation showing mutually exclusive options."
      />
    </div>
  );
};

export default RadioGroupPage;
