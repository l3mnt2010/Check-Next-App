import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import facebook from "../../../public/images/facebook-fill.png";
import youtube from "../../../public/images/image 4.png";
import twitter from "../../../public/images/image 2.png";
import instagram from "../../../public/images/image 3.png";

import Input from "@/components/Input";
import ItemLink from "@/components/ItemLink";
import { Images } from "../login";

export const IformInput = [
  { type: "text", placeholder: "First Name" },
  { type: "email", placeholder: "mail@example.com" },
  { type: "password", placeholder: "Password" },
  { type: "password", placeholder: "Confirm Password" },
];
const Register = () => {
  return (
    <div className="register bg-black w-screen h-screen pt-5 fixed top-0 left-0 right-0 bottom-0">
      <div className="w-4/6 mx-auto h-screen">
        <h1 className="font-thin text-6xl text-white text-center w-full py-11">
          SIGN UP TO CONTINUE
        </h1>
        <div className="w-full shadow-2xl grid grid-cols-2 h-1/2">
          <div className="left_register flex justify-center items-center">
            <div className="text-white flex flex-col gap-5">
              <h1 className="w-full text-center font-extrabold text-5xl">
                OFFICIAL
              </h1>
              <p className="font-thin">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
              </p>
            </div>
          </div>
          <div className="bg-gray-800">
            <form
              action=""
              className="flex flex-col w-3/4 mx-auto h-2/3 gap-5 pt-5 text-white"
            >
              {IformInput.map((itm) => {
                return <Input placeholder={itm.placeholder} type={itm.type} />;
              })}

              <input
                type="submit"
                className="w-full bg-blue-500 text-white h-14"
                placeholder="REGISTER"
              />
            </form>
            <div className="z-50 mt-10 flex flex-col gap-4">
              <h1 className="font-thin text-lg w-full text-center text-white">
                Fast Signup With Your Favourite Social Profile
              </h1>
              <div className="font-thin text-lg w-full text-center text-white">
                Had a account ?
                <span className="text-pink-400">
                  <a href="/login"> Login</a>
                </span>
              </div>
              <ul className="h-1/2 mx-auto flex justify-around gap-4">
                {Images.map((itm) => {
                  return <ItemLink image={itm} />;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full mt-48">
          <p className="w-full text-center font-thin text-white text-lg">
            © 2023 Official Register Form. All Rights Reserved | Design by
            Truong Ngoc Lam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
