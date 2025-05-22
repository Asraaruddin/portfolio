import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-[#1e1e2f] text-white py-16 px-6 md:px-12"
      aria-label="About Me section"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-blue-400 text-center md:text-left">
          About Me
        </h2>

        {/* Grid layout for larger screens */}
        <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
          {/* Left: Intro & Skills */}
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Hello! I'm{" "}
              <span className="text-blue-400 font-semibold">Asrar Uddin</span>, a passionate and detail-oriented front-end developer based in Hyderabad, India.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              I specialize in building dynamic, accessible, and responsive web applications using:
            </p>

            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>
                <strong>React.js</strong> – component-based architecture and modern best practices
              </li>
              <li>
                <strong>JavaScript (ES6+)</strong> – DOM manipulation and clean, modular code
              </li>
              <li>
                <strong>HTML5 & CSS3</strong> – semantic markup and responsive design
              </li>
              <li>
                <strong>Bootstrap & Tailwind CSS</strong> – rapid and consistent UI development
              </li>
            </ul>

            <p className="text-base text-gray-300 mb-6">
              I’m continuously expanding my skillset with advanced React features like Hooks, Context API, and performance optimization.
            </p>

            <p className="text-base text-gray-300">
              Beyond coding, I value{" "}
              <span className="text-blue-400 font-medium">problem-solving</span>,{" "}
              <span className="text-blue-400 font-medium">team collaboration</span>, and{" "}
              <span className="text-blue-400 font-medium">clear communication</span>.
            </p>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default About;
