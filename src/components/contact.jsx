import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // <-- set loading to true

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_f47xww9';
    const templateId = 'template_b07x99c';
    const publicKey = 'ODcTOKx6QyT7ZCcIn';

    // Create a new object that contains dynamic template params
  const templateParams = {
  from_name: name,                // ✅ required for subject
  from_email: email,
  to_name: 'Asrar',
  message: message,
};


    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
         setLoading(false); // <-- reset loading
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setLoading(false); // <-- reset loading
      });
  }

  return (
  

  <section className="bg-[#1f2937] text-white py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left p-6 rounded-lg bg-gray-900"
      >
        <div>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 w-full rounded bg-gray-800 border border-gray-600"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-full rounded bg-gray-800 border border-gray-600"
            required
          />
        </div>
        <div className="md:col-span-2">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 w-full rounded bg-gray-800 border border-gray-600"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded md:col-span-2 transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  </section>
);
}

export default Contact