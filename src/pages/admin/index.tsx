import React, { useEffect } from "react";
import SideBarAdmin from "@/components/SideBarAdmin";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "@/redux/store";
import { getUsers } from "@/redux/contact.slice";

const index = () => {
  const numberUsers = useSelector((state: RootState) => state.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(getUsers());
    return () => {
      promise.abort();
    };
  }, [dispatch]);
  return (
    <div className="flex">
      <div className="w-1/6 p-0">
        <SideBarAdmin />
      </div>
      <div className="w-3/4 flex mt-36 justify-center">
        <button className="w-3/4 h-20 shadow-2xl text-center font-thin">
          Hiện tại có {numberUsers.length} người dùng sử dụng ứng dụng
        </button>
      </div>
    </div>
  );
};
export default index;
