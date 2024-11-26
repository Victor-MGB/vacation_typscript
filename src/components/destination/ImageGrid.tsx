import React from 'react';

// Sample data for images with country and capital
const countries = [
  { name: 'France', capital: 'Paris', imageUrl: 'https://i.pinimg.com/236x/58/52/c8/5852c8bc79c92da077d7c1418a3af1dd.jpg' },
  { name: 'Italy', capital: 'Rome', imageUrl: 'https://i.pinimg.com/236x/9c/59/4b/9c594be4975d86d3dee73c964b5cf34b.jpg' },
  { name: 'Japan', capital: 'Tokyo', imageUrl: 'https://i.pinimg.com/236x/c2/79/37/c27937f7b75d50ff1a69a7a629ddbea2.jpg' },
  { name: 'Australia', capital: 'Canberra', imageUrl: 'https://i.pinimg.com/236x/0b/0d/b4/0b0db479d42fc97c545bf298e7329ef9.jpg' },
  { name: 'USA', capital: 'Washington, D.C.', imageUrl: 'https://i.pinimg.com/236x/fd/18/69/fd1869963871c66dac8afc06ade55351.jpg' },
  { name: 'Brazil', capital: 'Brasília', imageUrl: 'https://i.pinimg.com/474x/20/11/39/20113954b6f3b2020ace054ade5a821f.jpg' },
];

const ImageGrid: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Explore Beautiful Destinations / The Most Favorite Destination.
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={country.imageUrl}
                alt={`${country.name}`}
                className="w-full h-64 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl text-white font-bold">{country.name}</h3>
                  <p className="text-sm text-gray-200">{country.capital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
