// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 text-center bg-gray-800 text-white">
      <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>
      <p className="text-lg text-gray-300 mb-4">I'm always open to new opportunities and collaborations!</p>
      <a href="mailto:[your-email@example.com]" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition">
        Email Me
      </a>
    </section>
  );
}

export default Contact;
