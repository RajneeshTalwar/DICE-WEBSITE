import { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar";
import fundingData from "../../data/Funding.json";

export default function Funding() {
    const [selected, setSelected] = useState(null);
    const modalRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSelected(null);
            }
        }
        if (selected) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selected]);

    return (
        <>
            <Navbar />
            <div className="pt-32 px-6 lg:px-20">
                <h1 className="text-4xl font-bold mb-8 text-center">Funded Projects</h1>
                <div className="overflow-x-auto rounded-xl shadow-md">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-red-600 text-white">
                                <th className="text-left p-4">S.No.</th>
                                <th className="text-left p-4">Project Name</th>
                                <th className="text-left p-4">Funding</th>
                                <th className="text-left p-4">Funding Agency</th>
                                <th className="text-left p-4">Mentor/PI</th>
                                <th className="text-left p-4">Status</th>
                                <th className="text-left p-4">Media</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fundingData.map((project, index) => (
                                <tr
                                    key={project.id}
                                    className="border-b hover:bg-red-100 cursor-pointer"
                                    onClick={() => setSelected(project)}
                                >
                                    <td className="p-4">{index + 1}</td>
                                    <td className="p-4">{project.name}</td>
                                    <td className="p-4">{project.funding}</td>
                                    <td className="p-4">{project.sponsor}</td>
                                    <td className="p-4">{project.mentor}</td>
                                    <td className="p-4">
                                        {project.status === "Ongoing" ? (
                                            <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-200 text-yellow-800 rounded">
                                                Ongoing
                                            </span>
                                        ) : (
                                            <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-200 text-green-800 rounded">
                                                Completed
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        {project.mediaUrls && project.mediaUrls.length > 0 ? (
                                            project.mediaType === "video" ? (
                                                <div className="w-32 h-20 flex items-center justify-center bg-gray-100 rounded">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 text-red-500"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                                    </svg>
                                                </div>
                                            ) : project.mediaType === "link" ? (
                                                <a
                                                    href={project.mediaUrls[0]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 underline"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    View Link
                                                </a>
                                            ) : (
                                                <img
                                                    src={project.mediaUrls[0]}
                                                    alt={project.name}
                                                    className="w-32 h-20 object-cover rounded"
                                                />
                                            )
                                        ) : (
                                            <span className="text-gray-500">N/A</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal */}
                {selected && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                        <div
                            ref={modalRef}
                            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 relative"
                        >
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
                                <strong>Sponsor:</strong> {selected.sponsor}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <strong>Mentor/PI:</strong> {selected.mentor}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <strong>Status:</strong>{" "}
                                {selected.status === "Ongoing" ? (
                                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-200 text-yellow-800 rounded">
                                        Ongoing
                                    </span>
                                ) : (
                                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-200 text-green-800 rounded">
                                        Completed
                                    </span>
                                )}
                            </p>
                            <p className="text-gray-700 mt-4">{selected.description}</p>

                            {/* Media Section */}
                            {selected.mediaUrls && selected.mediaUrls.length > 0 && (
                                <div className="mt-4 space-y-4">
                                    {selected.mediaType === "video" ? (
                                        selected.mediaUrls.map((url, idx) => (
                                            <video
                                                key={idx}
                                                src={url}
                                                controls
                                                className="w-full max-h-96 rounded object-contain"
                                            />
                                        ))
                                    ) : selected.mediaType === "link" ? (
                                        <a
                                            href={selected.mediaUrls[0]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            Open Link
                                        </a>
                                    ) : (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {selected.mediaUrls.map((url, idx) => (
                                                <img
                                                    key={idx}
                                                    src={url}
                                                    alt={`${selected.name} ${idx + 1}`}
                                                    className="max-w-full max-h-96 rounded object-contain"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
