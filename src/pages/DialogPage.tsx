import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DialogPage = () => {
  const testCode = `import { twd, screenDom, userEvent, screenDomGlobal, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Dialog Component', () => {
  it('should open dialog and interact with form inputs', async () => {
    // Navigate to the Dialog page
    await twd.visit('/dialog');
    
    // Find and click the trigger button
    const triggerButton = await screenDom.findByRole('button', { name: 'Open Dialog' });
    twd.should(triggerButton, 'be.visible');
    await userEvent.click(triggerButton);
    
    // Verify dialog appears (using global since it's rendered in a portal)
    const dialogTitle = await screenDomGlobal.findByRole('heading', { name: 'Edit profile' });
    twd.should(dialogTitle, 'be.visible');
    
    // Verify dialog description
    const dialogDescription = await screenDomGlobal.findByText("Make changes to your profile here. Click save when you're done.");
    twd.should(dialogDescription, 'be.visible');
    
    // Find and interact with inputs
    const nameInput = await screenDomGlobal.findByLabelText('Name');
    twd.should(nameInput, 'have.value', 'Pedro Duarte');
    
    const usernameInput = await screenDomGlobal.findByLabelText('Username');
    twd.should(usernameInput, 'have.value', '@peduarte');
    
    // Clear and type new value
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'John Doe');
    const updatedNameInput = await screenDomGlobal.findByLabelText('Name');
    twd.should(updatedNameInput, 'have.value', 'John Doe');
    
    // Verify buttons are present
    const cancelButton = await screenDomGlobal.findByRole('button', { name: 'Cancel' });
    const saveButton = await screenDomGlobal.findByRole('button', { name: 'Save changes' });
    twd.should(cancelButton, 'be.visible');
    twd.should(saveButton, 'be.visible');
    
    // Click Cancel to close dialog
    await userEvent.click(cancelButton);
    await twd.wait(500); // wait for the dialog to close
    // Verify dialog is closed
    const closedDialog = await screenDomGlobal.queryByRole('heading', { name: 'Edit profile' });
    expect(closedDialog).to.eql(null);
  });
});`;

  const componentCode = `import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Dialog</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Name</Label>
                    <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Username</Label>
                    <Input id="username-1" name="username" defaultValue="@peduarte" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test dialogs with TWD using screenDom.global for portal-rendered content. It verifies dialog opening, form input interactions, and closing behavior."
        componentCode={componentCode}
        componentDescription="Dialog implementation with form inputs for editing profile information, including save and cancel actions."
      />
    </div>
  );
};

export default DialogPage;
