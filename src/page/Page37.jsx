import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Home from '../components/HomeButton';

import Image1 from '../asset/Our gallery/PRO/Image (1).jpg';
import Image2 from '../asset/Our gallery/PRO/Image (2).jpg';
import Image3 from '../asset/Our gallery/PRO/Image (3).jpg';
import Image4 from '../asset/Our gallery/PRO/Image (4).jpg';
import Image5 from '../asset/Our gallery/PRO/Image (5).jpg';
import Image6 from '../asset/Our gallery/PRO/Image (6).jpg';
import Image7 from '../asset/Our gallery/PRO/Image (7).jpg';
import Image8 from '../asset/Our gallery/PRO/Image (8).jpg';
import Image9 from '../asset/Our gallery/PRO/Image (9).jpg';
import Image10 from '../asset/Our gallery/PRO/Image (10).jpg';
import Image11 from '../asset/Our gallery/PRO/Image (11).jpg';
import Image12 from '../asset/Our gallery/PRO/Image (12).jpg';

function Page37() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    Image1, Image2, Image3, Image4, Image5, Image6,
    Image7, Image8, Image9, Image10, Image11, Image12,
  ];

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
            <h2 className="mb-4">National Workshop on Digital Education</h2>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="img-fluid rounded border p-3"
                    style={{
                      maxHeight: '450px',
                      objectFit: 'cover',
                      margin: 'auto',
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
}

export default Page37;
