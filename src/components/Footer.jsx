import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

import social_links from "../data/social_links.json";

const iconmap = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
  youtube: FaYoutube,
  facebook: FaFacebook,
};

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Industrial Visits", href: "/national" },
    { name: "Event", href: "/event" },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="bg-gray-800 text-gray-300 py-12 z-40 relative w-full border-t border-gray-700"
      style={{ isolation: "isolate" }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="flex flex-col md:flex-row">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="mr-4 mb-2 md:mb-0 duration-300 hover:text-red-400 hover:scale-110"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div>
          <p className="mb-2">Follow us on:</p>
          <div className="flex">
            {social_links.map((social, index) => {
              const IconComponent = iconmap[social.type];
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="mr-4"
                >
                  <IconComponent className="text-white text-3xl duration-300 hover:scale-125 hover:text-red-400" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2024 DICE CUIET. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
