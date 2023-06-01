import React from "react";
import Image from "next/image";
import { GetItem } from "@/interface/interface";

const ItemLink: React.FC<GetItem> = (props) => {
  return (
    <div className="hover:animate-spin-slow bg-white hover:bg-blue-300 border bg-opacity-20 box-content border-white">
      <a href="">
        <Image src={props.image} alt="" width={35} height={35} />
      </a>
    </div>
  );
};

export default React.memo(ItemLink);
