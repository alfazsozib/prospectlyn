import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with real API call or logic
    alert(`Thank you for reaching out, ${formData.name}! We will get back soon.`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center">
        <section className="max-w-5xl w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-indigo-900">
              Get in Touch
            </h1>
            <p className="text-indigo-700 text-lg leading-relaxed">
              Whether you have questions, feedback, or want to collaborate,
              we’d love to hear from you! Fill out the form and we’ll get
              back to you shortly.
            </p>
            <div className="space-y-4 text-indigo-700">
              <div>
                <strong>Email: </strong>
                <a
                  href="mailto:contact@yourdomain.com"
                  className="text-indigo-600 underline"
                >
                  alfazsozib@gmail.com
                </a>
              </div>
              <div>
                <strong>Phone: </strong>
                <a href="tel:+1234567890" className="text-indigo-600 underline">
                  +88 01304396916
                </a>
              </div>
              <div>
                <strong>Address: </strong>
                100 Abc Street, Rajshahi, Bangladesh
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg space-y-6"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-indigo-700 mb-1"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-indigo-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-indigo-700 mb-1"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Brief topic"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-indigo-700 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-4 rounded-full font-extrabold text-lg shadow-md"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
