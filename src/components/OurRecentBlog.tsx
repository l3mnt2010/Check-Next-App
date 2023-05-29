import BlogPost from "../components/BlogPost";
import img1 from "../assets/images/Image (1).png";
import img2 from "../assets/images/Image (2).png";
import img3 from "../assets/images/Images.png";
import React from "react";

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
