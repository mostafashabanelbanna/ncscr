import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ar";

import { fetchHomeDocumentLibaray } from "../../api";
import { path } from "../../Path/media-path";
import { cutString } from "../../utils/utils";
import { NewsLoading } from "../ui/LoadingScreens";

const DocumentLibaray = () => {
  const [documentLibaray, setDocumentLibaray] = useState();

  const getDocumentLibaray = async () => {
    const { data } = await fetchHomeDocumentLibaray();

    setDocumentLibaray(data.result);
  };

  useEffect(() => {
    getDocumentLibaray();
  }, []);

  const noDocumentLibaray =
    !documentLibaray || (documentLibaray && documentLibaray.length === 0);

  return (
    <div>
      {!noDocumentLibaray && (
        <div className="containershadow">
          <div className="customcontainer ">
            <div>
              <h4 className=" text-end pt-3">
                <u>أحدث الإصدارات</u>
              </h4>
              <div className="d-flex flex-column flex-wrap flex-md-row justify-content-start">
                {documentLibaray.map((item) => {
                  // let content = sub.substr(0, sub.lastIndexOf(" "));
                  // let sub = String(item.description_AR).substring(0, 160)
                  // let content = sub.substr( 0 , sub.lastIndexOf(' '))
                  let content = cutString(
                    item.description_AR.replaceAll("<br>", ""),
                    250
                  );
                  return (
                    <div
                      key={item.id}
                      className="col-lg-4 col-md-6 col-12 px-3"
                    >
                      <h5 className="my-3 text-center ">
                        <u>{item.documentLibraryTypeName}</u>
                      </h5>
                      <div
                        className="cardbg p-3 rounded-3 justify-content-between d-flex flex-column h-100"
                        //   style={{ he: 400 }}
                      >
                        <div className="d-flex">
                          <div className="col-4">
                            <img
                              height="150"
                              className="w-100"
                              src={
                                path.documentLibrary +
                                item.id +
                                "/photo_AR/" +
                                item.photo_AR
                              }
                            />
                          </div>
                          <div className="col-8  text-light mt-3">
                            <div className="col-12 p-0 pb-1 px-2">
                              <h5> {item.title_AR} </h5>
                              <div className="text-white ">
                                {moment(new Date(item.publishDate)).format(
                                  "LL"
                                )}
                              </div>
                            </div>

                            <div
                              className="pe-1"
                              style={{ textAlign: "justify" }}
                            >
                              {" "}
                              {content === null ? "" : content + " ... "}{" "}
                            </div>
                          </div>
                        </div>
                        <Link to={`document-library/doc-detail/${item.id}`}>
                          <div className="justify-content-end d-flex pt-4 pb-2 ">
                            <button className="btn btn-outline-light">
                              {" "}
                              اقرا المزيد
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      {noDocumentLibaray && (
        <>
          <NewsLoading />
        </>
      )}
    </div>
  );
};

export default DocumentLibaray;
