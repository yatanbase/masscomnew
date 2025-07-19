import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Image1 from '../asset/Our gallery/univ/image (1).jpg';
import Image2 from '../asset/Our gallery/univ/image (2).jpg';
import Image3 from '../asset/Our gallery/univ/image (3).jpg';
import Image4 from '../asset/Our gallery/univ/image (4).jpg';
import Image5 from '../asset/Our gallery/univ/image (5).jpg';
import Image6 from '../asset/Our gallery/univ/image (6).jpg';
import Image7 from '../asset/Our gallery/univ/image (7).jpg';
import Image8 from '../asset/Our gallery/univ/image (8).jpg';
import Image9 from '../asset/Our gallery/univ/image (9).jpg';
import Image10 from '../asset/Our gallery/univ/image (10).jpg';

import Home from '../components/HomeButton';

const images = [
  { id: 1, src: Image1, alt: 'Image 1' },
  { id: 2, src: Image2, alt: 'Image 2' },
  { id: 3, src: Image3, alt: 'Image 3' },
  { id: 4, src: Image4, alt: 'Image 4' },
  { id: 5, src: Image5, alt: 'Image 5' },
  { id: 6, src: Image6, alt: 'Image 6' },
  { id: 7, src: Image7, alt: 'Image 7' },
  { id: 8, src: Image8, alt: 'Image 8' },
  { id: 9, src: Image9, alt: 'Image 9' },
  { id: 10, src: Image10, alt: 'Image 10' },
];

const Page46 = () => {
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
              padding: '30px',
            }}
            className="col-md-9 mx-auto text-center"
          >
            <h2 className="mb-4">Collaboration with Association of Indian University</h2>

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
                      maxHeight: '500px',
                      objectFit: 'contain',
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

export default Page46;
