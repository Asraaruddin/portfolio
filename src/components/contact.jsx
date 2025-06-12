import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = "Name is required";
    if (!formData.from_email.trim()) {
      newErrors.from_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      newErrors.from_email = "Email is not valid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message
};
    emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  templateParams,
  "YOUR_PUBLIC_KEY"
)
        .then(() => {
          alert("Thank you! Your message has been sent.");
          setFormData({ from_name: "", from_email: "", subject: "", message: "" });
          setErrors({});
        })
        .catch((err) => {
          alert("Something went wrong. Please try again later.");
          console.error("EmailJS error:", err);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <section id="contact" className="bg-[#1f2937] text-white pt-12 pb-0 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              name="from_name"
              type="text"
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
              className="p-3 w-full rounded bg-gray-800 border border-gray-600"
            />
            {errors.from_name && <p className="text-red-400 text-sm">{errors.from_name}</p>}
          </div>
          <div>
            <input
              name="from_email"
              type="email"
              placeholder="Email"
              value={formData.from_email}
              onChange={handleChange}
              className="p-3 w-full rounded bg-gray-800 border border-gray-600"
            />
            {errors.from_email && <p className="text-red-400 text-sm">{errors.from_email}</p>}
          </div>
          <div className="md:col-span-2">
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 w-full rounded bg-gray-800 border border-gray-600"
            />
            {errors.subject && <p className="text-red-400 text-sm">{errors.subject}</p>}
          </div>
          <div className="md:col-span-2">
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="p-3 w-full rounded bg-gray-800 border border-gray-600"
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
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

export default Contact;
