import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
];

const TablePage = () => {
  const testCode = `import { twd, screenDom } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Basic Table Component', () => {
  it('renders headers, caption, and rows', async () => {
    await twd.visit('/table');

    // Table and caption
    const table = await screenDom.findByRole('table');
    twd.should(table, 'be.visible');
    const caption = await screenDom.findByText('A list of your recent invoices.');
    twd.should(caption, 'be.visible');

    // Column headers (recommended selectors for docs)
    await screenDom.findByRole('columnheader', { name: 'Invoice' });
    await screenDom.findByRole('columnheader', { name: 'Status' });
    await screenDom.findByRole('columnheader', { name: 'Method' });
    await screenDom.findByRole('columnheader', { name: 'Amount' });

    // Body rows and cells (recommended selectors)
    const inv001 = await screenDom.findByText('INV001');
    twd.should(inv001, 'be.visible');
    await screenDom.findByText('Paid');
    await screenDom.findByText('Credit Card');
    await screenDom.findByText('$250.00');

    const inv002 = await screenDom.findByText('INV002');
    twd.should(inv002, 'be.visible');
    await screenDom.findByText('Pending');
    await screenDom.findByText('PayPal');
    await screenDom.findByText('$150.00');

    // Footer total
    const totalFooter = await screenDom.findByText('$2,500.00');
    twd.should(totalFooter, 'be.visible');
  });
});`;

  const componentCode = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  }
]

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Table</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background min-h-[200px]">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="Selectors for table: use role 'table', caption text, columnheader names, and individual cell texts for rows."
        componentCode={componentCode}
        componentDescription="A basic table rendering recent invoices with header, body, and footer totals."
      />
    </div>
  );
};

export default TablePage;
