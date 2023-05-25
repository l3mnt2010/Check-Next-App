import { logo } from "../components/TeamMember";
import line from "../assets/images/Line 4.png";
import copyright from "../assets/images/copyright-line.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full bg-BG_Footer text-white pb-10">
      <div className="w-full mx-auto p-10 text-white  sm:grid sm:grid-cols-3 gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="w-full text-left uppercase font-bold text-xl">LOGO</h1>
          <p className="w-full text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
          </p>
          <div className="w-full flex py-1 my-5 sm:w-1/2">
            {logo.map((itm) => (
              <div className="flex gap-5">
                <Image src={line} alt="" className="h-7" />
                <Image
                  className="w-1/3 shadow-sm border-2 bg-white sm:w-1/2"
                  src={itm}
                  alt="this is logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-5">
          <h1 className="w-full text-left uppercase font-bold text-xl">
            quick link
          </h1>

          <div className="w-full text-left flex flex-col underline gap-1">
            <a href="">About</a>
            <a href="">Features</a>
            <a href="">Screenshot</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full my-5">
            <h1 className="w-full text-left font-bold text-xl uppercase">
              news letter
            </h1>
            <p className="w-full text-left ">
              Subscribe our newsletter to get our latest update & news
            </p>
          </div>
          <input
            className="w-full px-5 h-9 border-2 border-orange-400 sm:bg-gray-700 sm:w-1/2 rounded-lg"
            placeholder="Sent your email to us :3"
          />
          <input
            className="bg-blue rounded-md w-1/4 mx-auto sm:ml-10 sm:w-12 p-1 mt-5"
            type="submit"
          />
        </div>
      </div>
      <div className="w-5/6 mx-auto md:w-2/6 mx-auto flex gap-10">
        <Image src={copyright} width={16} height={10} alt="" />
        <p className=" font-bold ">
          Copyright 2023 By Lam TN .Ojjomedia. All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
