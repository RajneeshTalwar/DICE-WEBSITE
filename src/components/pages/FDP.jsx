import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const FDP = () => {
    const fdpData = [
        {
            id: 1,
            title: 'Emerging Interdisciplinary Technologies in Engineering 1.0',
            date: '2024-06-25',
            endDate: '2024-06-29',
            description:
                'The Department of Interdisciplinary Courses in Engineering (DICE), Chitkara University, Punjab, successfully organized a five-day Faculty Development Programme (FDP) on “Emerging Interdisciplinary Technologies in Engineering” from June 25th to June 29th, 2024. The FDP aimed to upskill faculty in rapidly evolving technological domains through expert talks and hands-on training.The program covered a wide range of topics including the Internet of Things (IoT), Arduino-based development, Python programming, Machine Learning, Augmented and Virtual Reality (AR/VR), Teachable Machines, and Bibliometric Analysis. Practical sessions included coding in Google Colab, developing AR projects using Unity and Vuforia, and research data analysis using Scopus, R Studio, and SciMAT. The FDP was inaugurated by Prof. (Dr.) Rajneesh Talwar, Dean DICE, who also led multiple sessions, encouraging participants to integrate these technologies into their academic and research practices.',
            images: [
                { url: './assets/FDP/2024-poster.jpeg', caption: 'Poster' },
                { url: './assets/FDP/Day1/day1-1.jpeg', caption: 'Day1: Arduino and IoT' },
                { url: './assets/FDP/Day1/day1-2.jpeg', caption: 'Day1: Arduino and IoT' },
                { url: './assets/FDP/Day1/day1-4.jpeg', caption: 'Day1: Arduino and IoT' },
                { url: './assets/FDP/Day1/day1-4.jpeg', caption: 'Day1: Arduino and IoT' },
                { url: './assets/FDP/Day2/Day2.1.jpeg', caption: 'Day2: Python Programming and Its Applications' },
                { url: './assets/FDP/Day2/Day2.2.jpeg', caption: 'Day2: Python Programming and Its Applications' },
                { url: './assets/FDP/Day2/Day2.3.jpeg', caption: 'Day2: Python Programming and Its Applications' },
                { url: './assets/FDP/Day2/Day2.4.jpeg', caption: 'Day2: Python Programming and Its Applications' },
                { url: './assets/FDP/Day2/Day2.5.jpeg', caption: 'Day2: Python Programming and Its Applications' },
                { url: './assets/FDP/Day2/Day2.6.jpeg', caption: 'Day2: Python Programming and Its Applications' },
                { url: './assets/FDP/Day3/Day3 (1).jpeg', caption: 'Day3: Augmented Reality and Virtual Reality (AR/VR)' },
                { url: './assets/FDP/Day3/Day3 (2).jpeg', caption: 'Day3: Augmented Reality and Virtual Reality (AR/VR)' },
                { url: './assets/FDP/Day3/Day3 (3).jpeg', caption: 'Day3: Augmented Reality and Virtual Reality (AR/VR)' },
                { url: './assets/FDP/Day3/Day3 (4).jpeg', caption: 'Day3: Augmented Reality and Virtual Reality (AR/VR)' },
                { url: './assets/FDP/Day3/Day3 (5).jpeg', caption: 'Day3: Augmented Reality and Virtual Reality (AR/VR)' },
                { url: './assets/FDP/Day4/Day4 (1).jpeg', caption: 'Day4: Artificial Intelligence' },
                { url: './assets/FDP/Day4/Day4 (2).jpeg', caption: 'Day4: Artificial Intelligence' },
                { url: './assets/FDP/Day4/Day4 (3).jpeg', caption: 'Day4: Artificial Intelligence' },
                { url: './assets/FDP/Day4/Day4 (4).jpeg', caption: 'Day4: Artificial Intelligence' },
                { url: './assets/FDP/Day5/Day5 (1).jpeg', caption: 'Day5: Bibliometric Analysis' },
                { url: './assets/FDP/Day5/Day5 (2).jpeg', caption: 'Day5: Bibliometric Analysis' },
                { url: './assets/FDP/Day5/Day5 (3).jpeg', caption: 'Day5: Bibliometric Analysis' },
                { url: './assets/FDP/Day5/Day5 (4).jpeg', caption: 'Day5: Bibliometric Analysis' },
                { url: './assets/FDP/Day5/Day5 (5).jpeg', caption: 'Day5: Bibliometric Analysis' },
                { url: './assets/FDP/Day5/Day5 (6).jpeg', caption: 'Day5: Bibliometric Analysis' },
                { url: './assets/FDP/Day5/Day5 (7).jpeg', caption: 'Day5: Bibliometric Analysis' },
                { url: './assets/FDP/Day5/Day5 (8).jpeg', caption: 'Day5: Bibliometric Analysis' },
                { url: './assets/FDP/Day5/Day5 (9).jpeg', caption: 'Day5: Bibliometric Analysis' }

            ]
        },
        {
            id: 2,
            title: 'Emerging Interdisciplinary Technologies in Engineering 2.0',
            date: '2025-06-23',
            endDate: '2025-06-27',
            description:
                'The Department of Interdisciplinary Courses in Engineering (DICE), Chitkara University, Punjab, successfully organized a five-day Faculty Development Program (FDP) titled “Emerging Interdisciplinary Technologies in Engineering 2.0” from June 23rd to June 27th, 2025. The program was attended by participants from both within and outside Chitkara University. The FDP aimed to provide in-depth theoretical understanding and hands-on exposure to some of the most rapidly and latest evolving interdisciplinary domains in engineering, such as (IoT), Python Programming, Machine Learning, (AI), Generative AI, Explainable AI (XAI), and Blockchain.The FDP was inaugurated by Prof. (Dr.) Rajneesh Talwar, Dean DICE, who also delivered multiple sessions throughout the program.',
            images: [
                { url: './assets/FDP/day0.jpeg', caption: 'Poster' },
                { url: './assets/fdp11.jpeg', caption: 'Day 1: Introduction to IoT' },
                { url: './assets/fdp12.jpeg', caption: 'Day 2: Python Programming Workshop' },
                { url: './assets/fdp13.jpeg', caption: 'Day 3: Machine Learning Applications' },
                { url: './assets/fdp14.jpeg', caption: 'Day 4: AI and Generative AI' },
                { url: './assets/fdp15.jpeg', caption: 'Day 5: Blockchain & Wrap-Up' }
            ]
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
                    src={images[currentImage].url}
                    alt={title}
                    className="w-full h-full object-cover transition-opacity duration-1000"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm px-4 py-2">
                    {images[currentImage].caption}
                </div>
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

                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {fdpData.map((fdp) => (
                            <div
                                key={fdp.id}
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {fdp.title}
                                    </h3>

                                    <div className="mb-4 text-sm text-gray-600">
                                        {formatDate(fdp.date)} - {formatDate(fdp.endDate)}
                                    </div>

                                    <ImageSlider images={fdp.images} title={fdp.title} />

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
