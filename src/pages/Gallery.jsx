import React, { useState } from 'react';

export default function Gallery({ onOpenLightbox }) {
  // Section 1: Specified Smart Application & Integrations (in one horizontal row)
  const smartIntegrationImages = [
    {
      id: 'smart-life',
      title: 'Smart Life Application',
      filename: 'SMART LIFE APP.jpg',
      desc: 'Mobile dashboard showing real-time relay telemetry, individual appliance switches, schedule timers, and current power draw monitoring.',
      src: '/DOCUMENTS/PROJECT IMAGES/SMART LIFE APP.jpg'
    },
    {
      id: 'alexa',
      title: 'Amazon Alexa Integration',
      filename: 'ALEXA INTEGRATION.jpg',
      desc: 'Voice skill binding and cloud linkage enabling hands-free industrial automation commands such as "Alexa, turn on Factory Line 1".',
      src: '/DOCUMENTS/PROJECT IMAGES/ALEXA INTEGRATION.jpg'
    },
    {
      id: 'google-home',
      title: 'Google Home Ecosystem',
      filename: 'GOOGLE HOME.jpg',
      desc: 'Google Assistant pairing for quick device toggling, multi-room automated load management routines, and live status feedback.',
      src: '/DOCUMENTS/PROJECT IMAGES/GOOGLE HOME.jpg'
    }
  ];

  // Engineering Schematics & Diagrams (Supplementary actual assets)
  const schematicImages = [
    {
      id: 'block-diagram',
      title: 'System Block Diagram',
      filename: 'BLOCK DIAGRAM.jpg',
      desc: 'Functional architecture linking AC power supply, optocoupler isolation, MCU, relay array, and WiFi cloud broker.',
      src: '/DOCUMENTS/PROJECT IMAGES/BLOCK DIAGRAM.jpg'
    },
    {
      id: 'circuit-diagram',
      title: 'Comprehensive Circuit Diagram',
      filename: 'CIRCUIT DIAGRAM.png',
      desc: 'Detailed electrical wiring layout detailing transformer stepping, rectifier bridge, filter capacitors, and transistor driving switches.',
      src: '/DOCUMENTS/PROJECT IMAGES/CIRCUIT DIAGRAM.png'
    },
    {
      id: 'schematics',
      title: 'Hardware Schematics',
      filename: 'SCHEMATICS.jpg',
      desc: 'Component-level electrical schematic detailing pin mappings, pull-up resistors, and relay coil flyback diode protection.',
      src: '/DOCUMENTS/PROJECT IMAGES/SCHEMATICS.jpg'
    }
  ];

  // Section 2: Detected project videos from VIDEOS folder
  const projectVideos = [
    {
      filename: 'FRONT PAGE.mp4',
      title: 'FRONT PAGE.mp4',
      subtitle: 'Complete System Overview & Working Demo',
      path: '/VIDEOS/FRONT PAGE.mp4',
      altPath: '/DOCUMENTS/PROJECT VIDEOS/FRONT PAGE.mp4'
    },
    {
      filename: '1.mp4',
      title: '1.mp4',
      subtitle: 'Relay Switching & Load Test Demonstration 1',
      path: '/VIDEOS/1.mp4',
      altPath: '/DOCUMENTS/PROJECT VIDEOS/1.mp4'
    },
    {
      filename: '2.mp4',
      title: '2.mp4',
      subtitle: 'IoT Application Sync & Live Triggering 2',
      path: '/VIDEOS/2.mp4',
      altPath: '/DOCUMENTS/PROJECT VIDEOS/2.mp4'
    },
    {
      filename: '3.mp4',
      title: '3.mp4',
      subtitle: 'Voice Assistant Response & Load Shedding 3',
      path: '/VIDEOS/3.mp4',
      altPath: '/DOCUMENTS/PROJECT VIDEOS/3.mp4'
    }
  ];

  const [activeTab, setActiveTab] = useState('integrations');

  return (
    <div className="gallery-page" style={{ padding: '3.5rem 0' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="badge" style={{ marginBottom: '0.75rem' }}>Visual Demonstrations</span>
          <h2>PROJECT IMAGES & VIDEOS</h2>
          <p>
            Explore real-time operation demonstrations, smart application interfaces,
            voice control integrations, and laboratory video recordings.
          </p>
        </div>

        {/* SECTION 1: SMART APPLICATION & INTEGRATIONS */}
        <section className="gallery-section" style={{ paddingTop: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge" style={{ marginBottom: '0.5rem' }}>Section 1</span>
              <h3 className="font-tech" style={{ fontSize: '1.65rem', color: '#ffffff' }}>
                SMART APPLICATION & INTEGRATIONS
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Three-channel smart cloud connectivity enabling remote monitoring, mobile dashboards, and voice control.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                className={`btn ${activeTab === 'integrations' ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                onClick={() => setActiveTab('integrations')}
              >
                App & Voice Controls
              </button>
              <button
                className={`btn ${activeTab === 'schematics' ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                onClick={() => setActiveTab('schematics')}
              >
                Schematics & Circuit Diagrams
              </button>
            </div>
          </div>

          {activeTab === 'integrations' && (
            <div className="triplet-image-grid">
              {smartIntegrationImages.map((item) => (
                <div
                  key={item.id}
                  className="gallery-card"
                  onClick={() => onOpenLightbox(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox(item)}
                >
                  <div className="img-box">
                    <img src={item.src} alt={item.title} loading="lazy" />
                    <div className="image-overlay">
                      <span className="overlay-btn">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                        Click to Enlarge
                      </span>
                    </div>
                  </div>
                  <div className="gallery-caption">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div style={{ marginTop: '0.6rem', fontSize: '0.75rem', color: 'var(--electric-blue)' }}>
                      Source: DOCUMENTS\PROJECT IMAGES\{item.filename}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'schematics' && (
            <div className="triplet-image-grid">
              {schematicImages.map((item) => (
                <div
                  key={item.id}
                  className="gallery-card"
                  onClick={() => onOpenLightbox(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox(item)}
                >
                  <div className="img-box">
                    <img src={item.src} alt={item.title} loading="lazy" />
                    <div className="image-overlay">
                      <span className="overlay-btn">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                        Click to Enlarge
                      </span>
                    </div>
                  </div>
                  <div className="gallery-caption">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div style={{ marginTop: '0.6rem', fontSize: '0.75rem', color: 'var(--electric-blue)' }}>
                      Source: DOCUMENTS\PROJECT IMAGES\{item.filename}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION 2: PROJECT VIDEOS */}
        <section className="gallery-section" style={{ borderTop: '1px solid var(--border-color)', marginTop: '2.5rem', paddingTop: '3rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="badge" style={{ marginBottom: '0.5rem' }}>Section 2</span>
            <h3 className="font-tech" style={{ fontSize: '1.65rem', color: '#ffffff' }}>
              PROJECT VIDEOS
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Automatically detected local video recordings from the VIDEOS directory.
              All video players include full controls and support playback on demand without intrusive autoplay.
            </p>
          </div>

          <div className="videos-grid">
            {projectVideos.map((video, idx) => (
              <div key={idx} className="video-card">
                <div className="video-player-box">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    style={{ width: '100%', height: '100%' }}
                  >
                    <source src={video.path} type="video/mp4" />
                    <source src={video.altPath} type="video/mp4" />
                    Your browser does not support HTML5 video playback.
                  </video>
                </div>
                <div className="video-card-info">
                  <div className="video-card-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--electric-blue)', flexShrink: 0 }}>
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <span>{video.title}</span>
                  </div>
                  <p className="video-card-meta">{video.subtitle}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.8rem', fontSize: '0.78rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '0.6rem' }}>
                    <span>Format: H.264 / MP4</span>
                    <span style={{ color: 'var(--accent-green)' }}>&bull; Verified File</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
