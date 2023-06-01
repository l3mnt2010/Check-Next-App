import { Item } from "@/interface/interface";
import React from "react";

const Input: React.FC<Item> = (props) => {
  const { placeholder, type } = props;
  return (
    <input
      type={type}
      name=""
      id=""
      placeholder={placeholder}
      className="bg-opacity-0 focus:outline-none bg-gray-600 h-16 pl-5 border-b-4 border-b-white"
    />
  );
};

export default React.memo(Input);
