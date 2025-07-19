// Page47.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Image1 from '../asset/Our gallery/unicef/image (1).jpeg';
import Image2 from '../asset/Our gallery/unicef/image (2).jpeg';
import Image3 from '../asset/Our gallery/unicef/image (3).jpeg';
import Image4 from '../asset/Our gallery/unicef/image (4).jpeg';
import Image5 from '../asset/Our gallery/unicef/image (5).jpeg';
import Image6 from '../asset/Our gallery/unicef/image (6).jpeg';
import Image7 from '../asset/Our gallery/unicef/image (7).jpeg';

import Home from '../components/HomeButton';

const images = [
  { id: 1, src: Image1, alt: 'Image 1' },
  { id: 2, src: Image2, alt: 'Image 2' },
  { id: 3, src: Image3, alt: 'Image 3' },
  { id: 4, src: Image4, alt: 'Image 4' },
  { id: 5, src: Image5, alt: 'Image 5' },
  { id: 6, src: Image6, alt: 'Image 6' },
  { id: 7, src: Image7, alt: 'Image 7' },
];

const Page47 = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-10"
            style={{
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
              padding: '30px',
              marginTop: '60px',
            }}
          >
            <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>
              Communication For Social and Behavior Change
            </h2>

            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              style={{ paddingBottom: '30px' }}
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid rounded border"
                    style={{
                      width: '100%',
                      maxHeight: '500px',
                      objectFit: 'cover',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page47;
