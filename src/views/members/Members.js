import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkNulls, convertSearchData } from "../../utils/utils";

import { getMembers } from "../../redux/actions/members";

import { path } from "../../Path/media-path";

import PaginationSection from "../ui/pagination-section";
import { GeneralLoading } from "../ui/LoadingScreens";
import SearchSection from "../ui/search-section";
import Person from "../ui/person";

const MembersList = () => {
  const [flag, setFlag] = useState(0);
  const members = useSelector((state) => state.members.data);
  const params = useSelector((state) => state.members.params);
  const count = useSelector((state) => state.members.count);
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
    dispatch(getMembers(currentPage + 1, convertSearchData(searchData)));
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
        ? dispatch(getMembers(currentPage + 1))
        : dispatch(getMembers(currentPage + 1, convertSearchData(params)));
    else dispatch(getMembers(currentPage + 1));
  }, [currentPage, dispatch]);

  const noMembers = !members || (members && members.length === 0); //check if no data

  if (members) {
    pageCount = Math.ceil(count / 9);
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2> أعضاء هيئة البحوث</h2>
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
            {!noMembers &&
              members.map((item) => {
                return (
                  <Person
                    key={item.id}
                    name={item.name_AR}
                    position={item.position}
                    imgPath={`${path.member}${item.id}/Photo_AR/${item.photo_AR}`}
                  />
                );
              })}
          </div>
        </div>
        {!noMembers && (
          <div>
            <PaginationSection
              handlePageClick={handlePageClick}
              pageCount={pageCount}
              currentPage={currentPage}
            />
          </div>
        )}
        {loading && noMembers ? <GeneralLoading /> : null}
        {!loading && noMembers ? (
          <h2 className="w-100 text-center p-4"> لا توجد نتائج</h2>
        ) : null}
      </>
    );
  }
};

export default MembersList;
