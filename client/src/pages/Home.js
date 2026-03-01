import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <nav className="nav-buttons">
        <Link to="/" className="nav-btn active">Home</Link>
        <Link to="/call-for-papers" className="nav-btn">Call for Papers</Link>
        <Link to="/editorial-board" className="nav-btn">Editorial Board</Link>
        <Link to="/guidelines" className="nav-btn">Guidelines</Link>
        <Link to="/submit" className="nav-btn">Submit</Link>
        <Link to="/current-issues" className="nav-btn">Current Issues</Link>
        <Link to="/archives" className="nav-btn">Archives</Link>
        <Link to="/indexing" className="nav-btn">Index</Link>
        <Link to="/fees" className="nav-btn">Fees</Link>
        <Link to="/reviewers" className="nav-btn">Reviewers</Link>
      </nav>

      <div className="page-section">
        <h1 className="section-title">Welcome to Journal of Academic Research</h1>
        
        <div className="content-half">
          <div className="content-text">
            <p>
              The Journal of Academic Research is a peer-reviewed multi-disciplinary journal dedicated 
              to publishing high-quality research articles in various fields of study. Our journal 
              provides a platform for researchers, academicians, and practitioners to share their 
              innovative findings and contribute to the advancement of knowledge.
            </p>
            <p>
              We welcome original research papers, review articles, and short communications from 
              all disciplines. Our editorial board consists of renowned experts from around the 
              world who ensure rigorous peer review and maintain the highest standards of academic 
              excellence. The journal publishes articles in English and accepts submissions from 
              authors globally.
            </p>
            <p>
              Our mission is to foster intellectual growth and promote interdisciplinary collaboration 
              among researchers. We strive to make significant contributions to the global body of 
              knowledge by providing open access to cutting-edge research findings. Join us in our 
              journey to advance human understanding across all fields of study.
            </p>
            <p>
              The journal follows a strict peer-review process to ensure the quality and originality 
              of published articles. We are committed to maintaining academic integrity and promoting 
              ethical research practices. Our publication ethics are aligned with international 
              standards and guidelines.
            </p>
          </div>
          
          <div className="content-text">
            <div className="card">
              <h3>Journal Highlights</h3>
              <ul>
                <li>Peer-reviewed publications</li>
                <li>Open access model</li>
                <li>Global editorial board</li>
                <li>Quick publication process</li>
                <li>DOI registration for all articles</li>
                <li>Indexed in major databases</li>
              </ul>
            </div>
            
            <div className="card">
              <h3>Current Statistics</h3>
              <p><strong>Published Articles:</strong> 150+</p>
              <p><strong>Total Volumes:</strong> 5</p>
              <p><strong>Total Issues:</strong> 15</p>
              <p><strong>Countries:</strong> 25+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
