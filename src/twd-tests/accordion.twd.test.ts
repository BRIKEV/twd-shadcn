import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Accordion Component', () => {
  it('should render the accordion and allow toggling', async () => {
    // Navigate to the Accordion page
    await twd.visit('/accordion');
    const firstAccordionElement = await screenDom.findByRole('button', { name: 'Product Information' });
    // assert that the content is initially visible
    twd.should(firstAccordionElement, 'have.attr', 'aria-expanded', 'true');
    // assert content inside first accordion is visible
    const firstAccordionContent = await screenDom.getByText('Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.');
    twd.should(firstAccordionContent, 'be.visible');
    const secondAccordionElement = await screenDom.findByRole('button', { name: 'Shipping Details' });
    // assert that the content is initially hidden
    twd.should(secondAccordionElement, 'have.attr', 'aria-expanded', 'false');
    const thridAccordionElement = await screenDom.findByRole('button', { name: 'Return Policy' });
    // assert that the content is initially hidden
    twd.should(thridAccordionElement, 'have.attr', 'aria-expanded', 'false');

    // Simulate a user click to expand the second accordion item
    await userEvent.click(secondAccordionElement);
    const updatedSecondAccordionElement = await screenDom.findByRole('button', { name: 'Shipping Details' });
    twd.should(updatedSecondAccordionElement, 'have.attr', 'aria-expanded', 'true');
    
    // validate first accordion is collapsed
    const updatedFirstAccordionElement = await screenDom.findByRole('button', { name: 'Product Information' });
    twd.should(updatedFirstAccordionElement, 'have.attr', 'aria-expanded', 'false');
  });
});