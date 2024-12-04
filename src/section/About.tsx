// src/components/About.tsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';

const About: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-800">
      <section id="about" className="bg-gray-800 p-4 md:p-8 lg:p-16 w-full">
        <SectionHeader title="🧑 About Me" />
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          I'm a passionate web developer with a love for creating beautiful and functional digital experiences.
        </p>

        {/* Add more content */}
        <div className="mt-8 text-gray-300">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.
          </p>
          <p>
            Integer sollicitudin mi sit amet felis efficitur, sit amet interdum nunc dapibus. Phasellus in erat metus. Nunc a augue volutpat, auctor nisl in, auctor enim. Ut cursus felis nec sem hendrerit, a suscipit lorem malesuada. Nulla eget dolor mauris. Ut euismod tincidunt ante ut efficitur. Fusce malesuada ligula eu libero efficitur, et tempor sem iaculis. Vestibulum vestibulum augue neque, sed hendrerit magna malesuada vitae.
          </p>
        </div>
      </section>  
    </div>
  );
}

export default About;
