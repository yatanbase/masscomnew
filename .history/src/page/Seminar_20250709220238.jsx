import React from 'react';
import seminar1 from '../asset/seminar1.jpg';
import seminar2 from '../asset/seminar2.jpg';

function SeminarRoom() {
  return (
    <div className="container py-5">
      <div className="bg-white p-4 shadow rounded-4">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontFamily: 'Kanit, sans-serif' }}>
            <i className="fa fa-users me-2 text-success"></i>Seminar Room
          </h2>
          <div className="mx-auto" style={{ width: '80px', height: '4px', backgroundColor: '#28a745', borderRadius: '5px' }}></div>
        </div>

        {/* Image Carousel */}
        <div id="seminarCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner rounded-3 shadow-sm text-center">
            <div className="carousel-item active">
              <img
                src={seminar1}
                className="img-fluid mx-auto d-block"
                style={{ maxHeight: '500px', width: '85%', objectFit: 'cover' }}
                alt="Seminar 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={seminar2}
                className="img-fluid mx-auto d-block"
                style={{ maxHeight: '500px', width: '85%', objectFit: 'cover' }}
                alt="Seminar 2"
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#seminarCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#seminarCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Description */}
        <div className="border-top pt-3" style={{ lineHeight: '1.7', fontSize: '1rem' }}>
          <p>
            The <strong>Seminar Room</strong> at SJMC is designed for interactive sessions, guest lectures, workshops, and academic discussions.
            It features smart audio-visual equipment, comfortable seating, and a well-lit environment to ensure smooth communication.
          </p>
          <p>
            This space plays a vital role in knowledge sharing, student-faculty interaction, and academic enrichment beyond the classroom.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeminarRoom;
