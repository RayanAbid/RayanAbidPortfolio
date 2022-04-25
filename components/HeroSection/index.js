import React, { useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
function IndexPage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="  relative z-0  xs:py-6 bg-main xs:px-7 xl:px-14">
        <div className="flex flex-col-reverse md:flex-row">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
