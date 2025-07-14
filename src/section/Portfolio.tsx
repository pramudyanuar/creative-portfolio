import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { portfolioData, filterOptions, type PortfolioItem } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

const Portfolio: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPortfolio = portfolioData.filter(item => {
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const openDetail = (item: PortfolioItem) => setSelectedItem(item);
  const closeDetail = () => setSelectedItem(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <section id="portfolio" className="container mx-auto px-4 py-16 pt-28 sm:pt-16">
        <SectionHeader title="My Portfolio" subtitle="A collection of my best work" />

        {/* Search + Filter Dropdown */}
        <div className="mb-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <input
            type="text"
            placeholder="Search by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {filterOptions.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all"
          onClick={closeDetail}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl mx-auto bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 animate-fadeInScale"
          >
            {/* Close Button */}
            <button
              onClick={closeDetail}
              className="absolute top-3 right-3 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center text-xl font-bold transition-all"
            >
              ×
            </button>

            {/* Media Left */}
            <div className="md:w-1/2 w-full rounded-xl overflow-hidden shadow-inner">
              {selectedItem.mediaType === 'video' ? (
                <ReactPlayer
                  url={selectedItem.mediaUrl}
                  width="100%"
                  height="100%"
                  controls
                  className="rounded-xl"
                />
              ) : (
                <img
                  src={selectedItem.mediaUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </div>

            {/* Content Right */}
            <div className="md:w-1/2 w-full flex flex-col justify-between text-white">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedItem.title}</h2>
                <p className="text-sm italic text-blue-400 mb-4">Type: {selectedItem.type}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{selectedItem.description}</p>

                {selectedItem.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedItem.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600 text-xs font-medium rounded-full hover:bg-blue-500 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                {selectedItem.deployUrl && (
                  <a
                    href={selectedItem.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-all"
                  >
                    🔗 Visit Deployment
                  </a>
                )}

                {selectedItem.sourceUrl && (
                  <a
                    href={selectedItem.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-all"
                  >
                    🛠 View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;
