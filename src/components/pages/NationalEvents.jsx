import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import national_events from "../../data/national_events.json";

const NationalEvents = () => {
  return (
    <div className="Blogs">
      <Navbar />
      <div className="w-[90%] mx-auto px-4 py-8 pt-40">
        <h1 className="text-5xl font-bold mb-8 text-center">
          Industrial visits
        </h1>
        {national_events.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center my-24 gap-x-24"
          >
            {index % 2 === 0
              ? (
                <>
                  <div className="md:w-1/3 mr-4">
                    <img
                      src={blog.image_url}
                      alt="Blog Image"
                      className="w-full h-[300px] rounded-md shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-700">{blog.content}</p>
                  </div>
                </>
              )
              : (
                <>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-700">{blog.content}</p>
                  </div>
                  <div className="md:w-1/3 ml-4">
                    <img
                      src={blog.image_url}
                      alt="Blog Image"
                      className="w-full h-[300px] rounded-md shadow-md"
                    />
                  </div>
                </>
              )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NationalEvents;
