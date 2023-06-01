import { useSelector } from "react-redux";
import Menus from "@/components/Menus";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import Item_In_Card from "@/components/Item_In_Card";
import Footer_Product from "@/components/Footer_Product";
import Success_Pay from "@/components/Success_Pay";
import Products from "./index";
import { Only_Pro_Duct } from "@/interface/interface";

const my_cart = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const items = useSelector((state: RootState) => state.getcart.cart);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [total, setTotal] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [item, setItem] = useState<Only_Pro_Duct[]>(items);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handlerClear = (id: number) => {
    const updatedItems = items.filter((itm) => itm.id !== id);
    setItem(updatedItems);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let total = 0;
    if (item.length > 0) {
      item.map((itm) => {
        total += itm.price;
      });
    }
    setTotal(total);
  }, [item, setItem]);

  return (
    <div>
      <Menus />
      <div className="w-5/6 mx-auto flex justify-around mt-20">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between gap-10 shadow-2xl">
            <h1 className="font-bold text-xl">MY BAG</h1>
            <p>Items are reserved for 60 minutes</p>
          </div>
          <div>
            {item.map((itm) => {
              return (
                <Item_In_Card
                  category={itm.category}
                  description={itm.description}
                  id={itm.id}
                  image={itm.image}
                  price={itm.price}
                  size={itm.size}
                  title={itm.title}
                  key={itm.id}
                  total={total}
                  handler={() => handlerClear(itm.id)}
                />
              );
            })}
          </div>
          {total != 0 && (
            <div className="w-full text-right font-bold">
              SUB-TOTAL {Math.round(total)}
            </div>
          )}
        </div>
        <div className="">
          <Success_Pay total={total} />
        </div>
      </div>
      <Products />
      <Footer_Product />
    </div>
  );
};

export default my_cart;
