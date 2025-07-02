import React from "react";
import image3 from "/public/assets/image3.png";
import { Link } from "react-router-dom";

export default function AboutSec() {
  return (
    <div className="flex flex-col items-center justify-center p-2 py-8">
      <div className="w-[95%] flex flex-col lg:flex-row items-center justify-center">
        <img src={image3} alt="Abt Image" className="sm:w-2/3 lg:w-1/2" />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold my-12">
            Engineering Adventures: Where Dreams Take Flight!
          </h1>
          <p className="text-sm sm:text-lg text-gray-500">
            Welcome to the Department of Interdisciplinary Courses in
            Engineering! This place is all about sparking your imagination and
            helping you dive into the coolest parts of engineering. We're
            talking about doing exciting research, exploring new ideas for
            patents, and getting hands-on in workshops. It's like a playground
            for your brain, where you can discover what you're really good at
            and make amazing stuff happen. So, if you're ready to have fun while
            learning and push the limits of what you think is possible, then
            this is the place for you! Let's embark on this awesome engineering
            journey together!
          </p>
          <Link
            to={"/about"}
            className="w-[200px] h-[45px]  flex items-center justify-center bg-red-600 duration-500 rounded-lg text-white hover:bg-white hover:border-2 border-red-600 hover:text-red-600 text-center text-lg font-medium translate-y-8"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}
