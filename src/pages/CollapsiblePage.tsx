import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CollapsiblePage = () => {
  const testCode = `import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it, expect } from 'twd-js/runner';

describe('Collapsible Component', () => {
  it('toggles content visibility on trigger click', async () => {
    await twd.visit('/collapsible');

    const toggleButton = await screenDom.findByRole('button', { name: 'Toggle content' });
    twd.should(toggleButton, 'be.visible');

    // Initially collapsed (content not in DOM)
    let content = screenDom.queryByText('Here is some hidden content');
    expect(content).eql(null);

    // Open
    await userEvent.click(toggleButton);
    const opened = await screenDom.findByText('Here is some hidden content');
    twd.should(opened, 'be.visible');

    // Close
    await userEvent.click(toggleButton);
    const closed = screenDom.queryByText('Here is some hidden content');
    expect(closed).eql(null);
  });
});`;

  const componentCode = `import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle content</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-4 p-4 border rounded-md">
          Here is some hidden content
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-6">Collapsible</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline">Toggle content</Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-4 p-4 border rounded-md">
                Here is some hidden content
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="Tests toggling visibility for a simple Collapsible using query checks and click interactions."
        componentCode={componentCode}
        componentDescription="A minimal Collapsible with a trigger button and hidden content that appears when opened."
      />
    </div>
  );
};

export default CollapsiblePage;
