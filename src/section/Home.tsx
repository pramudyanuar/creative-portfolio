// Home.tsx
import { useState, useEffect } from 'react';
import HeroSection from "./HeroSection";
import Skills from "./Skills";

const Home = () => {
  // State untuk posisi mouse dipindahkan ke sini
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Event listener untuk mouse juga dipindahkan ke sini
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    // Background gradien dihapus dari sini
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory text-white">
      
      {/* EFEK BACKGROUND DARI HEROSECTION DIPINDAHKAN KE SINI */}
      <div
        className="fixed inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}
      />
      <div
        className="fixed pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%'
        }}
      />

      {/* Wrapper untuk seksi pertama */}
      <section className="h-screen w-full snap-start flex items-center justify-center relative z-10">
        <HeroSection />
      </section>

      {/* Wrapper untuk seksi kedua */}
      <section className="h-screen w-full snap-start flex items-center justify-center relative z-10">
        <Skills />
      </section>

    </main>
  );
};

export default Home;