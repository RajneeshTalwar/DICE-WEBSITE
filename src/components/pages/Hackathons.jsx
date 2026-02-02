import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import hackathons from "../../data/hackathons.json";

export default function Hackathons() {
    const [mediaIndexes, setMediaIndexes] = useState(() =>
        hackathons.map(() => 0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setMediaIndexes((prev) =>
                prev.map((i, idx) => {
                    const totalMedia = hackathons[idx].images.length + 
                        (hackathons[idx].videos?.length || 0);
                    return (i + 1) % totalMedia;
                })
            );
        }, 6000); // every 4 seconds
        return () => clearInterval(interval);
    }, []);

    const getMediaAtIndex = (hackathon, index) => {
        const totalImages = hackathon.images.length;
        const totalVideos = hackathon.videos?.length || 0;
        
        if (index < totalImages) {
            return {
                type: 'image',
                src: hackathon.images[index]
            };
        } else {
            return {
                type: 'video',
                src: hackathon.videos[index - totalImages]
            };
        }
    };

    return (
        <>
            <Navbar />
            <div className="pt-32 px-6 lg:px-20 flex flex-col gap-y-24 pb-32">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hackathons
                    </h1>
                    <p className="text-lg text-gray-700">
                        We mentor, support, and guide students through hackathons.
                    </p>
                </div>
                {hackathons.map((hack, index) => {
                    const currentMedia = getMediaAtIndex(hack, mediaIndexes[index]);
                    
                    return (
                        <div
                            key={hack.sno}
                            className={`flex flex-col lg:flex-row ${
                                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            } items-center gap-12`}
                        >
                            <div className="lg:w-1/2 flex flex-col gap-6">
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    {currentMedia.type === 'image' ? (
                                        <img
                                            src={currentMedia.src}
                                            alt={`${hack.name} media`}
                                            className="w-full h-[500px] object-cover"
                                        />
                                    ) : (
                                        <video
                                            src={currentMedia.src}
                                            className="w-full h-[500px] object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    )}
                                </div>
                                
                                {/* Media indicators */}
                                {(hack.images.length + (hack.videos?.length || 0)) > 1 && (
                                    <div className="flex justify-center gap-2">
                                        {[...Array(hack.images.length + (hack.videos?.length || 0))].map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => {
                                                    setMediaIndexes(prev => {
                                                        const newIndexes = [...prev];
                                                        newIndexes[index] = i;
                                                        return newIndexes;
                                                    });
                                                }}
                                                className={`h-2 rounded-full transition-all ${
                                                    mediaIndexes[index] === i
                                                        ? "w-8 bg-blue-600"
                                                        : "w-2 bg-gray-300 hover:bg-gray-400"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            <div className="lg:w-1/2 text-left">
                                <h2 className="text-3xl font-semibold mb-2">{hack.name}</h2>
                                <p className="text-gray-600 mb-1 italic">Date: {hack.date}</p>
                                {hack.organizedBy && (
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-medium">Organized by:</span> {hack.organizedBy}
                                    </p>
                                )}
                                {hack.venue && (
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-medium">Venue:</span> {hack.venue}
                                    </p>
                                )}
                                {hack.participation && (
                                    <p className="text-gray-600 mb-3">
                                        <span className="font-medium">Achievement:</span> {hack.participation}
                                    </p>
                                )}
                                {hack.description && (
                                    <p className="text-lg text-gray-700">{hack.description}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}