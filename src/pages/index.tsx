import BlogPost from "../components/BlogPost";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/images/Image (1).png";
import img2 from "../assets/images/Image (2).png";
import img3 from "../assets/images/Images.png";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../public/images/Frame 453.png";
import Home from "@/components/Home";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Menus from "@/components/Menus";

const about =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.";
const blog = [
  {
    title: "The Snap Pixel: How It Works and How to Install ",
    img: img1,
  },
  {
    title: "Global Partner Solutions: A Partnership of Innova",
    img: img2,
  },
  {
    title: "2021: An opportunity for Snapchatters to start fre",
    img: img3,
  },
];

const OurRecentBlog = () => {
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const router = useRouter();
  return (
    <div className="main w-full h-screen block">
      {isLogin && <Menus />}
      {!isLogin && (
        <div>
          <div className="flex justify-around pt-10">
            <div className="flex">
              <div className="flex items-center">
                <Image src={Logo} alt={""} width={40} height={40} />
              </div>
              <div className="font-extralight text-6xl text-pink-400">
                HUNT TECHNOLOGY
              </div>
            </div>

            <div className="flex justify-center items-center gap-5">
              <div>
                <button
                  className="bg-purple-300 rounded-xl text-white font-bold w-32 h-10"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  {" "}
                  LOGIN
                </button>
              </div>
              <div>
                <button
                  className="bg-pink-300 rounded-xl text-white font-bold w-32 h-10"
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  Register
                </button>
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
              {blog.map((itm) => (
                <BlogPost img={itm.img} title={itm.title} text={about} />
              ))}
            </div>
          </div>
        </div>
      )}
      <Home />
    </div>
  );
};

export default OurRecentBlog;
