import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-lime-50 h-screen flex flex-col justify-center items-center">
        <h1
          className="text-stone-900
            lg:text-6xl md:text-5xl sm:text-4xl text-xl mb-10 mt-10 font-serif"
        >
          We create home more{" "}
          <span className="w-28  h-28 border-4 border-stone-500  rounded-full bg-transperant p-3 hover:bg-lime-100 hover:text-lime-900">
            aesthetic
          </span>
        </h1>
        <p
          className="w-64 h-2/4 text-center text-stone-600 
            italic lg:text-2xl md:text-xl sm:text-xl text-sm font-sans mb-10"
        >
          Enjoy the new furniture every time you move and feel the castle house
          of your dreams.
        </p>

        <Link
          className="py-6 px-10 bg-mainColor rounded-full text-l transition duration-400 ease-out flex items-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
          animate-bounce font-bold font-mono"
          to="/Shop"
        >
          Visit our shop{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};
export default Header;
