import React from "react";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3">
      <h1 className="w-full text-center font-bold text-7xl">404 - Not Found</h1>
      <p className="w-full font-serif text-xl text-center">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
