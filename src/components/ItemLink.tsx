import React from "react";
import Image, { StaticImageData } from "next/image";
interface GetItem {
  image: StaticImageData;
}

const ItemLink: React.FC<GetItem> = (props) => {
  return (
    <li className="hover:animate-spin-slow bg-white hover:bg-blue-300 border bg-opacity-20 box-content border-white">
      <a href="">
        <Image src={props.image} alt="" width={35} height={35} />
      </a>
    </li>
  );
};

export default React.memo(ItemLink);
