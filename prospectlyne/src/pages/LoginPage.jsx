import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  const [role, setRole] = useState("student"); // student or recruiter
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Basic validation
  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    return errs;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setServerError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });

      if (!res.ok) {
        const data = await res.json();
        setServerError(data.message || "Login failed");
        return;
      }

      const data = await res.json();

      // Save token or user info as needed (localStorage example)
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert(`Logged in as ${role}!`);
      navigate("/");
    } catch (error) {
      setServerError("Something went wrong. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-indigo-50 flex flex-col justify-between">
        <div className="flex-grow flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
              Login to Prospectlyne
            </h2>

            {/* Role toggle */}
            <div className="flex justify-center mb-8 space-x-4">
              <button
                type="button"
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
                type="button"
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

            <form onSubmit={handleLogin} noValidate>
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
              <div className="mb-6">
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
                  placeholder="Your password"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Server error */}
              {serverError && (
                <p className="text-red-600 text-sm mb-4 text-center">{serverError}</p>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-3 rounded-md font-semibold"
              >
                Login as {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-indigo-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default LoginPage;
