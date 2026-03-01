import React from 'react';
import { Link } from 'react-router-dom';

function Indexing() {
  const indexingServices = [
    {
      name: 'Google Scholar',
      description: 'The freely accessible web search engine that indexes the full text of scholarly literature',
      logo: '📚'
    },
    {
      name: 'Web of Science',
      description: 'A platform providing access to multiple databases containing citation data from academic journals',
      logo: '🌐'
    },
    {
      name: 'Scopus',
      description: 'Abstract and citation database of peer-reviewed literature including scientific journals',
      logo: '📊'
    },
    {
      name: 'PubMed',
      description: 'Free search engine accessing primarily the MEDLINE database of references and abstracts',
      logo: '🏥'
    },
    {
      name: 'IEEE Xplore',
      description: 'Digital library for technical literature in electrical engineering and computer science',
      logo: '⚡'
    },
    {
      name: 'ScienceDirect',
      description: 'Elsevier\'s platform for peer-reviewed scientific literature',
      logo: '🔬'
    },
    {
      name: 'ResearchGate',
      description: 'Social networking site for scientists and researchers to share papers',
      logo: '🔗'
    },
    {
      name: 'Academic Keys',
      description: 'Research indexing service for higher education',
      logo: '🔑'
    },
    {
      name: ' Ulrichsweb',
      description: 'Global serials directory providing detailed information about periodicals',
      logo: '📖'
    },
    {
      name: 'CrossRef',
      description: 'Registration agency for DOI providing persistent links to scholarly content',
      logo: '📋'
    },
    {
      name: 'DOAJ',
      description: 'Directory of Open Access Journals - community-curated online directory',
      logo: '📁'
    },
    {
      name: 'WorldCat',
      description: 'Global catalog of library collections from around the world',
      logo: '🌍'
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
        <Link to="/indexing" className="nav-btn active">Index</Link>
        <Link to="/fees" className="nav-btn">Fees</Link>
        <Link to="/reviewers" className="nav-btn">Reviewers</Link>
      </nav>

      <div className="page-section">
        <h1 className="section-title">Indexing & Abstracting</h1>
        
        <div className="content-half">
          <div className="content-text">
            <p>
              The Journal of Academic Research is indexed in major academic databases and 
              indexing services worldwide. This ensures maximum visibility and citation 
              impact for all published articles.
            </p>
            <p>
              Our commitment to quality research and rigorous peer-review process has 
              enabled us to be recognized by leading indexing services. Authors can be 
              confident that their work will reach a wide global audience.
            </p>

            <div className="indexing-list">
              {indexingServices.map((service, index) => (
                <div key={index} className="indexing-item">
                  <div style={{fontSize: '36px', marginBottom: '10px'}}>{service.logo}</div>
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="content-text">
            <div className="card">
              <h3>Benefits of Indexing</h3>
              <ul>
                <li>Increased visibility of published research</li>
                <li>Higher citation rates</li>
                <li>Global accessibility</li>
                <li>Enhanced reputation</li>
                <li>Wider readership base</li>
                <li>Long-term preservation</li>
              </ul>
            </div>

            <div className="card">
              <h3>DOI Registration</h3>
              <p>
                All articles published in our journal are assigned a Digital Object 
                Identifier (DOI) through CrossRef. This ensures persistent linking 
                and proper citation tracking.
              </p>
            </div>

            <div className="card">
              <h3>Impact Factor</h3>
              <p>
                Our journal is in the process of obtaining an official impact factor.
                Previous issues have shown promising citation metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Indexing;
