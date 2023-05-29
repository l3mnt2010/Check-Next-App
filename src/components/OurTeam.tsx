import TeamMember from "../components/TeamMember";
import member1 from "../assets/images/Profile.png";
import member2 from "../assets/images/Profile Image.png";
import member3 from "../assets/images/Profile Images.png";
import React from "react";

const about =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.";
const team = [
  {
    name: "Carla Press",
    job: "App Developer",
    img: member1,
  },
  {
    name: "Craig Gouse",
    job: "UI/UX Designer",
    img: member2,
  },
  {
    name: "Jocelyn Septimus",
    job: "Website developer",
    img: member3,
  },
];
const OurTeam = () => {
  return (
    <div className="w-full mt-80 px-10">
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
