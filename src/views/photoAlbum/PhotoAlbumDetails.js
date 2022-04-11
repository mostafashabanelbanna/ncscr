import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

import { fetchPhotoAlbumItem } from "../../api";

import { path } from "../../Path/media-path";
import { GeneralLoading } from "../ui/LoadingScreens";
import DetailsModalComponent from "../ui/photo-details-modal";

const PhotoAlbumDetails = () => {
  const [photoAlbum, setPhotoAlbum] = useState({});
  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  let { id } = useParams();
  console.log(photoAlbum);
  const getItem = async () => {
    //fetch  data
    const response = await fetchPhotoAlbumItem(id).catch((err) =>
      console.log("Error", err)
    ); //handle errors
    console.log(response);
    if (response && response.data) {
      setPhotoAlbum(response.data);
    }
  };
  const onShow = () => {
    setShow(true);
  };

  useEffect(() => {
    getItem();
  }, []);

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 4000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: true,
    swipeToSlide: true,
    rows: 1,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const renderModal = (content) => {
    return (
      <DetailsModalComponent
        content={content}
        show={show}
        onHide={() => setShow(false)}
        pathName={path.media}
      />
    );
  };

  if (photoAlbum.result) {
    let details = Object.assign({}, photoAlbum.result);
    return (
      <div className="container">
        <div>
          <div className="underline mt-4">
            <h3>{details.title_AR}</h3>
          </div>

          <hr className="mt-4" />
          {!details.categoryName ? <hr className=" mt-5" /> : null}
        </div>
        <div className="row my-5 flex-column-reverse flex-lg-row">
          <div className="col-lg-7 my-3 my-lg-0">
            <p className="" style={{ lineHeight: "30px", fontSize: "1rem" }}>
              {details.photoCaption_AR}
            </p>
            <p className="" style={{ lineHeight: "30px", fontSize: "1rem" }}>
              {details.description_AR}
            </p>
          </div>
          <div className="col-lg-5 detailsPhoto p-0 h-100">
            <img
              className="img-fluid w-100"
              style={{ borderRadius: 5, height: 450 }}
              src={`${path.media}${details.id}/Cover_AR/${details.cover_AR}`}
            />
          </div>
        </div>

        {details.photos ? (
          <div className="my-3 d-flex flex-wrap justify-content-center">
            {details.photos.length > 2 ? (
              <div className="col-12">
                <Slider {...settings} style={{ width: "100%" }}>
                  {details.photos.map((photo, index) => {
                    let pName;
                    let newPath = photo.fileName_AR;
                    // if (photo.fileName_AR != null) {
                    //   pName = photo.fileName_AR;
                    //   newPath = pName.replaceAll(" ", "%20");
                    // }
                    let title = photo.photoCaption_AR;
                    return (
                      <div
                        className="mx-auto p-3 hoverTitle"
                        key={photo.id}
                        onClick={() => {
                          onShow();
                          setContent({ ...photo, mainId: details.id });
                        }}
                      >
                        <div className="holder mx-1">
                          <img
                            className="w-100"
                            src={`${path.media}${details.id}/${newPath}`}
                            style={{ maxHeight: 270, minHeight: 270 }}
                          />
                          {/* <div
                            style={{
                              height: 200,
                              position: "relative",
                              backgroundImage: `url("")`,
                            }}
                            className="imageAlbum"
                          ></div> */}
                        </div>
                        <p className="text-center my-2">{title}</p>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            ) : (
              <div className="col-12">
                <div className="my-3 d-flex flex-wrap justify-content-center">
                  {details.photos.map((photo, index) => {
                    let pName;
                    let newPath;
                    if (photo.fileName_AR != null) {
                      pName = photo.fileName_AR;
                      newPath = pName.replaceAll(" ", "%20");
                    }
                    let title = photo.photoCaption_AR;
                    return (
                      <div
                        className="col-lg-4 mx-auto p-3 hoverTitle"
                        key={photo.id}
                        onClick={() => {
                          onShow();
                          setContent(photo);
                        }}
                      >
                        <div className="holder">
                          <div
                            style={{
                              position: "relative",
                              backgroundImage: `url("${path.media}/${details.id}/${newPath}")`,
                            }}
                            className="imageAlbum"
                          ></div>
                        </div>
                        <p className="text-center my-2">{title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : null}

        {renderModal(content)}
      </div>
    );
  }

  return (
    <div>
      {" "}
      <GeneralLoading />{" "}
    </div>
  );
};

export default PhotoAlbumDetails;
