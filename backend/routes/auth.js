const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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


const JWT_SECRET = process.env.JWT_SECRET || "d21a14c819443306f516dbeff4d72bb4ed81d8d80325e20f19866c7bda598c1e20d8db5357be65db46b7b9ef6b5caa71aa2d59adc81fff75a66376540c438b99"; 

router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: "Email, password, and role are required" });
  }

  try {
    // Find the user with matching email and role
    const user = await User.findOne({ email: email.toLowerCase(), role });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create JWT payload & sign token
    const payload = {
      userId: user._id,
      role: user.role,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

    // Send back user info + token (without password)
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
