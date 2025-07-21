import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Home from '../components/HomeButton';

import Image1 from '../asset/Our gallery/25 march/IMG-20250330-WA0040.jpg';
import Image3 from '../asset/Our gallery/25 march/IMG-20250330-WA0042.jpg';
import Image4 from '../asset/Our gallery/25 march/IMG-20250330-WA0043.jpg';
import Image5 from '../asset/Our gallery/25 march/IMG-20250330-WA0044.jpg';
import Image6 from '../asset/Our gallery/25 march/IMG-20250330-WA0045.jpg';
import Image7 from '../asset/Our gallery/25 march/IMG-20250330-WA0046.jpg';

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
    <div style={{ marginTop: '60px' }}>
      <Home />
      <div className="container">
        <div
          className="p-4"
          style={{
            backgroundColor: '#f0f0f0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
            borderRadius: '10px'
          }}
        >
          <h2 className="text-center mb-4">March 25</h2>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            style={{ width: '100%', borderRadius: '10px' }}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Page49;
