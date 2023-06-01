import React from "react";
import SideBarAdmin from "@/components/SideBarAdmin";
import Home from "@/components/dasboard";
import NotFound from "@/components/adminnotfound";

const CRUD = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return (
    <>
      {" "}
      {token === null ? (
        <NotFound />
      ) : (
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
