import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import JoinCommunity from "../JoinCommunity";
import EventSlider from "../EventSlider";
import VideoIntro from "../videoIntro";
import OrgForYou from "../OrgForYou";
import AboutSec from "../AboutSec";
import FAQSection from "../FAQSection";
import Footer from "../Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSec />
      <EventSlider />
      <OrgForYou />
      <VideoIntro />
      <FAQSection />
      <Footer />
      <JoinCommunity />
    </div>
  );
}
