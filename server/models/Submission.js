const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  researchDomain: {
    type: String,
    required: true
  },
  paperTitle: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    required: true
  },
  message: String,
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'reviewing', 'accepted', 'rejected']
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Submission', submissionSchema);
