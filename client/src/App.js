import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all pages
import Home from './pages/Home';
import CallForPapers from './pages/CallForPapers';
import EditorialBoard from './pages/EditorialBoard';
import Guidelines from './pages/Guidelines';
import Submit from './pages/Submit';
import CurrentIssues from './pages/CurrentIssues';
import Archives from './pages/Archives';
import Indexing from './pages/Indexing';
import Fees from './pages/Fees';
import Reviewers from './pages/Reviewers';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/call-for-papers" element={<CallForPapers />} />
              <Route path="/editorial-board" element={<EditorialBoard />} />
              <Route path="/guidelines" element={<Guidelines />} />
              <Route path="/submit" element={<Submit />} />
              <Route path="/current-issues" element={<CurrentIssues />} />
              <Route path="/archives" element={<Archives />} />
              <Route path="/indexing" element={<Indexing />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/reviewers" element={<Reviewers />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
