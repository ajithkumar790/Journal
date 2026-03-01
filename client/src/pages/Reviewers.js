import React from 'react';
import { Link } from 'react-router-dom';

function Reviewers() {
  const reviewers = [
    {
      name: 'Dr. Ramesh Kumar',
      affiliation: 'National Institute of Technology',
      expertise: 'Electrical Engineering',
      country: 'India'
    },
    {
      name: 'Dr. Priya Sharma',
      affiliation: 'Indian Institute of Technology',
      expertise: 'Mechanical Engineering',
      country: 'India'
    },
    {
      name: 'Dr. Michael Chen',
      affiliation: 'Stanford University',
      expertise: 'Computer Science',
      country: 'USA'
    },
    {
      name: 'Dr. Sarah Johnson',
      affiliation: 'Oxford University',
      expertise: 'Biotechnology',
      country: 'UK'
    },
    {
      name: 'Dr. Lisa Wang',
      affiliation: 'MIT',
      expertise: 'Artificial Intelligence',
      country: 'USA'
    },
    {
      name: 'Dr. James Wilson',
      affiliation: 'Cambridge University',
      expertise: 'Physics',
      country: 'UK'
    },
    {
      name: 'Dr. Emily Brown',
      affiliation: 'University of Toronto',
      expertise: 'Chemistry',
      country: 'Canada'
    },
    {
      name: 'Dr. David Lee',
      affiliation: 'National University of Singapore',
      expertise: 'Materials Science',
      country: 'Singapore'
    },
    {
      name: 'Dr. Anna Martinez',
      affiliation: 'University of Barcelona',
      expertise: 'Mathematics',
      country: 'Spain'
    },
    {
      name: 'Dr. Robert Taylor',
      affiliation: 'University of Melbourne',
      expertise: 'Environmental Science',
      country: 'Australia'
    }
  ];

  return (
    <div className="page">
      <nav className="nav-buttons">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/call-for-papers" className="nav-btn">Call for Papers</Link>
        <Link to="/editorial-board" className="nav-btn">Editorial Board</Link>
        <Link to="/guidelines" className="nav-btn">Guidelines</Link>
        <Link to="/submit" className="nav-btn">Submit</Link>
        <Link to="/current-issues" className="nav-btn">Current Issues</Link>
        <Link to="/archives" className="nav-btn">Archives</Link>
        <Link to="/indexing" className="nav-btn">Index</Link>
        <Link to="/fees" className="nav-btn">Fees</Link>
        <Link to="/reviewers" className="nav-btn active">Reviewers</Link>
      </nav>

      <div className="page-section">
        <h1 className="section-title">Reviewers</h1>
        
        <div className="content-half">
          <div className="content-text">
            <h2>Our Distinguished Reviewers</h2>
            <p>
              We are grateful to our panel of expert reviewers who volunteer their time
              and expertise to ensure the quality and integrity of published research.
              Our reviewers are renowned academics from prestigious institutions worldwide.
            </p>

            <div className="card">
              <h3>Become a Reviewer</h3>
              <p>
                We welcome applications from qualified researchers who would like to
                join our reviewer panel. Please send your CV and areas of expertise
                to our editorial office.
              </p>
            </div>

            <div className="card">
              <h3>Reviewer Benefits</h3>
              <ul>
                <li>Recognition as reviewer</li>
                <li>Certificate of appreciation</li>
                <li>Priority publication for own research</li>
                <li>Network with international experts</li>
                <li>Contribution to scholarly community</li>
              </ul>
            </div>
          </div>
          
          <div className="content-text">
            <h3>Current Reviewer Panel</h3>
            {reviewers.map((reviewer, index) => (
              <div key={index} className="reviewer-card">
                <div className="reviewer-photo">{reviewer.name.charAt(0)}</div>
                <div className="reviewer-info">
                  <h4>{reviewer.name}</h4>
                  <p><strong>Affiliation:</strong> {reviewer.affiliation}</p>
                  <p><strong>Expertise:</strong> {reviewer.expertise}</p>
                  <p><strong>Country:</strong> {reviewer.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviewers;
