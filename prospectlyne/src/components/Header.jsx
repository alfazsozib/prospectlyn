import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [walletBalance, setWalletBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true);
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
        if (decoded.role === 'student') {
          fetchWalletBalance();
        }
      } catch (err) {
        console.error('Invalid token');
        setRole(null);
      }
    }
  }, []);

  const fetchWalletBalance = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/wallet/get-wallet');
      setWalletBalance(response.data.balance);
    } catch (err) {
      console.error('Error fetching wallet balance:', err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setRole(null);
    setWalletBalance(0);
    navigate('/login');
  };

  return (
    <>
      <div className="bg-indigo-900 text-indigo-100 text-sm text-center py-2 px-4 shadow-sm">
        Let's join the community to Connect, Grow, and Succeed Together.
      </div>

      <header className="bg-indigo-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-indigo-300 transition-colors">Prospectlyne</Link>
          </div>

          <nav className="hidden lg:flex space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-indigo-300 transition-colors">Home</Link>
            <Link to="/job-listings" className="hover:text-indigo-300 transition-colors">Job Listings</Link>
            {role === 'recruiter' && (
              <Link to="/recruiter-dashboard" className="hover:text-indigo-300 transition-colors">Dashboard</Link>
            )}
            <Link to="/about" className="hover:text-indigo-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-indigo-300 transition-colors">Contact</Link>

            
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {role === 'student' && (
              <button
                className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
                onClick={() => alert('Redirecting to Wallet page...')} // Placeholder for wallet click
              >
                <span>Wallet: ${walletBalance}</span>
              </button>
            )}
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
            ) :  (
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
