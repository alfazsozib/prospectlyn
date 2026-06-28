const mongoose = require('mongoose');

// Define the Job schema
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  salary: { type: String, required: true },
  deadline: { type: Date, required: true },
  company: { type: String, required: true }, 
  logo: { type: String },
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
