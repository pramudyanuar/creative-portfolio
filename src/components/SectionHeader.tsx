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
  className = 'text-white', // Default warna teks putih
  isHidden = false 
}) => {
  // Praktik terbaik: Jangan render apa pun jika isHidden bernilai true.
  // Ini lebih efisien daripada hanya menyembunyikannya dengan CSS.
  if (isHidden) {
    return null;
  }

  return (
    <div className={`text-left ${className}`}>
      <h2 className="font-semibold text-3xl md:text-4xl mb-2">
        {title}
      </h2>
      
      {/* Tampilkan subtitle jika ada */}
      {subtitle && (
        <p className="text-lg text-current opacity-80 mb-4">
          {subtitle}
        </p>
      )}

      {/* Menggunakan 'border-current' membuat warna garis sama dengan warna teks (className).
        Jadi, jika Anda memberikan className="text-blue-500", garisnya juga akan biru.
      */}
      <hr className="border-t-2 border-current w-24 mb-8" />
    </div>
  );
};

export default SectionHeader;