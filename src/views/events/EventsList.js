import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/ar";

import { checkNulls, convertSearchData } from "../../utils/utils";

import { getEvents } from "../../redux/actions/events";

import { path } from "../../Path/media-path";

import ListItem from "../ui/item-list-withImg";
import PaginationSection from "../ui/pagination-section";
import { GeneralLoading } from "../ui/LoadingScreens";
import SearchSection from "../ui/search-section";

const EventsList = () => {
  const [flag, setFlag] = useState(0);
  const events = useSelector((state) => state.events.data);
  const params = useSelector((state) => state.events.params);
  const count = useSelector((state) => state.events.count);
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
    dispatch(getEvents(currentPage + 1, convertSearchData(searchData)));
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
        ? dispatch(getEvents(currentPage + 1))
        : dispatch(getEvents(currentPage + 1, convertSearchData(params)));
    else dispatch(getEvents(currentPage + 1));
  }, [currentPage, dispatch]);

  const noEvents = !events || (events && events.length === 0); //check if no data

  if (events) {
    pageCount = Math.ceil(count / 9);
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2> الفعاليات</h2>
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
            {!noEvents &&
              events.map((item) => {
                return (
                  <ListItem
                    key={item.id}
                    link={`/media-corner/events/${item.id}`}
                    imgHeight={100}
                    title={item.title_AR}
                    // desc={item.description_AR}
                    imgPath={`${path.events}${item.id}/Photo_AR/${item.photo_AR}`}
                    date={moment(new Date(item.startDate)).format("LL")}
                  />
                );
              })}
          </div>
        </div>
        {!noEvents && (
          <div>
            <PaginationSection
              handlePageClick={handlePageClick}
              pageCount={pageCount}
              currentPage={currentPage}
            />
          </div>
        )}
        {loading && noEvents ? <GeneralLoading /> : null}
        {!loading && noEvents ? (
          <h2 className="w-100 text-center p-4"> لا توجد نتائج</h2>
        ) : null}
      </>
    );
  }
};

export default EventsList;
