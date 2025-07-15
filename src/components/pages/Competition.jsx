import { useEffect, useState } from "react";
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
            <CompetitionCard key={index} competition={competition} />
          ))}
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}

const CompetitionCard = ({ competition }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (competition.images?.length > 1) {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) =>
          (prevIndex + 1) % competition.images.length
        );
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [competition.images]);

  return (
    <div className="border border-blue-300 rounded-lg p-6 duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <h2 className="text-xl font-semibold mb-4">{competition.name}</h2>

      {competition.images && competition.images.length > 0 && (
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
          {competition.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${competition.name} image ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-48 object-cover transition-opacity duration-700 ${
                i === imageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      )}

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
        <strong>Participation/Position:</strong> {competition.participation}
      </p>

      {competition.description && (
        <p className="text-gray-700 mt-3">{competition.description}</p>
      )}
    </div>
  );
};
