import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

// const companyLogos = {
//   "Tech Solutions": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//   "DataX Inc.": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//   "Creative Minds": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//   "DesignHub": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
// };

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/jobs/get-jobs");
        console.log(res)
        setJobs(res.data);
        
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs =
    filter === "all"
      ? jobs
      : jobs.filter((job) => job.type?.toLowerCase() === filter.toLowerCase());

  const filterTypes = ["all", "remote", "on-site", "part-time"];

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
          {loading ? (
            <p className="text-center text-gray-500 text-lg">Loading jobs...</p>
          ) : error ? (
            <p className="text-center text-red-500 text-lg">{error}</p>
          ) : (
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
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-16 h-16 rounded-lg object-contain bg-indigo-100 p-2"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-indigo-800">
                          {job.title}
                        </h3>
                        <p className="text-indigo-600 font-semibold">
                          {job.company}
                        </p>
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
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default JobListingsPage;
