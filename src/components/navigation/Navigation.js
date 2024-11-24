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
        <a href="#project" className="text-xl nav-btn">
          Projects
        </a>
        <a href="#technologies" className="text-xl nav-btn">
           Technologies
        </a>
        <a href="#about-me" className="text-xl nav-btn">
          About Me
        </a>
      </div>

      {/* Right Side: Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/rajes_jyakho/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl nav-btn" />
        </a>
        <a href="https://github.com/Rajesh-jacko" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl nav-btn" />
        </a>
        <a href="https://www.facebook.com/Minijay12/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl nav-btn" />
        </a>
      </div>
    </div>
  );
}

export default Navigation;
