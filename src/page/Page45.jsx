import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image1 from '../asset/Our gallery/prabhat akhbar/image (1).jpeg';
import Image2 from '../asset/Our gallery/prabhat akhbar/image (2).jpeg';
import Image3 from '../asset/Our gallery/prabhat akhbar/image (3).jpeg';
import Image4 from '../asset/Our gallery/prabhat akhbar/image (4).jpeg';
import Image5 from '../asset/Our gallery/prabhat akhbar/image (5).jpeg';
import Image6 from '../asset/Our gallery/prabhat akhbar/image (6).jpeg';
import Image7 from '../asset/Our gallery/prabhat akhbar/image (7).jpeg';
import Image8 from '../asset/Our gallery/prabhat akhbar/image (8).jpeg';

import Home from '../components/HomeButton';

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const Page45 = () => {
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
            className="col-md-10 p-4 mx-auto text-center"
          >
            <div className="row justify-content-center mb-4">
              <div className="col-md-12 text-center">
                <h2>Visit To Prabhat Khabar</h2>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
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
                    className="img-fluid rounded border p-2"
                    style={{
                      height: '400px',
                      objectFit: 'cover',
                      width: '100%',
                      maxWidth: '800px',
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

export default Page45;
