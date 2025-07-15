import React, { useState } from 'react';
import './App.css';
import Home from './section/Home';
import About from './section/About';
import Portfolio from './section/Portfolio';
import Contact from './section/Contact';
import Sidebar from './section/Sidebar';
import Navbar from './section/Navbar';
import { FaBars } from 'react-icons/fa';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true); // Diubah agar sidebar terbuka secara default di desktop
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-gray-900 text-white m-0 p-0 flex">
      <Sidebar
        setActiveSection={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeSection={activeSection}
      />

      <Navbar
        setActiveSection={setActiveSection}
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={setIsNavbarOpen}
      />

      {/* Main Content Area dengan logika margin yang diperbaiki */}
      <div className={`flex-1 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'} mt-20 md:mt-0 overflow-y-auto h-screen transition-all duration-300`}>
        <button
          className="hidden md:block fixed top-4 left-4 z-50 text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Konten akan dirender di sini */}
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;