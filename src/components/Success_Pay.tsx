import React from "react";

interface Total {
  total: number;
}
const Success_Pay: React.FC<Total> = (props) => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="font-bold text-xl">TOTAL</div>
      <div className="flex justify-between gap-10">
        <div className="font-bold">Sub-total</div>
        <p className="font-bold">{Math.round(props.total)}</p>
      </div>
      <button className="font-bold text-xl bg-green-800 text-white">
        CHECKOUT
      </button>
    </div>
  );
};

export default Success_Pay;
