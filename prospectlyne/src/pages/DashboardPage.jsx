// src/pages/DashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-8">Welcome to Your Dashboard</h2>
        
        {/* Profile Section */}
        <div className="mb-8">
          <h3 className="text-xl font-medium">Your Profile</h3>
          <div className="mt-4">
            <p className="text-sm">Name: John Doe</p>
            <p className="text-sm">Email: john.doe@example.com</p>
            <p className="text-sm">University: XYZ University</p>
            <p className="text-sm">Bio: A motivated student seeking opportunities in the tech industry.</p>
          </div>
          <Link
            to="/edit-profile"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all"
          >
            Edit Profile
          </Link>
        </div>

        {/* Job Recommendations Section */}
        <div>
          <h3 className="text-xl font-medium">Recommended Jobs</h3>
          <div className="mt-4">
            <div className="border-b border-gray-300 pb-4">
              <h4 className="text-lg font-semibold">Software Developer Internship</h4>
              <p className="text-sm">Company: Tech Solutions</p>
              <Link
                to="/job-apply"
                className="mt-2 inline-block bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-all"
              >
                Apply Now
              </Link>
            </div>

            <div className="border-b border-gray-300 pb-4 mt-4">
              <h4 className="text-lg font-semibold">Data Analyst Intern</h4>
              <p className="text-sm">Company: DataX Inc.</p>
              <Link
                to="/job-apply"
                className="mt-2 inline-block bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-all"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
