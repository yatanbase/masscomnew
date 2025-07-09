import React from 'react';
import conference1 from '../asset/conference1.jpeg';
import conference2 from '../asset/conference2.jpg';

function Conference() {
  return (
    <div className="container py-5">
      <div className="bg-white p-4 shadow rounded-4">

        {/* Elegant Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontFamily: 'Kanit, sans-serif' }}>
            <i className="fa fa-university me-2 text-primary"></i>Conference Room
          </h2>
          <div
            className="mx-auto"
            style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#007bff',
              borderRadius: '5px',
            }}
          ></div>
        </div>

        {/* Wider Image Carousel */}
        <div id="confCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner rounded-3 shadow-sm text-center">
            <div className="carousel-item active">
              <img
                src={conference1}
                className="img-fluid mx-auto d-block"
                style={{ maxHeight: '500px', maxWidth: '100%', width: '85%', objectFit: 'cover' }}
                alt="Conference 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={conference2}
                className="img-fluid mx-auto d-block"
                style={{ maxHeight: '500px', maxWidth: '100%', width: '85%', objectFit: 'cover' }}
                alt="Conference 2"
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#confCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#confCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        {/* Description */}
        <div className="border-top pt-3" style={{ lineHeight: '1.7', fontSize: '1rem' }}>
          <p>
            The <strong>Conference Room</strong> at SJMC is a modern space crafted for academic deliberations and formal discussions.
            It is equipped with advanced AV systems, high-speed internet, and a professional setup to support hybrid and offline interactions.
          </p>
          <p>
            The room is regularly used for faculty meetings, curriculum planning, external reviews, and official presentations.
            The seating layout supports structured conversation and effective group engagement.
          </p>
          <p>
            This space reflects the university’s emphasis on <em>governance, collaboration, and innovation</em>—providing a quiet,
            modern environment to nurture academic decisions and knowledge exchange.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Conference;
