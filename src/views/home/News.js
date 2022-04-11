import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchHomeNews } from "../../api";
import { path } from "../../Path/media-path";
import { cutString } from "../../utils/utils";
import { NewsLoading } from "../ui/LoadingScreens";

const News = () => {
  const [news, setNews] = useState();

  const getNews = async () => {
    const { data } = await fetchHomeNews();

    setNews(data.result);
  };

  useEffect(() => {
    getNews();
  }, []);

  const noNews = !news || (news && news.length === 0);

  return (
    <div>
      {" "}
      {!noNews && (
        <div style={{ background: "#bc4a2f" }}>
          <div className="d-flex  flex-column  text-light">
            <div className="container-fluid ">
              <div className="col-12 my-3 px-3"></div>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="col-12 d-flex flex-md-row flex-column container-fluid"
            >
              <Link
                to={`/media-corner/news/${news[0].id}`}
                className="text-decoration-none"
              >
                <div className="row ">
                  <div
                    className="col-md-6 pt-3 px-0 col-12 order-md-0 order-1 "
                    style={{
                      backgroundColor: "rgb(0 0 0 / 30%)",
                      clipPath:
                        " polygon(100% 0, 100% 0%, 100% 100%, 0 100%, 0 23%)",
                    }}
                  >
                    <div
                      className="p-2 pt-5 cardbg"
                      style={{
                        height: "450px",
                        clipPath:
                          " polygon(100% 22px, 100% 0%, 100% 100%, 0 100%, 0 20%)",
                      }}
                    >
                      <div className=" px-3" style={{ textAlign: "justify" }}>
                        <h4>
                          <u> أهم الأخبار</u>{" "}
                        </h4>
                        <h6 className="my-4">{news[0].title_AR}</h6>
                        <p className="lh-lg">
                          {
                            cutString(
                              news[0].description_AR.replaceAll("<br>", ""),
                              650
                            )
                            // String(news[0].description_AR).substring(0, 650).substr( 0 ,  String(news[0].description_AR).lastIndexOf(' '))
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 pt-3 px-0 col-12 order-md-0 order-1 "
                    style={{
                      backgroundColor: "rgb(0 0 0 / 30%)",
                      clipPath:
                        "polygon(100% 23%, 100% 0, 100% 100%, 0 100%, 0px 0px)",
                    }}
                  >
                    <div
                      style={{
                        backgroundImage: `url("${
                          path.news +
                          news[0].id +
                          "/photo_AR/" +
                          news[0].photo_AR
                        }")`,
                        clipPath:
                          "polygon(100% 20%, 100% 0, 100% 100%, 0 100%, 0px 22px)",
                      }}
                      className="p-2  bgimg position-relative"
                    ></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {news.length >= 5 ? (
            <div className="d-flex flex-lg-row flex-column container-fluid ">
              <div
                className="col-lg-6 col-12 py-4 px-2"
                style={{ cursor: "pointer" }}
              >
                <Link
                  to={`/media-corner/news/${news[1].id}`}
                  className="text-decoration-none"
                >
                  <div className="position-relative">
                    <div>
                      <img
                        alt={news[1].title_AR}
                        className="w-100"
                        height="300"
                        src={
                          path.news +
                          news[1].id +
                          "/photo_AR/" +
                          news[1].photo_AR
                        }
                      />
                    </div>
                    <div
                      className="w-100 text-center p-3  text-white position-absolute "
                      style={{
                        bottom: 0,

                        backgroundColor: "rgba(0,0,0,.8)",
                      }}
                    >
                      {news[1].title_AR}
                    </div>
                  </div>
                </Link>
              </div>

              <div
                className="col-lg-3 col-12 py-4 px-2"
                style={{ cursor: "pointer" }}
              >
                <Link
                  to={`/media-corner/news/${news[2].id}`}
                  className="text-decoration-none"
                >
                  <div className="position-relative">
                    <div>
                      <img
                        alt={news[2].title_AR}
                        className="w-100"
                        height="300"
                        src={
                          path.news +
                          news[2].id +
                          "/photo_AR/" +
                          news[2].photo_AR
                        }
                      />
                    </div>
                    <div
                      className="w-100 text-center p-2  text-white position-absolute"
                      style={{
                        bottom: 0,

                        backgroundColor: "rgba(0,0,0,.8)",
                      }}
                    >
                      {news[2].title_AR}
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className="col-lg-3 pt-4 p-0 d-flex flex-row flex-lg-column px-2"
                style={{ cursor: "pointer" }}
              >
                <Link
                  to={`/media-corner/news/${news[3].id}`}
                  className="text-decoration-none"
                  style={{ cursor: "pointer" }}
                >
                  <div className="position-relative ms-2  col-lg-12 col-6">
                    <div>
                      <img
                        alt={news[3].title_AR}
                        className="w-100"
                        height="145"
                        src={
                          path.news +
                          news[3].id +
                          "/photo_AR/" +
                          news[3].photo_AR
                        }
                      />
                    </div>
                    <div
                      className="w-100 text-center p-1  text-white position-absolute"
                      style={{
                        bottom: 0,

                        backgroundColor: "rgba(0,0,0,.8)",
                      }}
                    >
                      {news[3].title_AR}
                    </div>
                  </div>
                </Link>

                <Link
                  to={`/media-corner/news/${news[4].id}`}
                  className="text-decoration-none"
                >
                  <div className="position-relative  mt-lg-2 mt-0  col-lg-12 col-6">
                    <div>
                      <img
                        alt={news[4].title_AR}
                        className="w-100"
                        height="145"
                        src={
                          path.news +
                          news[4].id +
                          "/photo_AR/" +
                          news[4].photo_AR
                        }
                      />
                    </div>
                    <div
                      className="w-100 text-center p-1  text-white position-absolute"
                      style={{
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,.8)",
                      }}
                    >
                      {news[4].title_AR}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      )}
      {noNews && (
        <>
          <NewsLoading />
        </>
      )}
    </div>
  );
};

export default News;
