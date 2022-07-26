import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import WrestlingGifImage from "../../assets/Images/projectsImages/wrestlinggif.png";
import PitchProfile from "../../assets/Images/projectsImages/pitchprofile.png";
import HurryApp from "../../assets/Images/projectsImages/HurryApp.png";
import Carousel, { consts } from "react-elastic-carousel";

const VideoCarousel = ({ data }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

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
          disableArrowsOnEnd={false}
          renderArrow={myArrow}
          itemPosition={"CENTER"}
          pagination={false}
          itemsToShow={3}
          breakPoints={breakPoints}
          // autoPlay={true}
          // centerMode={false}
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className=" text-center flex flex-1 mx-1 sm:w-full w-full snap-start"
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
                          {item?.snippet?.title?.substring(0, 20)}
                          {item?.snippet?.title.length > 20 && "..."}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-white">
                        {item?.snippet?.description.substring(0, 45)}
                        {item?.snippet?.description.length > 45 && "..."}
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
  );
};

export default VideoCarousel;
