import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/ar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { fetchVideoLibraryItem } from "../../api";

import { GeneralLoading } from "../ui/LoadingScreens";

const VideoLibraryDetails = () => {
  const [videoLibrary, setVideoLibrary] = useState({});

  let { id } = useParams();
  const getItem = async () => {
    //fetch  data
    const response = await fetchVideoLibraryItem(id).catch((err) =>
      console.log("Error", err)
    ); //handle errors
    console.log(response);
    if (response && response.data) {
      setVideoLibrary(response.data);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  if (videoLibrary.result) {
    return (
      <div className="container">
        <div className="underline mt-4">
          <h3>{videoLibrary.result.title_AR}</h3>
          {/* <div className="page_title"></div> */}
        </div>
        <div className="container d-flex justify-content-between mt-4">
          <div className="col-7 align-items-end fa-1x">
            <div className="d-flex my-1">
              <div className="ms-2">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  size={26}
                ></FontAwesomeIcon>{" "}
              </div>
              <div>{`${moment(new Date(videoLibrary.result.publishDate)).format(
                "LL"
              )}`}</div>
            </div>
          </div>
        </div>
        <hr className="container my-2"></hr>
        <div
          className="embed-responsive embed-responsive-16by9 mx-3 my-5 "
          style={{ borderRadius: "10px" }}
        >
          <iframe
            allowFullScreen
            className="embed-responsive-item rounded-3"
            style={{ outline: "none" }}
            loading="lazy"
            width="100%"
            height="450px"
            src={`https://www.youtube.com/embed/${videoLibrary.result.url}`}
          ></iframe>
        </div>
        <div className="row my-5 flex-column-reverse flex-lg-row">
          {videoLibrary.result.introTitle_AR ? (
            <div className="col-12 my-3 my-lg-0">
              <p className="" style={{ lineHeight: "30px", fontSize: "1rem" }}>
                {videoLibrary.result.introTitle_AR}
              </p>
            </div>
          ) : null}
        </div>
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

export default VideoLibraryDetails;
