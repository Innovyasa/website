// src/components/Navbar.tsx
"use client"; // Ensure this is added to mark the component as a Client Component

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from Next.js

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#1b1833] text-white p-2 flex justify-end pr-28 gap-4">
        <Link href="/innovyasa" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
          Innovyasa
        </Link>
        <Link href="/internship" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
          Internships
        </Link>
        <Link href="/devsol" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
          Devsol
        </Link>
        <Link href="/courses" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
          Courses
        </Link>
        <Link href="/blog" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
          Blog
        </Link>
        |<div className="flex items-center space-x-0">
          {/* Logo/Icon */}
          <Link href="/">
            <Image
              src="/assets/icons/account/icons8-account-32.png" // Path to your logo
              alt="Innovyasa Logo"
              width={24} // Set your desired width
              height={24} // Set your desired height
            />
          </Link>

          {/* Sign In Link */}
          <Link href="/signin" className="text-white hover:text-gray-400 pl-1.5">
            Sign In
          </Link>
        </div>

      </div>

      {/* Main Navigation Section */}
      <nav className="bg-[#252144] p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-xl font-bold">
            <Link href="/">
              <Image
                src="/assets/logo/logo_trim-removebg-preview.png" // Path to your logo
                alt="Innovyasa Logo"
                width={150} // Set your desired width
                height={50}  // Set your desired height
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}
          >
            <Link href="/" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
              Home
            </Link>
            <Link href="/" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
              Products
            </Link>

            <Link href="/contact" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
              Contact
            </Link>
          </div>

          {/* Right-side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-800">
              Contact Sales
            </Link>
            <Link href="/plans" className="bg-[#00a7e1] text-[#2a2754] py-2 px-4 rounded hover:bg-[#80DFFF] ">
              View Plans
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
