import React, { useEffect } from 'react';

export default function LightboxModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close enlarged preview">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="lightbox-img-wrap">
          <img src={image.src} alt={image.title || 'Enlarged project view'} />
        </div>

        <div className="lightbox-bar">
          <div className="lightbox-caption-text">
            <h3>{image.title}</h3>
            {image.desc && <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{image.desc}</p>}
          </div>
          <span className="badge" style={{ fontSize: '0.75rem' }}>
            <span className="badge-dot"></span> High Resolution
          </span>
        </div>
      </div>
    </div>
  );
}
