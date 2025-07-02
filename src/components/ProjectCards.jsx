import React, { useEffect, useState } from "react";

export default function ProjectsCards({ projects }) {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="rounded-2xl shadow-lg p-4 border border-gray-200 bg-white"
                >
                    {project.images && project.images.length > 0 && (
                        <ImageCarousel
                            images={project.images}
                            title={project.title || `Project ${index}`}
                        />
                    )}
                    <h2 className="text-xl font-bold mb-2">
                        {project.title || "Untitled Project"}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2">
                        {project.description || "No description provided."}
                    </p>
                    <SpecsAccordion specs={project.specs} />
                    <div className="mb-2 flex items-center gap-2">
                        <span className="font-medium">SDGs:</span>
                        <div className="flex flex-wrap gap-2">
                            {project.sdgs.map((sdg, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded"
                                >
                                    SDG {sdg}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-2">
                        {project.sdg_explanation.map((explanation, i) => (
                            <p key={i} className="text-xs text-gray-500 mb-1">
                                {explanation}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function ImageCarousel({ images, title }) {
    const [current, setCurrent] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const goToImage = (index) => setCurrent(index);
    const isVideo = (src) => src.toLowerCase().endsWith(".mp4");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative mb-4">
            <div onClick={() => setShowModal(true)} className="cursor-pointer">
                {isVideo(images[current])
                    ? (
                        <video
                            src={images[current]}
                            className="w-full h-48 object-cover rounded-xl"
                            muted
                            autoPlay
                            loop
                        />
                    )
                    : (
                        <img
                            src={images[current]}
                            alt={`${title} - image ${current + 1}`}
                            className="w-full h-48 object-cover rounded-xl"
                        />
                    )}
            </div>
            {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`w-2.5 h-2.5 rounded-full ${
                                index === current
                                    ? "bg-blue-600"
                                    : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            )}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
                    onClick={() => setShowModal(false)}
                >
                    {isVideo(images[current])
                        ? (
                            <video
                                src={images[current]}
                                className="max-w-full max-h-full rounded-xl"
                                controls
                                autoPlay
                            />
                        )
                        : (
                            <img
                                src={images[current]}
                                alt={`${title} - enlarged`}
                                className="max-w-full max-h-full rounded-xl"
                            />
                        )}
                </div>
            )}
        </div>
    );
}

function SpecsAccordion({ specs }) {
    const [open, setOpen] = useState(false);

    if (!specs || specs.length === 0) return null;

    return (
        <div className="mb-2">
            <button
                className="text-sm font-medium text-left w-full text-blue-700 hover:underline"
                onClick={() => setOpen(!open)}
            >
                {open ? "Hide Specs" : "Show Specs"}
            </button>
            {open && (
                <ul className="mt-1 text-sm list-disc list-inside text-gray-700">
                    {specs.map((item, i) => (
                        <li key={i}>
                            <span className="font-semibold">{item.spec}:</span>
                            {" "}
                            {item.desc}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
