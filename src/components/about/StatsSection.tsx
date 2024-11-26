import React from 'react';
import { FaMapMarkerAlt, FaHandshake, FaHotel } from 'react-icons/fa';

// Ensure all imports are declared at the top
const CountUp = require('react-countup').default;

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          We Are The Most Popular Travel & Tour Company
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
  Discover the world with us and experience unforgettable adventures. From sun-kissed beaches to breathtaking mountain views, our tours promise the perfect escape to explore and relax.
</p>


        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat Item 1 */}
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg">
            <FaMapMarkerAlt className="text-5xl text-yellow-500 mb-4" />
            <CountUp start={1} end={928} duration={3} className="text-4xl font-bold text-gray-800" />
            <p className="text-lg text-gray-600 mt-2">Travel Destinations</p>
          </div>

          {/* Stat Item 2 */}
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg">
            <FaHandshake className="text-5xl text-yellow-500 mb-4" />
            <CountUp start={1} end={1020} duration={3} className="text-4xl font-bold text-gray-800" />
            <p className="text-lg text-gray-600 mt-2">Tour Partners</p>
          </div>

          {/* Stat Item 3 */}
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg">
            <FaHotel className="text-5xl text-yellow-500 mb-4" />
            <CountUp start={1} end={540} duration={3} className="text-4xl font-bold text-gray-800" />
            <p className="text-lg text-gray-600 mt-2">Hotel & Accommodations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
