import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { fetchHomePartner } from "../../api";

import { GeneralLoading } from "../ui/LoadingScreens";
import { path } from "../../Path/media-path";
import { Link } from "react-router-dom";

const Partner = () => {
  const [partner, setPartner] = useState();

  const getPartner = async () => {
    const { data } = await fetchHomePartner();

    setPartner(data.result);
  };

  useEffect(() => {
    getPartner();
  }, []);

  const noPartner = !partner || (partner && partner.length === 0);
  if (!noPartner) {
    let len = partner.length > 4 ? 4 : partner.length;

    var settings = {
      dots: false,
      arrows: true,
      centerMode: true,
      infinite: true,
      centerPadding: "80px",
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
      {!noPartner && (
        <div style={{ backgroundColor: "#eeecec" }}>
          <div className="container ">
            <div className="p-0 m-0 ">
              <div className=" d-flex">
                <h3 className="mt-4 me-2 ">
                  <u> شركاء العمل</u>{" "}
                </h3>
              </div>
              <div className=" me-3 ms-3 ">
                <Slider {...settings}>
                  {partner.map((item, index) => {
                    return (
                      <div key={item.id} className="mt-4 text-center p-3">
                        {console.log(item.photo_AR)}
                        <div
                          className="d-flex justify-content-center align-items-center rounded-3 px-2"
                          style={{ height: "120px", backgroundColor: "#fff" }}
                        >
                          <img
                            className=" h-100"
                            src={
                              path.partiners +
                              item.id +
                              "/Photo_AR/" +
                              item.photo_AR
                            }
                          />
                        </div>

                        <div style={{ fontSize: "13px" }} className="mt-4 ">
                          {item.name_AR}
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}
      {noPartner && (
        <>
          <GeneralLoading />
        </>
      )}
    </div>
  );
};

export default Partner;
