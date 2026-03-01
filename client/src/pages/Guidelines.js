import React from 'react';
import { Link } from 'react-router-dom';

function Guidelines() {
  return (
    <div className="page">
      <nav className="nav-buttons">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/call-for-papers" className="nav-btn">Call for Papers</Link>
        <Link to="/editorial-board" className="nav-btn">Editorial Board</Link>
        <Link to="/guidelines" className="nav-btn active">Guidelines</Link>
        <Link to="/submit" className="nav-btn">Submit</Link>
        <Link to="/current-issues" className="nav-btn">Current Issues</Link>
        <Link to="/archives" className="nav-btn">Archives</Link>
        <Link to="/indexing" className="nav-btn">Index</Link>
        <Link to="/fees" className="nav-btn">Fees</Link>
        <Link to="/reviewers" className="nav-btn">Reviewers</Link>
      </nav>

      <div className="page-section">
        <h1 className="section-title">Author Guidelines</h1>
        
        <div className="content-half">
          <div className="content-text">
            <h2>Submission Guidelines</h2>
            <p>
              We welcome submissions from researchers worldwide. Please follow these 
              guidelines carefully to ensure smooth processing of your manuscript.
            </p>

            <div className="guideline-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Prepare Your Manuscript</h4>
                <p>
                  Ensure your manuscript follows our template and formatting requirements.
                  Include all required sections: Abstract, Introduction, Methodology,
                  Results, Discussion, Conclusion, and References.
                </p>
              </div>
            </div>

            <div className="guideline-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Check Plagiarism</h4>
                <p>
                  All manuscripts are checked for plagiarism using advanced detection
                  software. Ensure your work is original and properly cite all sources.
                  Maximum similarity index should be below 15%.
                </p>
              </div>
            </div>

            <div className="guideline-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Language and Formatting</h4>
                <p>
                  Manuscripts should be written in English (British or American style
                  consistently). Use Times New Roman, 12-point font, 1.5 line spacing.
                  Margins should be 1 inch on all sides.
                </p>
              </div>
            </div>

            <div className="guideline-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>References</h4>
                <p>
                  Use APA or IEEE citation style. Include all authors for works with
                  up to 6 authors. For works with more than 6 authors, list first
                  6 followed by "et al." Ensure all cited references are listed
                  and all listed references are cited.
                </p>
              </div>
            </div>

            <div className="guideline-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>Figures and Tables</h4>
                <p>
                  All figures and tables should be numbered consecutively and have
                  clear captions. Submit figures as separate high-resolution files
                  (minimum 300 dpi). Tables should be in editable format.
                </p>
              </div>
            </div>

            <div className="guideline-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h4>Cover Letter</h4>
                <p>
                  Include a cover letter explaining the significance of your research,
                  why it is suitable for this journal, and confirming that the manuscript
                  has not been submitted elsewhere.
                </p>
              </div>
            </div>

            <div className="guideline-step">
              <div className="step-number">7</div>
              <div className="step-content">
                <h4>Submit Online</h4>
                <p>
                  Create an account on our submission system, fill in the required
                  details, upload your manuscript and supplementary files, and
                  submit. You will receive a confirmation email within 24 hours.
                </p>
              </div>
            </div>

            <div className="guideline-step">
              <div className="step-number">8</div>
              <div className="step-content">
                <h4>Review Process</h4>
                <p>
                  After submission, your paper will undergo initial editorial review.
                  If suitable, it will be sent to 2-3 reviewers. The review process
                  typically takes 4-6 weeks. You will be notified of the decision
                  via email.
                </p>
              </div>
            </div>

            <div className="guideline-step">
              <div className="step-number">9</div>
              <div className="step-content">
                <h4>Revision and Resubmission</h4>
                <p>
                  If revisions are required, address all reviewer comments and submit
                  a revised manuscript within the specified deadline. Include a
                  detailed response to reviewers' comments.
                </p>
              </div>
            </div>

            <div className="guideline-step">
              <div className="step-number">10</div>
              <div className="step-content">
                <h4>Publication</h4>
                <p>
                  Upon acceptance, you will receive a proof for final correction.
                  After confirming the proof, your article will be published online
                  and assigned a DOI. Publication typically takes 2-3 weeks after
                  final approval.
                </p>
              </div>
            </div>
          </div>
          
          <div className="content-text">
            <div className="card">
              <h3>Document Requirements</h3>
              <ul>
                <li><strong>File Format:</strong> Word (.doc/.docx) or PDF</li>
                <li><strong>Font:</strong> Times New Roman, 12pt</li>
                <li><strong>Line Spacing:</strong> 1.5</li>
                <li><strong>Margins:</strong> 1 inch all sides</li>
                <li><strong>Page Numbers:</strong> Include</li>
                <li><strong>Abstract:</strong> 150-250 words</li>
                <li><strong>Keywords:</strong> 4-6 terms</li>
              </ul>
            </div>

            <div className="card">
              <h3>Article Types</h3>
              <ul>
                <li><strong>Research Article:</strong> 3000-5000 words</li>
                <li><strong>Review Article:</strong> 5000-7000 words</li>
                <li><strong>Short Communication:</strong> 1500-2000 words</li>
                <li><strong>Case Study:</strong> 2000-3000 words</li>
              </ul>
            </div>

            <div className="card">
              <h3>Ethical Guidelines</h3>
              <ul>
                <li>No plagiarism or self-plagiarism</li>
                <li>All authors must be listed</li>
                <li>No fabricated or falsified data</li>
                <li>Proper attribution of sources</li>
                <li>Conflict of interest disclosure</li>
                <li>Human/animal subject compliance</li>
              </ul>
            </div>

            <div className="card">
              <h3>Download Templates</h3>
              <button className="btn">Download Paper Template</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guidelines;
