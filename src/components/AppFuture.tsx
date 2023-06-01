import Future from "../components/Futures";
import app from "../assets/images/App.png";
import Image from "next/image";
import Futures from "../components/Futures";
import { freechat, male_call, reviewer, reviews } from "@/item.global";

const AppFuture = () => {
  return (
    <div className="w-full mx-auto bg-BG_Basic px-10 sm:py-5">
      <div className="w-full">
        <h1 className="w-full text-center font-bold text-3xl text-white sm:my-5">
          AppFutures
        </h1>
        <p className="w-full text-center text-purple-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae.
        </p>
      </div>
      <div className="w-full mx-auto sm:w-1/3">
        <Futures
          img={freechat.img}
          text={freechat.text}
          title={freechat.title}
        />
      </div>
      <div className="w-full block sm:w-5/6 mx-auto sm:flex">
        <div className="flex flex-col gap-40">
          {reviewer.map((freechat) => (
            // eslint-disable-next-line react/jsx-key
            <Future
              img={freechat.img}
              text={freechat.text}
              title={freechat.title}
            />
          ))}
        </div>
        <Image
          alt=""
          className="w-full flex items-center justify-center ml-6 sm:w-1/4 sm:mx-auto sm:pl-6"
          src={app}
        />
        <div className="flex flex-col gap-40">
          {reviews.map((freechat) => (
            // eslint-disable-next-line react/jsx-key
            <Future
              img={freechat.img}
              text={freechat.text}
              title={freechat.title}
            />
          ))}
        </div>
      </div>
      <div className="w-full sm:w-1/3 mx-auto">
        <Futures
          img={male_call.img}
          text={male_call.text}
          title={male_call.title}
        />
      </div>
    </div>
  );
};

export default AppFuture;
