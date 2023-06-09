import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-mainColor text-black font-serif"
      role="navigation"
    >
      <Link
        to="/"
        className="w-12 h-12 bg-lime-50 text-center ml-5 text-4xl rounded-md"
      >
        F
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 hover:text-lime-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
      <div className="pr-9 md:block hidden text-lg tracking-normal">
        <Link to="/" className="p-4 font-serif hover:text-lime-100">
          Home
        </Link>
        <Link to="/About" className="p-4 font-serif hover:text-lime-100">
          About Us
        </Link>
        <Link to="/Shop" className="p-4 font-serif hover:text-lime-100">
          Shop
        </Link>
        <Link to="/Contact" className="p-4 font-serif hover:text-lime-100">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
