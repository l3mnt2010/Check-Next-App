import { Reactangles } from "@/interface/interface";
import Image from "next/image";
import React from "react";

const Reactangle: React.FC<Reactangles> = (props) => {
  return (
    <div className="bg-blue font-bold flex flex-col items-center justify-around w-1/3 gap-1 p-1 rounded-lg sm:w-28 sm:justify-evenly">
      <Image src={props.img} alt="đây là ảnh của chúng tôi nha" />
      <h1 className="text-white">{props.number}</h1>
      <p className="text-white">{props.interact}</p>
    </div>
  );
};

export default React.memo(Reactangle);
