import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Link } from 'react-scroll';

function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] text-white min-h-screen flex items-center px-6 md:px-16 py-20"
      aria-label="Hero section introducing Asrar Uddin"
    >
      {/* Background decorative circles */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob"
      ></div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full opacity-20 translate-x-1/2 translate-y-1/2 blur-3xl animate-blob animation-delay-2000"
      ></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <span className="text-blue-400">Asrar Uddin</span>
            <br />
            a{" "}
            <ReactTyped
              className="text-blue-400"
              strings={[
                "Full Stack Web Developer",
                "React Enthusiast",
                "JavaScript Expert",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h1>

          <p className="text-xl italic text-gray-400 max-w-lg mx-auto md:mx-0">
            Crafting responsive and performant web applications
          </p>

          <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I’m a passionate developer with expertise in{" "}
            <span className="text-blue-400 font-semibold">
              JavaScript, React, Tailwind CSS, Node.js, and MongoDB
            </span>. Always eager to learn, collaborate, and turn creative ideas into clean, scalable code.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5 justify-center md:justify-start">
          
<Link
  to="about"
  smooth={true}
  duration={500}
  offset={-80} // adjust if you have a fixed header
  className="bg-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition transform hover:scale-105 cursor-pointer"
  aria-label="Learn more About Me"
>
  About Me
</Link>
           <a
  href="/Asrar_Uddin_Resume.pdf"
  download
  className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-400 transition transform hover:scale-105"
  aria-label="Download Resume"
>
  Download Resume
</a>

          
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-8 text-3xl justify-center md:justify-start mt-6">
            <a
              href="https://github.com/asraruddin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/asraruddin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right image */}
       <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="md:w-1/2 flex justify-center"
>
  <div className="relative border border-blue-600 shadow-md rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-1 transition-all duration-300 hover:shadow-lg hover:border-blue-400">
    <img
      src={profilePic}
      alt="Asrar Uddin Profile"
      className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-md"
      loading="lazy"
    />
  </div>
</motion.div>



      </div>

     
        
    </section>
  );
}

export default HeroSection;
