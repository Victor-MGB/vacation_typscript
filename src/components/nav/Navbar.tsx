import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiLineHeight } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import "../nav/Navbar.css"; // Custom CSS
import "animate.css"; // Animation library
import { NavLink } from "react-router-dom";

// Interface for Navigation Items
interface NavItem {
  name: string;
  link?: string;
  submenu?: { name: string; link: string }[];
}

// Interface for NavHome Information
interface NavHome {
  matour: string;
  text: string;
  number: string;
  contact: string;
  address: string;
  breakAddress: string;
  gmail: string;
}

// NavHome Data
const navHome: NavHome = {
  matour: "Vacation",
  text: "Escape to a world of relaxation and adventure. Whether you’re seeking sun-soaked beaches, mountain retreats, or bustling cityscapes, there’s a perfect getaway waiting for you. Let us help you find the ideal destination to unwind, explore, and make unforgettable memories.",
  number: "(+822) 2344 5678 1291",
  contact: "Our Contact",
  address: "Badung, Bali — Jl. Desa",
  breakAddress: "Sawangan, No. 11 Nusa Dua, 81566",
  gmail: "vacation@mail.com",
};

// Navigation Items Data
const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  {
    name: "Destination",
    submenu: [
      { name: "Europe", link: "/destinations/europe" },
      { name: "Asia", link: "/destinations/asia" },
      { name: "America", link: "/destinations/america" },
    ],
  },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

const Navbar: React.FC = () => {
  // State for managing mobile menu, dropdown, and navHome details
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navHomeOpen, setNavHomeOpen] = useState(false);

  // Toggle functions
  const toggleNav = () => setNavOpen(!navOpen);
  const toggleNavHome = () => setNavHomeOpen(!navHomeOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* Navbar Container */}
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
              <NavLink
                to={item.link || "#"}
                className="text-white hover:text-blue-600 hover:rounded-full cursor-pointer transition duration-300 flex items-center"
              >
                {item.name}
                {item.submenu && <FaChevronDown className="ml-1 text-sm" />}
              </NavLink>
              {/* Submenu */}
              {item.submenu && dropdownOpen && (
                <div className="absolute top-full mt-2 bg-white border rounded shadow-lg py-2">
                  {item.submenu.map((subItem) => (
                    <NavLink
                      key={subItem.name}
                      to={subItem.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* NavHome Button */}
        <button className="text-gray-700" onClick={toggleNavHome}>
          {navHomeOpen ? (
            <AiOutlineClose size={30} className="font-bold text-white" />
          ) : (
            <CiLineHeight size={30} className="font-bold text-white" />
          )}
        </button>

        {/* NavHome Overlay */}
        {navHomeOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black p-6 rounded-lg w-[90%] max-w-lg text-center">
              <h2 className="font-bold text-white text-lg mb-4">
                {navHome.matour}
              </h2>
              <p className="text-white mb-4">{navHome.text}</p>
              <p className="font-semibold mb-1">{navHome.contact}</p>
              <p className="text-gray-300 mb-1">{navHome.number}</p>
              <p className="text-gray-300 mb-1">{navHome.address}</p>
              <p className="text-gray-300 mb-1">{navHome.breakAddress}</p>
              <p className="text-blue-500 mt-2">{navHome.gmail}</p>
              <button
                onClick={toggleNavHome}
                className="mt-4 px-4 py-2 bg-white text-black rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleNav}>
          {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          navOpen ? "block" : "hidden"
        } md:hidden bg-white w-full px-4 pb-4`}
      >
        {navItems.map((item) => (
          <div key={item.name} className="block">
            <NavLink
              to={item.link || "#"}
              className="py-2 text-gray-700 hover:text-blue-600 block"
              onClick={toggleNav}
            >
              {item.name}
            </NavLink>
            {item.submenu && (
              <div className="ml-4">
                {item.submenu.map((subItem) => (
                  <NavLink
                    key={subItem.name}
                    to={subItem.link}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                    onClick={toggleNav}
                  >
                    {subItem.name}
                  </NavLink>
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
