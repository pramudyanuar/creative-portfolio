import React from 'react';

// Menambahkan 'subtitle' untuk fleksibilitas, seperti pada diskusi sebelumnya
interface SectionHeaderProps {
  title: string;
  subtitle?: string; // Opsional untuk deskripsi di bawah judul
  className?: string; // Untuk kustomisasi dari luar
  isHidden?: boolean; // Untuk menyembunyikan komponen sepenuhnya
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle,
  className = 'text-white',
  isHidden = false 
}) => {
  if (isHidden) return null;

  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-300 mb-3">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
    </div>
  );
};

export default SectionHeader;