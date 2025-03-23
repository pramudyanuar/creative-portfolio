import React from 'react';

interface PortoCardProps {
  imgSrc: string;
  title: string;        
  description: string;
  type: string;
  mediaUrl: string;
  mediaType: 'video' | 'image';
}

const PortoCard: React.FC<PortoCardProps> = ({ imgSrc, title, description, type }) => {
  // Check if the description exceeds 8 words
  const descriptionWords = description.split(' ');
  const isLongDescription = descriptionWords.length > 8;
  const truncatedDescription = isLongDescription ? descriptionWords.slice(0, 8).join(' ') + '...' : description;

  return (
    <div className="relative group cursor-pointer overflow-hidden duration-500 w-full sm:w-48 md:w-56 lg:w-80 h-auto sm:h-52 md:h-60 lg:h-72 bg-gradient-to-br from-zinc-700 via-zinc-800 to-black text-gray-50 p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all ease-out">
      {/* Image Section */}
      <div className="relative w-full h-2/3 overflow-hidden rounded-t-lg">
        <img
          src={imgSrc}
          alt="card image"
          className="group-hover:scale-110 w-full h-full object-cover duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
     
      {/* Text Section */}
      <div className="relative w-full h-auto p-4 flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-left group-hover:text-blue-400 transition-colors duration-300">{title}</span>
          <span className="text-xs text-left text-gray-400">{type}</span> {/* Portfolio Type */}
        </div>
        <p className="text-sm text-left opacity-80 group-hover:opacity-100 group-hover:text-gray-200 transition-all duration-500 mt-2">
          {truncatedDescription}
        </p>
      </div>
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-lg group-hover:ring-2 group-hover:ring-blue-400 group-hover:ring-offset-2 group-hover:ring-offset-black transition-all duration-500"></div>
    </div>
  );
};

export default PortoCard;