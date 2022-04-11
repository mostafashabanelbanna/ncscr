import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { fetchHomePhotoAlbum } from "../../api";

import { GeneralLoading } from "../ui/LoadingScreens";
import { path } from "../../Path/media-path";
import { Link } from "react-router-dom";

const PhotoAlbum = () => {
  const [photoAlbum, setPhotoAlbum] = useState();

  const getPhotoAlbum = async () => {
    const { data } = await fetchHomePhotoAlbum();

    setPhotoAlbum(data.result);
  };

  useEffect(() => {
    getPhotoAlbum();
  }, []);

  const noPhotoAlbum = !photoAlbum || (photoAlbum && photoAlbum.length === 0);
  if (!noPhotoAlbum) {
    let len = photoAlbum.length > 3 ? 3 : photoAlbum.length;
    var settings = {
      dots: false,
      arrows: true,
      centerMode: true,
      infinite: true,
      centerPadding: "40px",
      speed: 500,
      slidesToShow: len,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
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
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }

  return (
    <div>
      {!noPhotoAlbum && (
        <div style={{ backgroundColor: "#eeecec" }}>
          <div className="container ">
            <div className="p-0 m-0 ">
              <div className=" d-flex">
                <h3 className="mt-4 me-2 ">
                  <u> البوم الصور</u>{" "}
                </h3>
              </div>

              <div className=" me-3 ms-3 ">
                <Slider {...settings}>
                  {photoAlbum.map((item, index) => {
                    return (
                      <Link to={`media-corner/photo/${item.id}`}>
                        <div key={item.id} className="mt-4 text-center p-3">
                          <img
                            src={
                              path.media +
                              "/" +
                              item.id +
                              "/cover_AR/" +
                              item.cover_AR
                            }
                            className="rounded-3 w-100"
                            height="250"
                          />
                          <div className="mt-4 ">{item.title_AR}</div>
                        </div>
                      </Link>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}
      {noPhotoAlbum && (
        <>
          <GeneralLoading />
        </>
      )}
    </div>
  );
};

export default PhotoAlbum;
