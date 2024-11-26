import React from 'react';
import asia from '../../images/asia.jpg';
import asia3 from '../../images/asia3.jpg';
import asia2 from '../../images/asia2.jpg';
import subvideo from '../../video/subvideo.mp4';
import { MdArrowOutward } from 'react-icons/md';

const SubImage: React.FC = () => {
  return (
    <main className="bg-gray-100 p-8">
      {/* First Image Section */}
      <div className="relative mb-8">
        <img src={asia} alt="Kelingking Beach" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 rounded-b-lg">
          <div className="text-white flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Kelingking Beach</h3>
              <span className="text-sm">Nusa Penida, Bali</span>
            </div>
            <MdArrowOutward className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Second and Third Image Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Second Image */}
        <div className="relative">
          <img src={asia2} alt="Grand Palace" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 rounded-b-lg">
            <div className="text-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Grand Palace</h3>
                <span className="text-sm">Bangkok, Thailand</span>
              </div>
              <MdArrowOutward className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Third Image */}
        <div className="relative">
          <img src={asia3} alt="Cappadocia" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 rounded-b-lg">
            <div className="text-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Cappadocia</h3>
                <span className="text-sm">Turkey</span>
              </div>
              <MdArrowOutward className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-8">
        <div className="relative rounded-lg shadow-lg  overflow-hidden">
          <video
            className="w-full h-[55rem] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={subvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for an advanced look */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </div>
    </main>
  );
};

export default SubImage;
