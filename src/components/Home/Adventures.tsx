// Adventures.tsx
import React from "react";
import { RiSafe2Fill } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import { CgViewComfortable } from "react-icons/cg";
import vid from "../../video/vid.mp4";
import vid1 from "../../video/vid1.mp4";

const Adventures: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Discover New Adventures
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the beauty and culture of Asia with unforgettable experiences,
          perfect for adventure seekers and those who cherish tranquility.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 mb-16">
        {/* Safe Traveling */}
        <div className="flex items-center space-x-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <RiSafe2Fill className="text-4xl text-teal-600" />
          <div>
            <h3 className="text-xl font-medium text-gray-800">Safe Traveling</h3>
            <p className="text-gray-500 text-sm">
              Your safety is ensured throughout your journey.
            </p>
          </div>
        </div>

        {/* Affordable Price */}
        <div className="flex items-center space-x-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <IoPricetagsOutline className="text-4xl text-yellow-600" />
          <div>
            <h3 className="text-xl font-medium text-gray-800">
              Affordable Price
            </h3>
            <p className="text-gray-500 text-sm">
              We provide the best value for your money.
            </p>
          </div>
        </div>

        {/* Comfort Accommodation */}
        <div className="flex items-center space-x-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <CgViewComfortable className="text-4xl text-indigo-600" />
          <div>
            <h3 className="text-xl font-medium text-gray-800">
              Comfort Accommodation
            </h3>
            <p className="text-gray-500 text-sm">
              Relax and enjoy world-class facilities.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Image */}
        <div className="overflow-hidden rounded-lg border shadow-md">
          <img
            className="w-full h-60 object-cover transition-transform duration-300 transform hover:scale-105"
            src="https://i.pinimg.com/236x/40/b7/4f/40b74f3ebc3e196bdaa4d43bcd76d605.jpg"
            alt="Asian scenery"
          />
        </div>

        {/* Video 1 */}
        <div className="overflow-hidden rounded-lg border shadow-md">
          <video
            className="w-full h-60 object-cover"

            onMouseOver={(e) => e.currentTarget.play()}
            onMouseOut={(e) => e.currentTarget.pause()}
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video 2 */}
        <div className="overflow-hidden rounded-lg border shadow-md">
          <video
            className="w-full h-60 object-cover"
            controls
            onMouseOver={(e) => e.currentTarget.play()}
            onMouseOut={(e) => e.currentTarget.pause()}
          >
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
    </section>
  );
};

export default Adventures;
