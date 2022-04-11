import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ar";

import { getVideoLibrary } from "../../redux/actions/videoLibrary";

import { checkNulls, convertSearchData } from "../../utils/utils";

import PaginationSection from "../ui/pagination-section";
import { GeneralLoading } from "../ui/LoadingScreens";
import SearchSection from "../ui/search-section";
import MediaList from "../ui/mediaList";

const VideoLibraryList = () => {
  const [flag, setFlag] = useState(0);
  const videoLibrary = useSelector((state) => state.videoLibrary.data);
  const params = useSelector((state) => state.videoLibrary.params);
  const count = useSelector((state) => state.videoLibrary.count);
  const loading = useSelector((state) => state.loading.loading);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState();
  const [publishDateFrom, setPublishDateFrom] = useState();
  const [publishDateTo, setPublishDateTo] = useState();

  let pageCount;
  let searchData = {
    title,
    publishDateFrom,
    publishDateTo,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    dispatch(getVideoLibrary(currentPage + 1, convertSearchData(searchData)));
    setFlag(1);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const publishFromHandler = (dateChanged) =>
    setPublishDateFrom(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );
  const publishToHandler = (dateChanged) =>
    setPublishDateTo(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  useEffect(() => {
    if (flag)
      checkNulls(params) == false
        ? dispatch(getVideoLibrary(currentPage + 1))
        : dispatch(getVideoLibrary(currentPage + 1, convertSearchData(params)));
    else dispatch(getVideoLibrary(currentPage + 1));
  }, [currentPage, dispatch]);

  const noVideoLibrary =
    !videoLibrary || (videoLibrary && videoLibrary.length === 0); //check if no data

  if (videoLibrary) {
    pageCount = Math.ceil(count / 9);
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2>مكتبة الفيديو</h2>
          <div className="page_title"></div>
        </div>
        <SearchSection
          submit={submitHandler}
          TextFieldOneHandler={titleHandler}
          labelTextFieldOne="العنوان"
          classNameTextFieldOne="col-12"
          publishDateFrom={publishDateFrom}
          publishFromHandler={publishFromHandler}
          classNameDPFrom="col-6 "
          publishDateTo={publishDateTo}
          publishToHandler={publishToHandler}
          classNameDPTo="col-6"
        />
        <div className="container">
          <div className="row justify-content-start">
            {!noVideoLibrary &&
              videoLibrary.map((item) => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    className="mb-4 col-lg-4 col-sm-6 col-12 p-3"
                  >
                    <Link to={`/media-corner/video-library/${item.id}`}>
                      <MediaList
                        key={item.id}
                        imgHeight={250}
                        title={item.title_AR}
                        imgPath={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        {!noVideoLibrary && (
          <div>
            <PaginationSection
              handlePageClick={handlePageClick}
              pageCount={pageCount}
              currentPage={currentPage}
            />
          </div>
        )}
        {loading && noVideoLibrary ? <GeneralLoading /> : null}
        {!loading && noVideoLibrary ? (
          <h2 className="w-100 text-center p-4"> لا توجد نتائج</h2>
        ) : null}
      </>
    );
  }
};

export default VideoLibraryList;
