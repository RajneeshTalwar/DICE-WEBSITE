/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProjectsCards from "../ProjectCards";

import projects from "../../data/projects.json";

const projec = [
  "Autonomous Grass Cutter",
  "Drone-Based Campus Survey",
  "E-Bike BLDC Motor Installation",
  "Voice-Controlled Wheelchair",
  "Smart Voice-Controlled Curtains",
  "Smart Interacting Humanoid",
  "Smart Vending Machine",
  "DICE Mobile App",
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="pt-[100px] flex-1">
        {/* Open Projects Section */}
        <div className="mt-10 mb-12 mr-4 ml-4 border border-black rounded-2xl p-8 shadow-xl">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Open Projects</h2>
            <p className="text-gray-500 text-md">
              Interested in building something real? Join one of our ongoing projects and gain hands-on experience.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {projec.map((project, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 text-md">
                <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0"></span>
                {project}
              </li>
            ))}
          </ul>

          <a
            href="https://forms.gle/7LFZi1KhxaTjqkPX8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white py-3 px-10 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            Apply Now →
          </a>
        </div>
        <ProjectsCards projects={projects} />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
