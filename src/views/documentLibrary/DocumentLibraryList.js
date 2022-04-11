import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/ar";

import { checkNulls, convertSearchData } from "../../utils/utils";

import { getDocumentLibrary } from "../../redux/actions/documentLibrary";

import { path } from "../../Path/media-path";

import ListItem from "../ui/item-list-withImg";
import PaginationSection from "../ui/pagination-section";
import { GeneralLoading } from "../ui/LoadingScreens";
import SearchSection from "../ui/search-section";
import { useParams } from "react-router-dom";
import InfographList from "../infograph/infographList";
const DocumentLibraryList = () => {
  const { docType, observatory } = useParams();
  const mainData = [docType, observatory];
  const [flag, setFlag] = useState(0);
  const documentLibrary = useSelector((state) => state.documentLibrary.data);
  const params = useSelector((state) => state.documentLibrary.params);
  const count = useSelector((state) => state.documentLibrary.count);
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
    dispatch(
      getDocumentLibrary(
        currentPage + 1,
        mainData,
        convertSearchData(searchData)
      )
    );
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
        ? dispatch(getDocumentLibrary(currentPage + 1, mainData))
        : dispatch(
            getDocumentLibrary(
              currentPage + 1,
              mainData,
              convertSearchData(params)
            )
          );
    else dispatch(getDocumentLibrary(currentPage + 1, mainData));
  }, [currentPage, docType, observatory, dispatch]);

  const noDocumentLibrary =
    !documentLibrary || (documentLibrary && documentLibrary.length === 0); //check if no data

  if (documentLibrary) {
    pageCount = Math.ceil(count / 9);
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2>
            {docType == 1
              ? "التقارير البحثية"
              : docType == 2
              ? "الدوريات البحثية"
              : docType == 3
              ? "بقلم باحث"
              : docType == 10003 && observatory == 1
              ? "المرصد الاجتماعي"
              : docType == 10003 && observatory == 2
              ? "إنفوجراف"
              : null}
          </h2>
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
            {!noDocumentLibrary && (
              <>
                {mainData[1] === undefined || mainData[1] === "1"
                  ? documentLibrary.map((item) => {
                      return (
                        <ListItem
                          key={item.id}
                          issue={item.documentLibraryIssueName}
                          link={`/document-details/${item.id}`}
                          imgPath={
                            path.documentLibrary +
                            item.id +
                            "/photo_AR/" +
                            item.photo_AR
                          }
                          title={item.title_AR}
                          imgHeight={100}
                          publisher={item.writer}
                          date={
                            item.publishDate
                              ? String(item.publishDate).trim().length > 4
                                ? moment(new Date(item.publishDate)).format(
                                    "LL"
                                  )
                                : item.publishDate
                              : null
                          }
                        />
                      );
                    })
                  : documentLibrary.map((item) => {
                      return (
                        <InfographList
                          key={item.id}
                          title={item.title_AR}
                          description={item.description_AR}
                          imgPath={
                            path.documentLibrary +
                            item.id +
                            "/Cover_ar/" +
                            item.cover_AR
                          }
                        />
                      );
                    })}
              </>
            )}
          </div>
        </div>
        {!noDocumentLibrary && (
          <div>
            <PaginationSection
              handlePageClick={handlePageClick}
              pageCount={pageCount}
              currentPage={currentPage}
            />
          </div>
        )}
        {loading && noDocumentLibrary ? <GeneralLoading /> : null}
        {!loading && noDocumentLibrary ? (
          <h2 className="w-100 text-center p-4"> لا توجد نتائج</h2>
        ) : null}
      </>
    );
  }
};

export default DocumentLibraryList;
