const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email'],
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",  // Assuming you're using a Job model for storing job listings
      required: true,
    },
  },
  { timestamps: true } // This will add createdAt and updatedAt fields
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
