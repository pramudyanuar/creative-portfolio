// src/components/Contact.tsx
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I’ll get back to you as soon as possible.');
    // Handle form submission here, e.g., sending data to an API or email service.
  };

  return (
    <div className="w-full h-screen bg-gray-800">
      <section id="contact" className="bg-gray-800 p-4 md:p-8 lg:p-16 w-full">
        <SectionHeader title="📬 Get in touch with me" />
        <p className="text-lg text-center mb-12 text-gray-400">
          I'd love to hear from you! Whether you have a project in mind, or just want to chat, feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="px-4 py-3 rounded-md text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="px-4 py-3 rounded-md text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="px-4 py-3 rounded-md text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              rows={6}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>Or feel free to reach out directly:</p>
          <p className="mt-2">Email: <a href="mailto:contact@yourdomain.com" className="text-blue-400">contact@yourdomain.com</a></p>
          <p className="mt-2">Phone: <span className="text-blue-400">+123 456 7890</span></p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
