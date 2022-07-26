import moment from "moment";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function HeroLeft() {
  const [show, setShow] = useState(false);

  var years = moment().diff("2020-01-01", "years");

  return (
    <>
      <div className="md:w-3/5 xs:w-full xs:py-0  pb-10 lg:py-14 xl:py-14">
        <h1 className="xs:text-6xl md:text-6xl lg:text-6xl xl:text-8xl font-black text-white text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
          Rayan{" "}
          <span className="text-dark">
            Ab<span className="text-white">i</span>d
          </span>
        </h1>
        <h3 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-white text-lg lg:text-xl">
          I am a <span className="font-bold">software developer</span> from
          Lahore, Pakistan. I have{" "}
          <span className="font-bold">{years} years expirience</span>. I've
          worked for multiple clients and companies and enjoy what I do!
          <br />
          <br />I code in{" "}
          <span className="font-bold">Javascript, Blockchain, SQL </span>
          and much more. I'm passionate about technology, diversity and
          inclusion.
        </h3>
      </div>
    </>
  );
}

export default HeroLeft;
