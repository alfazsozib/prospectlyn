const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const Application = require("../models/Application")
router.post("/post-job", async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to post job" });
  }
});

// GET all jobs
router.get("/get-jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    console.log(jobs)
    res.json(jobs); 
  } catch (err) {
    console.error("Failed to fetch jobs:", err);
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/apply", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address, jobId } = req.body;

    // Save the application data in the database
    const newApplication = new Application({
      firstName,
      lastName,
      email,
      phone,
      address,
      jobId,
    });

    await newApplication.save();
    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (err) {
    console.error("Error applying:", err);
    res.status(500).json({ message: "Error submitting application" });
  }
});

module.exports = router;
