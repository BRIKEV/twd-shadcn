import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TooltipPage = () => {
  const testCode = `import { twd, screenDom, screenDomGlobal, userEvent, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Tooltip Component', () => {
  it('should show tooltip on hover and hide on unhover', async () => {
    // Navigate to the Tooltip page
    await twd.visit('/tooltip');
    
    // Find the button that triggers the tooltip
    const tooltipTrigger = await screenDom.findByRole('button', { name: 'Hover me' });
    twd.should(tooltipTrigger, 'be.visible');
    
    // Hover over the trigger
    await userEvent.hover(tooltipTrigger);
    
    // Verify tooltip appears (using screenDomGlobal since it's rendered in a portal)
    const tooltip = await screenDomGlobal.findByRole('tooltip');
    twd.should(tooltip, 'be.visible');
    twd.should(tooltip, 'have.text', 'This is a helpful tooltip');
    
    // Unhover
    await userEvent.unhover(tooltipTrigger);
    
    // Verify tooltip is hidden
    const hiddenTooltip = screenDomGlobal.queryByText('This is a helpful tooltip', { selector: '[data-slot="tooltip"]' });
    expect(hiddenTooltip).eql(null);
  });
});`;

  const componentCode = `import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a helpful tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Tooltip</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <TooltipProvider>
            <Tooltip defaultOpen>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a helpful tooltip</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test tooltips with TWD using screenDomGlobal for portal-rendered content. It verifies tooltip visibility on hover and hidden state on unhover."
        componentCode={componentCode}
        componentDescription="A tooltip component that displays helpful information on hover. Wrapped with TooltipProvider for context management. Perfect for providing quick hints without cluttering the UI."
      />
    </div>
  );
};

export default TooltipPage;
