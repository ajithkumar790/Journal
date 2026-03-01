const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Search articles - handles search functionality across the site
router.get('/', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    // Perform text search
    const articles = await Article.find(
      { $text: { $search: q } },
      { score: { $meta: 'textScore' } }
    )
    .sort({ score: { $meta: 'textScore' } })
    .limit(50);

    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
