import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dicelogo from "/public/assets/diceLogo.png";

export default function Register() {
  const { eventId } = useParams();
  const event = JSON.parse(decodeURIComponent(eventId));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollno: "",
    hostllerOrDayScholar: "",
    mobile: "",
    branch: "",
    semester: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!formData.email.endsWith("@chitkara.edu.in")) {
      alert("Please enter an email from @chitkara.edu.in domain.");
      return;
    }

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    const apiUrl = `${event.scriptUrl}`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });

      alert("Registration successful");
      setFormData({
        name: "",
        email: "",
        rollno: "",
        hostllerOrDayScholar: "",
        mobile: "",
        branch: "",
        semester: "",
      });
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Error submitting form");
    }
  };

  const inputFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Roll Number", name: "rollno", type: "text" },
    {
      label: "Hostller / Day Scholar",
      name: "hostllerOrDayScholar",
      type: "text",
    },
    { label: "Mobile Number", name: "mobile", type: "text" },
    { label: "Branch", name: "branch", type: "text" },
    { label: "Semester", name: "semester", type: "text" },
  ];

  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center">
      <img src={dicelogo} alt="dice logo" />
      <div className="flex flex-col items-center justify-center mb-16">
        <p className="text-[35px] sm:text-[60px] ">Register here for:</p>
        <p className="text-xl sm:text-2xl ">{event.eventName}</p>
      </div>
      <div className="w-full flex flex-col-reverse sm:flex-row px-2 gap-y-20 justify-center">
        <form
          className="form sm:w-[60%] flex flex-col gap-y-10"
          onSubmit={handleSubmit}
        >
          {inputFields.map((field, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex flex-col gap-y-4">
                <p className=" text-lg flex items-center">
                  <span className="text-gray-600 mr-5 text-sm">
                    {index + 1}
                  </span>
                  {field.label}
                </p>
                <input
                  placeholder={`${field.label} *`}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="outline-none border-none bg-transparent ml-7 text-lg "
                />
              </div>
              <div className="w-[90%] h-[1px] bg-gray-600 my-6"></div>
            </div>
          ))}
          <button
            type="submit"
            className=" font-semibold border-2 border-black my-6 w-full sm:w-[200px] h-[50px] rounded-full transition-all duration-300 hover:bg-blue-500 hover:border-gray-200 hover:shadow-2xl hover:text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
