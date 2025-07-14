import React, { useState } from 'react';
import './App.css';
import Home from './section/Home';
import Service from './section/Service';
import About from './section/About';
import Portfolio from './section/Portfolio';
import Contact from './section/Contact';
import Sidebar from './section/Sidebar';
import Navbar from './section/Navbar';
import { FaBars } from 'react-icons/fa';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // Default sidebar terbuka
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-gray-900 text-white m-0 p-0 flex">
      {/* Sidebar */}
      <Sidebar
        setActiveSection={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeSection={activeSection}
      />

      {/* Navbar (for mobile) */}
      <Navbar
        setActiveSection={setActiveSection}
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={setIsNavbarOpen}
      />

      {/* Main Content Area */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'} mt-20 md:mt-0 overflow-y-auto h-screen transition-all duration-300`}>
        {/* Tombol untuk toggle sidebar di desktop */}
        <button
          className="hidden md:block fixed top-4 left-4 z-50 text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Render the appropriate section based on activeSection */}
        {activeSection === 'home' && <Home />}
        {activeSection === 'service' && <Service />}
        {activeSection === 'about' && <About />}
        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;