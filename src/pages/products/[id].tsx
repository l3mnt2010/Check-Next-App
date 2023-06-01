import React, { Fragment, useState } from "react";
import { Rate, Select } from "antd";
import { AboutCard } from "@/interface/interface";
import { useRouter } from "next/router";
import { RootState, useAppDispatch } from "@/redux/store";
import { getOnlyProduct } from "@/redux/getonlyproduct.slice";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Footer_Product from "@/components/Footer_Product";
import OurTeam from "@/components/OurTeam";
import Menus from "@/components/Menus";
import Products from ".";
import { getCart } from "@/redux/action";
const CardClothes = () => {
  const router = useRouter();
  const [size, setSize] = useState("");

  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.getonlyproduct);
  const onChange = (value: string) => {
    setSize(value);
  };
  return (
    <div className="w-full h-auto mt-10">
      <Menus />
      <div className="w-full h-max border shadow-2xl flex justify-evenly gap-32">
        <div className="relative w-1/2">
          <div className="w-full ml-5 sm:ml-auto shadow-sm border-r-2 border-red-500">
            <img
              className="hover:scale-90 transition-transform float-right shadow-sm pt-24 pb-10"
              alt=""
              src={state.image}
              width={400}
              height={500}
            />
            <div className="absolute left-24 top-10 rounded-lg p-1 mx-2 font-bold text-lg text-white bg-yellow-400">
              New
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5 sm:gap-10 py-10 pr-10">
          <div className="w-full text-xs sm:text-lg text-left font-mono">
            {state.description}
          </div>
          <Rate defaultValue={4} count={5} allowClear={false} />

          <div className="w-full text-left font-thin hover:animate-bounce">
            {state.title}
          </div>
          <div className="w-full ">
            <div className="text-left font-bold mb-5">SIZE :</div>
            <Select
              className="w-2/3"
              placeholder="Select a size"
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "XS -Chest 36",
                  label: "XS -Chest 36",
                },
                {
                  value: "S -Chest 38",
                  label: "S -Chest 38",
                },
                {
                  value: "M -Chest 40",
                  label: "M -Chest 40",
                },
                {
                  value: "L -Chest 42",
                  label: "L -Chest 42",
                },
                {
                  value: "XL -Chest 44",
                  label: "XL -Chest 44",
                },
                {
                  value: "2XL -Chest 46-48",
                  label: "2XL -Chest 46-48",
                },
              ]}
            />
            {size == "" && (
              <div className="font-thin text-red-400 text-xs">
                You might chose your size
              </div>
            )}
          </div>
          <div className="font-bold shadow-sm text-lg bg-gray-50">
            £ {state.price}
          </div>
          <button
            onClick={() => {
              dispatch(getCart({ ...state, size: size }));
              router.push("/products/my_cart");
            }}
            className="bg-green-700 font-bold text-white w-40 h-14"
          >
            ADD TO CART
            <span className="ml-5">
              <ShoppingCartOutlined className="w-3 h-5" />
            </span>
          </button>
        </div>
      </div>
      <div>
        <Products />
        <OurTeam />
        <div className="my-3">
          <hr />
        </div>
        <Footer_Product />
      </div>
    </div>
  );
};

export default CardClothes;
