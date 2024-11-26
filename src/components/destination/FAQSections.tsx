import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What to prepare for a trip to Asia?',
    answer: 'You should pack comfortable clothing, necessary medications, a universal power adapter, and ensure your phone is unlocked for a local SIM.',
  },
  {
    question: 'What documents do you need before going to Asia?',
    answer: 'You will need a valid passport, any required visas, travel insurance, and copies of your important documents for backup.',
  },
  {
    question: 'How to schedule an Asia trip itinerary?',
    answer: 'Research the destinations you want to visit, allocate time for each, and include buffer days for unexpected delays or spontaneous adventures.',
  },
  {
    question: '8 Websites you must read before your trip',
    answer: 'Check out TripAdvisor, Lonely Planet, Travel Asia Guide, Culture Trip, Expedia, Agoda, Booking.com, and AirAsia for helpful travel tips.',
  },
  {
    question: 'This is the best budget you need to prepare',
    answer: 'Budget at least $50–$100 per day depending on the country, and ensure you have an emergency fund for unexpected expenses.',
  },
  {
    question: 'This site gives you information about travel to Asia',
    answer: 'Visit sites like TravelAsia.com for comprehensive guides, blogs, and tips from experienced travelers.',
  },
];

const FAQSections: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Enjoy Our Best Quality Tour & Experience
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
        Get ready to embark on unforgettable adventures, discovering breathtaking landscapes and vibrant cultures. Let us take you on a journey where every moment becomes a treasured memory.</p>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaMinus className="text-yellow-500" />
                ) : (
                  <FaPlus className="text-yellow-500" />
                )}
              </div>
              {activeIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSections;
