import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-800">
      {/* Container untuk mengatur lebar dan tinggi */}
      <section
        id="home"
        className="py-16 bg-gray-800 text-white px-8 max-w-screen-lg w-full h-full flex flex-col justify-center items-center text-center"
      >
        {/* Foto Profil */}
        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-500">
          <img
            src="/assets/logo.jpg" // Ganti dengan URL foto kamu
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bagian tulisan */}
        <div className="w-full flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Hello, I'm Pramudyanuar
          </h1>

          {/* Bagian teks yang berganti-ganti */}
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-400">
            <Typewriter
              words={['Flutter Developer', 'Website Developer', 'UI/UX Developer']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-4 text-sm md:text-lg text-gray-400">
            Welcome to my digital space!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
