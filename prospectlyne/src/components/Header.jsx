import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <>
      {/* Top Message Bar */}
      <div className="bg-indigo-900 text-indigo-100 text-sm text-center py-2 px-4 shadow-sm">
        Let's join the community to Connect, Grow, and Succeed Together.
      </div>

      {/* Main Header */}
      <header className="bg-indigo-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-indigo-300 transition-colors">Prospectlyne</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-indigo-300 transition-colors">Home</Link>
            <Link to="/job-listings" className="hover:text-indigo-300 transition-colors">Job Listings</Link>
            <Link to="/post-job" className="hover:text-indigo-300 transition-colors">Post a Job</Link>
            <Link to="/about" className="hover:text-indigo-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-indigo-300 transition-colors">Contact</Link>
          </nav>

          {/* Auth Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/signup"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                  Login
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
