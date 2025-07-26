import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../components/HomeButton';

import Image100 from '../asset/Our gallery/PRO1/img1.jpeg';
import Image101 from '../asset/Our gallery/PRO1/img2.jpeg';
import Image102 from '../asset/Our gallery/PRO1/img3.jpeg';
import Image103 from '../asset/Our gallery/PRO1/img4.jpeg';
import Image104 from '../asset/Our gallery/PRO1/img5.jpeg';
import Image105 from '../asset/Our gallery/PRO1/img6.jpeg';
import Image106 from '../asset/Our gallery/PRO1/img7.jpeg';
import Image107 from '../asset/Our gallery/PRO1/img8.jpeg';
import Image108 from '../asset/Our gallery/PRO1/img9.jpeg';
import Image109 from '../asset/Our gallery/PRO1/img10.jpeg';
import Image110 from '../asset/Our gallery/PRO1/img11.jpeg';
import Image111 from '../asset/Our gallery/PRO1/img12.jpeg';
import Image112 from '../asset/Our gallery/PRO1/img13.jpeg';
import Image113 from '../asset/Our gallery/PRO1/img14.jpeg';
import Image114 from '../asset/Our gallery/PRO1/img15.jpeg';
import Image115 from '../asset/Our gallery/PRO1/img16.jpeg';

function Page54() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    Image100, Image101, Image102, Image103, Image104, Image105,
    Image106, Image107, Image108, Image109, Image110, Image111,
    Image112, Image113, Image114, Image115
  ];

  return (
    <div style={{ margin: '50px' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            className="col-md-10 p-4 mx-auto text-center"
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
              marginTop: '80px'
            }}
          >
            {/* ✅ Updated Title */}
            <h2 className="mb-4 fw-bold text-primary">
              🎬 Film Screening of Student Films (2025-2026)
            </h2>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop={true}
              style={{ borderRadius: '12px', overflow: 'hidden' }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Scene ${index + 1}`}
                    className="img-fluid border rounded shadow-sm"
                    style={{
                      maxHeight: '500px',
                      objectFit: 'cover',
                      width: '100%'
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

export default Page54;
