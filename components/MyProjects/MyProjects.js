import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";

function MyProjects() {
  return (
    <>
      <div className="  relative border-top-color:bg-white xs:py-6 bg-white xs:px-7 xl:px-14">
        <h1 className="xs:py-10 md:py-20 xs:text-6xl md:text-6xl lg:text-6xl xl:text-6xl w-100 font-black text-main text-center md:text-left tracking-tighter f-f-i  leading-tight text-heading-color">
          <i class="fab text-gitBlack fa-github"></i> My{" "}
          <span className="text-dark">
            <span className="text-dark">Projects</span>
          </span>
        </h1>
        <Carousel />
      </div>
    </>
  );
}

export default MyProjects;
