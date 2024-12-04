// src/components/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-800">
      {/* Container untuk mengatur lebar dan tinggi */}
      <section id="home" className="py-16 bg-gray-800 text-white px-8 max-w-screen-lg w-full h-full flex flex-col md:flex-row justify-center items-center md:items-start">
        {/* Bagian tulisan */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Hello, I'm Pramudyanuar
          </h1>
          <p className="text-lg md:text-xl">Front-End Developer</p>
          <p className="mt-4 text-sm md:text-lg">
            Welcome to my digital space!
          </p>
        </div>

        {/* Bagian HomeCard */}
        <div className="md:w-1/2 mt-8 md:mt-0">
        </div>
      </section>
    </div>
  );
}

export default Home;
