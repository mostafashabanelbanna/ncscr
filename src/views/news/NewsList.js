import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/ar";

import { getNews } from "../../redux/actions/news";

import { path } from "../../Path/media-path";

import ListItem from "../ui/item-list-withImg";
import PaginationSection from "../ui/pagination-section";
import { GeneralLoading } from "../ui/LoadingScreens";
import SearchSection from "../ui/search-section";

const NewsList = () => {
  const news = useSelector((state) => state.news.data);
  const params = useSelector((state) => state.news.params);
  const count = useSelector((state) => state.news.count);
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
    dispatch(getNews(currentPage + 1, searchData));
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
    //
    dispatch(getNews(currentPage + 1, params));
    //
  }, [currentPage, dispatch]);

  const noNews = !news || (news && news.length === 0); //check if no data

  if (news) {
    pageCount = Math.ceil(count / 9);
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2> الأخبار</h2>
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
          <div className=" d-flex flex-column flex-sm-row flex-wrap justify-content-start">
            {!noNews &&
              news.map((item) => {
                return (
                  <ListItem
                    key={item.id}
                    link={`/media-corner/news/${item.id}`}
                    imgHeight={100}
                    title={item.title_AR}
                    // desc={item.description_AR}
                    imgPath={`${path.news}${item.id}/Photo_AR/${item.photo_AR}`}
                    date={moment(new Date(item.publishDate)).format("LL")}
                  />
                );
              })}
          </div>
        </div>
        {!noNews && (
          <div>
            <PaginationSection
              handlePageClick={handlePageClick}
              pageCount={pageCount}
              currentPage={currentPage}
            />
          </div>
        )}
      </>
    );
  }
  return (
    <>
      {" "}
      <GeneralLoading />{" "}
    </>
  );
};

export default NewsList;
