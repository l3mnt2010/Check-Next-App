import React, { useState } from "react";
import Image from "next/image";
import { DownOutlined } from "@ant-design/icons";
import Logo from "../../public/images/Frame 453.png";
import Link from "next/link";

const SideBarAdmin = () => {
  const [showCRUD, setShowCRUD] = useState(false);
  return (
    <div className="text-black h-screen shadow-2xl text-xl font-bold flex flex-col gap-5">
      <div className="w-full text-left flex gap-5 ml-5 my-5">
        <Image src={Logo} alt={""} width={25} height={25} />
        <h1 className="font-thin text-xl">Technology Hunt</h1>
      </div>
      <div className="h-screen flex flex-col gap-12 w-5/6 mx-auto">
        <ul>
          <li>
            <div>
              <a href="/admin">Dashboard</a>
            </div>
          </li>
          <li>
            <div>
              <p>
                Manage Users{" "}
                <span
                  onClick={() => {
                    setShowCRUD(!showCRUD);
                  }}
                >
                  <DownOutlined />
                </span>
              </p>
              {showCRUD && (
                <li>
                  <div>
                    <a href="/admin/CRUD" className="text-red-400 underline">
                      CRUD
                    </a>
                  </div>
                </li>
              )}
            </div>
          </li>
          <li>
            <div>
              <p>Manage Products</p>
            </div>
          </li>
          <li>
            <div>
              <Link href={"/"}>Manage Early Register</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(SideBarAdmin);
