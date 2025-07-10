import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "../Navbar";
import image from "/public/assets/diceLogo.png";
import FAQSection from "../FAQSection";
import Footer from "../Footer";
import about from "../../data/about.json";

const founder = about.founder;
const staff_members = about.staff_members;

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="aboutHero">
        <div className="h-[550px] bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white sm:text-5xl lg:text-7xl font-bold text-center">
            Welcome to the DICE community
          </h1>
          <p className="text-lg text-white sm:text-xl lg:text-2xl translate-y-8">
            Where Ideas Meet Innovation
          </p>
        </div>
      </div>

      <div className="p-8 py-20 flex flex-col lg:flex-row items-center justify-center gap-x-24">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold">Who we are...?</h1>
          <p className="text-md md:text-lg text-gray-600 my-12">
            {/* Content omitted for brevity */}
          </p>
        </div>
        <div className="lg:w-1/3 flex items-center justify-center">
          <img src={image} alt="dice logo" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-semibold">Our Esteemed Staff</h1>
        <div className="py-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-[250px] h-[280px] m-8 rounded-xl"
            />
            <h1 className="font-semibold">{founder.name}</h1>
            {founder.designations.map((role, i) => (
              <p key={i}>{role}</p>
            ))}
            {founder.linkedin && (
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xl inline-block mt-2">
                <FaLinkedin />
              </a>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-x-8 flex-wrap justify-center mt-12">
            {staff_members.map((staff, index) => (
              <div key={index} className="text-center">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-[250px] h-[280px] m-8 rounded-xl"
                />
                <h1 className="font-semibold">{staff.name}</h1>
                {staff.roles.map((role, i) => (
                  <p key={i}>{role}</p>
                ))}
                {staff.linkedin && (
                  <a href={staff.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xl inline-block mt-2">
                    <FaLinkedin />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <FAQSection />
      <Footer />
    </div>
  );
}
