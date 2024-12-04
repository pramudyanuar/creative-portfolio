import React, { useState } from 'react';
import './App.css';
import Home from './section/Home';
import Service from './section/Service';
import About from './section/About';
import Portfolio from './section/Portfolio';
import Contact from './section/Contact';
import Sidebar from './section/Sidebar';
import Navbar from './section/Navbar';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-gray-900 text-white m-0 p-0">
      {/* Sidebar */}
      <Sidebar 
        setActiveSection={setActiveSection} 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
        activeSection={activeSection} // Pass activeSection here
      />

      {/* Navbar (for mobile) */}
      <Navbar
        setActiveSection={setActiveSection}
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={setIsNavbarOpen}
      />

      {/* Main Content Area */}
      <div className={`ml-0 md:ml-80 mt-20 md:mt-0`}>
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
