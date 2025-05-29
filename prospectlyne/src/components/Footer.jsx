import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <Link to="/" className="hover:text-indigo-300 transition-colors">Prospectlyne</Link>
          </h2>
          <p className="text-sm text-indigo-200 max-w-xs">
            Connecting students with the best career opportunities in tech, finance, design, and more!
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 text-sm text-indigo-300">
          <div>
            <h4 className="font-semibold mb-2 text-indigo-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-indigo-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-300 transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-300 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-semibold mb-2 text-indigo-100">Follow Us</h4>
            <div className="flex space-x-4 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-indigo-400">
        <p>&copy; 2025 Prospectlyne. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;