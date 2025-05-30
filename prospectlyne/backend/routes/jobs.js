const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

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

module.exports = router;
