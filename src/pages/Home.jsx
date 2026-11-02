import React from 'react';

export default function Home({ setCurrentPage }) {
  const teamMembers = [
    { name: 'ADITYA WAGHULE', initials: 'AW' },
    { name: 'SMIKSHA MANE', initials: 'SM' },
    { name: 'ANKITA KUMBHARKAR', initials: 'AK' },
    { name: 'GITANJALI SALUNKHE', initials: 'GS' }
  ];

  const features = [
    {
      title: 'Industrial Load Management',
      desc: 'Optimizes electrical power distribution, prevents substation overload, and prioritizes critical industrial machinery to prevent voltage drops.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      )
    },
    {
      title: 'IoT-Based Monitoring & Control',
      desc: 'Continuous real-time telemetry of electrical operational parameters with automated micro-controller switching and sensor-based feedback loops.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: 'Remote Operation of Electrical Loads',
      desc: 'Seamless manual and programmed relay control across single and multi-phase industrial electrical appliances from anywhere via cloud networking.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
        </svg>
      )
    },
    {
      title: 'Smart Life Application Integration',
      desc: 'Full wireless synchronization with the Smart Life mobile ecosystem, offering configurable timers, schedule automation, and live load states.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: 'Alexa & Google Home Integration',
      desc: 'Hands-free voice assistant capability allowing plant supervisors and engineers to execute load switching commands through voice commands.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      )
    },
    {
      title: 'Industrial Safety & Reliability',
      desc: 'Galvanically isolated relay circuitry, solid ground planes, and circuit protection designed to prevent transients and reverse EMF in industrial setups.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column */}
            <div className="hero-content">
              <span className="badge">
                <span className="badge-dot"></span>
                Industrial Automation Project
              </span>
              <h1 className="hero-heading">
                INDUSTRIAL <span className="gradient-text">AUTOMATION</span>
              </h1>
              <h2 className="hero-subheading">
                IoT-Based Industrial Load Management System
              </h2>
              <p className="hero-description">
                An intelligent industrial automation system designed to monitor and manage electrical loads
                using IoT technology. The system enables smart load control, remote monitoring, and
                integration with smart home and voice assistant platforms.
              </p>

              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setCurrentPage('documents');
                    window.location.hash = 'documents';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Project Documents
                </button>

                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setCurrentPage('gallery');
                    window.location.hash = 'gallery';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  Explore Gallery & Videos
                </button>
              </div>
            </div>

            {/* Right Column: Local Autoplay Video */}
            <div className="hero-media">
              <div className="video-frame-wrapper">
                <div className="video-frame-inner">
                  <div className="video-frame-header">
                    <span>LIVE DEMONSTRATION // FRONT PAGE</span>
                    <div className="status-indicator">
                      <span className="status-dot"></span>
                      <span>SYSTEM ACTIVE</span>
                    </div>
                  </div>
                  <video
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src="/VIDEOS/FRONT PAGE.mp4" type="video/mp4" />
                    <source src="/DOCUMENTS/PROJECT VIDEOS/FRONT PAGE.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video streaming.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About The Project Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Overview</span>
            <h2>ABOUT THE PROJECT</h2>
            <p>
              A comprehensive engineering overview of our IoT-driven electrical load automation and smart cloud integration.
            </p>
          </div>

          {/* Technical narrative */}
          <div className="tech-card" style={{ marginBottom: '2.5rem' }}>
            <h3 className="font-tech" style={{ fontSize: '1.35rem', marginBottom: '0.85rem', color: 'var(--text-highlight)' }}>
              Project Summary & Technical Scope
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '1rem' }}>
              The <strong>IoT-Based Industrial Load Management System</strong> addresses the critical demand in modern industrial facilities
              for real-time power oversight and automated load shedding. Industrial plants encounter substantial operational costs and
              potential equipment degradation during peak demand spikes. This system introduces an intelligent control topology where
              multiple electrical loads are interfaced via solid-state and electromagnetic relays driven by an IoT controller board.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
              By integrating with the <strong>Smart Life IoT application</strong> along with <strong>Amazon Alexa</strong> and <strong>Google Home</strong> voice assistant platforms,
              the prototype demonstrates both autonomous load switching logic and seamless manual remote accessibility. Operators can
              monitor real-time circuit parameters, schedule operational duty cycles, and trigger rapid shutoffs without manual intervention
              at dangerous high-voltage switchgear.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="about-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="about-feature-card">
                <div className="feature-icon-box">{feat.icon}</div>
                <h4 className="feature-title">{feat.title}</h4>
                <p className="feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Engineering Team</span>
            <h2>PROJECT TEAM</h2>
            <p>Undergraduate engineering students responsible for system design, hardware development, and cloud integration.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-avatar-placeholder">{member.initials}</div>
                <h4 className="team-name">{member.name}</h4>
                <div className="team-role">Project Engineer</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
