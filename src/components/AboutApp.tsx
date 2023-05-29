import Image from "next/image";
import About from "../components/About";
import android from "../assets/images/android-smartphone-free-mockup 1.png";

const AboutApp: React.FC<any> = () => {
  const review = [
    {
      title: "Creative design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Easy to use",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Best user experince",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="left_register w-5/6 h-full mx-auto my-16 shadow-2xl sm:w-full px-10 sm:pl-52">
      <div className="w-full flex flex-col sm:w-2/3 sm:flex sm:flex-row sm:gap-32">
        <div className="w-full flex flex-col gap-5 sm:pl-32 sm:pt-10">
          <h1 className="mx-auto w-full text-center text-xl font-bold sm:text-3xl text-white">
            About Our App
          </h1>
          <p className="w-full text-center text-purple-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae.
          </p>
          <Image
            alt=""
            className="sm:mx-auto sm:w-full sm:h-1/2"
            src={android}
          />
        </div>
        <div className="w-full mx-auto sm:w-full">
          {review.map((itm) => {
            let text = itm.text;
            let title = itm.title;
            // eslint-disable-next-line react/jsx-key
            return <About title={title} text={text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
