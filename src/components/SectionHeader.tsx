import React from 'react';

interface SectionHeaderProps {
  title: string;
  className?: string;
  isHidden?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className = 'text-white', isHidden = false }) => {
  return (
    <div className={`text-left ${className}`}>
      <h2 className={`text-4xl font-semibold mb-8 ${isHidden ? 'hidden' : 'block'} md:block`}>
        {title}
      </h2>
      <hr className="border-t-2 border-white mb-8" />
    </div>
  );
};

export default SectionHeader;
