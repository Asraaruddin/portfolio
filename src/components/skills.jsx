import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "React.js", icon: "fa-brands fa-react" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "Express.js", icon: "fa-solid fa-server" },
    { name: "MongoDB", icon: "fa-solid fa-database" },
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-wide">
          <span className="text-blue-400">Technical</span> Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-blue-500/30 transition duration-300 text-center"
            >
              <i className={`${skill.icon} text-5xl text-blue-400`}></i>
              <h3 className="mt-5 text-xl font-semibold tracking-wide">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
