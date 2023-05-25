import { StaticImageData } from "next/image";
import Image from "next/image";

interface Recent {
  img: StaticImageData;
  text: string;
}

const RecentsPost: React.FC<Recent> = (props) => {
  return (
    <div className="w-full mx-auto my-10 shadow flex flex-col gap-5">
      <div className="w-full">
        <Image alt="" className="w-full" src={props.img} />
        <p className="w-5/6 mx-auto mt-5 mb-10">{props.text}</p>
      </div>
    </div>
  );
};
export default RecentsPost;
