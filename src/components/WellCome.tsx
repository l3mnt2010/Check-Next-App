import Image from "next/image";

const Wellcome = () => {
  return (
    <div className="flex flex-row bg-BG_Wel w-screen h-screen text-white">
      <div className="flex flex-col gap-5">
        <div className="border-4 border-white">
          <Image alt="" src="" />
          <h1 className="font-bold text-xl uppercase">APPOLLY</h1>
          <p className="text-sm">Landing Page Template</p>
        </div>
        <div className="border-4 border-white">
          <Image alt="" src="" />
          <p>Easily Customize Text & Color Style</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Wellcome;
