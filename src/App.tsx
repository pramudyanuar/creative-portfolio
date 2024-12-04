import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white m-0 p-0">
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
      <div className={`flex-grow w-full overflow-auto ml-0 md:ml-80`}>
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
