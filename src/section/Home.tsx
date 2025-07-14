import { useState, useEffect } from 'react';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = ['Flutter Developer', 'Web Developer', 'UI/UX Designer'];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(roleInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black min-h-screen flex items-center justify-center font-sans overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}
      />

      <div
        className="absolute pointer-events-none transition-all duration-300 ease-out"
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

      <section className="relative z-10 container mx-auto flex flex-col items-center justify-center p-4 text-white max-w-3xl">
        {/* Profile Image */}
        <div className={`relative mb-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-700/50 shadow-2xl group">
              <img
                src="/assets/profile.png"
                alt="Pramudyanuar"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center transform rotate-12 animate-bounce shadow-lg">
              <span className="text-white text-sm">⚡</span>
            </div>
            <div className="absolute -bottom-1 -left-1 w-7 h-7 bg-purple-500 rounded-lg flex items-center justify-center transform -rotate-12 animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}>
              <span className="text-white text-xs">🚀</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className={`flex flex-col items-center text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Greeting */}
          <div className="mb-4">
            <h1 className="text-xl font-light text-gray-300">Hello, I'm</h1>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Pramudyanuar
            </h1>
          </div>

          {/* Role animation */}
          <div className="relative mb-4 h-10 flex items-center">
            <span className="text-base text-gray-400 mr-2">I'm a</span>
            <div className="relative overflow-hidden h-10">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentRole * 2.5}rem)` }}
              >
                {roles.map((role) => (
                  <div key={role} className="h-10 flex items-center">
                    <span className="text-base font-semibold text-blue-400 whitespace-nowrap">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <span className="text-base text-blue-400 ml-1 animate-pulse">|</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 max-w-sm mb-6 leading-relaxed font-light px-2">
            Welcome to my digital universe. I craft beautiful, functional experiences that bridge the gap between imagination and reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 mb-4 px-2">
            <button className="group px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 hover:shadow-lg transform hover:scale-105">
              View My Work
            </button>
            <button className="group px-4 py-2 border border-gray-600 text-gray-300 rounded-md text-sm hover:border-gray-400 hover:text-white transform hover:scale-105">
              Get In Touch
            </button>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Available for new projects</span>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 h-8 border border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-1 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Home;
