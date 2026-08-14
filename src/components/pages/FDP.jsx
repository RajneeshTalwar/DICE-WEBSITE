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
        },
{
            id: 3,
            title: 'Emerging Interdisciplinary Technologies in Engineering 3.0', 
            date: '2026-06-29', 
            endDate: '2026-07-03',
            description:'The Department of Interdisciplinary Courses in Engineering (DICE), Chitkara University, successfully organized a Five-Day Faculty Development Program (FDP) on "Emerging Interdisciplinary Technologies in Engineering 3.0" from 29 June to 3 July 2026 in hybrid mode. The program was designed to provide faculty members, research scholars, postgraduate students, and industry professionals with comprehensive knowledge of emerging technologies through expert lectures, hands-on demonstrations, and practical learning experiences. The FDP witnessed the enthusiastic participation of 35 faculty members, research scholars, and academicians from various institutions across India, providing a vibrant platform for interdisciplinary learning, knowledge sharing, and academic collaboration.Day 1 (29 June 2026) was dedicated to Arduino and Raspberry Pi. The inaugural session, delivered by Dr. Manvinder Sharma, introduced participants to the fundamentals of embedded systems, Arduino, Raspberry Pi architecture, sensors, actuators, and the Internet of Things (IoT).In the afternoon session Dr. Manvinder Sharma, focused on the practical applications and use cases of Arduino through simulator-based demonstrations and hands-on activities. Participants gained practical exposure by developing introductory embedded system projects, thereby establishing a strong foundation in embedded systems and IoT technologies.Day 2 (30 June 2026) focused on Python Programming and Its Applications. Both sessions were conducted by Dr. Satyajit Anand, who introduced participants to Python programming fundamentals, data structures, and widely used libraries such as NumPy, Pandas, Matplotlib, and Scikit-learn. Through practical demonstrations, participants explored numerical computing, data preprocessing, data visualization, and machine learning concepts. The sessions also included the implementation of a Support Vector Machine (SVM) classification model, enabling participants to appreciate the significance of Python in data science, artificial intelligence, and engineering applications.Day 3 (1 July 2026) was devoted to Artificial Intelligence and AI Tools. The sessions, delivered by Prof. (Dr.) Rajneesh Talwar, provided participants with a comprehensive introduction to the principles of Artificial Intelligence, machine learning, intelligent systems, and their applications across diverse engineering domains. The resource person also demonstrated various AI tools and highlighted their practical utility in teaching, research, content generation, and decision-making. The interactive sessions enabled participants to understand the transformative potential of AI in academia and industry.Day 4 (2 July 2026) focused on Blockchain Technology, offering participants both conceptual understanding and practical insights. The morning session, "Introduction to Blockchain," was conducted by Prof. (Dr.) Rajneesh Talwar, who explained blockchain as a decentralized and distributed digital ledger that ensures transparency, security, and immutability of data. The session covered key concepts including the evolution of blockchain, centralized and decentralized systems, block architecture, cryptographic hashing, consensus mechanisms (Proof of Work and Proof of Stake), smart contracts, public and private blockchains, blockchain security, and future prospects. The afternoon session, "Applications of Blockchain," was delivered by Mr. Abhinav, Founder of Stringy, who demonstrated real-world applications of blockchain technology in sectors such as finance, healthcare, supply chain management, digital identity, and decentralized applications (DApps). The sessions effectively bridged theoretical concepts with practical industry applications.Day 5 (3 July 2026) concluded the FDP with sessions on Generative AI and Agentic AI, delivered by Prof. (Dr.) Sushil Narang, Dean–CSE AI. The morning session introduced participants to the fundamentals of Generative AI, Large Language Models (LLMs), prompt engineering, and AI-assisted content generation for education, research, and software development. The concluding session on Agentic AI and Its Applications explored the concept of autonomous AI agents capable of planning, reasoning, and executing complex tasks with minimal human intervention. The sessions also addressed emerging trends, ethical considerations, and the future impact of intelligent AI systems across various domains.The Faculty Development Program concluded with an interactive discussion, participant feedback, and a formal vote of thanks. With the active participation  academicians and researchers from institutions across India, the FDP served as an excellent platform for professional development, interdisciplinary collaboration, and the exchange of innovative ideas. Overall, the program successfully achieved its objective of enhancing participants understanding of emerging technologies by integrating theoretical knowledge with practical exposure. The FDP equipped participants with valuable insights into Embedded Systems, Internet of Things (IoT), Python Programming, Artificial Intelligence, Blockchain Technology, Generative AI, and Agentic AI, thereby strengthening their capabilities in teaching, research, innovation, and professional practice',
            images: [
                { url: '.public/assets/FDP/FDP POSTER-JUNE2026.jpeg', caption: 'Poster' },
                { url: '.public/assets/FDP/2026-S4-1.jpeg', caption: 'Day 4: Introduction to AI' },
                { url: '.public/assets/FDP/2026-S4-2.jpeg', caption: 'Day 4: AI and Generative AI' },
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
