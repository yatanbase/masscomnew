import React from 'react';
import conference1 from '../asset/conference1.jpeg';
import conference2 from '../asset/conference2.jpg';

function Conference() {
  return (
    <div className="container my-5">
      <div className="card shadow-sm border-0 p-4">

        {/* Centered Heading */}
        <h3 className="text-center fw-bold mb-4" style={{ fontFamily: 'Kanit, sans-serif' }}>
          <u>Conference Room</u>
        </h3>

        {/* Carousel with full visible images and shadow */}
        <div id="conferenceCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner text-center rounded">
            <div className="carousel-item active">
              <img
                src={conference1}
                className="img-fluid shadow-sm"
                alt="Conference Room 1"
                style={{ maxHeight: '350px', objectFit: 'contain' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={conference2}
                className="img-fluid shadow-sm"
                alt="Conference Room 2"
                style={{ maxHeight: '350px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#conferenceCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#conferenceCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Description */}
        <div className="px-2">
          <p>
            The Conference Room at SJMC is a state-of-the-art facility dedicated to supporting academic excellence and institutional collaboration. 
            It is equipped with modern audio-visual technology including high-definition projectors, built-in speakers, video conferencing tools, 
            and seamless internet access.
          </p>
          <p>
            It hosts important events like faculty meetings, research presentations, policy reviews, and academic audits. 
            The space encourages meaningful discussion with professional seating, excellent acoustics, and ambient lighting.
          </p>
          <p>
            The Conference Room reflects SJMC’s commitment to providing world-class infrastructure for academic governance 
            and collaborative planning in a digital age.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Conference;
