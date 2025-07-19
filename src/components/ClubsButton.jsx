import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faXTwitter,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

function VerticalButtons() {
  const [showSocial, setShowSocial] = useState(false);

  const clubStyle = {
    backgroundColor: '#780000',
    color: 'white',
    border: 'none',
    padding: '12px 16px',
    borderRadius: '0 0 10px 10px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    transform: 'rotate(-90deg)',
    transformOrigin: 'right bottom',
  };

  const socialPopupStyle = {
    position: 'absolute',
    top: '0',
    right: '100%',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    zIndex: 1001,
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginBottom: '10px',
    padding: '8px 12px',
    borderRadius: '8px',
    color: 'white',
  };

  return (
    <>
      {/* SJMC Club Forum */}
      <div style={{ position: 'fixed', top: '30%', right: 0, zIndex: 1000 }}>
        <a
          href="https://sjmc-clubs.proboards.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={clubStyle}
        >
          <FontAwesomeIcon icon={faCommentAlt} />
          SJMC Club Forum
        </a>
      </div>

      {/* Social Connect Toggle */}
      <div style={{ position: 'fixed', top: '60%', right: 0, zIndex: 1000 }}>
        <div style={{ position: 'relative' }}>
          {showSocial && (
            <div style={socialPopupStyle}>
              <a  href="https://www.facebook.com/people/School-of-Journalism-and-Mass-Communication-Patna/100063903589436/"  target="_blank"  rel="noopener noreferrer"  style={{ ...linkStyle, backgroundColor: '#3b5998' }} >
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </a>

              <a
                href="https://x.com/PatnaSjmc"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, backgroundColor: '#000000' }}
              >
                <FontAwesomeIcon icon={faXTwitter} />
                X (Twitter)
              </a>

              <a
                href="https://www.youtube.com/@AryabhattaKnowledgeUniversity"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, backgroundColor: '#FF0000' }}
              >
                <FontAwesomeIcon icon={faYoutube} />
                AKU YouTube
              </a>

              <a
                href="https://www.youtube.com/@schoolofjournalismmasscomm6140"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, backgroundColor: '#FF0000' }}
              >
                <FontAwesomeIcon icon={faYoutube} />
                SJMC YouTube
              </a>

              <a
                href="https://wa.me/919241027682" // Updated WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, backgroundColor: '#25D366', marginBottom: 0 }}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                WhatsApp
              </a>
            </div>
          )}

          {/* Rotated Button */}
          <div
            style={clubStyle}
            onClick={() => setShowSocial(!showSocial)}
            title="Click to toggle Social Links"
          >
            Social Connect
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticalButtons;
