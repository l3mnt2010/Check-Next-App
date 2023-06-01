import React, { useEffect } from "react";
import SideBarAdmin from "@/components/SideBarAdmin";
import { useSelector } from "react-redux";
import NotFound from "../../components/adminnotfound";
import { useAppDispatch, RootState } from "@/redux/store";
import { getPerPage } from "@/redux/getPerPage";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const numberUsers = useSelector((state: RootState) => state.getpage.per_page);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(getPerPage());
  }, [dispatch]);
  return (
    <div>
      {token === null ? (
        <NotFound />
      ) : (
        <div className="flex">
          <div className="w-1/6 p-0">
            <SideBarAdmin />
          </div>
          <div className="w-3/4 flex mt-36 justify-center">
            <button className="w-3/4 h-20 shadow-2xl text-center font-thin">
              Hiện tại có {numberUsers} người dùng sử dụng ứng dụng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default index;
