import React from 'react';
import Home from '../components/HomeButton';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Images
import Image1 from '../asset/Our gallery/talk with bbc/image (1).jpeg';
import Image2 from '../asset/Our gallery/talk with bbc/image (2).jpeg';
import Image3 from '../asset/Our gallery/talk with bbc/image (3).jpeg';
import Image4 from '../asset/Our gallery/talk with bbc/image (4).jpeg';
import Image5 from '../asset/Our gallery/talk with bbc/image (5).jpeg';
import Image6 from '../asset/Our gallery/talk with bbc/image (6).jpeg';
import Image7 from '../asset/Our gallery/talk with bbc/image (7).jpeg';

const Page44 = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

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
            <h2>Talk with BBC (29-01-2025)</h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              style={{ paddingTop: '30px' }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="img-fluid rounded border"
                    style={{
                      maxHeight: '500px',
                      objectFit: 'cover',
                      width: '100%',
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

export default Page44;
