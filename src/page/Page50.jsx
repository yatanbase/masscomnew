import React from 'react';
import Image1 from '../asset/Our gallery/26 march/IMG-20250330-WA0057.jpg';
import Image2 from '../asset/Our gallery/26 march/IMG-20250330-WA0058.jpg';
import Image3 from '../asset/Our gallery/26 march/IMG-20250330-WA0059.jpg';
import Image4 from '../asset/Our gallery/26 march/IMG-20250330-WA0060.jpg';
import Image5 from '../asset/Our gallery/26 march/IMG-20250330-WA0061.jpg';

import Home from '../components/HomeButton';

const images = [
  { id: 1, src: Image1, alt: "Image 1" },
  { id: 2, src: Image2, alt: "Image 2" },
  { id: 3, src: Image3, alt: "Image 3" },
  { id: 4, src: Image4, alt: "Image 4" },
  { id: 5, src: Image5, alt: "Image 5" },
];

const Page50 = () => {
  return (
    <div style={{ margin: '50px' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            style={{
              backgroundColor: '#f0f0f0',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              marginTop: '100px',
            }}
            className="col-md-9 p-4 mx-auto text-center"
          >
            <div className="row justify-content-center mb-4">
              <div className="col-md-12">
                <h2>Film Acting Masterclass – March 26</h2>
              </div>
            </div>
            <div className="row justify-content-around">
              {images.map((image) => (
                <div key={image.id} className="col-md-4 text-center mb-3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid rounded border p-2"
                    style={{
                      maxHeight: '300px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
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

export default Page50;
