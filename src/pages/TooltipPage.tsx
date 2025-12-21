import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";

const TooltipPage = () => {
  const testCode = `// WIP: Test code coming soon`;
  const componentCode = `// WIP: Component code coming soon`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Tooltip</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <p className="text-muted-foreground">Component preview coming soon</p>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="Test documentation coming soon."
        componentCode={componentCode}
        componentDescription="Component implementation coming soon."
      />
    </div>
  );
};

export default TooltipPage;
