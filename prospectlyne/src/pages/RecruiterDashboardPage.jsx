// src/pages/RecruiterDashboardPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RecruiterDashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("applicants");

  const mockApplicants = [
    {
      jobTitle: "Frontend Developer Intern",
      name: "Naimul Hasan",
      email: "naimul@email.com",
      resume: "https://example.com/resume-naimul.pdf",
      appliedAt: "2025-05-29",
    },
    {
      jobTitle: "Data Analyst Intern",
      name: "Jannatul Ferdous",
      email: "jannatul@email.com",
      resume: "https://example.com/resume-janna.pdf",
      appliedAt: "2025-05-27",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-indigo-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-indigo-800 mb-4">Dashboard</h2>
          <button
            onClick={() => setActiveTab("applicants")}
            className={`text-left px-4 py-2 rounded-lg transition font-medium ${
              activeTab === "applicants"
                ? "bg-indigo-600 text-white shadow"
                : "text-indigo-700 hover:bg-indigo-100"
            }`}
          >
            View Applicants
          </button>
          <button
            onClick={() => navigate("/post-job")}
            className="text-left px-4 py-2 rounded-lg text-indigo-700 hover:bg-indigo-100 font-medium transition"
          >
            Post a New Job
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-10">
          {activeTab === "applicants" && (
            <>
              <h1 className="text-3xl font-extrabold text-indigo-800 mb-6">
                Applicants for Your Job Posts
              </h1>

              {mockApplicants.length === 0 ? (
                <p className="text-gray-500">No applicants yet.</p>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {mockApplicants.map((applicant, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl shadow-md p-6 border border-indigo-100 hover:shadow-xl transition-shadow"
                    >
                      <h2 className="text-xl font-bold text-indigo-700 mb-2">
                        {applicant.jobTitle}
                      </h2>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Name:</span>{" "}
                        {applicant.name}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Email:</span>{" "}
                        {applicant.email}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Applied on:</span>{" "}
                        {applicant.appliedAt}
                      </p>
                      <a
                        href={applicant.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition"
                      >
                        View Resume
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default RecruiterDashboardPage;
