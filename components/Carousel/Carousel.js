import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import WrestlingGifImage from "../../assets/Images/projectsImages/wrestlinggif.png";
import PitchProfile from "../../assets/Images/projectsImages/pitchprofile.png";
import HurryApp from "../../assets/Images/projectsImages/HurryApp.png";
import CateringConnection from "../../assets/Images/projectsImages/CateringConnection.png";

import Carousel, { consts } from "react-elastic-carousel";

const CarouselComp = () => {
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
      desc: "A web app where candiadtes can register to have an interview with the company. Also has an admin panel. ",
    },
    {
      title: "Catering connection",
      link: "http://www.cateringconnection.co/",
      // gitLink: "https://replit.com/@RayanAbid2/gif-portal-starter-project",
      imageUrl: CateringConnection,
      projectType: "Website",
      tools: "Html, Css, Bootstrap",
      desc: "A portfolio website. This was my first project that I ever did professionally. This is for a catering company.",
    },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <div className="border-2 rounded-full border-main bg-main px-2 py-1">
          <i class="fas text-white fa-arrow-left"></i>
        </div>
      ) : (
        <div className="border-2 rounded-full border-main bg-main px-2 py-1">
          <i class="fas text-white fa-arrow-right"></i>
        </div>
      );
    return (
      <a
        className="flex flex-1 justify-center flex-col "
        onClick={onClick}
        disabled={isEdge}
      >
        {pointer}
      </a>
    );
  };

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

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

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div className=" my-12 mx-auto">
      <div className="">
        <div className=" "></div>
        <Carousel
          renderArrow={myArrow}
          // enableAutoPlay={true}
          itemPosition={"CENTER"}
          pagination={false}
          itemsToShow={3}
          breakPoints={breakPoints}
        >
          {data.map((resource, index) => {
            return (
              <div
                key={index}
                className=" text-center mx-2 xs:w-full w-full snap-start"
              >
                <div className="max-w-sm   rounded-lg border  shadow-md bg-main border-main">
                  <Image
                    src={resource.imageUrl}
                    alt=""
                    className="rounded-t-lg"
                  />
                  <div
                    style={{ minHeight: "35vh", maxHeight: "35vh" }}
                    className="p-5"
                  >
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {resource.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-white">
                      {resource.desc}
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
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComp;
