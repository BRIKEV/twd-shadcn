import { twd, screenDom, userEvent } from 'twd-js';
import { describe, it } from 'twd-js/runner';

describe('Slider Component', () => {
  it('should render slider and change value', async () => {
    // Navigate to the Slider page
    await twd.visit('/slider');
    
    // Find the slider input
    const sliderInput = await screenDom.findByRole('slider');
    twd.should(sliderInput, 'be.visible');
    
    // Verify initial value
    twd.should(sliderInput, 'have.attr', 'aria-valuenow', '50');
    
    // Change the slider value
    await userEvent.type(sliderInput, '{ArrowRight}');
    
    // Verify the new value
    const updatedSlider = await screenDom.findByRole('slider');
    twd.should(updatedSlider, 'have.attr', 'aria-valuenow', '51');
  });
});
