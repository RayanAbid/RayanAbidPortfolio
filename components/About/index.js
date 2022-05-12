import React, { useState } from "react";

function AboutPage() {
  var TodayDate = new Date();
  var year = TodayDate.getFullYear();
  return (
    <>
      <div className="  relative border-top-color:bg-white xs:py-6   bg-white xs:px-7 xl:px-14">
        <div className="flex flex-col md:flex-row">
          <h1 className="xs:py-10 md:py-20 xs:text-6xl md:text-6xl lg:text-6xl xl:text-8xl font-black text-main text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
            About{" "}
            <span className="text-dark">
              <span className="text-dark">me</span>
            </span>
          </h1>
          <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-dark text-lg lg:text-2xl">
            I am a software developer from Lahore, Pakistan. I have 2 years expirience. I've worked for multiple clients and companies and enjoy what I do!
            <br /> <br /> I code in Javascript, Blockchain, SQL and much more. I'm passionate about technology, diversity and inclusion..
          </h2>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
