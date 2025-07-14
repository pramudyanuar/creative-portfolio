import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
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
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <section id="portfolio" className="container mx-auto px-4 py-16 pt-28 sm:pt-24">
        <SectionHeader title="My Portfolio" subtitle="A collection of my best work" />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          {filterOptions.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${selectedType === type
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white hover:scale-105'
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <div
              key={item.title}
              onClick={() => openDetail(item)}
              className="group relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 animate-shine pointer-events-none" />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-semibold">👁 View Details</p>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">{item.type}</span>
                  <h3 className="text-base font-bold text-white mt-1 mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs line-clamp-3">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Detail */}
      {selectedItem && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4"
          onClick={closeDetail}
        >
          <div
            className="bg-gray-800/90 border border-gray-700 backdrop-blur-lg shadow-xl rounded-xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeDetail}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-gray-900 text-xl font-bold flex items-center justify-center shadow-lg hover:rotate-90 transition-transform"
            >
              ×
            </button>

            {/* Left: Media */}
            <div className="md:w-1/2 w-full h-56 md:h-auto bg-black">
              {selectedItem.mediaType === 'video' ? (
                <ReactPlayer
                  url={selectedItem.mediaUrl}
                  width="100%"
                  height="100%"
                  controls
                  className="rounded-l-xl"
                />
              ) : (
                <img
                  src={selectedItem.mediaUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{selectedItem.title}</h2>
                <p className="text-blue-400 italic text-sm mb-3">Type: {selectedItem.type}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{selectedItem.description}</p>

                {selectedItem.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedItem.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600 text-xs text-white rounded-full shadow-sm hover:bg-blue-500 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {selectedItem.deployUrl && (
                <a
                  href={selectedItem.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all"
                >
                  🔗 Visit Deployment
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
