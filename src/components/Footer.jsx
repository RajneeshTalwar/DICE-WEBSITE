import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaUser,
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
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    // Increment and fetch global visitor count using CountAPI
    // https://countapi.xyz — simple key/value counter suitable for static sites
    const endpoint = "https://api.countapi.xyz/hit/dice-website/visitor-count";

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.value === "number") setVisitorCount(data.value);
      })
      .catch(() => {
        // Fallback: keep a local per-browser counter if remote fails
        const currentCount = localStorage.getItem("visitorCount");
        const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
        localStorage.setItem("visitorCount", newCount);
        setVisitorCount(newCount);
      });
  }, []);
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
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto">
        <div
          className="bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-2 rounded-full shadow-lg border border-gray-800 flex items-center gap-3 hover:scale-105 transform transition-transform duration-200"
          role="status"
          aria-live="polite"
        >
          <FaUser className="w-5 h-5 text-white opacity-95" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-xs font-semibold uppercase tracking-wide">Visitors</span>
            <span className="text-sm font-mono">{visitorCount === null ? "…" : visitorCount}</span>
          </div>
        </div>
      </div>
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
