// PromoSection.tsx
import React from "react";

// Import your image

const PromoSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${`https://i.pinimg.com/236x/99/d4/33/99d433726b15aee004c6ff19a01098db.jpg`})` }} // Set your image here
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Get Closer With Us & Get Special Promo
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
        Discover the perfect escape where luxury meets adventure. Immerse yourself in breathtaking landscapes, savor unforgettable experiences, and create memories that last a lifetime. Your dream getaway awaits, with unmatched comfort and exclusive perks
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default PromoSection;
