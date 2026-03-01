const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: [{
    type: String,
    required: true
  }],
  abstract: {
    type: String,
    required: true
  },
  keywords: [String],
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
  pageStart: {
    type: Number
  },
  pageEnd: {
    type: Number
  },
  doi: String,
  pdfUrl: String,
  publishedDate: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Text index for search functionality
articleSchema.index({ title: 'text', authors: 'text', abstract: 'text', keywords: 'text' });

module.exports = mongoose.model('Article', articleSchema);
