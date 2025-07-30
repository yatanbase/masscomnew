import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/HomeButton';

import Image100 from '../asset/Our gallery/PKAHANI/k1.jpg';
import Image101 from '../asset/Our gallery/PKAHANI/k2.jpg';
import Image102 from '../asset/Our gallery/PKAHANI/k3.jpg';
import Image103 from '../asset/Our gallery/PKAHANI/k4.jpg';
import Image104 from '../asset/Our gallery/PKAHANI/k5.jpg';
import Image105 from '../asset/Our gallery/PKAHANI/k6.jpg';

function PKAHANI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [Image100, Image101, Image102, Image103, Image104, Image105];
  const [zoomIndex, setZoomIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomIndex === null) return;
      if (e.key === 'ArrowRight') {
        setZoomIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setZoomIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        setZoomIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomIndex]);

  const handleNext = (e) => {
    e.stopPropagation();
    setZoomIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setZoomIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
              marginTop: '30px'  // 🔼 earlier was 80px — now moved up
            }}
          >
            <h2 className="mb-4 fw-bold text-primary">
              Kahani Radio Ki – National Broadcasting Day 2025
            </h2>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 7000 }}
              loop={true}
              style={{ borderRadius: '12px', overflow: 'hidden' }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="position-relative"
                    onClick={() => setZoomIndex(index)}
                    style={{ cursor: 'zoom-in' }}
                    title="Kahani Radio Ki | 23/07/2025"
                  >
                    <img
                      src={img}
                      alt={`Scene ${index + 1}`}
                      className="img-fluid border rounded shadow-sm"
                      style={{
                        maxHeight: '500px',
                        objectFit: 'cover',
                        width: '100%',
                        transition: 'transform 0.3s ease-in-out'
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Fullscreen Zoomed Image */}
      {zoomIndex !== null && (
        <div
          onClick={() => setZoomIndex(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 0,
            margin: 0
          }}
        >
          {/* Close Button */}
          <span
            onClick={(e) => { e.stopPropagation(); setZoomIndex(null); }}
            style={{
              position: 'absolute',
              top: 20,
              right: 30,
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            &times;
          </span>

          {/* Prev Arrow */}
          <span
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: 30,
              fontSize: '3rem',
              color: '#fff',
              cursor: 'pointer',
              userSelect: 'none',
              opacity: 0.3,
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.3'}
          >
            &#10094;
          </span>

          {/* Zoomed Image */}
          <img
            src={images[zoomIndex]}
            alt="Zoomed"
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'contain',
              borderRadius: '0px',
              margin: 0,
              padding: 0
            }}
            draggable={false}
          />

          {/* Next Arrow */}
          <span
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: 30,
              fontSize: '3rem',
              color: '#fff',
              cursor: 'pointer',
              userSelect: 'none',
              opacity: 0.3,
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.3'}
          >
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
}

export default PKAHANI;
