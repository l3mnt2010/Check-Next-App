import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";

import { loginApi } from "../service/service.user";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { LoginByEmail } from "@/redux/contact.slice";
import { useAppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import facebook from "../../../public/images/facebook-fill.png";
import youtube from "../../../public/images/image 4.png";
import twitter from "../../../public/images/image 2.png";
import instagram from "../../../public/images/image 3.png";
import pass_hidden from "../../../public/images/pass hidden.png";
import pass_show from "../../../public/images/show-pass.jpg";

import ItemLink from "@/components/ItemLink";

interface User {
  email: string;
  password: string;
}
export const IformInput = [{ type: "email", placeholder: "mail@example.com" }];
export const Images = [facebook, youtube, twitter, instagram];
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<User>({});
  console.log(isLogin);
  const onSubmit: SubmitHandler<User> = (data) => {
    setIsLoading(true);
    dispatch(LoginByEmail(data));

    if (isLogin === true) {
      setIsLoading(false);
      router.push("/");
    }
  };

  const handleChange = useCallback((event: { target: { value: any } }) => {
    setPassword(event.target.value);
  }, []);

  // const handleLogin = async (data: User) => {
  //   let res  = await loginApi(data.email, data.password).then((res) => {
  //     if (res.status >= 200 && res.status <= 300) {
  //       return;
  //     } else {
  //       return res.data.token;
  //     }
  //   });
  //   if (res) {
  //     localStorage.setItem("token", res);
  //     console.log("tôi yêu hehe", res);
  //   } else {
  //     console.log("user not found");
  //   }
  // };

  return (
    <div className="register bg-black w-screen h-screen pt-5 fixed top-0 left-0 right-0 bottom-0">
      <div className="w-4/6 mx-auto h-screen">
        <h1 className="font-thin text-6xl text-white text-center w-full py-11">
          WELL COME BACK
        </h1>
        <div className="w-full shadow-2xl grid grid-cols-2 h-1/2">
          <div className="left_login flex justify-center items-center">
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
            <form className=" flex flex-col w-3/4 mx-auto h-2/3 gap-5 pt-5 text-white">
              <input
                type="text"
                defaultValue={"eve.holt@reqres.in"}
                placeholder={IformInput[0].placeholder}
                {...register("email", {})}
                className="focus:outline-none bg-opacity-0 bg-gray-600 h-16 pl-5 border-b-4  border-b-white w-full "
              />{" "}
              <div className="w-full flex bg-opacity-0 bg-gray-600 border-b-4  border-b-white">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  defaultValue={"cityslicka"}
                  placeholder="cityslicka"
                  {...register("password", {
                    onChange(event) {
                      handleChange(event);
                    },
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}
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

                <a href="" className="text-pink-400">
                  Forgot password ?
                </a>
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
                <span className="bg-opacity-5 mr-2">
                  {isLoading && <Spin />}
                </span>
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
                  <a href="/register"> Register</a>
                </span>
              </div>

              <ul className="h-1/2 mx-auto flex justify-around gap-4">
                <li className="font-bold text-purple-400 flex justify-center items-center underline">
                  OR LOGIN WITH
                </li>
                {Images.map((itm) => {
                  return <ItemLink image={itm} />;
                })}
              </ul>
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
export default Register;
