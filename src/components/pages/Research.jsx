import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FAQSection from "../FAQSection";

import publications from "../../data/publications.json";

export default function Research() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-40 py-8">
        <h1 className="text-5xl font-semibold text-center mb-12">
          Publications
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="border border-blue-300 rounded-lg p-6 duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-4">
                {publication.title}
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Faculty:</strong> {publication.faculty}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Status:</strong> {publication.status}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Database:</strong> {publication.database}
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
