import React from "react";
import SideBarAdmin from "@/components/SideBarAdmin";
import Home from "@/components/dasboard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CRUD = () => {
  const token = useSelector((state: RootState) => state.token.token);
  return (
    <>
      {" "}
      {token != "" && (
        <div className="flex">
          <div className="w-1/6 p-0">
            <SideBarAdmin />
          </div>
          <div className="w-3/4">
            <Home />
          </div>
        </div>
      )}
    </>
  );
};

export default CRUD;
