// src/Components/Projects.jsx
import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import feedbackImg from "../assets/feedback.jpeg";
import todoImg from "../assets/todo.jpeg";
import weatherImg from "../assets/weather.jpeg";



function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const projects = [
    {
      title: "Feedback Form",
      description: "A form with validation and real-time feedback using React Hooks.",
      tech: ["React", "Bootstrap", "Hooks"],
      github: "https://github.com/Asraaruddin/react-learning",
      live: "#",
      thumbnail: feedbackImg,
      type: "Mini",
      duration: "Jan 2024",
    },
    {
      title: "ToDo App",
      description: "A simple to-do list app with persistent state using localStorage.",
      tech: ["React", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      thumbnail: todoImg,
      type: "Mini",
      duration: "Feb 2024",
    },
    {
      title: "Weather App (WIP)",
      description: "Fetches and displays weather data from an API. Currently in development.",
      tech: ["React", "API", "useEffect"],
      github: "#",
      live: "#",
      thumbnail: weatherImg,
      type: "Major",
      duration: "Ongoing",
    },
  ];

  const grouped = {
    Major: projects.filter((p) => p.type === "Major"),
    Mini: projects.filter((p) => p.type === "Mini"),
  };

  return (
    <section className="text-white py-12 px-4 bg-gray-950" id="projects">
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-blue-400">My</span> Projects
      </h2>

      {Object.keys(grouped).map((group) => (
        <div key={group} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{group} Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
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
                  <h4 className="text-xl font-bold mb-1">{proj.title}</h4>
                  <p className="text-sm text-gray-300 mb-2">{proj.description}</p>
                  <p className="text-xs text-gray-400 mb-2">Duration: {proj.duration}</p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-600 text-white text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-2 text-sm">
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
    </section>
  );
}

export default Projects;
