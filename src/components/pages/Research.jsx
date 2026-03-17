import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FAQSection from "../FAQSection";

import publications from "../../data/publications.json";
import patents from "../../data/patents.json";

const publishedPatentDetails = [
  { srNo: 1, title: "A COMPUTING SYSTEM FOR PARAMETER EXTRACTION OF PROTON EXCHANGE MEMBRANE FUEL CELL", inventor: "RAJNEESH TALWAR, MANISH KUMAR SINGLA, JYOTI GUPTA, MANPREET SINGH", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "10/06/2023", applicationNo: "202311039769", publicationDate: "07/07/2023", journalNo: "27/2023" },
  { srNo: 2, title: "METHOD FOR FABRICATING TRIPLE BAND UWB MIMO ANTENNA AND TRIPLE BAND UWB MIMO ANTENNA", inventor: "EKTA THAKUR, NAVEEN JAGLAN", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "19/06/2023", applicationNo: "202311041420", publicationDate: "21/07/2023", journalNo: "29/2023" },
  { srNo: 3, title: "ULTRA-WIDE BAND MULTIPLE INPUT MULTIPLE OUTPUT ANTENNA WITH TVC-EBG STRUCTURE", inventor: "EKTA THAKUR, NAVEEN JAGLAN", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "26/07/2023", applicationNo: "202311050472", publicationDate: "25/08/2023", journalNo: "34/2023" },
  { srNo: 4, title: "1*2 MIMO ANTENNA WITH ENHANCED BANDWIDTH IN MICROWAVE MILLIMETER BANDS FOR UWB APPLICATIONS", inventor: "EKTA THAKUR, NAVEEN JAGLAN, MANISH KUMAR SINGLA, JYOTI GUPTA, RAJNEESH TALWAR", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "23/01/2024", applicationNo: "202411004461", publicationDate: "02/02/2024", journalNo: "05/2024" },
  { srNo: 5, title: "MICROSTRIP ANTENNA SYSTEM", inventor: "EKTA THAKUR, NAVEEN JAGLAN, MANISH KUMAR SINGLA, RAJNEESH TALWAR, ANUPMA GUPTA", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "31/03/2024", applicationNo: "202411026906", publicationDate: "03/05/2024", journalNo: "18/2024" },
  { srNo: 6, title: "DRIVER ASSIST AND COLLISION AVOIDANCE SYSTEM FOR CRANE VEHICLES", inventor: "RAJNEESH TALWAR, MANVINDER SHARMA", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "31/03/2024", applicationNo: "202411026904", publicationDate: "03/05/2024", journalNo: "18/2024" },
  { srNo: 7, title: "SOLAR POWER-BASED SYSTEM TO REPEL BIRDS AND ANIMALS BY A SCARECROW", inventor: "RAJNEESH TALWAR, MANVINDER SHARMA", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "10/04/2024", applicationNo: "202411029193", publicationDate: "10/05/2024", journalNo: "19/2024" },
  { srNo: 8, title: "WEARABLE NEUROLOGICAL MONITORING DEVICE", inventor: "SATYAJIT ANAND, RAJNEESH TALWAR, MANVINDER SHARMA, CHIRAG MONGIA", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "31/12/2024", applicationNo: "202411104866", publicationDate: "10/01/2025", journalNo: "2/2025" },
  { srNo: 9, title: "VEHICLE HEADLAMP CONTROL SYSTEM", inventor: "MANVINDER SHARMA, RAJNEESH TALWAR, SATYAJIT ANAND", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "27/05/2025", applicationNo: "202511050636", publicationDate: "13/06/2025", journalNo: "24/2025" },
  { srNo: 10, title: "AUTONOMOUS LANE MANAGEMENT AND BARRIER SYSTEM", inventor: "RAJNEESH TALWAR, MANVINDER SHARMA, SATYAJIT ANAND, DANVIR MANDAL, AJAY KAKKAR, YUGNANDA", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "03/06/2025", applicationNo: "202511053839", publicationDate: "20/06/2025", journalNo: "25/2025" },
  { srNo: 11, title: "SMOKE CONTAINMENT SYSTEM FOR AIRCRAFT CABIN", inventor: "RAJNEESH TALWAR, MANVINDER SHARMA, SATYAJIT ANAND", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "14/08/2025", applicationNo: "202511077724", publicationDate: "05/09/2025", journalNo: "36/2025" },
  { srNo: 12, title: "INTEGRATED BEDSIDE ALARM SYSTEM", inventor: "RAJNEESH TALWAR, MANVINDER SHARMA, DANVIR MANDAL", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "14/08/2025", applicationNo: "202511077745", publicationDate: "05/09/2025", journalNo: "36/2025" },
  { srNo: 13, title: "BLOOD EXTRACTION AND TESTING DEVICE", inventor: "SATYAJIT ANAND, RAJNEESH TALWAR, MANVINDER SHARMA", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "14/08/2025", applicationNo: "202511077749", publicationDate: "05/09/2025", journalNo: "36/2025" },
  { srNo: 14, title: "SYSTEM FOR AUTOMATED RESPIRATORY MEDICINE DELIVERY", inventor: "SATYAJIT ANAND, RAJNEESH TALWAR, MANVINDER SHARMA", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "14/08/2025", applicationNo: "202511077744", publicationDate: "05/09/2025", journalNo: "36/2025" },
  { srNo: 15, title: "STREET LIGHT POLE WITH INTEGRATED MIST SPRAYER", inventor: "RAJNEESH TALWAR, MANVINDER SHARMA, SATYAJIT ANAND, DANVIR MANDAL", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "29/09/2025", applicationNo: "202511093627", publicationDate: "14/11/2025", journalNo: "46/2025" },
  { srNo: 16, title: "BOOK STORAGE DEVICE", inventor: "RAJNEESH TALWAR, MANVINDER SHARMA, RITU TALWAR", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "28/09/2025", applicationNo: "202511093110", publicationDate: "14/11/2025", journalNo: "46/2025" },
  { srNo: 17, title: "SAFETY ROOF HATCH", inventor: "RAJNEESH TALWAR, DEVANSH VERMA, DISHU SINGLA, YUGANDA PURI", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "07/10/2025", applicationNo: "202511096648", publicationDate: "05/12/2025", journalNo: "49/2025" },
  { srNo: 18, title: "SPEED BREAKER", inventor: "HARDIK BATRA, ARCHITA GROVER, RAJNEESH TALWAR, MANVINDER SHARMA", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "17/10/2025", applicationNo: "202511100857", publicationDate: "05/12/2025", journalNo: "49/2025" },
  { srNo: 19, title: "WEARABLE SAFETY DEVICE FOR NEUROLOGICAL AND ENVIRONMENTAL PROTECTION", inventor: "SATYAJIT ANAND, RAJNEESH TALWAR, MANVINDER SHARMA", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "30/10/2025", applicationNo: "202511105027", publicationDate: "12/12/2025", journalNo: "50/2025" },
  { srNo: 20, title: "AUTOMATED ROAD SURFACE REPAIRING DEVICE", inventor: "MANVINDER SHARMA, SATYAJIT ANAND, RAJNEESH TALWAR, YUGNANDA PURI", department: "DICE", applicant: "CHITKARA UNIVERSITY, CHITKARA INNOVATION INCUBATOR FOUNDATION", filingDate: "03/11/2025", applicationNo: "202511106371", publicationDate: "19/12/2025", journalNo: "51/2025" },
];

