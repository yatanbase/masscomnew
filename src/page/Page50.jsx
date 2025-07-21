import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Home from '../components/HomeButton';

import Image1 from '../asset/Our gallery/26 march/IMG-20250330-WA0057.jpg';
import Image2 from '../asset/Our gallery/26 march/IMG-20250330-WA0058.jpg';
import Image3 from '../asset/Our gallery/26 march/IMG-20250330-WA0059.jpg';
import Image4 from '../asset/Our gallery/26 march/IMG-20250330-WA0060.jpg';
import Image5 from '../asset/Our gallery/26 march/IMG-20250330-WA0061.jpg';

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
            className="col-md-10 p-4 mx-auto text-center"
          >
            <h2 className="mb-4">Film Acting Masterclass – March 26</h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              spaceBetween={30}
              slidesPerView={1}
              style={{ paddingBottom: '40px' }}
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid rounded border"
                    style={{
                      maxHeight: '500px',
                      width: '100%',
                      objectFit: 'contain',
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

export default Page50;
