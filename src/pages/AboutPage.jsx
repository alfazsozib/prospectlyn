import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center">
        <section className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 max-w-xl space-y-6">
            <h1 className="text-5xl font-extrabold text-indigo-900 leading-tight">
              My Journey to Building This Platform
            </h1>
            <p className="text-indigo-700 text-lg leading-relaxed">
              What started as a simple idea fueled by a passion to bridge
              students with internship opportunities has grown into this
              platform. I wanted to create a place where students, especially
              in Bangladesh, can showcase their skills and achievements
              while recruiters can easily find fresh talent.
            </p>
            <p className="text-indigo-700 text-lg leading-relaxed">
              It wasn't an overnight success — late nights coding, learning
              new technologies, and solving challenges made this dream a
              reality. Every line of code, every feature was built with the
              community in mind.
            </p>
            <blockquote className="italic border-l-4 border-indigo-400 pl-6 text-indigo-600">
              “Turning ideas into impact, one student at a time.”
            </blockquote>
            <p className="text-indigo-700 text-lg leading-relaxed">
              This platform is just the beginning. I’m excited to keep
              improving, connecting more students and recruiters, and
              making internships more accessible for everyone.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 max-w-lg">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Coding journey inspiration"
              className="rounded-3xl shadow-2xl w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
