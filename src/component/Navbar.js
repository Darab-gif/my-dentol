import React from "react";
import LinkBar from "./Link/Link";

const Navbar = () => {
  return (
    <header className="flex gap-[20%] w-full pt-10 cursor-pointer">
      <div className="ml-44">
        <h1 className="font-bold text-4xl text-oxford_blue">Dentol.</h1>
      </div>

      <LinkBar />
    </header>
  );
};

export default Navbar;
