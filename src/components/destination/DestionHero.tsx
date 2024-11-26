import React from 'react'
import { NavLink } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go';
import Navbar from '../nav/Navbar';
import ImageGrid from './ImageGrid';
import FAQSections from './FAQSections';
import VideoHeroSection from '../Home/VideoHeroSection';
import StatsSection from '../about/StatsSection';
import ImageSection from '../about/ImageSection';
import PromoSection from '../Home/PromoSection';
import Footer from '../Home/Footer';

const DestionHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
    <Navbar />
  <div
    className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    style={{ backgroundImage: "url('https://i.pinimg.com/236x/73/1a/a3/731aa31278fde872c0da0f1ca1ebbb10.jpg')" }}
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
          Europe
        </h2>
      </div>
      <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
  Explore stunning destinations, embark on extraordinary journeys, 
  and craft memories that last a lifetime. Whether you're dreaming of 
  tranquil retreats or heart-pounding adventures, your ultimate escape is here.
</p>


      {/* Button Example for Further Interaction */}
      <div className="mt-8">
        <NavLink
          to="/explore"
          className="px-8 py-3 hidden bg-yellow-400 text-black rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
        >
          Explore Now
        </NavLink>
      </div>
    </div>
  </div>
</section>  )
}

const Destination: React.FC = () =>{
    return(
        <>
        <DestionHero />
        <ImageGrid />
        <FAQSections />
        <VideoHeroSection />
        <StatsSection />
        <ImageSection />
        <PromoSection />
        <Footer />
        </>
    )
}

export default Destination;