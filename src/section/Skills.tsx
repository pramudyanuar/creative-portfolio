// Skills.tsx
'use client';

import React, { useEffect } from 'react';

const skillsList = [
  "JavaScript (ES6+)", "React.js", "Next.js", "TypeScript", "Flutter",
  "Node.js", "Python", "Go", "Figma", "Tailwind CSS", "Firebase",
  "TensorFlow", "PyTorch", "Hugging Face", "LangChain", "LLM Integration"
];

const Skills = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const skills = document.querySelectorAll('.skill-item-single-file');
    const positions: { top: number; left: number }[] = [];
    const isOverlapping = (top: number, left: number) => {
      for (const pos of positions) {
        const distance = Math.sqrt(Math.pow(pos.top - top, 2) + Math.pow(pos.left - left, 2));
        if (distance < 15) return true;
      }
      return false;
    };
    skills.forEach(skill => {
      let top = 0, left = 0, attempt = 0;
      do {
        top = Math.random() * 80 + 10;
        left = Math.random() * 80 + 10;
        attempt++;
      } while (isOverlapping(top, left) && attempt < 100);
      positions.push({ top, left });
      const duration = Math.random() * 10 + 15;
      const delay = Math.random() * -15;
      if (skill instanceof HTMLElement) {
        skill.style.top = `${top}%`;
        skill.style.left = `${left}%`;
        skill.style.transform = `translate(-50%, -50%)`;
        skill.style.animationName = 'float-orbit-single-file';
        skill.style.animationDuration = `${duration}s`;
        skill.style.animationDelay = `${delay}s`;
        skill.style.animationTimingFunction = 'linear';
        skill.style.animationIterationCount = 'infinite';
      }
    });
  }, []);

  return (
    <>
      <style>{`
        .skills-galaxy-single-file {
          position: relative;
          width: 100%;
          padding: 80px 20px;
          /* background-color: #0d1117; <-- DIHAPUS */
          overflow: hidden;
        }
        .skills-cloud-single-file {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          height: 60vh;
          /* background: radial-gradient(...); <-- DIHAPUS */
        }
        .skill-item-single-file {
          position: absolute;
          display: inline-block;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 500;
          color: #c9d1d9;
          background-color: #161b22;
          border: 1px solid #30363d;
          border-radius: 50px;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
          will-change: transform;
        }
        .skill-item-single-file:hover {
          transform: translate(-50%, -50%) scale(1.15) !important;
          color: #ffffff;
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.5);
          z-index: 10;
          animation-play-state: paused !important;
        }
        @keyframes float-orbit-single-file {
          0% { transform: translate(-50%, -50%) translateX(0px) translateY(0px); }
          25% { transform: translate(-50%, -50%) translateX(5px) translateY(-10px); }
          50% { transform: translate(-50%, -50%) translateX(0px) translateY(-20px); }
          75% { transform: translate(-50%, -50%) translateX(-5px) translateY(-10px); }
          100% { transform: translate(-50%, -50%) translateX(0px) translateY(0px); }
        }
      `}</style>

      <div className="skills-galaxy-single-file">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-12">
            Skills & Technologies
          </h2>
          <div className="skills-cloud-single-file">
            {skillsList.map((skill, index) => (
              <span key={index} className="skill-item-single-file">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;