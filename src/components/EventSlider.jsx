import React, { useState, useEffect } from "react";
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
      <div className="flex sm:w-[90%] justify-between overflow-hidden flex-wrap">
        {events.slice(currentIndex, currentIndex + 2).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
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

const BlogCard = ({ blog }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % blog.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [blog.images.length]);

  return (
    <div className="w-full md:w-1/2 p-4 sm:p-2 lg:p-12">
      <div className="bg-white m-4 md:h-[500px] lg:h-[400px] shadow-md rounded-lg overflow-hidden duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
        <img
          src={blog.images[imageIndex]}
          alt={`${blog.title} image ${imageIndex + 1}`}
          className="w-full h-36 sm:h-48 object-cover transition duration-500"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold sm:text-xl">{blog.title}</h2>
          <h4 className="text-xs font-semibold sm:text-md">{blog.date}</h4>
          <p className="text-gray-700 text-sm mt-2 sm:text-[15px]">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
