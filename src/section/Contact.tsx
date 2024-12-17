import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false); // State untuk spinner loading
  const [showConfetti, setShowConfetti] = useState(false); // State untuk confetti

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailData = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      emailData,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then(
      (response) => {
        console.log('Success:', response);
        toast.success('🎉 Your message has been sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
        });
        setLoading(false);
        setShowConfetti(true); // Tampilkan confetti
        setTimeout(() => setShowConfetti(false), 3000); // Hentikan confetti setelah 3 detik
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('Error:', error);
        toast.error('❌ Failed to send message. Please try again later.', {
          position: 'top-right',
          autoClose: 3000,
        });
        setLoading(false);
      }
    );
  };

  return (
    <div className="w-full h-screen bg-gray-800 relative">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <section id="contact" className="bg-gray-800 p-4 md:p-8 lg:p-16 w-full">
        <SectionHeader title="📬 Get in touch with me" />
        <p className="text-lg text-center mb-12 text-gray-400">
          Feel free to send me a message, and I’ll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-700 text-white"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-700 text-white"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-700 text-white"
            rows={5}
            required
          />
          <button
            type="submit"
            className={`px-6 py-2 w-full rounded-md text-white transition-all duration-300 ${
              loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <ToastContainer />
      </section>
    </div>
  );
};

export default Contact;
