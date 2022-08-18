import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const LinkBar = () => {
  return (
    <nav className="flex gap-8">
      <ul className="flex flex-row gap-8 pt-3">
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          <Link to="/home">Home</Link>
        </li>

        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          <Link to="/services">Services</Link>
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          <Link to="/about">About Us</Link>
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="font-bold text-oxford_blue cursor-pointer hover:text-royal_blue">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Button />
    </nav>
  );
};

export default LinkBar;
