import React from 'react';
import PortoCard from '../components/PortoCard';
import SectionHeader from '../components/SectionHeader';

const Portfolio: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-800">
      <section id="portfolio" className="bg-gray-800 p-4 md:p-8 lg:p-16 w-full">
        {/* Change the title alignment to the left */}
        <SectionHeader title="📔 Portofolio" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          <PortoCard
            imgSrc="https://example.com/project1.jpg"
            title="Project 1"
            description="Description of project 1, technologies used, and any notable features or challenges."
          />
          <PortoCard
            imgSrc="https://example.com/project2.jpg"
            title="Project 2"
            description="Description of project 2, technologies used, and any notable features or challenges."
          />
          <PortoCard
            imgSrc="https://example.com/project3.jpg"
            title="Project 3"
            description="Description of project 3, technologies used, and any notable features or challenges."
          />
          <PortoCard
            imgSrc="https://example.com/project1.jpg"
            title="Project 1"
            description="Description of project 1, technologies used, and any notable features or challenges."
          />
          <PortoCard
            imgSrc="https://example.com/project2.jpg"
            title="Project 2"
            description="Description of project 2, technologies used, and any notable features or challenges."
          />
          <PortoCard
            imgSrc="https://example.com/project3.jpg"
            title="Project 3"
            description="Description of project 3, technologies used, and any notable features or challenges."
          />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
