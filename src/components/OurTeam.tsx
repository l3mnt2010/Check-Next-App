import React from "react";
import { about, team } from "@/item.global";
import TeamMember from "../components/TeamMember";

const OurTeam = () => {
  return (
    <div className="w-full mt-40 px-10">
      <h1 className="uppercase w-full text-center font-bold text-3xl text-pink-400 mb-3">
        Our reative team
      </h1>
      <p className="w-full text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <div className="sm:flex sm:w-2/3 gap-20 mx-auto">
        {team.map((itm) => (
          // eslint-disable-next-line react/jsx-key
          <TeamMember
            name={itm.name}
            job={itm.job}
            avatar={itm.img}
            about={about}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(OurTeam);
