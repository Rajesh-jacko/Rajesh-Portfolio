import React from 'react';
import logo from '../../assets/logo1-removebg.png'
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa'; // Importing social icons

function Navigation() {
  return (
    <div className="flex justify-between items-center p-2 md:p-4 lg:px-8">
      {/* Left Side: Logo */}
      <div>
        <img src={logo} className="object-contain h-20 w-25" alt="Logo" />
      </div>

      {/* Center: Clickable Text (Hidden on Mobile) */}
      <div className="hidden md:flex space-x-8">
        <a href="#project" className="text-xl hover:underline">
          Project
        </a>
        <a href="#technologies" className="text-xl hover:underline">
           Technologies
        </a>
        <a href="#about-me" className="text-xl hover:underline">
          About Me
        </a>
      </div>

      {/* Right Side: Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl" />
        </a>
      </div>
    </div>
  );
}

export default Navigation;
