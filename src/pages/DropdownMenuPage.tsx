import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownMenuPage = () => {
  const testCode = `import { twd, screenDom, screenDomGlobal, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Dropdown Menu Component', () => {
  it('should open dropdown menu and click menu items', async () => {
    // Navigate to the Dropdown Menu page
    await twd.visit('/dropdown-menu');
    
    // Find and click the trigger button
    const triggerButton = await screenDom.findByRole('button', { name: 'Open Menu' });
    twd.should(triggerButton, 'be.visible');
    await userEvent.click(triggerButton);
    
    // Verify dropdown menu appears (using screenDomGlobal since it's rendered in a portal)
    const profileOption = await screenDomGlobal.findByRole('menuitem', { name: 'Profile' });
    twd.should(profileOption, 'be.visible');
    
    // Verify other menu items are present
    const settingsOption = await screenDomGlobal.findByRole('menuitem', { name: 'Settings' });
    const logoutOption = await screenDomGlobal.findByRole('menuitem', { name: 'Log out' });
    twd.should(settingsOption, 'be.visible');
    twd.should(logoutOption, 'be.visible');
    
    // Click a menu item
    await userEvent.click(profileOption);
    await twd.wait(500); // wait for the menu to close
    // Verify menu is closed after selection
    const closedMenu = await screenDomGlobal.queryByRole('menuitem', { name: 'Profile' });
    expect(closedMenu).to.eql(null);
  });
});`;

  const componentCode = `import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Dropdown Menu</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test dropdown menus with TWD using screenDomGlobal for portal-rendered content. It verifies menu opening, option visibility, and menu closing after selection."
        componentCode={componentCode}
        componentDescription="A dropdown menu component with account options, separators for visual grouping, and a logout action. The menu closes automatically after selecting an item."
      />
    </div>
  );
};

export default DropdownMenuPage;
