import { useState } from "react";
import Slider from "react-slick";
import { path } from "./../../Path/media-path";
import DetailsModalComponent from "./photo-details-modal";

const NewsDetailsItem = (props) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});

  const onShow = () => {
    setShow(true);
  };
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
  return (
    <>
      <div key={props.key} className="container">
        <div className="col-12 my-3 px-3 container">
          <h2> {props.title}</h2>
          <div className="page_title"></div>
        </div>
        <div className="px-3">
          {props.publish ? (
            <div className="py-2 fst-italic">الناشر : {props.publish}</div>
          ) : null}{" "}
          {props.type ? (
            <div className="py-2 fst-italic">التصنيف : {props.type}</div>
          ) : null}
          {props.writer ? (
            <div className="py-2 fst-italic">الكاتب : {props.writer}</div>
          ) : null}
          {props.publishers?.length ? (
            <div className="py-2 fst-italic">
              الناشرون : {props.publishers?.join(" , ")}
            </div>
          ) : null}
          {props.date ? (
            <div className="fst-italic">التاريخ : {props.date}</div>
          ) : null}
          <div className="d-flex  justify-content-between">
            {props.place ? (
              <div className="fst-italic">المكان : {props.place}</div>
            ) : null}
            {props.price ? (
              <div className="fst-italic mx-3">السعر : {props.price}</div>
            ) : null}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center my-1 px-2">
          <div className="py-2" style={{ height: 400, width: "100%" }}>
            <img className="w-100 h-100 rounded-3" src={props.imgPath} />
          </div>

          {props.content ? (
            <div className="py-2">
              <div
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{
                  __html: props.content.replaceAll("<br>", " <br> </ br> "),
                }}
              ></div>
            </div>
          ) : null}
        </div>

        {props.album ? (
          <div className="my-3 d-flex flex-wrap justify-content-center">
            {props.album.length > 2 ? (
              <div className="col-12">
                <Slider {...settings} style={{ width: "100%" }}>
                  {props.album.map((photo, index) => {
                    return (
                      <div
                        className="mx-auto p-3 hoverTitle"
                        key={photo}
                        onClick={() => {
                          onShow();
                          setContent(props.mediaID + "/" + photo);
                        }}
                      >
                        <div className="holder mx-1">
                          <img
                            className="w-100"
                            src={`${path.media + props.mediaID + "/" + photo}`}
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
                      </div>
                    );
                  })}
                </Slider>
              </div>
            ) : (
              <div className="col-12">
                <div className="my-3 d-flex flex-wrap justify-content-center">
                  {props.album.map((photo, index) => {
                    return (
                      <div
                        className="col-lg-4 mx-auto p-3 hoverTitle"
                        key={photo}
                        onClick={() => {
                          onShow();
                          setContent(photo);
                        }}
                      >
                        <div className="holder">
                          <div
                            style={{
                              position: "relative",
                              backgroundImage: `url("${
                                path.news + props.mediaID + photo
                              }")`,
                            }}
                            className="imageAlbum"
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : null}
        {props.pdf ? (
          <div className="container py-2">
            <iframe
              className="embed-responsive-item w-100"
              style={{ height: 500 }}
              src={props.pdfSrc + props.pdf}
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
      </div>
      {renderModal(content)}
    </>
  );
};

export default NewsDetailsItem;
