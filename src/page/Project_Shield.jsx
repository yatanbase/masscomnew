import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/HomeButton';
import Image100 from '../asset/Our gallery/Project_Shield/k1.jpeg';
import Image101 from '../asset/Our gallery/Project_Shield/k2.jpeg';
import Image102 from '../asset/Our gallery/Project_Shield/k3.jpeg';
import Image103 from '../asset/Our gallery/Project_Shield/k4.jpeg';
import Image104 from '../asset/Our gallery/Project_Shield/k5.jpeg';
import Image105 from '../asset/Our gallery/Project_Shield/k6.jpeg';
import Image106 from '../asset/Our gallery/Project_Shield/k7.jpeg';
import Image107 from '../asset/Our gallery/Project_Shield/k8.jpeg';
import Image108 from '../asset/Our gallery/Project_Shield/k9.jpeg';
import Image109 from '../asset/Our gallery/Project_Shield/k10.jpeg';
import Image110 from '../asset/Our gallery/Project_Shield/k11.jpeg';
import Image111 from '../asset/Our gallery/Project_Shield/k12.jpeg';
import Image112 from '../asset/Our gallery/Project_Shield/k13.jpeg';
import Image113 from '../asset/Our gallery/Project_Shield/k14.jpeg';
import Image114 from '../asset/Our gallery/Project_Shield/k15.jpeg';
import Image115 from '../asset/Our gallery/Project_Shield/k16.jpeg';
import Image116 from '../asset/Our gallery/Project_Shield/k17.jpeg';
import Image117 from '../asset/Our gallery/Project_Shield/k18.jpeg';
import Image118 from '../asset/Our gallery/Project_Shield/k19.jpeg';
import Image119 from '../asset/Our gallery/Project_Shield/k20.jpeg';
import Image120 from '../asset/Our gallery/Project_Shield/k21.jpeg';
import Image121 from '../asset/Our gallery/Project_Shield/k22.jpeg';
import Image122 from '../asset/Our gallery/Project_Shield/k23.jpeg';
import Image123 from '../asset/Our gallery/Project_Shield/k27.jpeg';
import Image124 from '../asset/Our gallery/Project_Shield/k24.jpeg';
import Image125 from '../asset/Our gallery/Project_Shield/k25.jpeg';
import Image126 from '../asset/Our gallery/Project_Shield/k26.jpeg';
import Image127 from '../asset/Our gallery/Project_Shield/k28.jpeg';
import Image128 from '../asset/Our gallery/Project_Shield/k29.jpeg';
import Image129 from '../asset/Our gallery/Project_Shield/k30.jpeg';
import Image130 from '../asset/Our gallery/Project_Shield/k31.jpeg';
import Image131 from '../asset/Our gallery/Project_Shield/k32.jpeg';
import Image132 from '../asset/Our gallery/Project_Shield/k34.jpeg';


