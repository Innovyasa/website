// src/components/navbar.tsx

import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">
            <a>Innovyasa</a>
          </Link>
        </div>
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
        <div
          className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}
        >
          <Link href="/">
            <a className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
              Home
            </a>
          </Link>
          <Link href="/product">
            <a className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
              Product
            </a>
          </Link>
          <Link href="/contact">
            <a className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
