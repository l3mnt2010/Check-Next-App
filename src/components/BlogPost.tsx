import { StaticImageData } from "next/image";
import Image from "next/image";
interface Blog {
  img: StaticImageData;
  title: string;
  text: string;
}

const BlogPost: React.FC<Blog> = (props) => {
  return (
    <div className="w-full my-10 shadow flex flex-col gap-5">
      <Image
        className="w-full h-auto rounded-lg transition-transform duration-500 transform hover:scale-95"
        src={props.img}
        alt=""
      />
      <h1 className="w-full font-bold text-white text-left text-xl sm:text-center pl-1">
        {props.title}
      </h1>
      <p className="w-full text-left sm:text-center pl-1">{props.text}</p>

      <a
        className="w-full text-left sm:text-center text-xl underline text-cyan-600 pl-1"
        onClick={() => {}}
      >
        READ MORE
      </a>
    </div>
  );
};

export default BlogPost;
