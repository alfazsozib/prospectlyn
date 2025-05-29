// src/pages/JobListingsPage.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Sample logos URLs (replace with real logos or imports)
const companyLogos = {
  "Tech Solutions": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  "DataX Inc.": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  "Creative Minds": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  "DesignHub": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
};

const JobListingsPage = () => {
  const [filter, setFilter] = useState("all");

  const jobs = [
    {
      title: "Software Developer Internship",
      type: "Remote",
      company: "Tech Solutions",
      salary: "$800 - $1200/month",
      deadline: "2025-06-30",
      description:
        "Work on cutting-edge web applications and gain real-world software development experience.",
    },
    {
      title: "Data Analyst Intern",
      type: "On-site",
      company: "DataX Inc.",
      salary: "$700 - $1000/month",
      deadline: "2025-07-15",
      description:
        "Analyze data sets to help shape business decisions in a fast-growing analytics company.",
    },
    {
      title: "Marketing Intern",
      type: "Part-time",
      company: "Creative Minds",
      salary: "$400 - $600/month",
      deadline: "2025-07-05",
      description:
        "Assist in social media campaigns and content creation to boost brand awareness.",
    },
    {
      title: "UI/UX Designer Intern",
      type: "Remote",
      company: "DesignHub",
      salary: "$900 - $1300/month",
      deadline: "2025-06-25",
      description:
        "Design intuitive and attractive interfaces for mobile and web platforms.",
    },
  ];

  const filteredJobs =
    filter === "all"
      ? jobs
      : jobs.filter((job) => job.type.toLowerCase() === filter.toLowerCase());

  const filterTypes = ["all", "remote", "on-site", "part-time"];

  // Format date nicely
  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="max-w-7xl mx-auto flex-grow">
          <h1 className="text-4xl font-extrabold text-indigo-800 mb-10 text-center">
            Available Jobs & Internships
          </h1>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12 flex-wrap">
            {filterTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 rounded-full font-semibold text-lg transition-colors ${
                  filter === type
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-100"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Job Cards Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full text-lg">
                No jobs available for the selected filter.
              </p>
            ) : (
              filteredJobs.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-center mb-4 space-x-4">
                    <img
                      src={companyLogos[job.company]}
                      alt={`${job.company} logo`}
                      className="w-16 h-16 rounded-lg object-contain bg-indigo-100 p-2"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-indigo-800">
                        {job.title}
                      </h3>
                      <p className="text-indigo-600 font-semibold">{job.company}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 flex-grow mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-4 text-sm text-indigo-700 font-semibold">
                    <span className="bg-indigo-100 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="bg-indigo-100 px-3 py-1 rounded-full">
                      {job.salary}
                    </span>
                    <span className="bg-indigo-100 px-3 py-1 rounded-full">
                      Apply by {formatDate(job.deadline)}
                    </span>
                  </div>

                  <button
                    className="mt-auto bg-indigo-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors"
                    onClick={() => alert(`Apply clicked for "${job.title}"`)}
                  >
                    Apply Now
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default JobListingsPage;
