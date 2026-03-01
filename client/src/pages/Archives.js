import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Archives() {
  const [volumes, setVolumes] = useState({});
  const [selectedVolume, setSelectedVolume] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [issues, setIssues] = useState([]);
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchVolumes();
  }, []);

  const fetchVolumes = async () => {
    try {
      const response = await axios.get('/api/issues/volumes');
      setVolumes(response.data);
    } catch (error) {
      console.log('Using mock data - API not connected');
      // Mock data
      setVolumes({
        5: [
          { volume: 5, issue: 2, year: 2026, month: 'February' },
          { volume: 5, issue: 1, year: 2026, month: 'January' }
        ],
        4: [
          { volume: 4, issue: 2, year: 2025, month: 'December' },
          { volume: 4, issue: 1, year: 2025, month: 'June' }
        ],
        3: [
          { volume: 3, issue: 2, year: 2024, month: 'December' },
          { volume: 3, issue: 1, year: 2024, month: 'June' }
        ],
        2: [
          { volume: 2, issue: 2, year: 2023, month: 'December' },
          { volume: 2, issue: 1, year: 2023, month: 'June' }
        ],
        1: [
          { volume: 1, issue: 2, year: 2022, month: 'December' },
          { volume: 1, issue: 1, year: 2022, month: 'June' }
        ]
      });
      setSelectedVolume(5);
    }
  };

  const handleVolumeClick = (volume) => {
    setSelectedVolume(volume);
    setSelectedIssue(null);
    setArticles([]);
  };

  const handleIssueClick = async (volume, issue) => {
    setSelectedIssue(issue);
    try {
      const response = await axios.get(`/api/issues/${volume}/${issue}`);
      setArticles(response.data.articles || []);
    } catch (error) {
      // Mock articles
      setArticles([
        {
          _id: `${volume}-${issue}-1`,
          title: `Research Article Volume ${volume} Issue ${issue} - Part 1`,
          authors: ['Author 1', 'Author 2'],
          abstract: 'Sample abstract for demonstration...',
          keywords: ['Research', 'Technology'],
          volume: volume,
          issue: issue,
          pageStart: 1,
          pageEnd: 10
        },
        {
          _id: `${volume}-${issue}-2`,
          title: `Research Article Volume ${volume} Issue ${issue} - Part 2`,
          authors: ['Author 3', 'Author 4'],
          abstract: 'Sample abstract for demonstration...',
          keywords: ['Engineering', 'Science'],
          volume: volume,
          issue: issue,
          pageStart: 11,
          pageEnd: 25
        }
      ]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality - in real app would call API
    console.log('Searching for:', searchQuery);
  };

  const volumeList = Object.keys(volumes).map(Number).sort((a, b) => b - a);

  return (
    <div className="page">
      <nav className="nav-buttons">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/call-for-papers" className="nav-btn">Call for Papers</Link>
        <Link to="/editorial-board" className="nav-btn">Editorial Board</Link>
        <Link to="/guidelines" className="nav-btn">Guidelines</Link>
        <Link to="/submit" className="nav-btn">Submit</Link>
        <Link to="/current-issues" className="nav-btn">Current Issues</Link>
        <Link to="/archives" className="nav-btn active">Archives</Link>
        <Link to="/indexing" className="nav-btn">Index</Link>
        <Link to="/fees" className="nav-btn">Fees</Link>
        <Link to="/reviewers" className="nav-btn">Reviewers</Link>
      </nav>

      <div className="page-section">
        <h1 className="section-title">Archives</h1>
        
        <div className="form-group" style={{maxWidth: '400px', marginBottom: '30px'}}>
          <form onSubmit={handleSearch} style={{display: 'flex', gap: '10px'}}>
            <input
              type="text"
              placeholder="Search articles by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{flex: 1}}
            />
            <button type="submit" className="btn">Search</button>
          </form>
        </div>

        <h3>Select Volume</h3>
        <div className="volume-buttons">
          {volumeList.map((volume) => (
            <button
              key={volume}
              className={`volume-btn ${selectedVolume === volume ? 'active' : ''}`}
              onClick={() => handleVolumeClick(volume)}
            >
              Volume {volume}
            </button>
          ))}
        </div>

        {selectedVolume && volumes[selectedVolume] && (
          <>
            <h3>Select Issue</h3>
            <div className="issue-buttons">
              {volumes[selectedVolume].map((issue) => (
                <button
                  key={issue.issue}
                  className={`issue-btn ${selectedIssue === issue.issue ? 'active' : ''}`}
                  onClick={() => handleIssueClick(selectedVolume, issue.issue)}
                >
                  Issue {issue.issue} - {issue.month} {issue.year}
                </button>
              ))}
            </div>
          </>
        )}

        {selectedIssue && (
          <div style={{marginTop: '30px'}}>
            <h3>Articles - Volume {selectedVolume}, Issue {selectedIssue}</h3>
            {articles.length === 0 ? (
              <p>No articles found in this issue.</p>
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Archives;
