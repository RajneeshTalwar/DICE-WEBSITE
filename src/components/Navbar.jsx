import { useState } from "react";
import logo from "/public/assets/diceLogo.png";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoDiceOutline } from "react-icons/io5";

export default function Navbar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Industrial visits", path: "/national" },
    { title: "Projects", path: "/projects" },
    { title: "Events", path: "/event" },
    { title: "Research", path: "/research" },
    { title: "FDP", path: "/FDP" },
    { title: "Competitions", path: "/competitions" },
    { title: "Hackathons", path: "/Hackathons" },
    { title: "Funding", path: "/Funding" },
    { title: "Contact", path: "/contact" },
  ];

  const [sidebarPos, setSidebarPos] = useState("-right-full");
  
  const toggleSidebar = () => {
    setSidebarPos(sidebarPos === "-right-full" ? "-right-0" : "-right-full");
  };

  return (
    <div
      className="w-full bg-white fixed top-0 z-50 shadow-2xl rounded-b-2xl border-b border-gray-200"
      style={{ isolation: "isolate" }}
    >
      <div className="flex justify-between items-center px-8 py-2">
        <div>
          <img alt="dice logo" src={logo} width={170} />
        </div>
        <nav className="hidden sm:flex gap-x-6 lg:gap-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="font-medium hover:text-red-500 duration-200 hover:scale-[1.1]"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="sm:hidden">
          <button onClick={toggleSidebar}>
            <FaBarsStaggered className="text-3xl" />
          </button>
          <div className={`w-[250px] h-screen fixed ${sidebarPos} top-0 duration-500 transition-all flex flex-col bg-red-600`}>
            <div className="flex pt-8 pr-8 justify-end w-full">
              <button onClick={toggleSidebar}>
                <FaBarsStaggered className="text-3xl rotate-180 text-white" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className="font-medium w-[90%] text-white hover:text-red-600 duration-200 hover:bg-white my-2 text-center rounded-md p-2 hover:shadow-xl"
                  onClick={toggleSidebar}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <IoDiceOutline className="text-white text-9xl my-14 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center py-2 border-t border-gray-100">
        <a
          href="https://www.linkedin.com/posts/dr-rajneesh-talwar-58086a31_tgpsglobal-chitkarauniversity-2026begins-activity-7420352526451089408-MXFl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnwLlMB14v00NgcmMnBbhmgKp21UPCTpCc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-gray-700 hover:text-red-500 duration-200 transition-colors cursor-pointer"
        >
          MOU
        </a>
      </div>
    </div>
  );
}