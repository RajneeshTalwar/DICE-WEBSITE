import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat animation-slide"
      style={{ backgroundImage: `url('/your-background-image.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide stretch">
          DICE
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl font-medium max-w-3xl">
          Department of Interdisciplinary Courses in Engineering
        </p>

        <div className="mt-16 space-y-8">
          <p className="text-lg">
            Dean: <span className="font-semibold">Dr. Rajneesh Talwaar</span>
          </p>
          <Link
            to="/about"
            className="inline-flex items-center justify-center w-48 h-12 rounded-lg bg-red-600 text-white text-lg font-medium transition duration-500 hover:bg-white hover:text-red-600"
          >
            Know More
          </Link>
        </div>

        <a
          href="https://www.chitkara.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Chitkara University Website"
        >
          <img
            src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/CU_logo-5.svg"
            alt="Chitkara University Logo"
            width={60}
            className="absolute bottom-6 left-6 cursor-pointer"
          />
        </a>
      </div>
    </section>
  );
}
