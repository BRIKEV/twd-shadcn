import { Link } from "react-router";
import { useState } from "react";
import { ComponentDocs } from "@/components/component-docs";
import { Slider } from "@/components/ui/slider";

const SliderPage = () => {
  const [value, setValue] = useState([50]);

  const testCode = `import { twd, screenDom, userEvent } from 'twd-js';
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
});`;

  const componentCode = `import { useState } from 'react';
import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  const [value, setValue] = useState([50]);

  return (
    <div className="w-full max-w-sm space-y-4">
      <Slider 
        value={value} 
        onValueChange={setValue}
        max={100}
        step={1}
        className="w-full"
      />
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Value: {value[0]}</span>
      </div>
    </div>
  );
}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Slider</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-8 bg-background flex items-center justify-center">
          <div className="w-full max-w-sm space-y-4">
            <Slider 
              value={value} 
              onValueChange={setValue}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Value: {value[0]}</span>
            </div>
          </div>
        </div>
      </div>

      <ComponentDocs
        testCode={testCode}
        testDescription="This test demonstrates how to test slider inputs with TWD. It verifies slider rendering, initial value, and value changes through user interaction."
        componentCode={componentCode}
        componentDescription="A simple range slider component that displays and updates a numeric value. Common use case for forms requiring numeric input like volume controls or range selection."
      />
    </div>
  );
};

export default SliderPage;
