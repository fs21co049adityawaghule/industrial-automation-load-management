import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import Home from './pages/Home';
import Documents from './pages/Documents';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'documents', 'gallery', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'documents', 'gallery', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main style={{ flex: '1 0 auto' }}>
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'documents' && <Documents onOpenLightbox={openLightbox} />}
        {currentPage === 'gallery' && <Gallery onOpenLightbox={openLightbox} />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Lightbox for Image Enlargement */}
      <LightboxModal image={lightboxImage} onClose={closeLightbox} />
    </div>
  );
}
