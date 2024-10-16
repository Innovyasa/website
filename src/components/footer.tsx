// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252144] text-white py-10 px-5">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
        {/* Logo and Description */}
        <div className="lg:w-1/3">
          <div className="text-2xl font-bold mb-2">INNOVYASA</div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="lg:w-1/3 w-full">
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

      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 border-t border-gray-700 pt-6">
        {/* About Us Section */}
        <div>
          <h4 className="font-semibold mb-2"> <a href="">About us</a></h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="">Mission</a></li>
            <li><a href="">Our team</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Career</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="font-semibold mb-2"><a href="">Internship</a></h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="">Web Development</a></li>
            <li><a href="">Programming</a></li>
            <li><a href="">Hackathon</a></li>
            <li><a href="">Workshops</a></li>
            <li><a href="">Request a Internship</a></li>
          </ul>
        </div>

        {/* Portfolio Section */}
        <div>
          <h4 className="font-semibold mb-2"><a href="">Devsol</a></h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="">UI/UX Design</a></li>
            <li><a href="">Web Development</a></li>
            <li><a href="">IEEE Projects</a></li>
            <li><a href="">Automations</a></li>
            <li><a href="">Brand Marketing</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="font-semibold mb-2">Courses</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Information</li>
            <li>Request a quote</li>
            <li>Consultation</li>
            <li>Help center</li>
            <li>Terms and conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2">Contact us</h4>
          <p className="text-sm text-gray-400">Email: contact@brix.com</p>
          <p className="text-sm text-gray-400">Phone: (414) 687 - 5892</p>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Request a quote</li>
            <li>Consultation</li>
            <li>Help center</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-400">
          Copyright © 2025 INNOVYASA | All Rights Reserved | <a href="#" className="text-gray-400 hover:text-white">Terms and Conditions</a>
          | <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
        </p>
      
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
