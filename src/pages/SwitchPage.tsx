import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const SwitchPage = () => {
  const [airplaneMode, setAirplaneMode] = useState(false);

  const testCode = `import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Switch Component', () => {
  it('should render switch and allow toggling', async () => {
    // Navigate to the Switch page
    await twd.visit('/switch');
    
    // Find the switch by its label
    const switchElement = await screenDom.findByRole('switch', { name: 'Airplane Mode' });
    twd.should(switchElement, 'have.attr', 'aria-checked', 'false');
    
    // Click to enable
    await userEvent.click(switchElement);
    const updatedSwitch = await screenDom.findByRole('switch', { name: 'Airplane Mode' });
    twd.should(updatedSwitch, 'have.attr', 'aria-checked', 'true');
    
    // Click to disable
    await userEvent.click(updatedSwitch);
    const finalSwitch = await screenDom.findByRole('switch', { name: 'Airplane Mode' });
    twd.should(finalSwitch, 'have.attr', 'aria-checked', 'false');
  });
});`;

  const componentCode = `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function SwitchDemo() {
  const [airplaneMode, setAirplaneMode] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <Switch 
        id="airplane-mode"
        checked={airplaneMode}
        onCheckedChange={setAirplaneMode}
        aria-label="Airplane Mode"
      />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Switch</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Switch 
              id="airplane-mode"
              checked={airplaneMode}
              onCheckedChange={setAirplaneMode}
              aria-label="Airplane Mode"
            />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test switch toggle functionality with TWD, verifying aria-checked states."
        componentCode={componentCode}
        componentDescription="Simple switch implementation with on/off toggle functionality."
      />
    </div>
  );
};

export default SwitchPage;
