import remove from "../assets/images/Remove.png";
import Image from "next/image";
import { useAppDispatch } from "@/redux/store";
import { ToastContainer } from "react-toastify";
import React, { useEffect } from "react";
import Link from "next/link";
import { Menus } from "@/interface/interface";
import { showToastMessage } from "@/toastify/toastify.global";
import { useRouter } from "next/router";
import { logOut, loginUser } from "@/redux/contact.slice";

const OptionUser: React.FC<Menus> = (props) => {
  const { onBolds, onCloses } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handlerLogOut = () => {
    dispatch(logOut());
    router.push("/login");
  };

  return (
    <div className="z-50 w-max sm:p-5 absolute top-16 left-5 font-bold text-sm sm:right-0 lg:right-0 grid grid-rows-4 gap-y-5 shadow-2xl bg-white p-5 hover:underline">
      <Image
        alt=""
        className="absolute right-1 w-4 h-4 "
        onClick={onCloses}
        src={remove}
      />
      <div
        className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3"
        onClick={() => {
          onCloses();
          onBolds();
        }}
      >
        ResetPassword
      </div>
      <div className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3">
        Help
      </div>
      <Link
        href={"/admin"}
        className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3"
      >
        Admin
      </Link>
      <div
        className="font-sans text-sm hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3"
        onClick={() => {
          handlerLogOut();
          showToastMessage("success", "Thành công");
          onCloses();
        }}
      >
        LOG OUT ##
      </div>
      <ToastContainer />
    </div>
  );
};
export default React.memo(OptionUser);
