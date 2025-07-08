import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const FDP = () => {

    const fdpData = [
        {
            id: 1,
            title: "Emerging Interdisciplinary Technologies in Engineering 2.0",
            date: "2025-08-23",
            endDate: "2025-08-27",
            description: " The Department of Interdisciplinary Courses in Engineering (DICE), Chitkara University, Punjab, successfully organized a five-day Faculty Development Program (FDP) titled Emerging Interdisciplinary Technologies in Engineering 2.0 from June 23rd to June 27th, 2025. The program was attended by participants from both within and outside Chitkara University. The FDP aimed to provide in-depth theoretical understanding and hands-on exposure to some of the most rapidly and latest evolving interdisciplinary domains in engineering, such as IoT, Python Programming, Machine Learning, AI, Generative AI, Explainable AI (XAI), and Blockchain.",
            images: [
                "./assets/fdp11.jpeg",
                "./assets/fdp12.jpeg",
                "./assets/fdp13.jpeg",
                "./assets/fdp14.jpeg",
                "./assets/fdp15.jpeg"
            ],
        }
    ];

    const ImageSlider = ({ images, title }) => {
        const [currentImage, setCurrentImage] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
            }, 3000);
            return () => clearInterval(interval);
        }, [images.length]);

        return (
            <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img
                    src={images[currentImage]}
                    alt={title}
                    className="w-full h-full object-cover transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
        );
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen mx-auto pt-40 py-8 ">



                <h1 className="text-5xl font-semibold text-center mb-12">
                    Faculty Development Programme
                </h1>




                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {fdpData.map((fdp) => (
                            <div key={fdp.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <ImageSlider images={fdp.images} title={fdp.title} />

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {fdp.title}
                                    </h3>

                                    <div className="mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            {formatDate(fdp.date)} - {formatDate(fdp.endDate)}
                                        </div>
                                    </div>

                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {fdp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FDP;