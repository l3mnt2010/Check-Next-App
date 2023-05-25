import React from "react";
import SideBarAdmin from "@/components/SideBarAdmin";
import Home from "@/pages/dasboard";

const CRUD = () => {
  return (
    <div className="flex">
      <div className="w-1/6 p-0">
        <SideBarAdmin />
      </div>
      <div className="w-3/4">
        <Home />
      </div>
    </div>
  );
};

export default CRUD;
