import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CurrentIssues() {
  const [currentIssue, setCurrentIssue] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCurrentIssue();
  }, []);

  const fetchCurrentIssue = async () => {
    try {
      // Fetch from API
      const issueResponse = await axios.get('/api/issues/current');
      setCurrentIssue(issueResponse.data);
      
      if (issueResponse.data.articles) {
        setArticles(issueResponse.data.articles);
      }
      setLoading(false);
    } catch (error) {
      console.log('Using mock data - API not connected');
      // Mock data for demonstration
      setCurrentIssue({
        volume: 5,
        issue: 2,
        year: 2026,
        month: 'February'
      });
      setArticles([
        {
          _id: '1',
          title: 'Advanced Machine Learning Techniques for Image Classification',
          authors: ['Dr. Ramesh Kumar', 'Dr. Priya Sharma'],
          abstract: 'This paper presents novel approaches to image classification using deep learning...',
          keywords: ['Machine Learning', 'Deep Learning', 'Image Classification'],
          volume: 5,
          issue: 2,
          year: 2026,
          month: 'February',
          pageStart: 1,
          pageEnd: 15
        },
        {
          _id: '2',
          title: 'IoT-Based Smart Healthcare Monitoring System',
          authors: ['Dr. Michael Chen', 'Dr. Sarah Johnson'],
          abstract: 'This research proposes an IoT-based system for real-time health monitoring...',
          keywords: ['IoT', 'Healthcare', 'Smart Systems'],
          volume: 5,
          issue: 2,
          year: 2026,
          month: 'February',
          pageStart: 16,
          pageEnd: 30
        },
        {
          _id: '3',
          title: 'Blockchain Technology in Supply Chain Management',
          authors: ['Dr. B Ajith Kumar', 'Dr. Lisa Wang'],
          abstract: 'This study explores the application of blockchain in supply chain transparency...',
          keywords: ['Blockchain', 'Supply Chain', 'Management'],
          volume: 5,
          issue: 2,
          year: 2026,
          month: 'February',
          pageStart: 31,
          pageEnd: 45
        },
        {
          _id: '4',
          title: 'Renewable Energy Integration in Smart Grids',
          authors: ['Dr. John Smith', 'Dr. Emily Brown'],
          abstract: 'This paper addresses challenges in integrating renewable energy sources...',
          keywords: ['Renewable Energy', 'Smart Grid', 'Power Systems'],
          volume: 5,
          issue: 2,
          year: 2026,
          month: 'February',
          pageStart: 46,
          pageEnd: 60
        }
      ]);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page">
        <nav className="nav-buttons">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/call-for-papers" className="nav-btn">Call for Papers</Link>
          <Link to="/editorial-board" className="nav-btn">Editorial Board</Link>
          <Link to="/guidelines" className="nav-btn">Guidelines</Link>
          <Link to="/submit" className="nav-btn">Submit</Link>
          <Link to="/current-issues" className="nav-btn active">Current Issues</Link>
          <Link to="/archives" className="nav-btn">Archives</Link>
          <Link to="/indexing" className="nav-btn">Index</Link>
          <Link to="/fees" className="nav-btn">Fees</Link>
          <Link to="/reviewers" className="nav-btn">Reviewers</Link>
        </nav>
        <div className="content">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <nav className="nav-buttons">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/call-for-papers" className="nav-btn">Call for Papers</Link>
        <Link to="/editorial-board" className="nav-btn">Editorial Board</Link>
        <Link to="/guidelines" className="nav-btn">Guidelines</Link>
        <Link to="/submit" className="nav-btn">Submit</Link>
        <Link to="/current-issues" className="nav-btn active">Current Issues</Link>
        <Link to="/archives" className="nav-btn">Archives</Link>
        <Link to="/indexing" className="nav-btn">Index</Link>
        <Link to="/fees" className="nav-btn">Fees</Link>
        <Link to="/reviewers" className="nav-btn">Reviewers</Link>
      </nav>

      <div className="page-section">
        <h1 className="section-title">
          Current Issue - Volume {currentIssue?.volume}, Issue {currentIssue?.issue}
        </h1>
        <p style={{marginBottom: '20px'}}>
          <strong>Published:</strong> {currentIssue?.month} {currentIssue?.year}
        </p>
        
        {articles.length === 0 ? (
          <p>No articles in current issue.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Article Title</th>
                <th>Authors</th>
                <th>Pages</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article._id}>
                  <td>
                    <strong>{article.title}</strong>
                    <br />
                    <small>{article.keywords?.join(', ')}</small>
                  </td>
                  <td>{article.authors?.join(', ')}</td>
                  <td>{article.pageStart}-{article.pageEnd}</td>
                  <td>
                    <button className="btn" style={{padding: '5px 15px', fontSize: '14px'}}>
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="content-half" style={{marginTop: '30px'}}>
          <div className="content-text">
            <h3>About This Issue</h3>
            <p>
              This issue contains {articles.length} articles covering various topics in
              engineering, technology, and sciences. All articles have undergone rigorous
              peer review and represent cutting-edge research in their respective fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentIssues;
