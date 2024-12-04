// src/components/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8">
      <h1 className="text-5xl font-extrabold mb-4">Hello, I'm [Your Name]</h1>
      <p className="text-xl">Full-stack Developer | Designer | Creator</p>
      <p className="mt-4 text-lg">Welcome to my digital space!</p>

      {/* Add more content to make the section long enough */}
      <div className="mt-8 text-gray-300">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Proin eget tortor risus.
        </p>
        <p>
          Integer sollicitudin mi sit amet felis efficitur, sit amet interdum nunc dapibus. Phasellus in erat metus. Nunc a augue volutpat, auctor nisl in, auctor enim. Ut cursus felis nec sem hendrerit, a suscipit lorem malesuada. Nulla eget dolor mauris. Ut euismod tincidunt ante ut efficitur. Fusce malesuada ligula eu libero efficitur, et tempor sem iaculis. Vestibulum vestibulum augue neque, sed hendrerit magna malesuada vitae. Ut at turpis id libero efficitur iaculis.
        </p>
        <p>
          Curabitur accumsan sapien nec interdum feugiat. Proin vitae massa purus. Curabitur pharetra odio sit amet quam elementum, non elementum turpis accumsan. Sed sollicitudin tempor ligula. Suspendisse potenti. Integer tincidunt lacus eu lectus placerat, ac tincidunt nunc elementum. Vivamus tincidunt dui ac facilisis laoreet. Etiam sodales, ligula et aliquam egestas, mi velit facilisis lectus, eget fringilla neque est eget orci.
        </p>
      </div>
    </section>
  );
}

export default Home;