function Project_Shield() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const images = [
    { src: Image100, date: '12 Aug 2025' },
    { src: Image106, date: '12 Aug 2025' },
    { src: Image101, date: '12 Aug 2025' },
    { src: Image102, date: '12 Aug 2025' },
    { src: Image103, date: '12 Aug 2025' },
    { src: Image104, date: '12 Aug 2025' },
    { src: Image105, date: '12 Aug 2025' },
    { src: Image107, date: '12 Aug 2025' },
    { src: Image108, date: '12 Aug 2025' },
    { src: Image109, date: '12 Aug 2025' },
    { src: Image110, date: '12 Aug 2025' },
    { src: Image111, date: '12 Aug 2025' },
    { src: Image112, date: '12 Aug 2025' },
    { src: Image113, date: '12 Aug 2025' },
    { src: Image114, date: '12 Aug 2025' },
    { src: Image115, date: '12 Aug 2025' },
    { src: Image116, date: '12 Aug 2025' },
    { src: Image117, date: '12 Aug 2025' },
    { src: Image118, date: '12 Aug 2025' },
    { src: Image119, date: '12 Aug 2025' },
    { src: Image120, date: '12 Aug 2025' },
    { src: Image121, date: '12 Aug 2025' },
    { src: Image122, date: '12 Aug 2025' },
    { src: Image123, date: '12 Aug 2025' },
    { src: Image124, date: '12 Aug 2025' },
    { src: Image125, date: '12 Aug 2025' },
    { src: Image126, date: '12 Aug 2025' },
    { src: Image127, date: '12 Aug 2025' },
    { src: Image128, date: '12 Aug 2025' },
    { src: Image129, date: '12 Aug 2025' },
    { src: Image130, date: '12 Aug 2025' },
    { src: Image131, date: '12 Aug 2025' },
    { src: Image132, date: '12 Aug 2025' }

  ];

  const [zoomIndex, setZoomIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0, visible: false });

  // ✅ Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomIndex === null) return; // only work in zoom mode
      if (e.key === 'ArrowRight') setZoomIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setZoomIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === 'Escape') setZoomIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomIndex, images.length]);

  // ✅ Tooltip show/hide on mouse move
  let tooltipTimer;
  const handleMouseMove = (e) => {
    setHoverPos({ x: e.clientX, y: e.clientY, visible: true });
    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(() => setHoverPos((p) => ({ ...p, visible: false })), 1500);
  };

  const handleNext = (e) => { e.stopPropagation(); setZoomIndex((prev) => (prev + 1) % images.length); };
  const handlePrev = (e) => { e.stopPropagation(); setZoomIndex((prev) => (prev - 1 + images.length) % images.length); };

  const styles = {
    container: { margin: '50px' },
    card: { background: '#fff', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.2)', marginTop: '30px' },
    imgBox: { position: 'relative', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' },
    img: { objectFit: 'cover', height: '200px', width: '100%', transition: 'transform 0.3s ease' },
    overlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.6)', color: '#fff', opacity: 0, textAlign: 'center', padding: '5px', transition: 'opacity 0.3s' },
    zoom: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 },
    tooltip: { position: 'absolute', background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '14px', transform: 'translate(-50%,-120%)', whiteSpace: 'nowrap', opacity: hoverPos.visible ? 1 : 0, transition: 'opacity 0.3s' },
    arrow: { position: 'absolute', fontSize: '3rem', color: '#fff', cursor: 'pointer', opacity: 0.4, userSelect: 'none', transition: 'opacity 0.3s' }
  };

  return (
    <div style={styles.container}>
      <Home />
      <div className="container">
        <div className="p-4 mx-auto text-center" style={styles.card}>
          <h2 className="mb-4 fw-bold text-primary">OutSmart The Scammers PROJECT SHIELD | 12 Aug 2025</h2>

          {/* ✅ Image Grid */}
          <div className="row">
            {images.map((img, i) => (
              <div key={i} className="col-6 col-md-4 mb-3">
                <div
                  style={styles.imgBox}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector('.overlay').style.opacity = 1;
                    e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector('.overlay').style.opacity = 0;
                    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                  }}
                  onClick={() => setZoomIndex(i)}
                >
                  <img src={img.src} alt="Gallery" style={styles.img} />
                  <div className="overlay" style={styles.overlay}>OUTSMART THE SCAMMERS PROJECT SHIELD | 12 Aug 2025</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Zoom View */}
      {zoomIndex !== null && (
        <div style={styles.zoom} onMouseMove={handleMouseMove}>

          {/* ❌ Close only on button */}
          <span onClick={() => setZoomIndex(null)} style={{ position: 'absolute', top: 20, right: 30, fontSize: '2.5rem', color: '#fff', cursor: 'pointer' }}>&times;</span>

          {/* ◀ Prev */}
          <span onClick={handlePrev} style={{ ...styles.arrow, left: 30 }}>&#10094;</span>

          <img src={images[zoomIndex].src} alt="Zoomed" style={{ width: '100%', height: '100%', objectFit: 'contain' }} draggable={false} />

          {/* ▶ Next */}
          <span onClick={handleNext} style={{ ...styles.arrow, right: 30 }}>&#10095;</span>

          {/* ✅ Tooltip */}
          <div style={{ ...styles.tooltip, top: hoverPos.y, left: hoverPos.x }}>
            OUTSMART THE SCAMMERS PROJECT SHIELD | 12 Aug 2025
          </div>
        </div>
      )}
    </div>
  );
}

export default Project_Shield;