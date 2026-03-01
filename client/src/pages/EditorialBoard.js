import React from 'react';
import { Link } from 'react-router-dom';

function EditorialBoard() {
  const editors = [
    {
      name: 'Dr. Kungumaraj',
      position: 'Editor-in-Chief',
      affiliation: 'Professor, Mohan Babu University',
      expertise: 'Computer Science & Engineering'
    },
    {
      name: 'Dr. B Ajith Kumar',
      position: 'Managing Editor',
      affiliation: 'Mohan Babu University',
      expertise: 'Information Technology'
    },
    {
      name: 'Dr. Ramesh Kumar',
      position: 'Associate Editor',
      affiliation: 'National Institute of Technology',
      expertise: 'Electrical Engineering'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Editorial Board Member',
      affiliation: 'Indian Institute of Technology',
      expertise: 'Mechanical Engineering'
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Editorial Board Member',
      affiliation: 'Stanford University, USA',
      expertise: 'Artificial Intelligence'
    },
    {
      name: 'Dr. Sarah Johnson',
      position: 'Editorial Board Member',
      affiliation: 'Oxford University, UK',
      expertise: 'Biotechnology'
    }
  ];

  return (
    <div className="page">
      <nav className="nav-buttons">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/call-for-papers" className="nav-btn">Call for Papers</Link>
        <Link to="/editorial-board" className="nav-btn active">Editorial Board</Link>
        <Link to="/guidelines" className="nav-btn">Guidelines</Link>
        <Link to="/submit" className="nav-btn">Submit</Link>
        <Link to="/current-issues" className="nav-btn">Current Issues</Link>
        <Link to="/archives" className="nav-btn">Archives</Link>
        <Link to="/indexing" className="nav-btn">Index</Link>
        <Link to="/fees" className="nav-btn">Fees</Link>
        <Link to="/reviewers" className="nav-btn">Reviewers</Link>
      </nav>

      <div className="page-section">
        <h1 className="section-title">Editorial Board</h1>
        
        <div className="content-half">
          <div className="content-text">
            <h2>Our Distinguished Editorial Board</h2>
            <p>
              Our editorial board consists of internationally recognized experts from various 
              disciplines. They bring diverse perspectives and extensive experience in 
              academic publishing, ensuring the highest quality of published research.
            </p>
            <p>
              The editorial board is responsible for maintaining the academic standards 
              of the journal, overseeing the peer-review process, and making final decisions 
              on manuscript acceptance. Members are selected based on their research expertise, 
              publication record, and commitment to scholarly excellence.
            </p>

            <div className="card">
              <h3>Editor-in-Chief</h3>
              <div className="reviewer-card">
                <div className="reviewer-photo">K</div>
                <div className="reviewer-info">
                  <h4>Dr. Kungumaraj</h4>
                  <p><strong>Position:</strong> Editor-in-Chief</p>
                  <p><strong>Affiliation:</strong> Professor, Mohan Babu University</p>
                  <p><strong>Expertise:</strong> Computer Science & Engineering</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3>Managing Editor</h3>
              <div className="reviewer-card">
                <div className="reviewer-photo">B</div>
                <div className="reviewer-info">
                  <h4>Dr. B Ajith Kumar</h4>
                  <p><strong>Position:</strong> Managing Editor</p>
                  <p><strong>Affiliation:</strong> Mohan Babu University</p>
                  <p><strong>Expertise:</strong> Information Technology</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="content-text">
            <h3>Editorial Board Members</h3>
            {editors.slice(2).map((editor, index) => (
              <div key={index} className="card">
                <div className="reviewer-card">
                  <div className="reviewer-photo">{editor.name.charAt(0)}</div>
                  <div className="reviewer-info">
                    <h4>{editor.name}</h4>
                    <p><strong>Position:</strong> {editor.position}</p>
                    <p><strong>Affiliation:</strong> {editor.affiliation}</p>
                    <p><strong>Expertise:</strong> {editor.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorialBoard;
