import React, { useState } from "react";
import Navbar from "../Navbar";
import fundingData from "../../data/Funding.json";

export default function Funding() {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <Navbar />
            <div className="pt-32 px-6 lg:px-20">
                <h1 className="text-4xl font-bold mb-8 text-center">Funded Projects</h1>
                <div className="overflow-x-auto rounded-xl shadow-md">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-red-600 text-white">
                                <th className="text-left p-4">Project Name</th>
                                <th className="text-left p-4">Funding</th>
                                <th className="text-left p-4">Funding Agency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fundingData.map((project) => (
                                <tr
                                    key={project.id}
                                    className="border-b hover:bg-red-100 cursor-pointer"
                                    onClick={() => setSelected(project)}
                                >
                                    <td className="p-4">{project.name}</td>
                                    <td className="p-4">{project.funding}</td>
                                    <td className="p-4">{project.sponsor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal */}
                {selected && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-2 right-3 text-gray-500 text-2xl hover:text-red-500"
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
                            <p className="text-gray-600 mb-1">
                                <strong>Funding:</strong> {selected.funding}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <strong>Department:</strong> {selected.department}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <strong>Sponsor:</strong> {selected.sponsor}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <strong>Year:</strong> {selected.year}
                            </p>
                            <p className="text-gray-700 mt-4">{selected.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}