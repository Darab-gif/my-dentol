import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkBar from "./Link/Link";

const Navbar = () => {
  return (
    <header className="flex gap-[20%] fixed w-full pt-10 cursor-pointer">
      <div className="ml-44">
        <h1 className="font-bold text-3xl text-oxford_blue">Dentol.</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkBar />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
};

export default Navbar;
