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
          <div className="xs:invisible md:visible custom-shape-divider-bottom-1650830520">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
