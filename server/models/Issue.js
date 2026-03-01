const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  volume: {
    type: Number,
    required: true
  },
  issue: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  description: String,
  publishedDate: {
    type: Date,
    default: Date.now
  },
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  }]
});

issueSchema.index({ volume: 1, issue: 1 });

module.exports = mongoose.model('Issue', issueSchema);
