import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import VideoCarousel from "../Carousel/VideoCarousel";
import { gql } from "@apollo/client";
import client from "../../assets/utils/graphql/apollo-client";
import BlogCarousel from "../Carousel/BlogCarousel";

function MyBlogs() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  async function getBlogs() {
    console.log("testing thee");
    const { data } = await client.query({
      query: gql`
        query {
          user(username: "rayanabid") {
            publication {
              posts(page: 0) {
                title
                slug
                cuid
                coverImage
                brief
              }
            }
          }
        }
      `,
    });
    console.log("testing thee", data?.user.publication.posts);

    setItems(data?.user.publication.posts);
    setLoading(false);
  }

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="  relative border-top-color:bg-white xs:py-6 bg-main xs:px-7 xl:px-14">
        <div class="custom-shape-divider-top-1658839044">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <h1 className="xs:py-10 md:py-20 xs:text-6xl md:text-6xl lg:text-6xl xl:text-6xl w-100 font-black text-white text-center md:text-left tracking-tighter f-f-i  leading-tight text-heading-color">
          <i class="fab fa-hashnode text-[#2962FF]"></i> My{" "}
          <span className="text-dark">
            <span className="text-dark">Blogs</span>
          </span>
        </h1>
        {loading ? "Loading..." : <BlogCarousel data={items} />}
      </div>
    </>
  );
}

export default MyBlogs;
