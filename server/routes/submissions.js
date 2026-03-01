const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// Submit a new paper
router.post('/', async (req, res) => {
  try {
    const submission = new Submission(req.body);
    const newSubmission = await submission.save();
    res.status(201).json({
      message: 'Paper submitted successfully!',
      submission: newSubmission
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all submissions
router.get('/', async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ submittedAt: -1 });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get submission by ID
router.get('/:id', async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    res.json(submission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
