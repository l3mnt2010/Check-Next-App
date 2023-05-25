import Image, { StaticImageData } from "next/image";
import React from "react";

interface Features {
  img: StaticImageData;
  title: string;
  text: string;
}

const Futures: React.FC<Features> = (props) => {
  return (
    <div className="w-full flex flex-col items-center gap-5 my-3">
      <Image alt="" src={props.img} className="w-10" />
      <h1 className="font-bold w-full text-center text-xl text-white">
        {props.title}
      </h1>
      <p className="w-full text-center text-white">{props.text}</p>
    </div>
  );
};
export default Futures;

export const Future: React.FC<Features> = (props) => {
  return (
    <div className="w-full">
      <Image alt="" src={props.img} className="" />
      <h1 className="font-bold text-purple-50">{props.title}</h1>
      <p className="text-purple-50 font-thin">{props.text}</p>
    </div>
  );
};
