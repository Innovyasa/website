// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252144] text-white py-10 px-5">

      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center ">
        {/* Logo and Description */}
        <div className="lg:col-span-2">
          <div className="text-2xl font-bold mb-2">INNOVYASA</div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="lg:col-span-2 self-end w-1/5">
          <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
          <form className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 text-black rounded pr-20" // Add padding-right to make space for the button
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>


      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-6">

        {/* About Us Section */}
        <div>
          <h4 className="font-semibold mb-2">About us</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Mission</li>
            <li>Our team</li>
            <li>Awards</li>
            <li>Testimonials</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Web design</li>
            <li>Web development</li>
            <li>Mobile design</li>
            <li>UI/UX design</li>
            <li>Branding design</li>
          </ul>
        </div>

        {/* Portfolio Section */}
        <div>
          <h4 className="font-semibold mb-2">Portfolio</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Corporate websites</li>
            <li>E-commerce</li>
            <li>Mobile apps</li>
            <li>Landing pages</li>
            <li>UI/UX projects</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="font-semibold mb-2">Contact us</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Information</li>
            <li>Request a quote</li>
            <li>Consultation</li>
            <li>Help center</li>
            <li>Terms and conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <div>
            <h4 className="font-semibold">Email:</h4>
            <p className="text-sm text-gray-400">contact@brix.com</p>
          </div>
          <div>
            <h4 className="font-semibold">Phone:</h4>
            <p className="text-sm text-gray-400">(414) 687 - 5892</p>
          </div>
        </div>
      </div>


      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-400">
          Copyright © 2025 BRIX Agency | All Rights Reserved
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">Terms and Conditions</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
