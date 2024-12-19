import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import PortoCard from '../components/PortoCard';
import SectionHeader from '../components/SectionHeader';

const Portfolio: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioData[0]>(null);

  const portfolioData = [
    { imgSrc: '/assets/porto/ecotravel.png', title: 'ecoTravel', description: 'At Friends tours and travel, we customize reliable and trustworthy educational tours to destinations all over the world', type: 'Mobile App', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { imgSrc: '/assets/porto/gerald.png', title: 'Gerald', description: 'Surabaya City Flood Prevention App, which has advanced to the finals of GEMASTIK 2024, designed to provide advanced solutions for flood management and early warnings in urban areas.', type: 'Mobile App', videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ' },
    { imgSrc: '/assets/porto/appse.png', title: 'APPSE', description: 'AppSE is a streamlined app for managing Software Engineering Lab admin registrations, offering access to course materials, training resources, and attendance tracking, all in one convenient platform. This project was made to apply SE Admin Laboratory.', type: 'Mobile App', videoUrl: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g' },
    { imgSrc: '/assets/porto/tkiconnect.png', title: 'TKIConnect', description: 'TKIConnect is an app designed to protect and support Indonesian migrant workers abroad. It offers vital resources, including legal assistance, emergency contacts, and access to local embassies, ensuring the safety and well-being of workers throughout their overseas journey. Made for UI/UX competition held by GDSC UIN Jakarta.', type: 'UI Design', videoUrl: 'https://www.youtube.com/watch?v=oHg5SJYRHA0' },
    { imgSrc: '/assets/porto/setapak.png', title: 'Setapak', description: 'Setapak: An AI-Powered E-Commerce Platform with Advanced Image Recognition Technology and Precise Size Measurement Capabilities for Seamless Buying and Selling Experiences', type: 'Website', videoUrl: 'https://www.youtube.com/watch?v=6_b7RDuLwcI' },
  ];

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const filteredPortfolio = selectedType === 'All' ? portfolioData : portfolioData.filter(item => item.type === selectedType);

  const openDetail = (item: typeof portfolioData[0]) => {
    setSelectedItem(item);
  };

  const closeDetail = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-full h-screen bg-gray-800">
      <section id="portfolio" className="bg-gray-800 p-4 md:p-8 lg:p-16 w-full">
        <SectionHeader title="📔 Portfolio" />

        {/* Sort Dropdown */}
        <div className="mb-6">
          <label htmlFor="portfolio-type" className="text-gray-50">Sort by Type:</label>
          <select
            id="portfolio-type"
            value={selectedType}
            onChange={handleSortChange}
            className="ml-2 p-2 rounded bg-gray-700 text-white"
          >
            <option value="All">All</option>
            <option value="Mobile App">Mobile App</option>
            <option value="UI Design">UI Design</option>
            <option value="Website">Website</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {filteredPortfolio.map((item, index) => (
            <div key={index} onClick={() => openDetail(item)}>
              <PortoCard
                imgSrc={item.imgSrc}
                title={item.title}
                description={item.description}
                type={item.type}
                videoUrl={item.videoUrl}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Popup Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
          <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full relative">
            <button
              onClick={closeDetail}
              className="absolute top-2 right-2 text-white hover:text-gray-900 text-xl"
            >
              ✖
            </button>
            <ReactPlayer
              url={selectedItem.videoUrl}
              width="100%"
              height="200px"
              controls
              playing={true}
            />
            <h2 className="text-xl font-bold mb-2 mt-2 text-center">{selectedItem.title}</h2>
            <p className="text-white mb-4 text-sm sm:text-base">{selectedItem.description}</p>
            <p className="text-white italic text-sm sm:text-base">Type: {selectedItem.type}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
