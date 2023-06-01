import { useSelector } from "react-redux";
import Home from "@/components/Home";
import Link from "next/link";
import { RootState } from "@/redux/store";
import Menus from "@/components/Menus";
import { ToastContainer } from "react-toastify";
import BlogPost from "../components/BlogPost";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import Logo from "../../public/images/Frame 453.png";
import { about, blog } from "@/item.global";

const OurRecentBlog = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return (
    <div className="main w-full h-screen block">
      {token !== null && <Menus />}
      {token === null && (
        <div>
          <div className="flex justify-around sm:flex sm:justify-around pt-10">
            <div className="flex">
              <div className="flex items-center">
                <Image src={Logo} alt={""} width={40} height={40} />
              </div>
              <div className="font-extralight text-xl sm:text-6xl text-pink-400">
                HUNT TECHNOLOGY
              </div>
            </div>

            <div className="flex justify-center items-center gap-1 sm:gap-5">
              <div>
                <Link
                  href={"/login"}
                  className="bg-purple-300 rounded-xl text-white w-auto font-bold  h-full  px-2 py-1 my-2 ring-inherit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3"
                >
                  Login
                </Link>
              </div>
              <div>
                <Link
                  href={"/register"}
                  className="bg-pink-300 rounded-xl text-white font-bold h-full ring-inherit px-1 py-1 my-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mr-3"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
          <div className="w-5/6 mx-auto my-10 p-3 ">
            <h1 className="w-full text-center font-bold text-4xl my-2 text-white">
              Our recent blog
            </h1>
            <p className="w-full text-center text-purple-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae.
            </p>
            <div className="sm:flex w-5/6 mx-auto gap-20">
              {blog.map((itm, index) => (
                <BlogPost
                  key={index}
                  img={itm.img}
                  title={itm.title}
                  text={about}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
      <Home />
    </div>
  );
};

export default OurRecentBlog;
