import React from "react";
import facebook from "../../public/images/image 2.png";
import instargram from "../../public/images/image 3.png";
import twitter from "../../public/images/image 4.png";

import Image, { StaticImageData } from "next/image";
interface Team {
  avatar: StaticImageData;
  name: string;
  job: string;
  about: string;
}

export const logo = [facebook, instargram, twitter];

const TeamMember: React.FC<Team> = (props) => {
  return (
    <div className="w-full rounded-lg shadow-2xl mt-5">
      <Image
        className="w-1/3 mx-auto"
        src={props.avatar}
        alt="this is avatar"
      />
      <div className="p-3">
        <h1 className="w-full text-center uppercase font-bold text-xl">
          {props.name}
        </h1>
        <h1 className="w-full text-center uppercase text-sm my-2 text-yellow-500">
          {props.job}
        </h1>
        <p className="w-fill text-center">{props.about}</p>
      </div>
      <div className="w-5/6 mx-auto flex justify-evenly py-5">
        {logo.map((itm) => (
          <div>
            <Image className="w-1/3 shadow-2xl" src={itm} alt="this is logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
