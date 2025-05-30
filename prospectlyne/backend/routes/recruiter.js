const express = require("express");
const router = express.Router();
const Application = require("../models/Application"); 


router.get("/applications", async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("jobId") // Populate the job details if needed
      .exec();
    
    res.status(200).json(applications);
  } catch (err) {
    console.error("Error fetching applications:", err);
    res.status(500).json({ message: "Failed to fetch applications." });
  }
});

module.exports = router;