export default function Research() {
  const [activeTab, setActiveTab] = useState("publications");

  const renderPublications = () => (
    <>
      <div className="mt-10 flex justify-center">
        <img
          src="./assets/chart.png"
          alt="Publications chart"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {publications.map((publication, index) => (
          <div
            key={index}
            className="border border-blue-300 rounded-lg p-6 duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4">{publication.title}</h2>
            <p className="text-gray-600 mb-2"><strong>Faculty:</strong> {publication.faculty}</p>
            <p className="text-gray-600 mb-2"><strong>Status:</strong> {publication.status}</p>
            <p className="text-gray-600 mb-2"><strong>Database:</strong> {publication.database}</p>
          </div>
        ))}
      </div>
    </>
  );

  const renderPatents = () => (
    <>
      {/* Existing cards from patents.json */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {patents.map((patent, index) => (
          <div
            key={index}
            className="border border-blue-300 rounded-lg p-6 duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4">{patent.title}</h2>
            <p className="text-gray-600 mb-2"><strong>Inventors:</strong> {patent.inventors}</p>
            <p className="text-gray-600 mb-2"><strong>Status:</strong> {patent.status}</p>
            <p className="text-gray-600 mb-2"><strong>Patent #:</strong> {patent.patentNumber}</p>
            <p className="text-gray-600"><strong>Country:</strong> {patent.country}</p>
          </div>
        ))}
      </div>

      {/* Published Patents Table */}
      <div className="mt-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-700">
          Published Patents — DICE Department
        </h2>
        <div className="overflow-x-auto rounded-xl shadow-lg border border-blue-100">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Sr No.</th>
                <th className="px-4 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold">Inventor(s)</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Dept.</th>
                <th className="px-4 py-3 font-semibold">Applicant</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Filing Date</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Application No.</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Publication Date</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">Journal No.</th>
              </tr>
            </thead>
            <tbody>
              {publishedPatentDetails.map((row, index) => (
                <tr
                  key={row.srNo}
                  className={`border-t border-blue-100 transition-colors duration-150 ${
                    index % 2 === 0 ? "bg-white" : "bg-blue-50"
                  } hover:bg-blue-100`}
                >
                  <td className="px-4 py-3 text-center font-medium text-blue-700">{row.srNo}</td>
                  <td className="px-4 py-3 font-medium text-gray-800 max-w-xs">{row.title}</td>
                  <td className="px-4 py-3 text-gray-600 max-w-xs">{row.inventor}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.department}</td>
                  <td className="px-4 py-3 text-gray-600">{row.applicant}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.filingDate}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.applicationNo}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.publicationDate}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.journalNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-40 py-8">
        <h1 className="text-5xl font-semibold text-center mb-6">Research</h1>
        <div className="flex justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab("publications")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeTab === "publications"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"
            }`}
          >
            Publications
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("patents")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeTab === "patents"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50"
            }`}
          >
            Patents
          </button>
        </div>
        {activeTab === "publications" ? renderPublications() : renderPatents()}
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}