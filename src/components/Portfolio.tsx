// src/components/Portfolio.tsx
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-gray-800 py-16 px-6">
      <h2 className="text-3xl text-center text-white font-semibold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-400 mb-3">Project 1</h3>
          <p className="text-gray-300">Description of project 1, technologies used, and any notable features or challenges.</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-400 mb-3">Project 2</h3>
          <p className="text-gray-300">Description of project 2, technologies used, and any notable features or challenges.</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-400 mb-3">Project 3</h3>
          <p className="text-gray-300">Description of project 3, technologies used, and any notable features or challenges.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
