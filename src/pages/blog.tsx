import BlogPost from "../components/BlogPost";
import { useState } from "react";
import Footer from "../components/Footer";
import RecentPosts from "../components/RecentPost";

import line from "../assets/images/Line 8.png";
import img from "../assets/images/Images.png";
import img0 from "../assets/images/Image0.png";
import img1 from "../assets/images/Image1.png";
import img2 from "../assets/images/Image2.png";
import img3 from "../assets/images/Image3.png";
import img4 from "../assets/images/Image4.png";
import img5 from "../assets/images/Image5.png";
import img6 from "../assets/images/Image6.png";
import img7 from "../assets/images/Image7.png";
import img8 from "../assets/images/Image8.png";
import Image from "next/image";

const about =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac.";
const blog = [
  {
    title: "The Snap Pixel: How It Works and How to Install ",
    img: img,
  },
  {
    title: "Have brands given up on International Women’s Day?",
    img: img0,
  },
  {
    title: "6 Designers On The Brands Empowering Women Today",
    img: img1,
  },
  {
    title:
      "Gillette Launches Planet KIND, A Slightly More Sustainable Line Of Personal Care.",
    img: img2,
  },
  {
    title: "The Snap Pixel: How It Works and How to Install",
    img: img3,
  },
];

export const blog_recent = [
  {
    title:
      "Irina Rozovsky captures Brooklyn’s Prospect Park in a romantic light",
    img: img4,
  },
  {
    title:
      "A new online show is tracing leading artists’ early commer-cial practice",
    img: img5,
  },
  {
    title:
      "Think Food Bank project uses stickers to prompt people to contribute",
    img: img6,
  },
  {
    title: "A new photo book is celebra ting LA’s vibrant lowrider culture",
    img: img7,
  },
  {
    title: "The indie publishers adapting to the pandemic",
    img: img8,
  },
];

const Blogs = () => {
  const [page, getPage] = useState(0);
  return (
    <div className="w-full text-left">
      <div className="w-5/6 mx-auto flex gap-5 ">
        <div className="letf-blog w-2/3 ">
          {blog.map((itm) => (
            <BlogPost img={itm.img} title={itm.title} text={about} />
          ))}
        </div>
        <div className="w-1/3 my-10">
          <input
            placeholder="Search your blog ..."
            className="hidden sm:block w-full h-10 border-2 border-orange-400 rounded-lg"
          />
          <Image alt="" src={line} className="w-2/3 mx-auto my-10" />
          <h1 className="w-full text-letf uppercase font-bold text-xl">
            Recent Post
          </h1>
          {blog_recent.map((itm) => (
            <RecentPosts img={itm.img} text={itm.title} />
          ))}
          <Image alt="" src={line} className="w-2/3 mx-auto my-10" />
          <div className="w-full">
            <h1 className="w-full uppercase font-bold text-xl text-left my-10">
              Category
            </h1>
            <a href="">E-commars app</a>
            <a href="">Banking app</a>
            <a href="">Business app</a>
            <a href="">Video app</a>
            <a href="">E-commars app</a>
          </div>
          <Image alt="" src={line} className="w-2/3 mx-auto my-10" />
          <div className="w-full flex flex-col h-1/4">
            <h1 className="w-full text-xl font-bold">TAG</h1>
            <a href="" className="underline">
              ecommers app
            </a>
            <a href="" className="underline">
              Music app
            </a>
            <a href="" className="underline">
              bank app
            </a>
            <a href="" className="underline">
              social app
            </a>
          </div>
        </div>
      </div>
      <p className="w-full text-center">Trang</p>
      <div className="w-5/6 mx-auto flex justify-around my-5"></div>
      <Footer />
    </div>
  );
};
export default Blogs;
