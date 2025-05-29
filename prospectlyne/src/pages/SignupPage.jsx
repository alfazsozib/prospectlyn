// src/pages/SignUpPage.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUpPage = () => {
  const [role, setRole] = useState("student"); // "student" or "recruiter"
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    university: "", // For student
    company: "", // For recruiter
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Form input change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Basic validation
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword)
      errs.confirmPassword = "Passwords must match";
    if (role === "student" && !form.university.trim())
      errs.university = "University/College is required";
    if (role === "recruiter" && !form.company.trim())
      errs.company = "Company name is required";

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // TODO: Signup API logic here, pass role too

    // Simulate navigation
    alert(`Signed up as ${role}!`);
    navigate("/dashboard");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-indigo-50 flex flex-col justify-between">
        <div className="flex-grow flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
              Sign Up for Prospectlyne
            </h2>

            {/* Role toggle buttons */}
            <div className="flex justify-center mb-8 space-x-4">
              <button
                onClick={() => setRole("student")}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  role === "student"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                }`}
              >
                Student
              </button>
              <button
                onClick={() => setRole("recruiter")}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  role === "recruiter"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                }`}
              >
                Recruiter
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-indigo-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John Doe"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-indigo-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="you@example.com"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-indigo-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="At least 6 characters"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-indigo-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Retype your password"
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Conditional fields */}
              {role === "student" && (
                <div className="mb-6">
                  <label
                    htmlFor="university"
                    className="block text-sm font-medium text-indigo-700 mb-1"
                  >
                    University / College
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={form.university}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                      errors.university ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Example University"
                    required={role === "student"}
                  />
                  {errors.university && (
                    <p className="text-red-500 text-xs mt-1">{errors.university}</p>
                  )}
                </div>
              )}

              {role === "recruiter" && (
                <div className="mb-6">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-indigo-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                      errors.company ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Example Inc."
                    required={role === "recruiter"}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                  )}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-3 rounded-md font-semibold"
              >
                Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default SignUpPage;
