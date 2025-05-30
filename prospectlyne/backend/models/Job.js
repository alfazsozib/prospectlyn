const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  logo: { type: String },
  type: { type: String, required: true },
  salary: { type: String, required: true },
  deadline: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Optional: link to recruiter
});

module.exports = mongoose.model("Job", JobSchema);
