import React, { useEffect, useRef } from 'react';
import './ad_popup.css'; // Import the CSS for styling
import Image1 from '../asset/popup (1).jpg'
// import Image2 from '../asset/popup (2).jpg'
import advideo from '../asset/skill courses.mp4'

const Admission_popup = ({ onClose }) => {
  const adRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (adRef.current && !adRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log('Autoplay blocked', e));
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="ad-overlay">
      <div className="ads-container" ref={adRef}>
        <button className="ad-close" onClick={onClose}> x </button>
        
       

        {/* Second Ad */}
        <div className="ad-box">
          <video className="ad-video" ref={videoRef} controls autoplay muted loop playsInline preload="metadata">
            <source src = {advideo} type="video/mp4" />
            
            </video>
          <img src={Image1} alt="Advertisement 1" className="ad-image" />
          <div className="button_container">
            <a href="https://adms.akubihar.ac.in/MMSY.aspx" target='_blank' className="primary-button">Click for Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission_popup;
