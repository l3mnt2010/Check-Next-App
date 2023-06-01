import { Only_Pro_Duct_Total } from "@/interface/interface";
import { CloseOutlined } from "@ant-design/icons";
import React from "react";

const Item_In_Card: React.FC<Only_Pro_Duct_Total> = (props) => {
  const {
    category,
    description,
    id,
    image,
    price,
    size,
    title,
    total,
    handler,
  } = props;
  return (
    <div className="flex my-5 shadow-2xl p-10">
      <div className="w-1/2">
        <img src={image} alt="" width={100} height={100} />
      </div>
      <div className="w-1/2">
        <button onClick={handler} className="float-right bg-red-400">
          <CloseOutlined />
        </button>
        <p className="font-bold text-lg">£ {price}</p>
        <p className="text-sm font-thin">{title}</p>
        <p className="font-mono">{size}</p>
      </div>
    </div>
  );
};

export default Item_In_Card;
