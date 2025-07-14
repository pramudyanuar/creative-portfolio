import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

// --- Impor data, tipe, dan opsi filter dari file eksternal ---
import { portfolioData, filterOptions, type PortfolioItem } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

const Portfolio: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredPortfolio = selectedType === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.type === selectedType);

  const openDetail = (item: PortfolioItem) => setSelectedItem(item);
  const closeDetail = () => setSelectedItem(null);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
        <SectionHeader title="My Portfolio" subtitle="A collection of my best work" />

        {/* Tombol Filter */}
        <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-12">
          {filterOptions.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ease-in-out
                ${selectedType === type 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid Portofolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <div 
              key={item.title} 
              onClick={() => openDetail(item)}
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">View Details</p>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-blue-400 uppercase">{item.type}</span>
                <h3 className="text-xl font-bold mt-1 mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Detail */}
      {selectedItem && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4 transition-opacity duration-300 ease-in-out"
          onClick={closeDetail}
        >
          <div 
            className="bg-gray-800 rounded-xl max-w-2xl w-full relative shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDetail}
              className="absolute -top-3 -right-3 bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold z-10 hover:bg-gray-300 transition-colors"
            >
              ×
            </button>
            
            <div className="w-full h-56 md:h-72">
              {selectedItem.mediaType === 'video' ? (
                <ReactPlayer
                  url={selectedItem.mediaUrl}
                  width="100%"
                  height="100%"
                  controls
                  playing
                  className="rounded-t-xl overflow-hidden"
                />
              ) : (
                <img 
                  src={selectedItem.mediaUrl} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover rounded-t-xl"
                />
              )}
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-white">{selectedItem.title}</h2>
              <p className="text-blue-400 italic text-sm mb-4">Type: {selectedItem.type}</p>
              <p className="text-gray-300 mb-6">{selectedItem.description}</p>
              
              {selectedItem.deployUrl && (
                <a
                  href={selectedItem.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Visit Deployment
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;