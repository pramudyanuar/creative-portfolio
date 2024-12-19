import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdHome, MdBuild, MdInfo, MdWork, MdContactPhone } from 'react-icons/md';

interface SidebarProps {
  setActiveSection: (section: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection, isSidebarOpen, setIsSidebarOpen, activeSection }) => {
  const sections = [
    { id: 'home', label: 'Home', icon: MdHome },
    { id: 'service', label: 'Service', icon: MdBuild },
    { id: 'about', label: 'About', icon: MdInfo },
    { id: 'portfolio', label: 'Portfolio', icon: MdWork },
    { id: 'contact', label: 'Contact', icon: MdContactPhone },
  ];

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 w-64 text-white h-full shadow-lg md:block ${
          isSidebarOpen ? 'block' : 'hidden'
        } overflow-hidden`}
      >
        <div className="flex flex-col justify-center p-4 space-y-4 items-center h-full">
          {/* Profile Section */}
          <div className="w-full flex flex-col items-center justify-center mb-6">
            <img src="/assets/logo.jpg" alt="Sidebar Logo" className="w-24 h-24 rounded-full mb-4" />
            <p className="text-base font-semibold text-white">@pramudyanuar</p>
          </div>

          {/* Section Links */}
          <div className="w-full flex flex-col items-center justify-center space-y-3">
            {sections.map((section) => (
              <div key={section.id} className="w-full">
                <label
                  className={`relative w-full h-12 flex items-center justify-center pl-4 pr-4 text-gray-300 hover:text-blue-500 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeSection === section.id ? 'text-blue-500 font-bold' : 'text-gray-500'
                  }`}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsSidebarOpen(false);
                  }}
                >
                  {/* Dynamic Icon */}
                  <section.icon className="text-xl mr-4" />
                  <span className="font-semibold">{section.label}</span>
                </label>
                <hr className="border-t border-gray-800 my-1" />
              </div>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="https://github.com/pramudyanuar" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-xl hover:text-blue-500 transition-all duration-300" />
            </a>
            <a href="https://instagram.com/pramudyanuar" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-xl hover:text-pink-500 transition-all duration-300" />
            </a>
            <a href="https://twitter.com/nabatah_" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-xl hover:text-blue-400 transition-all duration-300" />
            </a>
            <a href="https://linkedin.com/in/yanuar-eka-pramudya" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-xl hover:text-blue-400 transition-all duration-300" />
            </a>
          </div>

          {/* Terminal Version Link */}
          <div className="mt-auto p-4 text-center text-gray-400">
            <a
              href="https://its.id/m/pramudyanuar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all duration-300"
            >
              Try Terminal Version
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
