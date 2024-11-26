import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go';
import Navbar from '../nav/Navbar';
import StatsSection from './StatsSection';
import ImageSection from './ImageSection';
import Adventures from '../Home/Adventures';
import PromoSection from '../Home/PromoSection';
import Footer from '../Home/Footer';

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
        <Navbar />
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/12/8c/64/128c64718ef1501174a765f01bfa1de4.jpg')" }}
      >
        {/* Darker gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black opacity-90"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center text-center space-x-4 mb-4">
            <NavLink
              to="/"
              className="text-2xl md:text-6xl font-extrabold tracking-wider hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </NavLink>
            <GoDotFill className="text-yellow-400 text-3xl md:text-4xl" />
            <h2 className="text-2xl md:text-4xl font-semibold">
              About Us
            </h2>
          </div>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Discover breathtaking destinations, indulge in unforgettable adventures, 
            and create cherished memories. Whether you seek serene escapes or 
            thrilling expeditions, your perfect getaway awaits.
          </p>

          {/* Button Example for Further Interaction */}
          <div className="mt-8">
            <NavLink
              to="/explore"
              className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
              Explore Now
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () =>{
    return(
        <>
        <AboutHero />
        <StatsSection />
        <ImageSection />
        <Adventures />
        <PromoSection />
        <Footer />
        </>
    )
}
export default About;
