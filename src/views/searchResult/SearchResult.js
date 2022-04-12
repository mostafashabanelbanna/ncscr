import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import moment from "moment";
import "moment/locale/ar";

import { convertSearchData } from "../../utils/utils";

import { getSearchResult } from "../../redux/actions/searchResult";

import { path } from "../../Path/media-path";

import ListItem from "../ui/item-list-withImg";
import PaginationSection from "../ui/pagination-section";
import { GeneralLoading } from "../ui/LoadingScreens";
import SearchSection from "../ui/search-section";

const SearchResultList = () => {
  let { keyword } = useParams();

  const searchResult = useSelector((state) => state.searchResult.data);
  const params = useSelector((state) => state.searchResult.params);
  const count = useSelector((state) => state.searchResult.count);
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  let pageCount;

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setCurrentPage(0);
  //   dispatch(getSearchResult(currentPage + 1, convertSearchData(searchData)));
  // };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  useEffect(() => {
    dispatch(getSearchResult(currentPage + 1, keyword));
  }, [currentPage, dispatch, keyword]);

  const noSearchResult =
    !searchResult || (searchResult && searchResult.length === 0); //check if no data

  const setDetailsRoute = (objectName) => {
    console.log(objectName);
    switch (objectName) {
      case "DocumentLibrary":
        return {
          photo: "documentLibrary",
          route: "/document-details",
        };
      case "Event":
        return { photo: "event", route: "/media-corner/events" };
      case "News":
        return { photo: "news", route: "/media-corner/news" };
      case "Member":
        return { photo: "Member", route: "/" };
      case "TrainingCourse":
        return { photo: null, route: "/media-corner/course-training" };
      default:
        return { photo: objectName, route: objectName };
    }
  };

  if (searchResult) {
    pageCount = Math.ceil(count / 9);
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2> نتائج البحث عن {keyword}</h2>
          <div className="page_title"></div>
        </div>
        <div className="container">
          <div className=" d-flex flex-column flex-sm-row flex-wrap justify-content-start">
            {!noSearchResult &&
              searchResult.map((item) => {
                const { route } = setDetailsRoute(item.objectName);
                const { photo } = setDetailsRoute(item.objectName);
                return (
                  <ListItem
                    key={item.id}
                    link={`${route}/${item.id}`}
                    imgHeight={100}
                    title={item.title_AR}
                    desc={item.description_AR}
                    imgPath={`${path[photo]}${item.id}/Photo_AR/${item.photo_AR}`}
                  />
                );
              })}
          </div>
        </div>
        {!noSearchResult && (
          <div>
            <PaginationSection
              handlePageClick={handlePageClick}
              pageCount={pageCount}
              currentPage={currentPage}
            />
          </div>
        )}
        {loading && noSearchResult ? <GeneralLoading /> : null}
        {!loading && noSearchResult ? (
          <h2 className="w-100 text-center p-4"> لا توجد نتائج</h2>
        ) : null}
      </>
    );
  }
};

export default SearchResultList;
