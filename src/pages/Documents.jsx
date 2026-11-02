import React from 'react';

export default function Documents({ onOpenLightbox }) {
  // Detected document file states
  const reportAvailable = true;
  const reportPath = '/DOCUMENTS/REPORT/Industrial_Automation_Load_Management_System_Final_Report.docx';
  const reportFileName = 'Industrial_Automation_Load_Management_System_Final_Report.docx';
  
  // Research paper is checked against project folder; currently none present
  const researchPaperAvailable = false;
  const researchPaperPath = null;

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

        {/* Section 1 & 2: Project Report & Research Paper */}
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
                    File Verified & Available
                  </div>
                </div>
              </div>

              <p className="doc-desc">
                The comprehensive final project report documenting the design methodology, circuit schematics,
                IoT network architecture, relay control algorithm, load management analysis, and test results.
              </p>

              <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Detected Document:</div>
                <div style={{ color: 'var(--text-highlight)', fontWeight: 600, wordBreak: 'break-all' }}>{reportFileName}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.2rem' }}>Format: Microsoft Word (.docx) &bull; Size: ~1.3 MB</div>
              </div>
            </div>

            <div className="doc-actions">
              {reportAvailable ? (
                <>
                  <a
                    href={reportPath}
                    download={reportFileName}
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download Report
                  </a>
                  <a
                    href={reportPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Open File
                  </a>
                </>
              ) : (
                <div className="btn btn-outline btn-disabled" style={{ width: '100%' }}>
                  Project Report Coming Soon
                </div>
              )}
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
                  <div className="doc-status-badge status-soon">
                    <span className="badge-dot" style={{ backgroundColor: 'var(--accent-amber)', boxShadow: '0 0 8px var(--accent-amber)' }}></span>
                    Research Paper Coming Soon
                  </div>
                </div>
              </div>

              <p className="doc-desc">
                Academic peer-reviewed manuscript submission detailing the experimental findings, performance
                metrics, latency benchmark of cloud-assisted relay commutation, and algorithmic power balancing.
              </p>

              <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Status Scan:</div>
                <div style={{ color: 'var(--accent-amber)', fontWeight: 500 }}>
                  DOCUMENTS/RESEARCH PAPER directory scanned &bull; Pending conference / journal upload.
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.2rem' }}>
                  No published manuscript file detected currently.
                </div>
              </div>
            </div>

            <div className="doc-actions">
              {researchPaperAvailable ? (
                <a
                  href={researchPaperPath}
                  download
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Download Research Paper
                </a>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline btn-disabled"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  Research Paper Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>

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
