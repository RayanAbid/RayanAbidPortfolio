import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Carousel
import Carousel from "react-elastic-carousel";

// Images import
import WrestlingGifImage from "../../assets/Images/projectsImages/wrestlinggif.png";
import PitchProfile from "../../assets/Images/projectsImages/pitchprofile.png";
import HurryApp from "../../assets/Images/projectsImages/HurryApp.png";
import NFTRunners from "../../assets/Images/projectsImages/NFTRunners.png";

const CarouselComponent = () => {
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
      imageUrl: NFTRunners,
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
        <Carousel itemsToShow={2}>
          {data.map((resource, index) => {
            return (
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
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
