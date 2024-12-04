import React from 'react';

interface PortoCardProps {
  imgSrc: string;         // URL of the image to display
  title: string;          // Title text of the card
  description: string;    // Description text of the card
}

const PortoCard: React.FC<PortoCardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="relative group cursor-pointer overflow-hidden duration-500 w-full sm:w-72 md:w-80 lg:w-96 h-48 sm:h-56 md:h-64 lg:h-72 bg-zinc-800 text-gray-50 p-5">
      <div className="relative w-full h-2/3 overflow-hidden">
        <img
          src={imgSrc}
          alt="card image"
          className="group-hover:scale-110 w-full h-full object-cover duration-500"
        />
      </div>
      <div className="absolute w-full left-0 p-5 bottom-0 duration-500 group-hover:-translate-y-12">
        <div className="absolute -z-10 left-0 w-full h-20 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900" />
        <span className="text-xl font-bold">{title}</span>
        <p className="group-hover:opacity-100 w-full duration-500 opacity-0">
          {description}
        </p>
      </div>
    </div>
  );
}

export default PortoCard;
