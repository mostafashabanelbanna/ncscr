import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/ar";

import { getCourses } from "../../redux/actions/courses";

import { checkNulls, convertSearchData } from "../../utils/utils";

import CourseCard from "./courseCard";
import PaginationSection from "../ui/pagination-section";
import { GeneralLoading } from "../ui/LoadingScreens";
import SearchSection from "../ui/search-section";

const CoursesList = () => {
  const [flag, setFlag] = useState(0);
  const courses = useSelector((state) => state.courses.data);
  const params = useSelector((state) => state.courses.params);
  const count = useSelector((state) => state.courses.count);
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState("");
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
    dispatch(getCourses(currentPage + 1, convertSearchData(searchData)));
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
        ? dispatch(getCourses(currentPage + 1))
        : dispatch(getCourses(currentPage + 1, convertSearchData(params)));
    else dispatch(getCourses(currentPage + 1));
  }, [currentPage, dispatch]);

  const noCourse = !courses || (courses && courses.length === 0); //check if no data

  if (courses) {
    pageCount = Math.ceil(count / 9);
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2> الدورات التدريبية</h2>
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
        <div className="col-12 container">
          <div className="text-white d-flex flex-column flex-sm-row flex-wrap justify-content-center">
            {!noCourse &&
              courses.map((item) => {
                return <CourseCard item={item} />;
              })}
          </div>
        </div>
        {!noCourse && (
          <div>
            <PaginationSection
              handlePageClick={handlePageClick}
              pageCount={pageCount}
              currentPage={currentPage}
            />
          </div>
        )}
        {loading && noCourse ? <GeneralLoading /> : null}
        {!loading && noCourse ? (
          <h2 className="w-100 text-center p-4"> لا توجد نتائج</h2>
        ) : null}
      </>
    );
  }
};

export default CoursesList;
