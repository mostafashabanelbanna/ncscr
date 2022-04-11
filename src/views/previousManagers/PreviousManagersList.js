import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/ar";

import { checkNulls, convertSearchData } from "../../utils/utils";

import { getPreviousManagers } from "../../redux/actions/previousManagers";

import { path } from "../../Path/media-path";

import PaginationSection from "../ui/pagination-section";
import { GeneralLoading } from "../ui/LoadingScreens";
import SearchSection from "../ui/search-section";
import Person from "../ui/person";

const PreviousManagersList = () => {
  const [flag, setFlag] = useState(0);
  const previousManagers = useSelector((state) => state.previousManagers.data);
  const params = useSelector((state) => state.previousManagers.params);
  const count = useSelector((state) => state.previousManagers.count);
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [name, setName] = useState();
  let pageCount;
  let searchData = {
    name,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    dispatch(
      getPreviousManagers(currentPage + 1, convertSearchData(searchData))
    );
    setFlag(1);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  useEffect(() => {
    if (flag)
      checkNulls(params) == false
        ? dispatch(getPreviousManagers(currentPage + 1))
        : dispatch(
            getPreviousManagers(currentPage + 1, convertSearchData(params))
          );
    else dispatch(getPreviousManagers(currentPage + 1));
  }, [currentPage, dispatch]);

  const noPreviousManagers =
    !previousManagers || (previousManagers && previousManagers.length === 0); //check if no data

  if (previousManagers) {
    pageCount = Math.ceil(count / 9);
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2> المدراء السابقون</h2>
          <div className="page_name"></div>
        </div>
        <SearchSection
          submit={submitHandler}
          TextFieldOneHandler={nameHandler}
          labelTextFieldOne="العنوان"
          classNameTextFieldOne="col-12"
          classNameDPFrom="col-6 "
          classNameDPTo="col-6"
        />
        <div className="container">
          <div className=" d-flex flex-column flex-sm-row flex-wrap justify-content-start">
            {!noPreviousManagers &&
              previousManagers.map((item) => {
                return (
                  <Person
                    key={item.id}
                    name={item.name_AR}
                    imgPath={`${path.member}${item.id}/Photo_AR/${item.photo_AR}`}
                    jobStart={moment(new Date(item.jobStart)).format("LL")}
                    jobFinish={moment(new Date(item.jobFinish)).format("LL")}
                  />
                );
              })}
          </div>
        </div>
        {!noPreviousManagers && (
          <div>
            <PaginationSection
              handlePageClick={handlePageClick}
              pageCount={pageCount}
              currentPage={currentPage}
            />
          </div>
        )}
        {loading && noPreviousManagers ? <GeneralLoading /> : null}
        {!loading && noPreviousManagers ? (
          <h2 className="w-100 text-center p-4"> لا توجد نتائج</h2>
        ) : null}
      </>
    );
  }
};

export default PreviousManagersList;
