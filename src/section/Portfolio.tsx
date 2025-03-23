import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import PortoCard from '../components/PortoCard';
import SectionHeader from '../components/SectionHeader';

const Portfolio: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioData[0]>(null);

  const portfolioData: {
    imgSrc: string;
    title: string;
    description: string;
    type: string;
    mediaUrl: string;
    mediaType: 'video' | 'image';
    deployUrl: string;
  }[] = [
    { 
      imgSrc: '/assets/porto/colorex.png', 
      title: 'Colorex (Closed Beta)', 
      description: 'Colorex is an AI-powered Personal Color Assistant that helps users identify the most suitable color palettes based on their skin tone, clothing, and environment. Perfect for fashion enthusiasts, designers, and makeup artists.', 
      type: 'Mobile App', 
      mediaUrl: 'https://www.youtube.com/watch?v=H9pGBTdlg7Q',
      mediaType: 'video',
      deployUrl: 'https://play.google.com/store/apps/details?id=com.colorexid.findyourpersona' 
    },
    { 
      imgSrc: '/assets/porto/jobs.png', 
      title: 'Jobs', 
      description: 'Jobs is a job search and recruitment platform that connects employers with job seekers through an intuitive interface and smart matching algorithm.', 
      type: 'Website', 
      mediaUrl: '/assets/porto/jobs-detail.jpg',
      mediaType: 'image',
      deployUrl: '' 
    },
    { 
      imgSrc: '/assets/porto/ecotravel.png', 
      title: 'ecoTravel', 
      description: 'At Friends tours and travel, we customize reliable and trustworthy educational tours to destinations all over the world', 
      type: 'Mobile App', 
      mediaUrl: '/assets/porto/ecotravel.png',
      mediaType: 'image',
      deployUrl: '' 
    },
    { 
      imgSrc: '/assets/porto/gerald.png', 
      title: 'Gerald', 
      description: 'Surabaya City Flood Prevention App, which has advanced to the finals of GEMASTIK 2024, designed to provide advanced solutions for flood management and early warnings in urban areas.', 
      type: 'Mobile App', 
      mediaUrl: 'https://www.youtube.com/watch?v=Mf8pZHxeizM',
      mediaType: 'video',
      deployUrl: 'https://github.com/pramudyanuar/gerald' 
    },
    { 
      imgSrc: '/assets/porto/appse.png', 
      title: 'APPSE', 
      description: 'AppSE is a streamlined app for managing Software Engineering Lab admin registrations, offering access to course materials, training resources, and attendance tracking, all in one convenient platform. This project was made to apply SE Admin Laboratory.', 
      type: 'Mobile App', 
      mediaUrl: '/assets/porto/appse.png',
      mediaType: 'image',
      deployUrl: 'https://github.com/pramudyanuar/appse' 
    },
    { 
      imgSrc: '/assets/porto/tkiconnect.png', 
      title: 'TKIConnect', 
      description: 'TKIConnect is an app designed to protect and support Indonesian migrant workers abroad. It offers vital resources, including legal assistance, emergency contacts, and access to local embassies, ensuring the safety and well-being of workers throughout their overseas journey. Made for UI/UX competition held by GDSC UIN Jakarta.', 
      type: 'UI Design', 
      mediaUrl: '/assets/porto/tkiconnect.png',
      mediaType: 'image',
      deployUrl: '' 
    },
    { 
      imgSrc: '/assets/porto/setapak.png', 
      title: 'Setapak', 
      description: 'Setapak: An AI-Powered E-Commerce Platform with Advanced Image Recognition Technology and Precise Size Measurement Capabilities for Seamless Buying and Selling Experiences', 
      type: 'Website', 
      mediaUrl: '/assets/porto/setapak.png',
      mediaType: 'image',
      deployUrl: 'https://setapak.vercel.app/' 
    },
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
            <option value="Website">Website</option>
            <option value="UI Design">UI Design</option>
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
                mediaUrl={item.mediaUrl}
                mediaType={item.mediaType}
              />
            </div>
          ))}
        </div>
      </section>

      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
          <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full relative">
            <button
              onClick={closeDetail}
              className="absolute top-2 right-2 text-white hover:text-gray-900 text-xl"
            >
              ✖
            </button>
            
            {selectedItem.mediaType === 'video' ? (
              <ReactPlayer
                url={selectedItem.mediaUrl}
                width="100%"
                height="200px"
                controls
                playing={true}
              />
            ) : (
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={selectedItem.mediaUrl} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
            
            <h2 className="text-xl font-bold mb-2 mt-2 text-center">{selectedItem.title}</h2>
            <p className="text-white mb-4 text-sm sm:text-base">{selectedItem.description}</p>
            <p className="text-white italic text-sm sm:text-base">Type: {selectedItem.type}</p>
            {selectedItem.deployUrl && (
              <a
                href={selectedItem.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                Visit Deployment
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;