import React, { useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
function IndexPage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="mx-auto container relative z-0  bg-main xl:px-14">
        <div className="flex flex-col-reverse md:flex-row">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
