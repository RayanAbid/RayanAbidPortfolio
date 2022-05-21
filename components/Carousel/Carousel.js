import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import WrestlingGifImage from "../../assets/Images/projectsImages/wrestlinggif.png";
import PitchProfile from "../../assets/Images/projectsImages/pitchprofile.png";
import HurryApp from "../../assets/Images/projectsImages/HurryApp.png";

const Carousel = () => {
  const data = [
    {
      title: "Wrestling GIFs Portal",
      link: "https://replit.com/@RayanAbid2/gif-portal-starter-project",
      gitLink: "https://replit.com/@RayanAbid2/gif-portal-starter-project",
      imageUrl: WrestlingGifImage,
      projectType: "Web 3 - Solidity",
      tools: "React js, Solidity",
      desc: "A project build with buildspace. This project uses blockchain to get users stored gifs and display them.",
    },
    {
      title: "NFT Runners",
      link: "https://ymesfaa4ek27sv7n1dzzha-on.drv.tw/NFTRunners/",
      gitLink: "https://github.com/RayanAbid/NFTRunners",
      imageUrl: "https://raw.githubusercontent.com/RayanAbid/NFTRunners/main/gitReadme/pic1.png",
      projectType: "Web 3 - Game",
      tools: "React js, Solidity, Moralis, NFT",
      desc: "A dino run game but with a twist. The twist is that it's a NFT game XD.",
    },
    {
      title: "Job Board",
      // link: "https://replit.com/@RayanAbid2/gif-portal-starter-project",
      // gitLink: "https://replit.com/@RayanAbid2/gif-portal-starter-project",
      imageUrl: PitchProfile,
      projectType: "Web app",
      tools: "React js, Node js, Sequilize",
      desc: "A job management app where companies and candiates can onboard to find jobs around the world.",
    },
    {
      title: "Hurry",
      link: "https://hurry.vercel.app/",
      // gitLink: "https://replit.com/@RayanAbid2/gif-portal-starter-project",
      imageUrl: HurryApp,
      projectType: "Web app",
      tools: "React js, Node js, Sequilize",
      desc: "A web app where candiadtes can register to have an interview with the company.",
    },
  ];

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center sm:w-full w-full snap-start"
              >
                <div className="max-w-sm  rounded-lg border  shadow-md bg-main border-main">
                  <Image
                    src={resource.imageUrl}
                    alt=""
                    className="rounded-t-lg"
                  />
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {resource.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-white">
                      {resource.desc.substring(0, 50)}...
                    </p>
                    <p className="mb-3 font-normal  text-white">
                      {resource.tools}
                    </p>
                    {resource.link ? (
                      <a
                        target="_blank"
                        href={resource.link}
                        className="mr-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-main bg-white rounded-lg  focus:ring-4 focus:outline-none "
                      >
                        Demo
                      </a>
                    ) : (
                      <a
                        style={{ opacity: 0 }}
                        // target="_blank"
                        // href={resource.link}
                        className="mr-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-main  rounded-lg  focus:ring-4 focus:outline-none "
                      ></a>
                    )}

                    {resource.gitLink ? (
                      <a
                        href={resource.gitLink}
                        target="_blank"
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-main bg-white border-main rounded-lg  focus:ring-4 focus:outline-none "
                      >
                        <i className="mr-1 fab fa-github-square  text-main opacity-75"></i>
                        Github
                      </a>
                    ) : (
                      <a
                        style={{ opacity: 0 }}
                        // href={resource.gitLink}
                        // target="_blank"
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-main bg-white border-main rounded-lg  focus:ring-4 focus:outline-none "
                      >
                        <i className="mr-1 fab fa-github-square  text-main opacity-75"></i>
                        Github
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
