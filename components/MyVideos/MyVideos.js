import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import VideoCarousel from "../Carousel/VideoCarousel";

function MyVideos() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchVideo = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbUlt1T9VdaD-9ewO0D5B8w&maxResults=5&order=date&key=AIzaSyCMn2_4ex4vzeoCDDtOfK82-xUqbUT0bDs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("result youtune", result.items);
        setItems(result.items);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <>
      <div className="  relative border-top-color:bg-white xs:py-6 bg-white xs:px-7 xl:px-14">
        <h1 className="xs:py-10 md:py-20 xs:text-6xl md:text-6xl lg:text-6xl xl:text-6xl w-100 font-black text-main text-center md:text-left tracking-tighter f-f-i  leading-tight text-heading-color">
          <i class="fa-brands text-ytred fa-youtube"></i> My{" "}
          <span className="text-dark">
            <span className="text-dark">Videos</span>
          </span>
        </h1>
        {loading ? "Loading..." : <VideoCarousel data={items} />}
      </div>
    </>
  );
}

export default MyVideos;
