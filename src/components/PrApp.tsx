import topping1 from "../assets/images/toppng 1.png";
import topping2 from "../assets/images/PngItem_1144050 2.png";
import telephone from "../assets/images/Free Ui View Mobile App Mockup 1.png";
import Image from "next/image";

const PrApp: React.FC<any> = () => {
  return (
    <div className="w-full p-10 mx-auto md:w-full bg-BG_Basic flex flex-col text-white sm:grid md:grid-cols-2 md:p-32 md:gap-10">
      <div className=" md:relative border-2 md:border-8 border-cyan-500 md:ml-10">
        <div className="md:absolute md:-left-10 md:top-10 bg-white md:w-5/6 h-5/6 flex flex-col md:gap-7 p-10">
          <h1 className="md:text-3xl text-xl text-black font-bold">
            A Great App Makes Your Life Better
          </h1>
          <p className="sm:text-lg font-san text-black">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <h1 className="font-bold text-xl ">Download App Now</h1>
          <div className="flex gap-5">
            <Image className="w-1/3" src={topping1} alt="" />
            <Image className="w-1/3" src={topping2} alt="" />
          </div>
        </div>
      </div>
      <div className="sm:ml-40">
        <Image alt="" src={telephone} className="w-72 ml-16 mx-auto md:w-96" />
      </div>
    </div>
  );
};

export default PrApp;
