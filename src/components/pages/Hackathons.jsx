import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import hackathons from "../../data/hackathons.json";

export default function Hackathons() {
    const [imageIndexes, setImageIndexes] = useState(() =>
        hackathons.map(() => 0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndexes((prev) =>
                prev.map((i, idx) =>
                    (i + 1) % hackathons[idx].images.length
                )
            );
        }, 4000); // every 4 seconds
        return () => clearInterval(interval);
    }, []);

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

                {hackathons.map((hack, index) => (
                    <div
                        key={hack.id}
                        className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            } items-center gap-12`}
                    >
                        <div className="lg:w-1/2 flex flex-col gap-6">
                            <div className="rounded-3xl shadow-2xl overflow-hidden">

                            </div>
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src={hack.images[imageIndexes[index]]}
                                    alt={`${hack.title} image`}
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        </div>

                        <div className="lg:w-1/2 text-left">
                            <h2 className="text-3xl font-semibold mb-2">{hack.title}</h2>
                            <p className="text-gray-600 mb-1 italic">Year: {hack.year}</p>
                            <p className="text-lg text-gray-700">{hack.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
