import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";

const DataTablePage = () => {
  const testCode = `// WIP: Data Table tests with TanStack Table coming soon`;
  const componentCode = `// WIP: Complex data table with sorting, filtering, and pagination using TanStack Table coming soon`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Data Table</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center min-h-[200px]">
          <p className="text-muted-foreground">Complex data table with TanStack Table coming soon</p>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="Test documentation coming soon. Will demonstrate testing advanced features like sorting, filtering, and pagination."
        componentCode={componentCode}
        componentDescription="A feature-rich data table powered by TanStack Table with column sorting, row filtering, and pagination controls."
      />
    </div>
  );
};

export default DataTablePage;
