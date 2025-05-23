import React from "react";
import BeforeAfterSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
}

const CustomBeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after, altBefore = "Before", altAfter = "After" }) => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <BeforeAfterSlider
        firstImage={{ imageUrl: before, alt: altBefore }}
        secondImage={{ imageUrl: after, alt: altAfter }}
        className="rounded-lg"
        delimiterColor="#d4b88e"
        delimiterIconStyles={{ background: '#d4b88e', borderRadius: '50%' }}
      />
    </div>
  );
};

export default CustomBeforeAfterSlider; 