import React, { Fragment } from "react";
import SideBarAdmin from "@/components/SideBarAdmin";
import { useSelector } from "react-redux";
import NotFound from "../../components/adminnotfound";
import { useAppDispatch, RootState } from "@/redux/store";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = useSelector((state: RootState) => state.token.token);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const numberUsers = useSelector((state: RootState) => state.data);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Fragment>
      {token == "" ? (
        <NotFound />
      ) : (
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
      )}
    </Fragment>
  );
};
export default index;
