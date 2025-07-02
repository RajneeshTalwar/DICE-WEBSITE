import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import faqs from "../data/faqs.json";

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleFAQ = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  return (
    <div className="h-[450px] flex flex-col items-center justify-center my-12">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <div key={index} className="my-2 w-[90%] sm:w-[60%] pb-2 border-b-2">
          <button
            onClick={() =>
              toggleFAQ(index)}
            className="w-full text-left px-4 py-2 font-semibold flex justify-between items-center focus:outline-none"
          >
            <span>{faq.question}</span>

            <FaChevronDown
              className={`h-6 w-6 transition-transform ${
                isOpen === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {isOpen === index && <p className="px-4 py-2">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
