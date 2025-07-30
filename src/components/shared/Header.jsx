"use client";

import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="relative w-full h-[202px]">
      {/* Background Image */}
      <Image
        src="/image/header.png"
        alt="Header Background"
        width={1440}
        height={202}
        className="w-full h-full object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-[#1e1e1e] px-4">
        <h1 className="text-3xl font-semibold mb-6">Store</h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full w-full max-w-xl px-4 py-2 shadow-md">
          <FiSearch className="text-xl text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for Kuntal Care"
            className="w-full outline-none text-sm placeholder-gray-500"
          />
          <div className="bg-gray-100 p-2 rounded-lg ml-2">
            <HiOutlineShoppingBag className="text-xl text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
