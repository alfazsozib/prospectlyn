const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  const { role, name, email, password, university, company } = req.body;

  // Basic validation
  if (!role || !["student", "recruiter"].includes(role))
    return res.status(400).json({ message: "Invalid role" });

  if (!name || !email || !password)
    return res.status(400).json({ message: "Name, email and password are required" });

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already in use" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user object
    const newUser = new User({
      role,
      name,
      email,
      password: hashedPassword,
      university: role === "student" ? university : undefined,
      company: role === "recruiter" ? company : undefined,
    });

    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
