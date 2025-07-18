import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import mernchatapp from "../assets/mernchatapp.png";
import carrental from "../assets/carrental.png"; 

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const projects = [
    {
      title: "MERN Chat App",
      description:
        "A real-time chat application with authentication, group chat, and notifications using MERN stack and Chakra UI.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Chakra UI", "Socket.IO"],
      github: "https://github.com/Asraaruddin/MERN-Chat-app",
      live: "https://talkify-5m26.onrender.com/",
      thumbnail: mernchatapp,
      type: "Major",
      duration: "May 2024",
    },
    {
      title: "Car Rental Platform",
      description:
        "A responsive car rental web app with real-time availability, role-based dashboards, and booking features using the MERN stack and Tailwind CSS.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Asraaruddin/car-rental-booking-app",
      live: "https://luxcarrental.vercel.app/",
      thumbnail: carrental,
      type: "Major",
      duration: "June 2024",
    },
  ];

  const grouped = {
    Major: projects.filter((p) => p.type === "Major"),
  };

  return (
    <section id="projects" className="text-white bg-gray-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          <span className="text-blue-400">My</span> Projects
        </h2>

        {Object.keys(grouped).map((group) => (
          <div key={group} className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">{group} Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {grouped[group].map((proj, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/40 transition duration-300"
                >
                  <img
                    src={proj.thumbnail}
                    alt={proj.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
                    <p className="text-sm text-gray-300 mb-3">{proj.description}</p>
                    <p className="text-xs text-gray-400 mb-3">Duration: {proj.duration}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {proj.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-600 text-white text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-sm">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-blue-400 hover:underline"
                      >
                        <FaGithub /> GitHub
                      </a>
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-green-400 hover:underline"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
