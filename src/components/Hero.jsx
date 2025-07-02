import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen animation-slide">
      <div className="h-screen w-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h1 className="stretch text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          DICE
        </h1>
        <p className="text-sm sm:text-2xl py-6 font-medium text-center">
          DEPARTMENT OF INTERDISCIPLINARY COURSES IN ENGINEERING
        </p>
        <div className="translate-y-16 flex flex-col items-center justify-center">
          <p>
            Dean: <span className="font-medium">Dr. Rajneesh Talwaar</span>
          </p>
          <Link
            to={"/about"}
            className="w-[200px] h-[45px]  flex items-center justify-center bg-red-600 duration-500 rounded-lg hover:bg-white hover:text-red-600 text-center text-lg font-medium translate-y-8"
          >
            Know More
          </Link>
        </div>
        <a href="https://www.chitkara.edu.in/">
          <img
            src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/CU_logo-5.svg"
            alt="Chitkara University Logo"
            width={60}
            className="absolute bottom-6 left-6 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
