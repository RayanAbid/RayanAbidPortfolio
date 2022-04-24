import React, { useState } from "react";
import Lottie from "lottie-react";
import heroSection from "../../assets/animations/heroSection.json";
function HeroRight() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
        {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
        <Lottie loop={true} animationData={heroSection} />
        {/* <img
          className="md:absolute md:w-1/2 md:-ml-28"
          src="https://cdn.tuk.dev/assets/components/111220/Hero4/Device - Macbook Pro.png"
          alt
        /> */}
      </div>
    </>
  );
}

export default HeroRight;
