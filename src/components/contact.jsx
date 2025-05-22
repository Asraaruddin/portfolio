// src/Components/Contact.jsx
import React from "react";

function Contact() {
  return (
<section id="contact" className="bg-[#1f2937] text-white pt-12 pb-0 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded bg-gray-800 border border-gray-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-800 border border-gray-600"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded bg-gray-800 border border-gray-600 md:col-span-2"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="p-3 rounded bg-gray-800 border border-gray-600 md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded md:col-span-2"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/asrarudd1n"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-white text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Asraaruddin"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-blue-400 text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
