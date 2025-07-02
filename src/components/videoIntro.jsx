import React, { useEffect, useRef, useState } from "react";
import video from "/public/assets/DiceVid2.mp4";

const VerticalLogo = () => (
  <div className="hidden lg:flex flex-col items-center justify-around">
    <div className="bg-red-600 h-[100px] w-[5px]"></div>
    <h1 className="font-bold text-8xl">D</h1>
    <h1 className="font-bold text-8xl">I</h1>
    <h1 className="font-bold text-8xl">C</h1>
    <h1 className="font-bold text-8xl">E</h1>
    <div className="bg-red-600 h-[100px] w-[5px]"></div>
  </div>
);

export default function VideoIntro() {
  const videoRef = useRef(null);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const rect = videoElement.getBoundingClientRect();
      const windowHeight = window.innerHeight ||
        document.documentElement.clientHeight;
      const videoTopOffset = rect.top;

      if (videoTopOffset < windowHeight * 0.5 && !videoIsPlaying) {
        videoElement.play();
        setVideoIsPlaying(true);
      } else if (videoTopOffset >= windowHeight * 0.5 && videoIsPlaying) {
        videoElement.pause();
        setVideoIsPlaying(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoIsPlaying]);

  return (
    <div className="w-full flex items-center justify-around py-12">
      <VerticalLogo />

      <video
        ref={videoRef}
        src={video}
        autoPlay
        loop
        controls
        muted
        className="sm:h-[580px] m-5 rounded-3xl"
      >
      </video>

      <VerticalLogo />
    </div>
  );
}
