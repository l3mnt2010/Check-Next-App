import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux/store";
import { getPerPage } from "@/redux/getPerPage";
import { getUsers } from "@/redux/getuser.slice";

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useAppDispatch();
  const itemsPerPage = useSelector(
    (state: RootState) => state.getpage.total_pages
  );
  const handlePageChange = (selected: { selected: number }) => {
    setCurrentPage(+selected.selected + 1);
  };
  useEffect(() => {
    dispatch(getPerPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUsers(currentPage));
  }, [currentPage]);
  return (
    <div className="w-1/3 mx-auto my-10">
      <h1 className="w-full text-center font-thin">Page</h1>
      <ReactPaginate
        className="flex justify-between mt-5 items-center font-thin"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageChange}
        pageRangeDisplayed={1}
        pageCount={itemsPerPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default React.memo(Paginate);
