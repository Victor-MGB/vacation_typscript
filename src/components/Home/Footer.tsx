// Footer.tsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-cover bg-center text-white py-12 px-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/73/49/a6/7349a612db99455bf3646b6837a37b80.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Badung, Bali</h3>
          <p className="text-sm mb-1">Jl. Desa Sawangan, No. 11</p>
          <p className="text-sm mb-1">Nusa Dua, 81566</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="font-semibold mb-3">Page</h4>
            <ul className="space-y-1">
              <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
              <li><a href="#faq" className="hover:text-yellow-400 transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Important Link</h4>
            <ul className="space-y-1">
              <li><a href="#privacy" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
              <li><a href="#career" className="hover:text-yellow-400 transition">Career</a></li>
              <li><a href="#blog" className="hover:text-yellow-400 transition">Blog</a></li>
              <li><a href="#terms" className="hover:text-yellow-400 transition">Term & Condition</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social Media Icons */}
        <div>
          <h4 className="font-semibold mb-3">Our Newsletter</h4>
          <p className="text-sm mb-4">Stay updated with the latest news and exclusive offers.</p>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-3 py-2 rounded-l bg-gray-700 text-white border-none outline-none"
            />
            <button className="px-4 bg-yellow-500 text-white rounded-r hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </form>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#facebook" className="text-gray-300 hover:text-yellow-400 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#twitter" className="text-gray-300 hover:text-yellow-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#instagram" className="text-gray-300 hover:text-yellow-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#linkedin" className="text-gray-300 hover:text-yellow-400 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
