import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { fetchHomeVideoLibrary } from "../../api";

import { GeneralLoading } from "../ui/LoadingScreens";
import { path } from "../../Path/media-path";
import { Link } from "react-router-dom";

const VideoLibrary = () => {
  const [videoLibrary, setVideoLibrary] = useState();

  const getVideoLibrary = async () => {
    const { data } = await fetchHomeVideoLibrary();

    setVideoLibrary(data.result);
  };

  useEffect(() => {
    getVideoLibrary();
  }, []);

  const noVideoLibrary =
    !videoLibrary || (videoLibrary && videoLibrary.length === 0);
  if (!noVideoLibrary) {
    var settings = {
      dots: false,
      arrows: false,
      centerMode: true,
      infinite: true,
      centerPadding: "80px",
      speed: 500,
      slidesToShow: videoLibrary.length,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: videoLibrary.length,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: videoLibrary.length,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: videoLibrary.length,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }

  return (
    <div>
      {" "}
      {!noVideoLibrary && (
        <div className=" container ">
          <div className="p-0 m-0 ">
            <div className="m-3 d-flex">
              <h3 className="mt-4 me-2 ">
                <u> مكتبة الفيديو</u>{" "}
              </h3>
            </div>
            <div className="me-3 ms-3 ">
              <iframe
                style={{ outline: "none" }}
                loading="lazy"
                width="100%"
                height="450px"
                src={`https://www.youtube.com/embed/${videoLibrary[0].url}`}
              ></iframe>
            </div>

            <div className=" me-3 ms-3">
              <Slider {...settings}>
                {videoLibrary.map((item, index) => {
                  // if(index!=0)
                  return (
                    <Link to={`media-corner/video/${item.id}`}>
                      <div key={item.id} className="mt-4 text-center p-2">
                        <img
                          src={
                            "https://img.youtube.com/vi/" +
                            item.url +
                            "/hqdefault.jpg"
                          }
                          // src={
                          //   path.media +

                          //   item.id +
                          //   "/photo_AR/" +
                          //   item.photo_AR
                          // }
                          className="rounded-3"
                          width="100%"
                        />
                        <div className="mt-4">{item.title_AR}</div>
                      </div>
                    </Link>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      )}
      {noVideoLibrary && (
        <>
          <GeneralLoading />
        </>
      )}
    </div>
  );
};

export default VideoLibrary;
