import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-indigo-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-indigo-300 transition-colors">Prospectlyne</Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <button className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-300 transition-colors">Home</Link>
          <Link to="/job-listings" className="hover:text-indigo-300 transition-colors">Job Listings</Link>
          <Link to="/post-job" className="hover:text-indigo-300 transition-colors">Post a job</Link>
          <Link to="/about" className="hover:text-indigo-300 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-indigo-300 transition-colors">Contact</Link>
        </nav>

        {/* Authentication Links */}
        <div className="hidden lg:flex items-center space-x-4">
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
        </div>
      </div>
    </header>
  );
};

export default Header;