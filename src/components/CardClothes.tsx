import React from "react";
import { Rate } from "antd";
import { AboutCard } from "@/interface/interface";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/redux/store";
import { getOnlyProduct } from "@/redux/getonlyproduct.slice";
const CardClothes: React.FC<AboutCard> = (props) => {
  const router = useRouter();
  const { image, price, rate, rate_count, title, id } = props;
  const dispatch = useAppDispatch();
  const showOnlyProduct = (id: number) => {
    dispatch(getOnlyProduct(id));
    router.push(`/products/${id}`);
  };
  return (
    <div className="w-52 h-fit_content p-5 border shadow-2xl flex flex-col justify-between">
      <div className="relative">
        <div className="w-5/6 mx-auto shadow-sm flex text-center">
          <img
            className="hover:scale-90 transition-transform"
            alt=""
            src={image}
            width={200}
            height={180}
          />
        </div>

        <Rate defaultValue={Math.floor(rate)} count={5} allowClear={false} />
        <div className="absolute -right-5 top-3 mx-2 font-bold text-xs text-white bg-yellow-400">
          New
        </div>
      </div>
      <div className="w-full text-left font-thin hover:animate-bounce">
        {title}
      </div>
      <div className="font-bold shadow-sm bg-gray-50"> £{price}</div>
      <button
        onClick={() => {
          showOnlyProduct(id);
        }}
        className=" bg-green-500 text-white font-bolds"
      >
        View
      </button>
    </div>
  );
};

export default CardClothes;
