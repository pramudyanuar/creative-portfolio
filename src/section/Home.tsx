import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ProfileCard from '../components/ProfileCard';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-800">
      {/* Container untuk mengatur lebar dan tinggi */}
      <section
        id="home"
        className="py-12 bg-gray-800 text-white px-6 max-w-screen-lg w-full h-full flex flex-col justify-center items-center text-center"
      >

        {/* Foto Profil */}
        <div className="mb-28 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:mb-52">
          {/* <img
            src="/assets/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
          /> */}
          <ProfileCard />
        </div>

        {/* Bagian tulisan */}
        <div className="w-full flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 transform transition duration-500 hover:scale-105 hover:text-blue-600">
            Hello, I'm Pramudyanuar
          </h1>

          {/* Bagian teks yang berganti-ganti */}
          <h2 className="text-xl md:text-3xl font-semibold text-blue-400">
            <Typewriter
              words={['Flutter Developer', 'Website Developer', 'UI/UX Designer']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-4 text-xs md:text-base text-gray-400 transition duration-300 transform hover:translate-y-2 hover:text-gray-300">
            Welcome to my digital space!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
