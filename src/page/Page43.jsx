import React from 'react';
import Home from '../components/HomeButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image1 from '../asset/Our gallery/resurgent bharat/image (1).jpg';
import Image2 from '../asset/Our gallery/resurgent bharat/image (2).jpg';
import Image3 from '../asset/Our gallery/resurgent bharat/image (3).jpg';
import Image4 from '../asset/Our gallery/resurgent bharat/image (4).jpg';

const Page43 = () => {
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
            <h2 className="mb-4">Resurgent Bharat</h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {[Image1, Image2, Image3, Image4].map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="text-center">
                    <img
                      src={img}
                      alt={`Resurgent Bharat ${idx + 1}`}
                      className="img-fluid rounded border p-2"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '300px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page43;
