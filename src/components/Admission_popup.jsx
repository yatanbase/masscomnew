import React, { useEffect, useRef } from 'react';
import './ad_popup.css'; // Import the CSS for styling
import Image1 from '../asset/popup (1).jpg'
// import Image2 from '../asset/popup (2).jpg'

const Admission_popup = ({ onClose }) => {
  const adRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (adRef.current && !adRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

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
