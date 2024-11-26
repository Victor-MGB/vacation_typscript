import React from 'react';

const BlogPost: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Blog Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Hidden Gems in Asia for Your Next Vacation
          </h1>
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pinimg.com/236x/18/6d/6c/186d6cd3527d780686ca57b6bec4d01b.jpg"
              alt="Author"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-gray-600">
              <p className="text-lg font-semibold">By Alex Johnson</p>
              <p className="text-sm">Published on April 15, 2024</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mb-8">
          <img
            src="https://i.pinimg.com/474x/b2/7c/90/b27c903fde19ba9044f8cccd6f44ae10.jpg"
            alt="Asia Landscape"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <span className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-1 rounded-md font-medium">
            Travel Tips
          </span>
        </div>

        {/* Blog Content */}
        <div className="text-gray-700 leading-relaxed mb-8">
          <p className="mb-6">
            Traveling to Asia is an adventure that promises an abundance of breathtaking views, cultural experiences, and culinary delights. From the bustling streets of Bangkok to the serene landscapes of Bali, Asia offers a variety of destinations that cater to every traveler's preference.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Destinations You Must Visit</h2>
          <p className="mb-6">
            If you're seeking an adventure filled with history and tradition, Kyoto, Japan, is the perfect destination. For those craving vibrant nightlife and exotic street food, Bangkok, Thailand, won’t disappoint. Meanwhile, beach lovers will find paradise in Bali, Indonesia, with its crystal-clear waters and lush greenery.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Planning Your Trip</h2>
          <p className="mb-6">
            When planning a trip to Asia, it's essential to prepare well in advance. Make sure to check visa requirements, pack for the tropical climate, and learn a few local phrases to enrich your travel experience. Don't forget to try the local cuisine, as each country has unique and flavorful dishes.
          </p>
          <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 mb-6">
            "Traveling – it leaves you speechless, then turns you into a storyteller." – Ibn Battuta
          </blockquote>
        </div>

        {/* Call to Action */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ready for Your Next Adventure?</h3>
          <p className="text-gray-600 mb-6">
            Start planning your dream vacation to Asia today! Find exclusive travel deals, explore more destinations, and gather all the inspiration you need for an unforgettable journey.
          </p>
          <button className="bg-yellow-500 text-white font-medium py-2 px-6 rounded hover:bg-yellow-600 transition duration-300">
            Explore More Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
