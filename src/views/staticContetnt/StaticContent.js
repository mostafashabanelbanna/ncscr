import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchStaticContent } from "../../api";

import { path } from "../../Path/media-path";

import { GeneralLoading } from "../ui/LoadingScreens";

const StaticContent = () => {
  const [staticContent, setEventsItem] = useState({});
  let { id } = useParams();
  const getItem = async () => {
    //fetch  data
    const response = await fetchStaticContent(id).catch((err) =>
      console.log("Error", err)
    ); //handle errors
    console.log(response);
    if (response && response.data) {
      setEventsItem(response.data);
    }
  };

  useEffect(() => {
    getItem();
  }, [id]);

  if (staticContent.result) {
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2>{staticContent.result.title_AR}</h2>
          <div className="page_title"></div>
          {staticContent.result.description_AR &&
          staticContent.result.photo_AR ? (
            <div
              className="my-4 d-flex flex-wrap justify-content-between"
              style={{ textAlign: "justify" }}
            >
              <div className="col-md-9 col-12 p-2">
                {
                  <div
                    dangerouslySetInnerHTML={{
                      __html: staticContent.result.description_AR,
                    }}
                  />
                }
              </div>
              <div className="col-md-3 col-12 p-2">
                <img
                  src={`${path.staticContent}${staticContent.result.id}/Photo_AR/${staticContent.result.photo_AR}`}
                  className="w-100"
                />
              </div>
            </div>
          ) : staticContent.result.description_AR ? (
            <div className="text-center my-4" style={{ textAlign: "justify" }}>
              {
                <div
                  dangerouslySetInnerHTML={{
                    __html: staticContent.result.description_AR,
                  }}
                />
              }
            </div>
          ) : staticContent.result.photo_AR ? (
            <div className="text-center my-4">
              <img
                src={`${path.staticContent}${staticContent.result.id}/Photo_AR/${staticContent.result.photo_AR}`}
                style={{ height: 500 }}
              />
            </div>
          ) : null}
        </div>
      </>
    );
  }

  return (
    <div>
      {" "}
      <GeneralLoading />{" "}
    </div>
  );
};

export default StaticContent;
