import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getPhotoAlbum } from "../../redux/actions/photoAlbum";

import { path } from "../../Path/media-path";

import PaginationSection from "../ui/pagination-section";
import { GeneralLoading } from "../ui/LoadingScreens";
import SearchSection from "../ui/search-section";
import MediaList from "../ui/mediaList";

const PhotoAlbumList = () => {
  const photoAlbum = useSelector((state) => state.photoAlbum.data);
  const params = useSelector((state) => state.photoAlbum.params);
  const count = useSelector((state) => state.photoAlbum.count);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState();

  let pageCount;
  let searchData = {
    title,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    dispatch(getPhotoAlbum(currentPage + 1, searchData));
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  useEffect(() => {
    //
    dispatch(getPhotoAlbum(currentPage + 1, params));
    //
  }, [currentPage, dispatch]);

  const noPhotoAlbum = !photoAlbum || (photoAlbum && photoAlbum.length === 0); //check if no data

  if (photoAlbum) {
    pageCount = Math.ceil(count / 9);
    return (
      <>
        <div className="col-12 my-3 px-3 container">
          <h2> معرض الصور</h2>
          <div className="page_title"></div>
        </div>
        <SearchSection
          submit={submitHandler}
          TextFieldOneHandler={titleHandler}
          labelTextFieldOne="العنوان"
          classNameTextFieldOne="col-12"
          classNameDPFrom="col-6 "
          classNameDPTo="col-6"
        />
        <div className="container">
          <div className="row justify-content-start">
            {!noPhotoAlbum &&
              photoAlbum.map((item) => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    className="mb-4 col-lg-4 col-sm-6 col-12 p-3"
                  >
                    <Link to={`/media-corner/photo-album/${item.id}`}>
                      <MediaList
                        key={item.id}
                        imgHeight={170}
                        title={item.title_AR}
                        imgPath={`${path.media}${item.id}/Cover_AR/${item.cover_AR}`}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        {!noPhotoAlbum && (
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

export default PhotoAlbumList;
