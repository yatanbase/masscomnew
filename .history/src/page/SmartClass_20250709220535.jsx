import React from 'react';
import smartclass1 from '../asset/smartclass1.jpeg';
import smartclass2 from '../asset/smartclass2.jpeg';

function SmartClass() {
  return (
    <div className="container py-5">
      <div className="bg-white p-4 shadow rounded-4">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontFamily: 'Kanit, sans-serif' }}>
            <i className="fa fa-desktop me-2 text-warning"></i>Smart Class
          </h2>
          <div className="mx-auto" style={{ width: '80px', height: '4px', backgroundColor: '#ffc107', borderRadius: '5px' }}></div>
        </div>

        {/* Image Carousel */}
        <div id="smartCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner rounded-3 shadow-sm text-center">
            <div className="carousel-item active">
              <img
                src={smartclass1}
                className="img-fluid mx-auto d-block"
                style={{ maxHeight: '500px', width: '85%', objectFit: 'cover' }}
                alt="Smart Class 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={smartclass2}
                className="img-fluid mx-auto d-block"
                style={{ maxHeight: '500px', width: '85%', objectFit: 'cover' }}
                alt="Smart Class 2"
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#smartCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#smartCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Description */}
        <div className="border-top pt-3" style={{ lineHeight: '1.7', fontSize: '1rem' }}>
          <p>
            The <strong>Smart Class</strong> at SJMC is equipped with interactive boards, HD projectors, and seamless internet connectivity.
            It enables dynamic teaching through visuals, multimedia, and collaborative tools.
          </p>
          <p>
            This environment boosts student engagement, encourages interactive learning, and supports innovative pedagogy in line with 21st-century education.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SmartClass;
