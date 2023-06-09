import React from "react";
import { Link } from "react-router-dom";

const DropdownNav = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "font-serif grid grid-rows-4 text-center items-center text-lg bg-mainColor"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4 hover:text-lime-200">
        Home
      </Link>
      <Link to="/About" className="p-4 hover:text-lime-200">
        About Us
      </Link>
      <Link to="/Shop" className="p-4 hover:text-lime-200">
        Shop
      </Link>
      <Link to="/Contact" className="p-4 hover:text-lime-200">
        Contact Us
      </Link>
    </div>
  );
};
export default DropdownNav;
