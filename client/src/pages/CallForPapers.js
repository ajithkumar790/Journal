import React from 'react';
import { Link } from 'react-router-dom';

function CallForPapers() {
  return (
    <div className="page">
      <nav className="nav-buttons">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/call-for-papers" className="nav-btn active">Call for Papers</Link>
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
        <h1 className="section-title">Call for Papers</h1>
        
        <div className="content-half">
          <div className="content-text">
            <h2>About the Journal</h2>
            <p>
              The Journal of Academic Research is currently accepting submissions for the 
              upcoming volume. We invite researchers, academicians, and practitioners to 
              submit their original research papers, review articles, and short communications.
            </p>
            <p>
              Our journal covers a wide range of disciplines including but not limited to:
              Science, Technology, Engineering, Mathematics, Social Sciences, Humanities, 
              Medicine, and Management. We welcome interdisciplinary research that bridges 
              multiple fields of study.
            </p>
            <p>
              All submitted papers undergo a rigorous peer-review process by experts in the 
              respective fields. We are committed to providing timely reviews and maintaining 
              the highest standards of academic excellence.
            </p>

            <h3>Indexing & Abstracting</h3>
            <p>
              Our journal is indexed in major academic databases including Google Scholar, 
              Web of Science, Scopus, and many other renowned indexing services. This ensures 
              maximum visibility and citation impact for your research.
            </p>

            <h3>Important Dates</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Paper Submission Deadline</td>
                  <td>February 28, 2026</td>
                </tr>
                <tr>
                  <td>Review Completion</td>
                  <td>March 15, 2026</td>
                </tr>
                <tr>
                  <td>Notification of Acceptance</td>
                  <td>March 20, 2026</td>
                </tr>
                <tr>
                  <td>Camera-Ready Submission</td>
                  <td>March 30, 2026</td>
                </tr>
                <tr>
                  <td>Publication Date</td>
                  <td>April 2026</td>
                </tr>
              </tbody>
            </table>

            <h3>Submission Process</h3>
            <ol>
              <li>Prepare your manuscript according to our guidelines</li>
              <li>Submit through our online submission system</li>
              <li>Receive confirmation within 24 hours</li>
              <li>Track your paper through the review process</li>
              <li>Get published upon acceptance</li>
            </ol>

            <Link to="/submit" className="btn btn-submit">Submit Your Paper</Link>
          </div>
          
          <div className="content-text">
            <div className="card">
              <h3>Why Publish With Us?</h3>
              <ul>
                <li>Rigorous peer-review process</li>
                <li>Fast publication timeline</li>
                <li>Open access availability</li>
                <li>DOI for all articles</li>
                <li>Global visibility through indexing</li>
                <li>No page limits</li>
              </ul>
            </div>
            
            <div className="card">
              <h3>Paper Categories</h3>
              <ul>
                <li>Original Research Papers</li>
                <li>Review Articles</li>
                <li>Short Communications</li>
                <li>Case Studies</li>
                <li>Letter to Editor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallForPapers;
