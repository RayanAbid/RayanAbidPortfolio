import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function HeroLeft() {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className="md:w-3/5 xs:w-full xs:py-0  pb-10 lg:py-14 xl:py-14">
				<h1 className="xs:text-6xl md:text-6xl lg:text-6xl xl:text-8xl font-black text-white text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
					Rayan{" "}
					<span className="text-dark">
						Ab<span className="text-white">i</span>d
					</span>
				</h1>
				<h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-white text-lg lg:text-2xl">
					<Typewriter
// 						onInit={(typewriter) => {
// 							typewriter
// 								.typeString(`I believe in the power of software.`)
// 								.start();
// 						}}
options={{
					strings: ["I believe in the power of software.", "I live and breathe it.", "I love solving problems with code."],
					loop: true,
					autoStart: true,
				}}
					/>
				</h2>
				{/* <div className="w-full flex justify-center md:block">
          <button className="hover:opacity-90 bg-white py-3 px-10 lg:py-7 lg:px-20 rounded-full text-main text-sm md:text-lg f-f-p">
            Learn More
          </button>
        </div> */}
			</div>
		</>
	);
}

export default HeroLeft;
