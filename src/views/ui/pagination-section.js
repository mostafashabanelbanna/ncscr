import React from "react";
import ReactPaginate from "react-paginate";

const PaginationSection = (props) => {
  return (
    <>
      <div className="justify-content-center d-flex">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          forcePage={props.currentPage}
          pageCount={props.pageCount}
          onPageChange={props.handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </>
  );
};
export default PaginationSection;
