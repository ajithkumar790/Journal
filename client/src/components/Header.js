import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        const response = await axios.get(`/api/search?q=${encodeURIComponent(searchQuery)}`);
        setSearchResults(response.data);
        setShowResults(true);
      } catch (error) {
        console.error('Search error:', error);
      }
    }
  };

  const handleResultClick = (article) => {
    setShowResults(false);
    setSearchQuery('');
    // Navigate to article detail or current issues
    navigate('/current-issues');
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowResults(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">J</div>
        <div>
          <div className="journal-name">Journal of Academic Research</div>
          <div className="journal-subtitle">Peer-Reviewed Multi-Disciplinary Journal</div>
        </div>
      </div>
      
      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchResults.length > 0 && setShowResults(true)}
        />
        <button type="submit">Search</button>
        
        {showResults && searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((article) => (
              <div
                key={article._id}
                className="search-result-item"
                onClick={() => handleResultClick(article)}
              >
                <h4>{article.title}</h4>
                <p>{article.authors.join(', ')}</p>
                <p>Vol. {article.volume}, Issue {article.issue}, {article.month} {article.year}</p>
              </div>
            ))}
          </div>
        )}
      </form>
    </header>
  );
}

export default Header;
