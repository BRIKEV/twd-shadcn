import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsPage = () => {
  const testCode = `import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Tabs Component', () => {
  it('should render tabs and allow navigation', async () => {
    // Navigate to the Tabs page
    await twd.visit('/tabs');
    
    // Find the Account tab (should be selected by default)
    const accountTab = await screenDom.findByRole('tab', { name: 'Account' });
    twd.should(accountTab, 'have.attr', 'aria-selected', 'true');
    
    // Verify account content is visible
    const accountContent = await screenDom.findByText('Make changes to your account here. Click save when you\\'re done.');
    twd.should(accountContent, 'be.visible');
    
    // Click on Password tab
    const passwordTab = await screenDom.findByRole('tab', { name: 'Password' });
    twd.should(passwordTab, 'have.attr', 'aria-selected', 'false');
    await userEvent.click(passwordTab);
    
    // Verify Password tab is now selected
    const updatedPasswordTab = await screenDom.findByRole('tab', { name: 'Password' });
    twd.should(updatedPasswordTab, 'have.attr', 'aria-selected', 'true');
    
    // Verify password content is visible
    const passwordContent = await screenDom.findByText('Change your password here. After saving, you\\'ll be logged out.');
    twd.should(passwordContent, 'be.visible');
    
    // Verify Account tab is no longer selected
    const updatedAccountTab = await screenDom.findByRole('tab', { name: 'Account' });
    twd.should(updatedAccountTab, 'have.attr', 'aria-selected', 'false');
  });
});`;

  const componentCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Password Settings</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Tabs</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Account Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Make changes to your account here. Click save when you're done.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Password Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Change your password here. After saving, you'll be logged out.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test tab navigation with TWD, verifying aria-selected attributes and content visibility."
        componentCode={componentCode}
        componentDescription="Simple tabs implementation with multiple panels and navigation."
      />
    </div>
  );
};

export default TabsPage;
