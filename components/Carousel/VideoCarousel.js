import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import WrestlingGifImage from "../../assets/Images/projectsImages/wrestlinggif.png";
import PitchProfile from "../../assets/Images/projectsImages/pitchprofile.png";
import HurryApp from "../../assets/Images/projectsImages/HurryApp.png";
import { Carousel } from "react-responsive-carousel";

const VideoCarousel = ({ data }) => {
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
        <div className="flex justify-between absolute top left w-full h-full"></div>
        <div ref={carousel} className="  flex flex-1 ">
          <Carousel autoPlay={true} centerMode={false}>
            {data.map((item, index) => {
              console.log("itemitem", item?.snippet?.thumbnails?.default?.url);

              return (
                <div
                  key={index}
                  className=" text-center flex flex-1  sm:w-full w-full snap-start"
                >
                  <a
                    target={"_blank"}
                    href={`https://www.youtube.com/watch?v=${item?.id?.videoId}`}
                  >
                    <div className="max-w-sm  rounded-lg border  shadow-md bg-main border-main">
                      <img
                        src={item?.snippet?.thumbnails?.high?.url}
                        alt=""
                        className="rounded-t-lg w-full"
                      />
                      <div className="p-5">
                        <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item?.snippet?.title?.substring(0, 25)}
                            {item?.snippet?.title.length > 25 && "..."}
                          </h5>
                        </a>
                        <p className="mb-3 font-normal text-white">
                          {item?.snippet?.description.substring(0, 50)}
                          {item?.snippet?.description.length > 50 && "..."}
                        </p>
                        {/* <p className="mb-3 font-normal  text-white">Youtube</p> */}

                        {/*
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
                    )} */}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
