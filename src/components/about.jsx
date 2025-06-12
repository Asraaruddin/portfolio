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
              <span className="text-blue-400 font-semibold">Asrar Uddin</span>, a passionate and detail-driven MERN stack developer based in Hyderabad, India.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              As a front-end enthusiast and growing full-stack developer, I enjoy building scalable, responsive, and user-friendly web applications using the modern JavaScript ecosystem. I take pride in clean architecture, reusable components, and seamless user experiences.
            </p>

            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>
                <strong>Frontend:</strong>React.js (Hooks, Context API), JavaScript (ES6+), HTML5, CSS3
              </li>
              <li>
                <strong>Styling:</strong> Chakra UI, Bootstrap, Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong>Node.js, Express.js
              </li>
              <li>
                <strong>Database:</strong>MongoDB (Mongoose)
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, Postman, VS Code
              </li>
              <li>
                <strong>Deployment:</strong>Render, Vercel, Netlify
              </li>
            </ul>

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
