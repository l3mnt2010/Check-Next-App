import Link from "next/link";
import React from "react";

const Footer_Product = () => {
  return (
    <div className="w-5/6 mx-auto flex gap-4 sm:justify-between pt-20 pb-5 mt-5 shadow-sm">
      <div className="w-full flex flex-col gap-2">
        <h1 className="font-bold text-sm sm:text-lg">HELP & INFORMATION</h1>
        <Link href={"/help"}>Help</Link>
        <Link href={"/help"}>Track order</Link>
        <Link href={"/help"}>Delivery & return</Link>
        <Link href={"/help"}>Sitemap</Link>
      </div>
      <div className="w-full flex flex-col gap-2">
        <h1 className="font-bold text-sm sm:text-lg">ABOUT ASOS</h1>
        <Link href={"/help"}>About us</Link>
        <Link href={"/help"}>Careel at ASOS</Link>
        <Link href={"/help"}>Responesibliti</Link>
        <Link href={"/help"}>Sitemap</Link>
      </div>
      <div className="w-full flex flex-col gap-2">
        <h1 className="font-bold text-sm sm:text-lg">MORE FROM ASOS</h1>
        <Link href={"/help"}>Help</Link>
        <Link href={"/help"}>Track order</Link>
        <Link href={"/help"}>Delivery & return</Link>
        <Link href={"/help"}>Sitemap</Link>
      </div>
      <div className="w-full flex flex-col gap-1">
        <h1 className="font-bold text-lg">SHOPPING FROM:</h1>
      </div>
    </div>
  );
};

export default Footer_Product;
