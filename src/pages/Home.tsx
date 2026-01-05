import { Link } from "react-router";

const Homepage = () => {
  const components = [
    { name: "Accordion", path: "/accordion" },
    { name: "Alert Dialog", path: "/alert-dialog" },
    { name: "Breadcrumb", path: "/breadcrumb" },
    { name: "Button", path: "/button" },
    { name: "Calendar", path: "/calendar" },
    { name: "Range Calendar", path: "/range-calendar", wip: true },
    { name: "Checkbox", path: "/checkbox" },
    { name: "Collapsible", path: "/collapsible" },
    { name: "Command", path: "/command" },
    { name: "Context Menu", path: "/context-menu" },
    { name: "Data Table", path: "/data-table" },
    { name: "Dialog", path: "/dialog" },
    { name: "Drawer", path: "/drawer" },
    { name: "Dropdown Menu", path: "/dropdown-menu" },
    { name: "Pagination", path: "/pagination" },
    { name: "Popover", path: "/popover" },
    { name: "Radio Group", path: "/radio-group" },
    { name: "Select", path: "/select" },
    { name: "Slider", path: "/slider" },
    { name: "Sonner", path: "/sonner", wip: true },
    { name: "Switch", path: "/switch" },
    { name: "Table", path: "/table" },
    { name: "Tabs", path: "/tabs" },
    { name: "Tooltip", path: "/tooltip" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">TWD + shadcn/ui</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Testing shadcn/ui Components Made Easy
        </p>
        <div className="max-w-2xl mx-auto text-left bg-muted/50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">About This Repository</h2>
          <p className="text-muted-foreground mb-4">
            This repository demonstrates how to test shadcn/ui components using TWD (Testing While Developing). 
            Each component page showcases the component implementation alongside its corresponding test code, 
            making it easy to understand how to write tests for your shadcn/ui components.
          </p>
          <p className="text-muted-foreground mb-4">
            If you're using shadcn/ui in your project, this guide will help you see how TWD simplifies 
            testing your frontend components with clean, maintainable test patterns.
          </p>
          <p className="text-muted-foreground">
            For more information about TWD, visit the{" "}
            <a 
              href="https://brikev.github.io/twd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              official documentation
            </a>
            .
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Component Examples</h2>
        <p className="text-muted-foreground mb-6">
          Explore each component to see implementation examples and testing patterns:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((component) => (
            <Link
              key={component.path}
              to={component.path}
              prefetch="intent"
              className="block p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-colors"
            >
              <span className="font-medium">{component.name}</span>
              {component.wip && <span className="text-xs text-muted-foreground ml-2">(WIP)</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;