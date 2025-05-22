import React from "react";

function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400 py-6 text-center text-sm border-t border-gray-700">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} <span className="text-white font-medium">Asrar Uddin</span>. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-3 text-base">
          <a
            href="https://github.com/Asraaruddin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/asrarudd1n"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:asraruddin000@gmail.com"
            className="hover:text-white transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
