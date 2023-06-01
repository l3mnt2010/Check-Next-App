import { RootState, useAppDispatch } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProduct } from "../../redux/getproduct";
import CardClothes from "@/components/CardClothes";

const Products = () => {
  const data_product = useSelector(
    (state: RootState) => state.getproduct.product
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(getProduct());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <div className="mt-10">
      <div className="w-full text-center font-bold text-xl mb-5">
        YOU MIGHT ALSO LIKE
      </div>
      <div className="w-full sm:w-5/6 gird grid-cols-3 mx-auto sm:grid sm:grid-cols-5 gap-5">
        {data_product.map((itm) => {
          return (
            <CardClothes
              id={itm.id}
              key={itm.id}
              image={itm.image}
              price={itm.price}
              title={itm.title}
              rate={itm.rating.rate}
              rate_count={itm.rating.count}
            />
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Products;
