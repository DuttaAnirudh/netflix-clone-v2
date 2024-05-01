import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, handlePageClick }) => {
  return (
    <div className="mt-4 mb-2">
      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        nextLabel=">"
        previousLabel="<"
        containerClassName="pagination"
        pageClassName="pagination__item"
        pageLinkClassName="pagination__link"
        previousClassName="pagination__previous"
        nextClassName="pagination__next"
        breakClassName="pagination__item"
        breakLinkClassName="pagination__break"
        activeClassName="pagination__active"
        disabledClassName="pagination__disabled"
      />
    </div>
  );
};

export default Pagination;
