import React from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social Icons
import { MdHome, MdWork } from 'react-icons/md'; // Section Icons

interface NavbarProps {
  setActiveSection: (section: string) => void;
  isNavbarOpen: boolean;
  setIsNavbarOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveSection, isNavbarOpen, setIsNavbarOpen }) => {
  return (
    <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50 overflow-hidden">
      {/* Hamburger Icon */}
      <div className="flex justify-between items-center p-4">
        {/* Add Photo and Name in One Div */}
        <img src="/assets/logo.jpg" alt="Navbar Logo" className="w-12 h-12 rounded-full" />
        <div className="text-2xl font-bold tracking-wide">pramudyanuar</div>
        <button onClick={() => setIsNavbarOpen(!isNavbarOpen)} className="transition-transform duration-300 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navbar Links (shown when navbar is open) */}
      <div className={`flex flex-col items-center transition-all duration-500 ease-in-out ${isNavbarOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900`}>
        <a
          href="#home"
          className="py-3 px-6 text-lg text-white hover:text-indigo-400 transform hover:scale-110 transition-all duration-300 flex items-center"
          onClick={() => { setActiveSection('home'); setIsNavbarOpen(false); }}
        >
          <MdHome className="text-2xl mr-2" />
          Home
        </a>
        {/* <a
          href="#about"
          className="py-3 px-6 text-lg text-white hover:text-indigo-400 transform hover:scale-110 transition-all duration-300 flex items-center"
          onClick={() => { setActiveSection('about'); setIsNavbarOpen(false); }}
        >
          <MdInfo className="text-2xl mr-2" />
          About
        </a>
        <a
          href="#service"
          className="py-3 px-6 text-lg text-white hover:text-indigo-400 transform hover:scale-110 transition-all duration-300 flex items-center"
          onClick={() => { setActiveSection('service'); setIsNavbarOpen(false); }}
        >
          <MdBuild className="text-2xl mr-2" />
          Service
        </a> */}
        <a
          href="#portfolio"
          className="py-3 px-6 text-lg text-white hover:text-indigo-400 transform hover:scale-110 transition-all duration-300 flex items-center"
          onClick={() => { setActiveSection('portfolio'); setIsNavbarOpen(false); }}
        >
          <MdWork className="text-2xl mr-2" />
          Portfolio
        </a>
        {/* <a
          href="#contact"
          className="py-3 px-6 text-lg text-white hover:text-indigo-400 transform hover:scale-110 transition-all duration-300 flex items-center"
          onClick={() => { setActiveSection('contact'); setIsNavbarOpen(false); }}
        >
          <MdContactPhone className="text-2xl mr-2" />
          Contact
        </a> */}

        {/* Add Social Media Icons */}
        <div className="flex space-x-6 mt-6">
          <a href="https://github.com/pramudyanuar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-blue-500 transition-all duration-300" />
          </a>
          <a href="https://instagram.com/pramudyanuar" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-pink-500 transition-all duration-300" />
          </a>
          <a href="https://twitter.com/nabatah_" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-2xl hover:text-blue-400 transition-all duration-300" />
          </a>
        </div>

        {/* Add Terminal Version text at the bottom with link */}
        <div className="mt-auto p-4 text-center text-gray-400">
          <a 
            href="https://its.id/m/pramudyanuar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition-all duration-300"
          >
            <span>Try Terminal version</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
