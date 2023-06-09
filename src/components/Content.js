import React from "react";
import ImageOne from "../imageOne.jpg";
import ImageTwo from "../imageTwo.jpg";

const Content = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-lime-50 h-screen font-serif py-40">
        <img
          src={ImageOne}
          alt="imgOne"
          className="xl:h-110 xl:w-5/12 md:h-96 md:w-5/12 sm:h-72 sm:w-5/6 h-72 w-5/6 rounded-xl shadow-xl shadow-mainColor"
        />
        <div className="flex flex-col p-10 justify-center items-center">
          <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-2 text-center">
            The best furniture manufacturer
          </h2>
          <p
            className="italic mb-2 font-sans
                xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm w-4/6 text-center"
          >
            {" "}
            Wide range option of furnitures crafted using the best selected wood
            in the city.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center items-center bg-lime-50 h-screen font-serif py-40">
        <img
          src={ImageTwo}
          alt="imgOne"
          className="xl:h-110 xl:w-5/12 md:h-96 md:w-5/12 sm:h-72 sm:w-5/6 h-72 w-5/6  rounded-xl shadow-xl shadow-mainColor"
        />
        <div className="flex flex-col p-10 justify-center items-center">
          <h2 className="mb-2 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center">
            Shop the look
          </h2>
          <p className="italic mb-2 font-sans xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm w-4/6 text-center">
            {" "}
            Get everything you need for your property all in one with one of our
            furniture & accessories packages.
          </p>
        </div>
      </div>
    </>
  );
};
export default Content;
