import React, { useState } from "react";
function HeroLeft() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="md:w-3/5  pb-10 lg:py-14 xl:py-14">
        <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-white text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
          Rayan{" "}
          <span className="text-dark">
            Ab<span className="text-white">i</span>d
          </span>
        </h1>
        <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-dark text-lg lg:text-2xl">
            Experienced Frontend Web Developer and Applications Developer with a demonstrated history of working in the Development industry. Skilled in React Js, React Native, Firebase, Node Js, Strong engineering professional with a intermediate focused in Computer Science from Punjab College Lahore and currently focusing in Bachelors of Computer Science in Virtual University 
        </h2>
        <div className="w-full flex justify-center md:block">
          <button className="hover:opacity-90 bg-white py-3 px-10 lg:py-7 lg:px-20 rounded-full text-main text-sm md:text-lg f-f-p">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroLeft;
