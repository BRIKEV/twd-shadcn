import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverPage = () => {
  const testCode = `import { twd, screenDom, screenDomGlobal, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Popover Component', () => {
  it('should open popover and interact with form inputs', async () => {
    // Navigate to the Popover page
    await twd.visit('/popover');
    
    // Find and click the trigger button
    const triggerButton = await screenDom.findByRole('button', { name: 'Open popover' });
    twd.should(triggerButton, 'be.visible');
    await userEvent.click(triggerButton);
    
    // Verify popover appears (using screenDomGlobal since it's rendered in a portal)
    const popoverTitle = await screenDomGlobal.findByText('Dimensions');
    twd.should(popoverTitle, 'be.visible');
    
    // Verify popover description
    const popoverDescription = await screenDomGlobal.findByText('Set the dimensions for the layer.');
    twd.should(popoverDescription, 'be.visible');
    
    // Find and verify inputs
    const widthInput = await screenDomGlobal.findByLabelText('Width');
    twd.should(widthInput, 'have.value', '100%');
    
    const maxWidthInput = await screenDomGlobal.findByLabelText('Max. width');
    twd.should(maxWidthInput, 'have.value', '300px');
    
    const heightInput = await screenDomGlobal.findByLabelText('Height');
    twd.should(heightInput, 'have.value', '25px');
    
    // Change width value
    await userEvent.clear(widthInput);
    await userEvent.type(widthInput, '80%');
    
    // Verify the change
    const updatedWidthInput = await screenDomGlobal.findByLabelText('Width');
    twd.should(updatedWidthInput, 'have.value', '80%');
    
    // Click outside or press Escape to close popover
    await userEvent.keyboard('{Escape}');
    await twd.wait(500); // wait for the popover to close
    // Verify popover is closed
    const closedPopover = await screenDomGlobal.queryByText('Dimensions');
    expect(closedPopover).to.eql(null);
  });
});`;

  const componentCode = `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Popover</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Dimensions</h4>
                  <p className="text-muted-foreground text-sm">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input
                      id="maxWidth"
                      defaultValue="300px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <Input
                      id="maxHeight"
                      defaultValue="none"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test popovers with TWD using screenDom.global for portal-rendered content. It covers opening the popover, verifying content, interacting with form inputs, and closing with Escape."
        componentCode={componentCode}
        componentDescription="A popover component with form inputs for setting dimensions. The popover is triggered by clicking a button and can be closed by pressing Escape or clicking outside."
      />
    </div>
  );
};

export default PopoverPage;
