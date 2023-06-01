/* eslint-disable react/no-unescaped-entities */
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { loginUser } from "@/redux/contact.slice";
import { useAppDispatch, RootState } from "@/redux/store";
import pass_hidden from "../../../public/images/pass hidden.png";
import pass_show from "../../../public/images/show-pass.jpg";
import ItemLink from "@/components/ItemLink";
import { ToastContainer } from "react-toastify";
import { LoginCredentials } from "@/interface/interface";
import Link from "next/link";
import { showToastMessage } from "@/toastify/toastify.global";
import { IformInput, Images } from "@/item.global";

const Log_in = () => {
  const loading = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm<LoginCredentials>();
  const onSubmit: SubmitHandler<LoginCredentials> = async (data, e: any) => {
    e.preventDefault();
    dispatch(loginUser(data));
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token != null) {
      showToastMessage("success", "Thành công !!!");
      router.push("/");
    }
  };
  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token != null) {
      showToastMessage("success", "Thành công !!!");
      router.push("/");
    } else {
      setPassword("");
    }
  }, [dispatch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="register bg-black w-screen h-screen pt-5 sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:bottom-0">
      <div className="sm:w-4/6 mx-auto h-screen">
        <h1 className="font-thin text-xl sm:text-6xl text-white text-center w-full py-11">
          WELL COME BACK
        </h1>
        <div className="w-full shadow-2xl sm:grid sm:grid-cols-2 h-fit_content sm:h-1/2">
          <div className="hidden w-screen h-fit_content sm:w-auto sm:h-full left_login sm:flex sm:justify-center sm:items-center">
            <div className="text-white flex flex-col gap-5">
              <h1 className="w-full text-center font-extrabold text-5xl">
                OFFICIAL
              </h1>
              <p className="font-thin text-xs sm:text-lg">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
              </p>
            </div>
          </div>
          <div className="bg-gray-800 py-5">
            <form className=" flex flex-col w-3/4 mx-auto h-2/3 gap-5 pt-5 text-white">
              <input
                type="text"
                defaultValue={"eve.holt@reqres.in"}
                placeholder={IformInput[0].placeholder}
                {...register("email", {})}
                className="focus:outline-none bg-opacity-0 bg-gray-600 h-16 pl-5 border-b-4  border-b-white w-full "
              />
              <div className="w-full flex bg-opacity-0 bg-gray-600 border-b-4  border-b-white">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  defaultValue={"cityslicka"}
                  placeholder="cityslicka"
                  {...register("password", {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}
                  onChange={handleChange}
                  className="focus:outline-none bg-opacity-0 w-5/6 bg-gray-600 h-16 pl-5 "
                />{" "}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex justify-center items-center w-1/6"
                >
                  {!showPassword ? (
                    <Image src={pass_hidden} alt="" width={20} height={20} />
                  ) : (
                    <Image src={pass_show} alt="" width={20} height={20} />
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name=""
                    className="border border-pink-400"
                    id=""
                  />
                  <p className="text-green-300">Remember Credentials</p>
                </div>

                <Link href="" className="text-pink-400">
                  Forgot password ?
                </Link>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" value="" />
                <p>
                  I hereby confirm that I have read all the Terms & Conditions
                  carefully and I agree with the same.
                </p>
              </div>
              <button
                onClick={handleSubmit(onSubmit)}
                className="w-full bg-black font-bold text-white h-14"
              >
                <span className="bg-opacity-5 mr-2">{loading && <Spin />}</span>
                Login
              </button>
            </form>

            <div className="z-50 mt-10 flex flex-col gap-4">
              <h1 className="font-thin text-lg w-full text-center text-white">
                Fast Signup With Your Favorites Social Profile
              </h1>
              <div className="font-thin text-lg w-full text-center text-white">
                Don't have a account ?
                <span className="text-pink-400">
                  <Link href="/register"> Register</Link>
                </span>
              </div>

              <ul className="h-1/2 mx-auto flex justify-around gap-4">
                <li className="font-bold text-purple-400 flex justify-center items-center underline">
                  OR LOGIN WITH
                </li>
                {Images.map((itm) => {
                  // eslint-disable-next-line react/jsx-key
                  return <ItemLink image={itm} />;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full mt-48">
          <p className="hidden sm:block w-full text-center font-thin text-white text-lg">
            © 2023 Official Register Form. All Rights Reserved | Design by
            Truong Ngoc Lam
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Log_in;
