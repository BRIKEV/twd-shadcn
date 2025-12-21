import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const AlertDialogPage = () => {
  const testCode = `import { twd, screenDom, userEvent, screenDomGlobal, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Alert Dialog Component', () => {
  it('should open alert dialog and interact with buttons', async () => {
    // Navigate to the Alert Dialog page
    await twd.visit('/alert-dialog');
    
    // Find and click the trigger button
    const triggerButton = await screenDom.findByRole('button', { name: 'Show Dialog' });
    twd.should(triggerButton, 'be.visible');
    await userEvent.click(triggerButton);
    
    // Verify dialog appears (using global since it's rendered in a portal)
    const dialogTitle = await screenDomGlobal.findByRole('heading', { name: 'Are you absolutely sure?' });
    twd.should(dialogTitle, 'be.visible');
    
    // Verify dialog description
    const dialogDescription = await screenDomGlobal.findByText('This action cannot be undone. This will permanently delete your account and remove your data from our servers.');
    twd.should(dialogDescription, 'be.visible');
    
    // Verify Cancel and Continue buttons are present
    const cancelButton = await screenDomGlobal.findByRole('button', { name: 'Cancel' });
    const continueButton = await screenDomGlobal.findByRole('button', { name: 'Continue' });
    twd.should(cancelButton, 'be.visible');
    twd.should(continueButton, 'be.visible');
    
    // Click Cancel to close dialog
    await userEvent.click(cancelButton);
    await twd.wait(500); // wait for the dialog to close
    // Verify dialog is closed
    const closedDialog = await screenDomGlobal.queryByRole('heading', { name: 'Are you absolutely sure?' });
    expect(closedDialog).to.eql(null);
  });
});`;

  const componentCode = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Alert Dialog</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test alert dialogs with TWD using screenDom.global for portal-rendered content. It verifies dialog opening, content visibility, and button interactions."
        componentCode={componentCode}
        componentDescription="Alert dialog implementation for confirming destructive actions with cancel and continue options."
      />
    </div>
  );
};

export default AlertDialogPage;
