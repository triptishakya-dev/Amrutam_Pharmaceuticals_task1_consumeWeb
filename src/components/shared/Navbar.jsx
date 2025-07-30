import React from 'react';
import { FaPhoneAlt, FaBriefcaseMedical, FaShoppingCart, FaUserCircle, FaBell, FaUser } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="bg-[#fdf6e8] py-4 px-6 md:px-16 flex justify-between items-center text-[#3b5e41] text-sm">
      
      {/* Left Section: Phone */}
      <div className="flex items-center space-x-2">
        <FaPhoneAlt className="text-md" />
        <span>+91 9826352321</span>
      </div>

      {/* Center Section: Logo and Navigation */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="font-bold text-xl tracking-widest">AMRUTAM</div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Find Doctors</li>
          <li className="hover:underline cursor-pointer">Lab Tests</li>
          <li className="underline font-semibold cursor-pointer">Shop</li>
          <li className="hover:underline cursor-pointer">Forum</li>
          <li className="hover:underline cursor-pointer">About Us</li>
        </ul>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-3">
        {/* Icon Buttons with Circle Background */}
        <div className="relative bg-[#dce5dd] p-2 rounded-full">
          <FaBriefcaseMedical />
          <span className="absolute -top-1 -right-1 bg-[#3b5e41] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
        </div>

        <div className="relative bg-[#dce5dd] p-2 rounded-full">
          <FaShoppingCart />
          <span className="absolute -top-1 -right-1 bg-[#3b5e41] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
        </div>

        <div className="bg-[#dce5dd] p-2 rounded-full">
          <FaBell />
        </div>

        <div className="bg-[#dce5dd] p-2 rounded-full">
          <FaUser />
        </div>

        <MdExpandMore className="text-lg" />
      </div>
    </nav>
  );
};

export default Navbar;
