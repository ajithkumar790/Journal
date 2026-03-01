import React from 'react';
import { Link } from 'react-router-dom';

function Fees() {
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
        <Link to="/fees" className="nav-btn active">Fees</Link>
        <Link to="/reviewers" className="nav-btn">Reviewers</Link>
      </nav>

      <div className="page-section">
        <h1 className="section-title">Publication Fees</h1>
        
        <div className="content-half">
          <div className="content-text">
            <h2>Article Processing Charges</h2>
            <p>
              The Journal of Academic Research operates on an open access model.
              To sustain the quality of publishing and peer-review process, we charge
              a reasonable publication fee for accepted articles.
            </p>

            <div className="card">
              <h3>Publication Charges</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Article Type</th>
                    <th>Fee (INR)</th>
                    <th>Fee (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Research Article</td>
                    <td>₹5,000</td>
                    <td>$75</td>
                  </tr>
                  <tr>
                    <td>Review Article</td>
                    <td>₹7,000</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td>Short Communication</td>
                    <td>₹3,000</td>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <td>Case Study</td>
                    <td>₹4,000</td>
                    <td>$60</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card">
              <h3>Additional Charges</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Fee (INR)</th>
                    <th>Fee (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Color Figures</td>
                    <td>₹1,000/page</td>
                    <td>$15/page</td>
                  </tr>
                  <tr>
                    <td>Extra Pages (&gt;12)</td>
                    <td>₹500/page</td>
                    <td>$8/page</td>
                  </tr>
                  <tr>
                    <td>Rush Publication</td>
                    <td>₹3,000</td>
                    <td>$50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link to="/submit" className="btn btn-submit">Submit Your Paper</Link>
          </div>
          
          <div className="content-text">
            <div className="card">
              <h3>Payment Methods</h3>
              <ul>
                <li>Bank Transfer (NEFT/RTGS)</li>
                <li>Credit/Debit Card</li>
                <li>PayPal</li>
                <li>Demand Draft</li>
              </ul>
            </div>

            <div className="card">
              <h3>Waiver Policy</h3>
              <p>
                We offer fee waivers for authors from developing countries and those
                who demonstrate financial hardship. Please contact the editor to
                request a waiver.
              </p>
              <ul>
                <li>Full waiver: Students</li>
                <li>50% waiver: Co-authors</li>
                <li>Case-by-case: Others</li>
              </ul>
            </div>

            <div className="card">
              <h3>What's Included?</h3>
              <ul>
                <li>DOI registration</li>
                <li>Open access publication</li>
                <li>Peer-review process</li>
                <li>Editorial support</li>
                <li>PDF and HTML versions</li>
                <li>Lifetime archiving</li>
                <li>Citation tracking</li>
              </ul>
            </div>

            <div className="card">
              <h3>Invoice & Receipt</h3>
              <p>
                An official invoice will be sent upon acceptance of your manuscript.
                Payment is required before publication. A receipt will be provided
                after payment confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fees;
