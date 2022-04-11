import React, { useEffect, useState } from "react";
import SearchSection from "../ui/search-section";
import PaginationSection from "../ui/pagination-section";
import { coursesList } from "../../store/action/courseActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import "moment/locale/ar";
import { GeneralLoading } from "../ui/LoadingScreens";

import CourseCard from "./courseCard";

function check(a) {
  let flag = 0;
  for (let property in a) {
    if (a[property] != null) {
      flag = 1;
      return true;
    }
  }
  return false;
}

function data(a) {
  for (let property in a) {
    if (a[property] == null) delete a[property];
  }
  return a;
}

const CourseList = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState();
  const [publishDateFrom, setPublishDateFrom] = useState();
  const [publishDateTo, setPublishDateTo] = useState();
  const [flag, setFlag] = useState(0);
  let pageCount;
  let dataFilled = {
    title,
    publishDateFrom,
    publishDateTo,
  };
  console.log("currentPage", currentPage);
  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    props.coursesList(currentPage + 1, data(dataFilled));
    setFlag(1);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const speakerHandler = (e) => {
    setSpeakerName(e.target.value);
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
    console.log("dddd", selectedPage);
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (flag)
      check(dataFilled) == false
        ? props.coursesList(currentPage + 1)
        : props.coursesList(currentPage + 1, data(dataFilled));
    else props.coursesList(currentPage + 1);
  }, [currentPage]);

  const { courses } = props;
  const render = (courses) => {
    return (
      <>
        {courses.result.length ? (
          courses.result.map((item) => {
            return <CourseCard item={item} />;
          })
        ) : (
          <div> لا توجد نتائج </div>
        )}
      </>
    );
  };
  if (courses) {
    pageCount = Math.ceil(props.courses.count / 9);
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2>الدورات التدريبية</h2>
          <div className="page_title"></div>
        </div>
        <SearchSection
          submit={submitHandler}
          TextFieldOneHandler={titleHandler}
          labelTextFieldOne="بحث مثل العنوان , اسم المقدم ..."
          classNameTextFieldOne="col-12"
          publishDateFrom={publishDateFrom}
          publishFromHandler={publishFromHandler}
          classNameDPFrom="col-6 "
          publishDateTo={publishDateTo}
          publishToHandler={publishToHandler}
          classNameDPTo="col-6"
        />
        <div className="container">
          <div
            className={`text-white d-flex flex-wrap flex-md-row flex-column ${
              courses.result.length < 3
                ? "justify-content-start"
                : "justify-content-center"
            }`}
          >
            {render(courses)}
          </div>
        </div>
        <div>
          <PaginationSection
            handlePageClick={handlePageClick}
            pageCount={pageCount}
            currentPage={currentPage}
          />
        </div>
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
const mapStateToProps = (state) => {
  return {
    courses: state.courseComponents.courselist,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ coursesList }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
