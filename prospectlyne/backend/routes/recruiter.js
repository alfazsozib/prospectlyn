const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const Job = require('../models/Job');

// No authentication middleware required
router.get("/applications", async (req, res) => {
  try {
    const jobs = await Job.find({}); 
    const applications = await Application.find({ jobId: { $in: jobs.map(job => job._id) } })
      .populate('jobId') 
      .exec();
    res.status(200).json(applications); 
  } catch (err) {
    console.error("Error fetching applications:", err);
    res.status(500).json({ message: "Failed to fetch applications." });
  }
});

module.exports = router;
