const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue');
const Article = require('../models/Article');

// Get all issues grouped by volume
router.get('/volumes', async (req, res) => {
  try {
    const issues = await Issue.find().sort({ volume: -1, issue: -1 });
    
    // Group by volume
    const volumes = {};
    issues.forEach(issue => {
      if (!volumes[issue.volume]) {
        volumes[issue.volume] = [];
      }
      volumes[issue.volume].push(issue);
    });
    
    res.json(volumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get current issue (latest)
router.get('/current', async (req, res) => {
  try {
    const issue = await Issue.findOne().sort({ volume: -1, issue: -1 }).populate('articles');
    if (!issue) {
      return res.status(404).json({ message: 'No issue found' });
    }
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get issue by volume and issue number
router.get('/:volume/:issue', async (req, res) => {
  try {
    const issue = await Issue.findOne({
      volume: req.params.volume,
      issue: req.params.issue
    }).populate('articles');
    
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all issues
router.get('/', async (req, res) => {
  try {
    const issues = await Issue.find().sort({ volume: -1, issue: -1 }).populate('articles');
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new issue
router.post('/', async (req, res) => {
  const issue = new Issue(req.body);
  try {
    const newIssue = await issue.save();
    res.status(201).json(newIssue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
