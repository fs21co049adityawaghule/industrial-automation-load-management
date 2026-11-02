import React from 'react';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = id;
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>INDUSTRIAL AUTOMATION</h3>
            <p>
              IoT-Based Industrial Load Management System — Designed for intelligent
              electrical load monitoring, automated relay switching, and voice-assisted
              energy control for modern industrial infrastructures.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-nav">
              <li>
                <span className="footer-nav-link" onClick={() => handleNavClick('home')}>
                  Home
                </span>
              </li>
              <li>
                <span className="footer-nav-link" onClick={() => handleNavClick('documents')}>
                  Documents
                </span>
              </li>
              <li>
                <span className="footer-nav-link" onClick={() => handleNavClick('gallery')}>
                  Project Gallery
                </span>
              </li>
              <li>
                <span className="footer-nav-link" onClick={() => handleNavClick('contact')}>
                  Contact Us
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Technology Stack</h4>
            <ul className="footer-nav" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <li>IoT Microcontroller & Sensors</li>
              <li>Smart Life App Ecosystem</li>
              <li>Amazon Alexa Integration</li>
              <li>Google Home Voice Control</li>
              <li>Industrial Relay Control Board</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} INDUSTRIAL AUTOMATION — IoT-Based Industrial Load Management System. All rights reserved.
          </div>
          <div>
            College Engineering Project &bull; Department of Electronics & Telecommunication Engineering
          </div>
        </div>
      </div>
    </footer>
  );
}
