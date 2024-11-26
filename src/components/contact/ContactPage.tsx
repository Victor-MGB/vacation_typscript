import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import { GoDotFill } from 'react-icons/go';
import PromoSection from '../Home/PromoSection';
import Footer from '../Home/Footer';

const ContactPage: React.FC = () => {
  return (
    <main>
        <section className="relative w-full h-screen overflow-hidden">
    <Navbar />
  <div
    className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    style={{ backgroundImage: "url('https://i.pinimg.com/236x/45/d0/b5/45d0b5f850134a653ee4c828f9088931.jpg')" }}
  >
    {/* Darker gradient overlay for better text contrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black opacity-90"></div>

    {/* Content */}
    <div className="relative z-10 text-center px-6">
      <div className="flex items-center justify-center text-center space-x-4 mb-4">
        <NavLink
          to="/"
          className="text-2xl md:text-6xl font-extrabold tracking-wider hover:text-yellow-400 transition-colors duration-300"
        >
          Home
        </NavLink>
        <GoDotFill className="text-yellow-400 text-3xl md:text-4xl" />
        <h2 className="text-2xl md:text-4xl font-semibold">
          Contact
        </h2>
      </div>
      <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
  Explore stunning destinations, embark on extraordinary journeys, 
  and craft memories that last a lifetime. Whether you're dreaming of 
  tranquil retreats or heart-pounding adventures, your ultimate escape is here.
</p>

      {/* Button Example for Further Interaction */}
      <div className="mt-8">
        <NavLink
          to="/explore"
          className="px-8 py-3 hidden bg-yellow-400 text-black rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
        >
          Explore Now
        </NavLink>
      </div>
    </div>
  </div>
</section>

        <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img
            src="https://i.pinimg.com/236x/76/a0/f8/76a0f8daf4de1b0f04cbc00fd11be686.jpg"
            alt="Beautiful vacation scenery"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Get in Touch With Us
            </h1>
          </div>
        </div>

        {/* Introduction */}
        <p className="text-lg text-gray-700 text-center mb-8">
          We'd love to hear from you! Whether you have questions about our vacation packages, want to share feedback, or simply need travel tips, our team is here to help.
        </p>

        {/* Contact Form and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-medium py-3 rounded hover:bg-yellow-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">Feel free to reach out to us via any of the following methods:</p>
              <p className="text-gray-800 font-medium"><i className="fas fa-phone-alt mr-2"></i> +123 456 7890</p>
              <p className="text-gray-800 font-medium"><i className="fas fa-envelope mr-2"></i> contact@vacationsite.com</p>
              <p className="text-gray-800 font-medium"><i className="fas fa-map-marker-alt mr-2"></i> 123 Vacation St, Paradise City, Country</p>
            </div>

            {/* Map Section */}
            <div className="rounded-lg shadow-md overflow-hidden">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195817286845!2d-122.419415184678!3d37.77492977975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581cbae81ec23%3A0xc5f0b66d29fecd13!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1638305789220!5m2!1sen!2s"
                width="100%"
                height="300"
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

const Contact: React.FC = () =>{
    return(
        <>
        <ContactPage />
        <PromoSection />
        <Footer />
        </>
    )
}

export default Contact;
