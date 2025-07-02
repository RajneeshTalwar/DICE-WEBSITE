import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FAQSection from "../FAQSection";

import competitions from "../../data/competitions.json";

export default function Competitions() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-40 py-8">
        <h1 className="text-5xl font-semibold text-center mb-12">
          Competitions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {competitions.map((competition, index) => (
            <div
              key={index}
              className="border border-blue-300 rounded-lg p-6 duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={competition.imageSrc}
                alt={competition.name}
                className="w-full h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-4">{competition.name}</h2>
              <p className="text-gray-600 mb-2">
                <strong>Date:</strong> {competition.date}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Organized By:</strong> {competition.organizedBy}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Venue:</strong> {competition.venue}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Participation/Position:</strong>{" "}
                {competition.participation}
              </p>
            </div>
          ))}
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}
