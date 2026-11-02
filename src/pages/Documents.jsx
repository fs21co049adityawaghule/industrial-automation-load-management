import React, { useState, useRef } from 'react';

export default function Documents({ onOpenLightbox }) {
  const [activeDoc, setActiveDoc] = useState(null);
  const viewerRef = useRef(null);

  const reportPath = '/documents/report.pdf';
  const reportFileName = 'report.pdf';

  const researchPaperPath = '/documents/research-paper.pdf';
  const researchPaperFileName = 'research-paper.pdf';

  const handleOpenDoc = (title, src) => {
    setActiveDoc({ title, src });
    setTimeout(() => {
      if (viewerRef.current) {
        viewerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const projectImages = [
    {
      id: 'pcb',
      title: 'Printed Circuit Board (PCB) Fabrication',
      desc: 'Custom designed double-sided PCB layout featuring power regulation, optical isolation relays, and IoT microcontroller headers.',
      src: '/DOCUMENTS/PROJECT IMAGES/PCB.jpg'
    },
    {
      id: 'full-project',
      title: 'Full Hardware Enclosure & Test Rig',
      desc: 'Complete assembled system prototype showing electrical load terminal blocks, control relays, LED status indicators, and main breaker integration.',
      src: '/DOCUMENTS/PROJECT IMAGES/FULL PROJECT.jpg'
    }
  ];

  return (
    <div className="documents-page" style={{ padding: '3.5rem 0' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="badge" style={{ marginBottom: '0.75rem' }}>Documentation</span>
          <h2>PROJECT DOCUMENTS & HARDWARE IMAGES</h2>
          <p>
            Official engineering documentation, project reports, and primary hardware implementation photographs.
          </p>
        </div>

        {/* Section 1 & 2: Project Report & Research Paper Cards */}
        <div className="documents-grid">
          {/* SECTION 1: PROJECT REPORT */}
          <div className="doc-card">
            <div>
              <div className="doc-header">
                <div className="doc-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="doc-title">Project Report</h3>
                  <div className="doc-status-badge status-available">
                    <span className="badge-dot" style={{ backgroundColor: 'var(--accent-green)', boxShadow: '0 0 8px var(--accent-green)' }}></span>
                    PDF Verified & Ready
                  </div>
                </div>
              </div>

              <p className="doc-desc">
                The comprehensive final project report documenting the design methodology, circuit schematics,
                IoT network architecture, relay control algorithm, load management analysis, and test results.
              </p>

              <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Embedded Document:</div>
                <div style={{ color: 'var(--text-highlight)', fontWeight: 600, wordBreak: 'break-all' }}>{reportFileName}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.2rem' }}>Format: Adobe PDF (.pdf) &bull; Size: ~1.1 MB</div>
              </div>
            </div>

            <div className="doc-actions">
              <button
                type="button"
                className={`btn ${activeDoc?.src === reportPath ? 'btn-primary' : 'btn-outline'}`}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => handleOpenDoc('Project Report', reportPath)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {activeDoc?.src === reportPath ? 'Currently Viewing Report' : 'View Report'}
              </button>
            </div>
          </div>

          {/* SECTION 2: RESEARCH PAPER */}
          <div className="doc-card">
            <div>
              <div className="doc-header">
                <div className="doc-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="doc-title">Research Paper</h3>
                  <div className="doc-status-badge status-available">
                    <span className="badge-dot" style={{ backgroundColor: 'var(--accent-green)', boxShadow: '0 0 8px var(--accent-green)' }}></span>
                    PDF Verified & Ready
                  </div>
                </div>
              </div>

              <p className="doc-desc">
                Academic peer-reviewed manuscript submission detailing the experimental findings, performance
                metrics, latency benchmark of cloud-assisted relay commutation, and algorithmic power balancing.
              </p>

              <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Embedded Document:</div>
                <div style={{ color: 'var(--text-highlight)', fontWeight: 600, wordBreak: 'break-all' }}>{researchPaperFileName}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.2rem' }}>Format: Adobe PDF (.pdf) &bull; Size: ~447 KB</div>
              </div>
            </div>

            <div className="doc-actions">
              <button
                type="button"
                className={`btn ${activeDoc?.src === researchPaperPath ? 'btn-primary' : 'btn-outline'}`}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => handleOpenDoc('Research Paper', researchPaperPath)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {activeDoc?.src === researchPaperPath ? 'Currently Viewing Paper' : 'View Research Paper'}
              </button>
            </div>
          </div>
        </div>

        {/* EMBEDDED PDF VIEWER SECTION */}
        {activeDoc && (
          <div ref={viewerRef} className="pdf-viewer-section" style={{ marginTop: '2.5rem', marginBottom: '3.5rem' }}>
            <div className="tech-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="doc-icon" style={{ width: '42px', height: '42px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-tech" style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0 }}>
                      {activeDoc.title}
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      Embedded In-Page PDF Viewer &bull; Interactive Multi-Page Scrolling
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="badge" style={{ fontSize: '0.75rem' }}>
                    <span className="badge-dot" style={{ backgroundColor: 'var(--accent-green)', boxShadow: '0 0 8px var(--accent-green)' }}></span>
                    Viewing Active
                  </span>
                  <button
                    type="button"
                    className="btn btn-outline"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
                    onClick={() => setActiveDoc(null)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    Close Viewer
                  </button>
                </div>
              </div>

              <div style={{ background: '#020617', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)', minHeight: '520px' }}>
                <iframe
                  src={activeDoc.src}
                  width="100%"
                  height="750px"
                  style={{ border: 'none', display: 'block', minHeight: '600px' }}
                  title={activeDoc.title}
                />
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: PROJECT IMAGES */}
        <div className="project-images-section">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Hardware Showcase</span>
            <h2>PROJECT IMAGES</h2>
            <p>
              High-resolution photographs of the custom manufactured PCB and the fully assembled industrial load management unit.
            </p>
          </div>

          <div className="dual-image-grid">
            {projectImages.map((img) => (
              <div
                key={img.id}
                className="image-preview-card"
                onClick={() => onOpenLightbox(img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox(img)}
              >
                <div className="image-container">
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <div className="image-overlay">
                    <span className="overlay-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      Click to Enlarge
                    </span>
                  </div>
                </div>
                <div className="image-card-caption">
                  <h4>{img.title}</h4>
                  <p>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
