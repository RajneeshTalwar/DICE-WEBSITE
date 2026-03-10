import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import events from "../data/events.json";

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= events.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 3 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(handleNext, 15000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative flex items-center justify-center my-10 w-full">
      <div className="flex flex-wrap justify-center gap-8 w-full px-4">
        {events.slice(currentIndex, currentIndex + 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black text-2xl p-2 border-4 border-black rounded-full hover:bg-red-600 hover:text-white"
        onClick={handlePrev}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black text-2xl p-2 border-4 border-black rounded-full hover:bg-red-600 hover:text-white"
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
    }, 5000);
    return () => clearInterval(interval);
  }, [blog.images.length]);

  return (
    <div className="w-full sm:w-[48%] lg:w-[30%] h-[550px]">
      <div className="bg-white shadow-md rounded-lg overflow-hidden duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer h-full">
        <img
          src={blog.images[imageIndex]}
          alt={`${blog.title} image ${imageIndex + 1}`}
          className="w-full h-56 object-cover transition duration-500"
        />
        <div className="p-5 flex flex-col justify-between h-[calc(100%-14rem)]">
          <div>
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <h4 className="text-sm font-semibold mt-1 text-gray-500">{blog.date}</h4>
            <p className="text-gray-700 text-base mt-3 line-clamp-5">
              {blog.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
