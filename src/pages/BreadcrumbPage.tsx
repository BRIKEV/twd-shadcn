import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BreadcrumbPageComponent = () => {
  const testCode = `import { twd, screenDom, screenDomGlobal, userEvent, expect } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Breadcrumb Component', () => {
  it('renders breadcrumb navigation with ellipsis dropdown', async () => {
    await twd.visit('/breadcrumb');

    // Check breadcrumb container
    const breadcrumb = await screenDom.findByRole('navigation');
    twd.should(breadcrumb, 'be.visible');

    // Check individual breadcrumb items
    const homeLink = await screenDom.findByRole('link', { name: 'Home' });
    twd.should(homeLink, 'be.visible');

    const componentsLink = await screenDom.findByRole('link', { name: 'Components' });
    twd.should(componentsLink, 'be.visible');

    // Check current page (BreadcrumbPage)
    const currentPage = await screenDom.findByRole('link', { name: 'Breadcrumb' });
    twd.should(currentPage, 'be.visible');

    // Check separators exist
    const separators = await twd.getAll('[data-slot="breadcrumb-separator"]');
    expect(separators.length).to.be.greaterThan(0);

    // Open dropdown menu
    const ellipsisButton = await screenDom.findByRole('button', { name: 'Toggle menu' });
    await userEvent.click(ellipsisButton);

    // Verify dropdown items appear (using screenDomGlobal for portal)
    const docOption = await screenDomGlobal.findByRole('menuitem', { name: 'Documentation' });
    twd.should(docOption, 'be.visible');

    const themesOption = await screenDomGlobal.findByRole('menuitem', { name: 'Themes' });
    twd.should(themesOption, 'be.visible');

    const githubOption = await screenDomGlobal.findByRole('menuitem', { name: 'GitHub' });
    twd.should(githubOption, 'be.visible');
  });
});`;

  const componentCode = `import { Link } from "react-router"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="size-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/button">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Breadcrumb</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="size-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                    <DropdownMenuItem>Themes</DropdownMenuItem>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/button">Components</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="Tests breadcrumb navigation including links, separators, and the ellipsis dropdown menu which renders in a portal using screenDomGlobal."
        componentCode={componentCode}
        componentDescription="A breadcrumb navigation component showing the current page hierarchy with an expandable dropdown menu for hidden navigation items."
      />
    </div>
  );
};

export default BreadcrumbPageComponent;
