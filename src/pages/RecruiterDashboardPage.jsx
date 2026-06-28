import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const RecruiterDashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("applicants");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/recruiter/applications");
        setApplications(res.data);
      } catch (err) {
        console.error("Error fetching applications:", err);
        setError("Failed to load applications.");
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === "applicants") {
      fetchApplications();
    }
  }, [activeTab]);

  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

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

              {loading ? (
                <p className="text-gray-500">Loading applications...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : applications.length === 0 ? (
                <p className="text-gray-500">No applicants yet.</p>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {applications.map((application, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl shadow-md p-6 border border-indigo-100 hover:shadow-xl transition-shadow"
                    >
                      <h2 className="text-xl font-bold text-indigo-700 mb-2">
                        {application.jobId.title}
                      </h2>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Name:</span>{" "}
                        {application.firstName} {application.lastName}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Email:</span>{" "}
                        {application.email}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Applied on:</span>{" "}
                        {formatDate(application.createdAt)}
                      </p>
                      <a
                        href={application.resume}
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
