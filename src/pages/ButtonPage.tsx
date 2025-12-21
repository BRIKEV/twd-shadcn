import { Button } from "@/components/ui/button";
import { ComponentDocs } from "@/components/component-docs";
import { useState } from "react";
import { Link } from "react-router";

const ButtonPage = () => {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const testCode = `import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Button Component', () => {
  it('should render the button with correct text and interaction', async () => {
    // Navigate to the Button page
    await twd.visit('/button');
    const button = await screenDom.getByRole('button', { name: 'Click Me 0' });
    twd.should(button, 'be.visible');
    
    // Simulate a user click
    await userEvent.click(button);
    const updatedButton = await screenDom.getByRole('button', { name: 'Click Me 1' });
    twd.should(updatedButton, 'be.visible');
  });
});`;

  const componentCode = `import { Button } from "@/components/ui/button";
import { useState } from "react";

const ButtonExample = () => {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <Button onClick={handleClick}>
      Click Me {clickCount}
    </Button>
  );
};`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Button</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <Button onClick={handleClick}>Click Me {clickCount}</Button>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test button interactions with TWD, including clicks and text updates."
        componentCode={componentCode}
        componentDescription="Component implementation showing a button with click counter functionality."
      />
    </div>
  );
};

export default ButtonPage;
