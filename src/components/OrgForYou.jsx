import React from "react";
import { GrWorkshop } from "react-icons/gr";
import { IoTerminal } from "react-icons/io5";
import { FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import image2 from "/public/assets/image2.jpeg";
import for_you_events from "../data/for_you_events.json";

const iconmap = {
  workshop: GrWorkshop,
  codathon: FaLaptopCode,
  hackathon: IoTerminal,
  seminar: FaChalkboardTeacher,
};

export default function OrgForYou() {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <h1 className="text-4xl sm:text-5xl font-bold my-12">
        What's for You...?
      </h1>

      <div className="w-[95%] flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          {for_you_events.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col items-center sm:flex-row"
            >
              {row.map((event, index) => {
                const IconComponent = iconmap[event.type];
                return (
                  <div
                    key={index}
                    className="sm:w-1/2 h-[240px] border-2 m-4 p-4 rounded-xl duration-500 hover:scale-105"
                  >
                    <div className="flex items-center p-3">
                      <IconComponent className="text-5xl" />
                    </div>
                    <div className="mt-2">
                      <h2 className="font-bold text-xl">{event.name}</h2>
                      <p>{event.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <img src={image2} alt="for you image" className="w-2/3 lg:w-2/5" />
      </div>
    </div>
  );
}
