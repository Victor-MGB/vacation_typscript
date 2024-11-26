// HeroSection.tsx
import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import vid2 from "../../video/vid2.mp4";

const VideoHeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vid2}
        autoPlay
        loop
        muted
        playsInline // Helps with mobile device playback
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="flex items-center mb-4">
          <FaPlaneDeparture className="text-5xl text-yellow-400 mr-2 animate-bounce" />
          <h1 className="text-4xl md:text-6xl font-bold">
            Discover Your Next Adventure
          </h1>
        </div>
        <p className="text-lg md:text-2xl max-w-2xl">
          Escape the ordinary and explore breathtaking destinations. Book your
          dream vacation today!
        </p>
      </div>
    </section>
  );
};

export default VideoHeroSection;
