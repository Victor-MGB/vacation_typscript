import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Accordion item interface
interface AccordionItem {
  question: string;
  answer: string;
}

// Sample accordion data
const accordionData: AccordionItem[] = [
  { question: "What to prepare for a trip to Asia?", answer: "Pack lightweight clothing, respect local customs, and bring essential travel documents." },
  { question: "What documents do you need before going to Asia?", answer: "A valid passport, visas for specific countries, and proof of travel insurance are essential." },
  { question: "How to schedule an Asia trip itinerary?", answer: "Prioritize top destinations, allow flexibility, and account for travel times between locations." },
  { question: "8 Websites to read before your trip?", answer: "Check out travel blogs, government travel advisories, and forums like Lonely Planet and TripAdvisor." },
  { question: "What budget should you prepare?", answer: "Budget depends on the destination; Southeast Asia is affordable, while Japan and Singapore are pricier." },
  { question: "Which sites provide the best travel information for Asia?", answer: "Websites like Nomadic Matt, The Culture Trip, and Asia Highlights offer comprehensive travel guides." }
];

const ExploreAsia: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Toggle function for the accordion
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to hide the component
  const hideComponent = () => {
    setIsVisible(false);
  };

  // If the component is hidden, do not render it
  if (!isVisible) return null;

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center relative">
        {/* Cancel Button */}
        <button
          onClick={hideComponent}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative mb-8">
          <img
            src="https://i.pinimg.com/236x/06/93/cd/0693cd4db605ded692106079f9c5cb75.jpg"
            alt="Beautiful landscape in Asia"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white bg-black bg-opacity-50 px-3 py-1 rounded">
            Explore Asia
          </h2>
        </div>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-8">
          Asia is a land of breathtaking landscapes, rich traditions, and vibrant cultures. From the bustling streets of Tokyo to the serene beaches of Thailand, every experience is unforgettable.
        </p>

        {/* Top Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://i.pinimg.com/236x/ce/f0/e7/cef0e7499ca45b5aac5bc18ab378c2ec.jpg" alt="Tokyo" className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="font-semibold text-lg">Tokyo, Japan</h3>
            <p className="text-sm text-gray-600">A blend of traditional and futuristic attractions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://i.pinimg.com/236x/87/26/b8/8726b87b7aa340690eff70bfd0874a5d.jpg" alt="Bangkok" className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="font-semibold text-lg">Bangkok, Thailand</h3>
            <p className="text-sm text-gray-600">Famous for its vibrant street life and cultural landmarks.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://i.pinimg.com/474x/1a/01/dd/1a01dd698c41dc6a882fdaf6fb292ace.jpg" alt="Bali" className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="font-semibold text-lg">Bali, Indonesia</h3>
            <p className="text-sm text-gray-600">A paradise with stunning beaches and lush greenery.</p>
          </div>
        </div>

        {/* Accordion Travel Tips */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Travel Tips for Asia</h3>
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 mb-4">
              <button
                className="w-full text-left font-medium text-gray-700 flex justify-between items-center py-2"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2 pl-4">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <NavLink
    to="/"
    className="inline-block text-center text-sm md:text-base font-medium text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out underline hover:no-underline px-4 py-2 rounded-md hover:bg-blue-100"
  >
    Back To Home
  </NavLink>    
  </section>
  );
};

export default ExploreAsia;
