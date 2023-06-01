import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Success from "../../../public/images/Group 33604.png";
import Logo from "../../../public/images/Frame 453.png";
import Link from "next/link";

const success = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
          <div className="bg-gray-800 flex flex-col gap-8 p-5">
            <div className="w-full text-left flex gap-5 ml-5 my-5">
              <Image src={Logo} alt={""} width={35} height={35} />
              <h1 className="font-thin text-5xl text-white">Technology Hunt</h1>
            </div>
            <div className="w-full">
              <div className="flex justify-center mr-5 items-center">
                <Image src={Success} alt="" width={45} height={45} />
              </div>

              <h2 className="font-bold text-blue-300 text-6xl w-full text-center my-10">
                Success !
              </h2>
              <p className="w-full text-center text-white">
                A email has been send to your email@domain.com. Please check for
                an email from company and click on the included link to reset
                your password.
              </p>
              <div className="w-1/5 mx-auto mt-5">
                {" "}
                <button className="rounded-xl bg-blue px-1 py-0 text-white font-bold">
                  {" "}
                  <Link className="w-full" href={"/"}>
                    Back To Home
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-20">
          <p className="w-full text-center font-thin text-white text-lg">
            © 2023 Official Register Form. All Rights Reserved | Design by
            Truong Ngoc Lam
          </p>
        </div>
      </div>
    </div>
  );
};

export default success;
