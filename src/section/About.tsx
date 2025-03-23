import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Typewriter } from "react-simple-typewriter";

const About: React.FC = () => {
  return (
    <div className="w-full bg-gray-800 text-gray-300">
      <section id="about" className="max-w-7xl mx-auto px-8 py-16">
        {/* Header Section */}
        <SectionHeader title="🧑 About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl font-semibold">
              I'm <span className="text-red-500">Pramudyanuar</span> and{" "}
              <span className="text-red-500">
                <Typewriter
                  words={["Web Developer", "UI/UX Designer", "Freelancer"]}
                  loop={0} // Set to 0 for infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="mt-4 text-lg">
              Currently, I am designing innovative solutions as a Flutter developer. Prior to that, I enjoyed exploring new technologies and techniques to improve app development.
            </p>
            {/* Personal Details */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <p>
                <span className="font-semibold">Birthday:</span> 7 January 2005
              </p>
              <p>
                <span className="font-semibold">Age:</span> 20
              </p>
              <p>
                <span className="font-semibold">Website:</span>{" "}
                <a href="http://www.pramudyanuar.my.id" className="text-red-500">
                  pramudyanuar.my.id
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:pramudyanuar@gmail.com" className="text-red-500">
                  pramudyanuar@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Degree:</span> Computer Science
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +6287865709534
              </p>
              <p>
                <span className="font-semibold">City:</span> Surabaya
              </p>
              <p>
                <span className="font-semibold">Freelance:</span> Available
              </p>
            </div>
            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href="/CV.pdf"
                download
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
            {/* Skill Bars */}
            {[
              { skill: "Flutter", level: 95 },
              { skill: "React", level: 80 },
              { skill: "Node.js", level: 70 },
              { skill: "Vue.js", level: 70 },
              { skill: "Figma", level: 70 },
            ].map(({ skill, level }, index) => (
              <div key={index} className="mb-4">
                <p className="text-sm font-medium">{skill}</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            A Bit More About Me
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-center">
            I am an enthusiastic and driven third-year student pursuing a degree in Computer Science at the prestigious
            Sepuluh Nopember Institute of Technology. With an unwavering motivation to explore the frontiers of knowledge,
            I am constantly seeking opportunities to broaden my horizons. I thrive on thinking critically and approaching
            challenges with a creative mindset. Alongside these attributes, I possess exceptional communication skills that
            allow me to effectively convey complex ideas and collaborate seamlessly with others. Above all, my profound
            passion for the field of technology fuels my determination to make a significant impact in this rapidly evolving
            industry.
          </p>
          {/* <p className="text-lg max-w-4xl mx-auto text-center mt-4">
            Integer sollicitudin mi sit amet felis efficitur, sit amet interdum
            nunc dapibus. Phasellus in erat metus. Vestibulum vestibulum augue
            neque, sed hendrerit magna malesuada vitae.
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default About;
