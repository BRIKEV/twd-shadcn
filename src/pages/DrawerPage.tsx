import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DrawerPage = () => {
  const testCode = `import { twd, screenDom, screenDomGlobal, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Drawer Component', () => {
  it('should open drawer and close it', async () => {
    // Navigate to the Drawer page
    await twd.visit('/drawer');
    
    // Find and click the trigger button
    const triggerButton = await screenDom.findByRole('button', { name: 'Open Drawer' });
    twd.should(triggerButton, 'be.visible');
    await userEvent.click(triggerButton);
    
    // Verify drawer appears (using screenDomGlobal since it's rendered in a portal)
    const drawerTitle = await screenDomGlobal.findByRole('heading', { name: 'Drawer Title' });
    twd.should(drawerTitle, 'be.visible');
    
    // Verify drawer description
    const drawerDescription = await screenDomGlobal.findByText('This is a drawer sidebar component.');
    twd.should(drawerDescription, 'be.visible');
    
    // Verify close button is present
    const closeButton = await screenDomGlobal.findByRole('button', { name: 'Close' });
    twd.should(closeButton, 'be.visible');
    
    // Click close button
    await userEvent.click(closeButton);
    await twd.wait(500); // wait for the drawer to close
    // Verify drawer is closed
    const closedDrawer = await screenDomGlobal.queryByRole('heading', { name: 'Drawer Title' });
    expect(closedDrawer).to.eql(null);
  });
});`;

  const componentCode = `import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a drawer sidebar component.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <p className="text-sm text-muted-foreground">
            Drawers are a side panel that slides in from the edge of the screen.
            Perfect for navigation, filters, or additional content.
          </p>
        </div>
        <div className="p-4 flex justify-end">
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Drawer</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerDescription>This is a drawer sidebar component.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Drawers are a side panel that slides in from the edge of the screen.
                  Perfect for navigation, filters, or additional content.
                </p>
              </div>
              <div className="p-4 flex justify-end">
                <DrawerClose asChild>
                  <Button>Close</Button>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test drawer components with TWD using screenDomGlobal for portal-rendered content. It verifies drawer opening, content visibility, and closing behavior."
        componentCode={componentCode}
        componentDescription="A drawer component that slides in from the edge with a title, description, and content. Useful for side navigation, filters, or additional information panels."
      />
    </div>
  );
};

export default DrawerPage;
