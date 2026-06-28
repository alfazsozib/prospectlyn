import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import JobApplicationModal from "../components/JobApplicationModal";

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [walletBalance, setWalletBalance] = useState(0); // For storing wallet balance
  const [jobToApply, setJobToApply] = useState(null); // For storing job selected to apply

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/jobs/get-jobs");
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

  const openModal = (job) => {
    setJobToApply(job); // Store selected job to apply
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setJobToApply(null);
  };

  const handleApply = (jobId) => {
    setAppliedJobs((prev) => [...prev, jobId]);
    openModal(jobId);
  };

  const handleConfirmDeduction = async () => {
    const applicationFee = 10; // Static application fee
    try {
      // Deduct the fee from the wallet
      const response = await axios.put('http://localhost:5000/api/wallet/wallet/deduct');
      setWalletBalance(response.data.balance);
      closeModal();
      alert('Application fee deducted successfully!');
      window.location.reload();

    } catch (err) {
      alert("Failed to deduct fee from the wallet.");
    }
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
                      className={`mt-auto py-3 rounded-full font-semibold text-lg transition-colors ${
                        appliedJobs.includes(job._id)
                          ? "bg-gray-400 text-white"
                          : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                      onClick={() => {
                        if (!appliedJobs.includes(job._id)) {
                          handleApply(job._id);
                        }
                      }}
                    >
                      {appliedJobs.includes(job._id) ? "Applied" : "Apply Now"}
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Modal for Application Fee Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold">Confirm Application</h2>
            <p className="my-4 text-lg">A fee of $10 will be deducted from your wallet for this application.</p>
            <div className="flex justify-between">
              <button
                onClick={handleConfirmDeduction}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobListingsPage;
