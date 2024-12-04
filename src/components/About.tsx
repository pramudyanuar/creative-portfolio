// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-8 text-white">About Me</h2>
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
  );
}

export default About;
