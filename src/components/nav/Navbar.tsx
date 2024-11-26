import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CiLineHeight } from 'react-icons/ci';
import { FaChevronDown } from 'react-icons/fa';
import "../nav/Navbar.css"
import "animate.css";

interface NavItem {
  name: string;
  link?: string;
  submenu?: { name: string; link: string }[];
}

interface NavHome {
    matour: string;
    text: string;
    number: string;
    contact: string;
    address: string;
    breakAddress: string;
    gmail: string;
  }
  
  const navHome: NavHome = {
    matour: "vacation",
    text: "Escape to a world of relaxation and adventure. Whether you’re seeking sun-soaked beaches, mountain retreats, or bustling cityscapes, there’s a perfect getaway waiting for you. Let us help you find the ideal destination to unwind, explore, and make unforgettable memories.",
    number: "(+822) 2344 5678 1291",
    contact: "Our Contact",
    address: "Badung, Bali — Jl. Desa",
    breakAddress: "Sawangan, No. 11 Nusa Dua, 81566",
    gmail: "vacation@mail.com",
  };

const navItems: NavItem[] = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  {
    name: 'Destination',
    submenu: [
      { name: 'Europe', link: '/destinations/europe' },
      { name: 'Asia', link: '/destinations/asia' },
      { name: 'America', link: '/destinations/america' },
    ],
  },
  { name: 'Blog', link: '/blog' },
  { name: 'Contact', link: '/contact' }
];

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navHomeOpen, setNavHomeOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleNavHome = () => {
    setNavHomeOpen(!navHomeOpen);
  };

  return (
    <header className="fixed absolute top-[0.01rem] left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-[2rem] text-white font-bold">Vacation</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden uppercase text-[0.9rem] font-bold md:flex space-x-6 border border-solid justify-around items-center border-white h-14 w-[28rem] rounded-full">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setDropdownOpen(true)}
              onMouseLeave={() => item.submenu && setDropdownOpen(false)}
            >
              <a
                href={item.link}
                className="text-white hover:text-blue-600 hover:rounded-full cursor-pointer transition duration-300 flex items-center"
              >
                {item.name}
                {item.submenu && <FaChevronDown className="ml-1 text-sm" />}
              </a>

              {/* Submenu */}
              {item.submenu && dropdownOpen && (
                <div className="absolute top-full w-[7rem] mt-2 bg-white mr-[7rem] border rounded shadow-lg py-2">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* NavHome Toggle Button */}
        <button className='text-gray-700' onClick={toggleNavHome}>
          {navHomeOpen ? (
            <AiOutlineClose size={30} className="font-bold hidden text-black-600 text-xl hover:text-2xl" />
          ) : (
            <CiLineHeight size={30} className="font-bold text-[5rem] text-white hover:text-2xl" />
          )}
        </button>

        {/* NavHome Details (Overlay) */}
        {navHomeOpen && (
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 ${
            navHomeOpen ? 'slide-in' : 'slide-out'
          }`}
          onAnimationEnd={() => !navHomeOpen && setNavHomeOpen(false)}
        >
          <div className={`bg-black p-6 animate__animated animate__backOutLeft rounded-lg w-[90%] max-w-lg text-center modal-content`}>
            <h2 className="font-bold text-white text-lg  mb-4 animate-text-slide">{navHome.matour}</h2>
            <p className="text-white mb-4 animate-text-slide">{navHome.text}</p>
            <p className="font-semibold mb-1 animate-text-slide">{navHome.contact}</p>
            <p className="text-gray-300 mb-1 animate-text-slide">{navHome.number}</p>
            <p className="text-gray-300 mb-1 animate-text-slide">{navHome.address}</p>
            <p className="text-gray-300 mb-1 animate-text-slide">{navHome.breakAddress}</p>
            <p className="text-blue-500 mt-2 animate-text-slide">{navHome.gmail}</p>
            <button
              onClick={toggleNavHome}
              className="mt-4 px-4 py-2 bg-white text-black rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700" onClick={toggleNav}>
          {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`${navOpen ? 'block' : 'hidden'} md:hidden bg-white w-full px-4 pb-4`}>
        {navItems.map((item) => (
          <div key={item.name} className="block">
            <a
              href={item.link}
              className="py-2 text-gray-700 hover:text-blue-600 transition duration-300 block"
              onClick={toggleNav}
            >
              {item.name}
            </a>
            {item.submenu && (
              <div className="ml-4">
                {item.submenu.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.link}
                    className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300"
                    onClick={toggleNav}
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
