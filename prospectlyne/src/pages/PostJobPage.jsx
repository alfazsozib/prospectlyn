import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const jobTypes = ["Remote", "On-site", "Part-time"];

const PostJobPage = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [logo, setLogo] = useState("");
  const [type, setType] = useState("Remote");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const handlePostJob = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      company,
      logo,
      type,
      salary,
      deadline,
      description,
      requirements,
    };
    console.log("Job posted:", newJob);
    alert("Job posted successfully!");

    setTitle("");
    setCompany("");
    setLogo("");
    setType("Remote");
    setSalary("");
    setDeadline("");
    setDescription("");
    setRequirements("");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-indigo-50 to-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-12 sm:p-16 border border-indigo-200">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-indigo-900 mb-2">
              Post a New Job
            </h1>
            <p className="text-indigo-600 text-lg font-medium">
              Let talented candidates find your opportunity
            </p>
          </header>

          <form onSubmit={handlePostJob} className="space-y-8">
            {/* Job Title */}
            <div>
              <label
                htmlFor="title"
                className="text-indigo-800 font-semibold mb-2 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 20h9" />
                  <path d="M12 4v16" />
                  <path d="M3 8h7" />
                </svg>
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="e.g. Software Developer Internship"
                className="w-full rounded-xl border border-indigo-300 bg-indigo-50 px-5 py-4 text-lg placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              />
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="company"
                className="text-indigo-800 font-semibold mb-2 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7h18" />
                  <path d="M6 7v10" />
                  <path d="M18 7v10" />
                  <path d="M9 17v-5" />
                  <path d="M15 17v-5" />
                </svg>
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                placeholder="e.g. Tech Solutions"
                className="w-full rounded-xl border border-indigo-300 bg-indigo-50 px-5 py-4 text-lg placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              />
            </div>

            {/* Company Logo URL */}
            <div>
              <label
                htmlFor="logo"
                className="text-indigo-800 font-semibold mb-2 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
                Company Logo URL (optional)
              </label>
              <input
                id="logo"
                type="url"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
                placeholder="https://example.com/logo.png"
                className="w-full rounded-xl border border-indigo-300 bg-indigo-50 px-5 py-4 text-lg placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              />
            </div>

            {/* Job Type */}
            <div>
              <label
                htmlFor="type"
                className="text-indigo-800 font-semibold mb-2 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                Job Type <span className="text-red-500">*</span>
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
                className="w-full rounded-xl border border-indigo-300 bg-indigo-50 px-5 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              >
                {jobTypes.map((jt) => (
                  <option key={jt} value={jt}>
                    {jt}
                  </option>
                ))}
              </select>
            </div>

            {/* Salary Range */}
            <div>
              <label
                htmlFor="salary"
                className="text-indigo-800 font-semibold mb-2 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1v22" />
                  <path d="M17 5H9a4 4 0 000 8h6a4 4 0 110 8H7" />
                </svg>
                Salary Range <span className="text-red-500">*</span>
              </label>
              <input
                id="salary"
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
                placeholder="e.g. $800 - $1200/month"
                className="w-full rounded-xl border border-indigo-300 bg-indigo-50 px-5 py-4 text-lg placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              />
            </div>

            {/* Deadline */}
            <div>
              <label
                htmlFor="deadline"
                className="text-indigo-800 font-semibold mb-2 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Application Deadline <span className="text-red-500">*</span>
              </label>
              <input
                id="deadline"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
                className="w-full rounded-xl border border-indigo-300 bg-indigo-50 px-5 py-4 text-lg placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition"
              />
            </div>

            {/* Job Description */}
            <div>
              <label
                htmlFor="description"
                className="text-indigo-800 font-semibold mb-2 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 9h16" />
                  <path d="M9 9v11" />
                </svg>
                Job Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={5}
                placeholder="Brief overview of the job responsibilities and tasks."
                className="w-full rounded-xl border border-indigo-300 bg-indigo-50 px-5 py-4 text-lg placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition resize-none"
              ></textarea>
            </div>

            {/* Job Requirements */}
            <div>
              <label
                htmlFor="requirements"
                className="text-indigo-800 font-semibold mb-2 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7" />
                  <path d="M7 10V6a5 5 0 0110 0v4" />
                </svg>
                Job Requirements <span className="text-red-500">*</span>
              </label>
              <textarea
                id="requirements"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                required
                rows={4}
                placeholder="List skills, qualifications, or experience needed."
                className="w-full rounded-xl border border-indigo-300 bg-indigo-50 px-5 py-4 text-lg placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white py-5 rounded-3xl font-extrabold text-xl shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              Post Job
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostJobPage;
