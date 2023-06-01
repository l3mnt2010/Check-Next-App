import BlogPost from "../components/BlogPost";
import React from "react";
import { about, blog } from "@/item.global";

const OurRecentBlog = () => {
  return (
    <div className="w-5/6 mx-auto my-10 p-3 bg-gray-50 shadow-lg">
      <h1 className="w-full text-center font-bold sm:text-3xl text-xl text-pink-500">
        Our recent blog
      </h1>
      <p className="w-full text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
      <div className="sm:flex w-5/6 mx-auto gap-20">
        {blog.map((itm) => (
          // eslint-disable-next-line react/jsx-key
          <BlogPost img={itm.img} title={itm.title} text={about} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(OurRecentBlog);
