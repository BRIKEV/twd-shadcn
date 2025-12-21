import { Link } from "react-router";
import { ComponentDocs } from "@/components/component-docs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionPage = () => {
  const testCode = `import { twd, screenDom, userEvent } from 'twd-js';
  import { describe, it } from 'twd-js/runner';
  
  describe('Accordion Component', () => {
    it('should render the accordion and allow toggling', async () => {
      // Navigate to the Accordion page
      await twd.visit('/accordion');
      const firstAccordionElement = await screenDom.getByRole('button', { name: 'Product Information' });
      // assert that the content is initially visible
      twd.should(firstAccordionElement, 'have.attr', 'aria-expanded', 'true');
      // assert content inside first accordion is visible
      const firstAccordionContent = await screenDom.getByText('Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.');
      twd.should(firstAccordionContent, 'be.visible');
      const secondAccordionElement = await screenDom.getByRole('button', { name: 'Shipping Details' });
      // assert that the content is initially hidden
      twd.should(secondAccordionElement, 'have.attr', 'aria-expanded', 'false');
      const thridAccordionElement = await screenDom.getByRole('button', { name: 'Return Policy' });
      // assert that the content is initially hidden
      twd.should(thridAccordionElement, 'have.attr', 'aria-expanded', 'false');
  
      // Simulate a user click to expand the second accordion item
      await userEvent.click(secondAccordionElement);
      const updatedSecondAccordionElement = await screenDom.getByRole('button', { name: 'Shipping Details' });
      twd.should(updatedSecondAccordionElement, 'have.attr', 'aria-expanded', 'true');
      
      // validate first accordion is collapsed
      const updatedFirstAccordionElement = await screenDom.getByRole('button', { name: 'Product Information' });
      twd.should(updatedFirstAccordionElement, 'have.attr', 'aria-expanded', 'false');
    });
  });`;
  const componentCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Accordion</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
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

export default AccordionPage;
