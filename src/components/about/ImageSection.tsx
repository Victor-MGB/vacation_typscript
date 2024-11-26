import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 flex justify-between items-center space-x-8">
        {/* Image 1 (Longer Image) */}
        <div className="flex-1">
          <img
            src="https://i.pinimg.com/474x/6d/6f/d7/6d6fd70bf6b1b95978b05c082cbbaf60.jpg"
            alt="Longer_Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Image 2 (Shorter Image) */}
        <div className="flex-1">
          <img
            src="https://i.pinimg.com/236x/b7/ea/75/b7ea75ad274bbd08aa9ff3ed6345c797.jpg"
            alt="Shorter_Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
