import { Link } from "react-router";
import { useState } from "react";
import { ComponentDocs } from "@/components/component-docs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationPage = () => {
  const [page, setPage] = useState(2);
  const pages = [1, 2, 3, 4, 5];

  const testCode = `import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Pagination Component', () => {
  it('navigates via page links and next/previous controls', async () => {
    await twd.visit('/pagination');

    // Initial page
    const initial = await screenDom.findByText('Page: 2');
    twd.should(initial, 'be.visible');

    // Click page 3
    const page3 = await screenDom.findByRole('link', { name: '3' });
    await userEvent.click(page3);
    const afterPage3 = await screenDom.findByText('Page: 3');
    twd.should(afterPage3, 'be.visible');

    // Click Next (to 4)
    const next = await screenDom.findByRole('link', { name: 'Go to next page' });
    await userEvent.click(next);
    const afterNext = await screenDom.findByText('Page: 4');
    twd.should(afterNext, 'be.visible');

    // Click Previous (to 3)
    const prev = await screenDom.findByRole('link', { name: 'Go to previous page' });
    await userEvent.click(prev);
    const afterPrev = await screenDom.findByText('Page: 3');
    twd.should(afterPrev, 'be.visible');
  });
});`;

  const componentCode = `import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo() {
  const [page, setPage] = useState(2);
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-4">
      <div className="text-sm font-medium">Page: {page}</div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }} />
          </PaginationItem>
          {pages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(e) => { e.preventDefault(); setPage(p); }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(5, p + 1)); }} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-6">Pagination</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <div className="space-y-4">
            <div className="text-sm font-medium">Page: {page}</div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }} />
                </PaginationItem>
                {pages.map((p) => (
                  <PaginationItem key={p}>
                    <PaginationLink
                      href="#"
                      isActive={p === page}
                      onClick={(e) => { e.preventDefault(); setPage(p); }}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(5, p + 1)); }} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="Tests navigating through pagination using page links and next/previous controls."
        componentCode={componentCode}
        componentDescription="A simple stateful pagination demonstrating active page styling and next/previous navigation."
      />
    </div>
  );
};

export default PaginationPage;
