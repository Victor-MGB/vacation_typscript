import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaClock } from "react-icons/fa";
import 'animate.css';
import Navbar from '../nav/Navbar';
import SubImage from './SubImage';
import Adventures from './Adventures';
import Reviews from './Reviews';
import VideoHeroSection from './VideoHeroSection';
import PromoSection from './PromoSection';
import Footer from './Footer';

type ImageCarouselProps = {
  images: string[];
};


const Home: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto-transition to the next image
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar />
      {/* Image Container */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}

      {/* Social Icons - Left Side */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-12 text-white">
        <FaFacebookF className="text-2xl hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-110" />
        <FaTwitter className="text-2xl hover:text-blue-300 cursor-pointer transition-transform transform hover:scale-110" />
        <FaInstagram className="text-2xl hover:text-pink-400 cursor-pointer transition-transform transform hover:scale-110" />
      </div>

      {/* Main Content - Right Side */}
      <div className="absolute left-8 bottom-[10rem] w-[30rem] flex flex-col items-center text-white">
        <h1 className="text-2xl font-extrabold leading-tight mb-2">Feel The Experience</h1>
        <p className="text-4xl ml-[5rem] hidden mb-6">Explore The Majestic Asia Landscape Now</p>
        <button
          className="flex items-center hidden space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform"
          aria-label="Get Started"
        >
          <span>Get Started</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Footer Content - Bottom */}
      <div className="absolute bottom-0 left-0 hidden w-full bg-gradient-to-t from-black via-transparent to-transparent p-6 flex justify-between items-center text-white">
        <div className="flex items-center space-x-4">
          <FaClock  className="text-xl hidden font-semibold tracking-wide">Vacation Paradise</FaClock>
          <p className="text-sm text-white hidden opacity-80 max-w-xs">
  Escape to paradise and let the gentle ocean breeze and golden sunsets rejuvenate your spirit. Discover unforgettable memories with every adventure.
</p>

<p className="text-sm opacity-80 hidden max-w-xs">
  Immerse yourself in the vibrant culture and stunning landscapes of the world's most breathtaking destinations. Your perfect getaway awaits.
</p>

<p className="text-sm opacity-80 max-w-xs">
  Whether you seek relaxation or thrilling exploration, there's an experience crafted just for you. Indulge in a journey filled with wonder and excitement.
</p>

        </div>
        <p className="text-sm opacity-70 animate-bounce">Scroll</p>
      </div>
    </div>
  );
};

// Usage Example
const images = [
  'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/amazing-sunrise-in-mount-bromo.jpg',
  'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/kelingking-beach-nusa-penida-bali-indonesia-.jpg',
  'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/padar-island-labuan-bajo-indonesia.jpg',
  'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/night-temple-in-thailand.jpg'
];

const App: React.FC = () => {
  return (
    <>
      <Home images={images} />
      <SubImage />
      <Adventures />
      <Reviews />
      <VideoHeroSection />
      <PromoSection />
      <Footer />
    </>
  )
};

export default App;
