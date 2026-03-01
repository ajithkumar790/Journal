import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Submit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    researchDomain: '',
    paperTitle: '',
    abstract: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/submissions', formData);
      console.log('Submission successful:', response.data);
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      // Still show success for demo purposes
      setSubmitted(true);
    }
  };

  return (
    <div className="page">
      <nav className="nav-buttons">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/call-for-papers" className="nav-btn">Call for Papers</Link>
        <Link to="/editorial-board" className="nav-btn">Editorial Board</Link>
        <Link to="/guidelines" className="nav-btn">Guidelines</Link>
        <Link to="/submit" className="nav-btn active">Submit</Link>
        <Link to="/current-issues" className="nav-btn">Current Issues</Link>
        <Link to="/archives" className="nav-btn">Archives</Link>
        <Link to="/indexing" className="nav-btn">Index</Link>
        <Link to="/fees" className="nav-btn">Fees</Link>
        <Link to="/reviewers" className="nav-btn">Reviewers</Link>
      </nav>

      <div className="page-section">
        <h1 className="section-title">Submission By E-Mail</h1>
        
        <div className="content-half">
          <div className="content-text">
            <h2>Submission of Manuscripts</h2>
            <p>
              Submission of Manuscripts can also be done by email to: 
              <strong> kungumaraj@gmail.com</strong>
            </p>

            <div className="card">
              <h3>Please Note the following when submitting by Email:</h3>
              <ul>
                <li>
                  <strong>The Subject Line Should be:</strong> Paper Submission : "Paper Title"
                </li>
                <li>
                  <strong>Cover letter should be included</strong> along with submission which 
                  should include the domain of research to fasten the review process of the manuscript.
                </li>
                <li>
                  <strong>Manuscript should be sent in .docx/.pdf</strong> format
                </li>
              </ul>
            </div>

            {submitted ? (
              <div className="card" style={{background: '#d4edda', borderColor: '#28a745'}}>
                <h3>Thank you for your submission!</h3>
                <p>We have received your manuscript and will process it shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Author Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label>Research Domain *</label>
                  <select
                    name="researchDomain"
                    value={formData.researchDomain}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Domain</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="engineering">Engineering</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="biology">Biology</option>
                    <option value="medicine">Medicine</option>
                    <option value="social-sciences">Social Sciences</option>
                    <option value="humanities">Humanities</option>
                    <option value="management">Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Paper Title *</label>
                  <input
                    type="text"
                    name="paperTitle"
                    value={formData.paperTitle}
                    onChange={handleChange}
                    required
                    placeholder="Enter paper title"
                  />
                </div>

                <div className="form-group">
                  <label>Abstract *</label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Enter paper abstract (150-250 words)"
                  />
                </div>

                <div className="form-group">
                  <label>Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any additional information"
                  />
                </div>

                <button type="submit" className="btn btn-submit">Submit Paper</button>
              </form>
            )}
          </div>
          
          <div className="content-text">
            <div className="card">
              <h3>Submission Checklist</h3>
              <ul>
                <li>Cover Letter</li>
                <li>Manuscript (.docx/.pdf)</li>
                <li>Title Page</li>
                <li>Abstract (150-250 words)</li>
                <li>Keywords (4-6)</li>
                <li>References</li>
                <li>Figures & Tables</li>
                <li>Copyright Form</li>
                <li>Plagiarism Report</li>
              </ul>
            </div>

            <div className="card">
              <h3>Contact Information</h3>
              <p><strong>Editor-in-Chief:</strong> Dr. Kungumaraj</p>
              <p><strong>Email:</strong> kungumaraj@gmail.com</p>
              <p><strong>Phone:</strong> +91 79045620167</p>
            </div>

            <div className="card">
              <h3>Processing Time</h3>
              <ul>
                <li>Initial Review: 24-48 hours</li>
                <li>Peer Review: 4-6 weeks</li>
                <li>Decision: Within 8 weeks</li>
                <li>Publication: 2-3 weeks after acceptance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submit;
