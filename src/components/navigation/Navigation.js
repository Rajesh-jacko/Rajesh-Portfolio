import React from 'react';
import logo from '../../assets/logo1-removebg.png'
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa'; // Importing social icons

function Navigation() {
  const smoothScroll = (props)=> {
    const element = document.getElementById(props);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    
    
  return (
    <div className="flex justify-between items-center p-2 md:p-4 lg:px-8">
      {/* Left Side: Logo */}
      <div>
        <img src={logo} className="object-contain nav-btn h-20 w-25" alt="Logo" />
      </div>

      {/* Center: Clickable Text (Hidden on Mobile) */}
      <div className="hidden md:flex space-x-8">
        <span  className="text-xl nav-btn" onClick={()=> { smoothScroll('project')} }>
          Projects
        </span>
        <span className="text-xl nav-btn" onClick={()=> {smoothScroll('technologies')}}>
           Technologies
        </span>
        <span  className="text-xl nav-btn" onClick={()=> {smoothScroll('about-me')}}>
          About Me
        </span>
      </div>

      {/* Right Side: Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/rajes_jyakho/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl nav-social" />
        </a>
        <a href="https://github.com/Rajesh-jacko" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl nav-social" />
        </a>
        <a href="https://www.facebook.com/Minijay12/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl nav-social" />
        </a>
      </div>
    </div>
  );
}

export default Navigation;
