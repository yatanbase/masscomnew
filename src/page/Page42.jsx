import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image1 from '../asset/Our gallery/screen writing/image (1).jpg';
import Image2 from '../asset/Our gallery/screen writing/image (2).jpg';
import Image3 from '../asset/Our gallery/screen writing/image (3).jpg';
import Image4 from '../asset/Our gallery/screen writing/image (4).jpg';
import Image5 from '../asset/Our gallery/screen writing/image (5).jpg';
import Image6 from '../asset/Our gallery/screen writing/image (6).jpg';

import Home from '../components/HomeButton';

const Page42slider = () => {
  return (
    <div style={{ margin: '30px' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            style={{
              backgroundColor: '#f0f0f0',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              marginTop: '100px',
            }}
            className="col-md-10 p-4 mx-auto text-center"
          >
            <h2 className="mb-4">Screen Writing and Its Technical Aspects</h2>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              spaceBetween={30}
              slidesPerView={1}
              loop
              style={{ maxWidth: '100%' }}
            >
              {[Image1, Image2, Image3, Image4, Image5, Image6].map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="img-fluid rounded border p-2"
                    style={{
                      maxHeight: '500px',
                      objectFit: 'contain',
                      width: '100%',
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
};

export default Page42slider;
