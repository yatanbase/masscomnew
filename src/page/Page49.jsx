import React from 'react';
import Image1 from '../asset/Our gallery/25 march/IMG-20250330-WA0040.jpg';
import Image3 from '../asset/Our gallery/25 march/IMG-20250330-WA0042.jpg';
import Image4 from '../asset/Our gallery/25 march/IMG-20250330-WA0043.jpg';
import Image5 from '../asset/Our gallery/25 march/IMG-20250330-WA0044.jpg';
import Image6 from '../asset/Our gallery/25 march/IMG-20250330-WA0045.jpg';
import Image7 from '../asset/Our gallery/25 march/IMG-20250330-WA0046.jpg';

import Home from '../components/HomeButton';

const images = [
  { id: 1, src: Image1, alt: 'Image 1' },
  { id: 3, src: Image3, alt: 'Image 3' },
  { id: 4, src: Image4, alt: 'Image 4' },
  { id: 5, src: Image5, alt: 'Image 5' },
  { id: 6, src: Image6, alt: 'Image 6' },
  { id: 7, src: Image7, alt: 'Image 7' },
];

const Page49 = () => {
  return (
    <div style={{ margin: '50px 0' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-10 p-4"
            style={{
              backgroundColor: '#f0f0f0',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              marginTop: '80px',
              borderRadius: '10px'
            }}
          >
            <h2 className="text-center mb-4">March 25</h2>
            <div className="row">
              {images.map((image) => (
                <div key={image.id} className="col-md-4 mb-4 text-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid rounded border p-2"
                    style={{ height: '210px', objectFit: 'cover', width: '100%' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page49;
