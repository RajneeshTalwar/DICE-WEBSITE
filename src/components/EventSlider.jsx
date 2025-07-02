import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import events from "../data/events.json";

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 2 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 2 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center my-10">
      <div className="flex sm:w-[90%]  justify-between overflow-hidden flex-wrap">
        {events.slice(currentIndex, currentIndex + 2).map((blog) => (
          <div key={blog.id} className="w-full md:w-1/2 p-4 sm:p-2  lg:p-12">
            <div className="bg-white m-4 md:h-[500px] lg:h-[400px] shadow-md rounded-lg overflow-hidden duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-36 sm:h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold sm:text-xl">{blog.title}</h2>
                <h4 className="text-xs font-semibold sm:text-md">
                  {blog.date}
                </h4>
                <p className="text-gray-700 text-sm mt-2 sm:text-[15px]">
                  {blog.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-6 transform -translate-y-1/2 text-black text-2xl p-2 border-4 border-black rounded-full hover:bg-red-600 hover:text-white"
        onClick={handlePrev}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute top-1/2 right-6 transform -translate-y-1/2 text-black text-2xl p-2 border-4 border-black rounded-full hover:bg-red-600 hover:text-white"
        onClick={handleNext}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default BlogSlider;
