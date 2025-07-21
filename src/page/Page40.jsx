import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Home from '../components/HomeButton';

// Import images
import Image1 from '../asset/Our gallery/Course/image (1).jpg';
import Image2 from '../asset/Our gallery/Course/image (2).jpg';
import Image3 from '../asset/Our gallery/Course/image (3).jpg';
import Image4 from '../asset/Our gallery/Course/image (4).jpg';
import Image5 from '../asset/Our gallery/Course/image (5).jpg';
import Image6 from '../asset/Our gallery/Course/image (6).jpg';
import Image7 from '../asset/Our gallery/Course/image (8).jpg';
import Image8 from '../asset/Our gallery/Course/image (7).jpg';
import Image9 from '../asset/Our gallery/Course/image (9).jpg';
import Image10 from '../asset/Our gallery/Course/image (10).jpg';

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10];

const Page40 = () => {
  return (
    <div style={{ margin: '30px' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '80px' }} className="col-md-10 p-4 mx-auto text-center">
            <h2 className="mb-4">Free Photography and Film Making Training Course</h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              spaceBetween={30}
              slidesPerView={3}
              loop
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="img-fluid rounded border p-2"
                    style={{ height: '220px', width: '100%', objectFit: 'cover' }}
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

export default Page40;
