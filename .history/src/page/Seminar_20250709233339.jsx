import React from 'react';
import seminar1 from '../asset/seminar1.jpg';
import seminar2 from '../asset/seminar2.jpg';
import Home from '../components/HomeButton';

function SeminarRoom() {
  return (
    <div style={{ margin: '50px' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            className="col-md-9 p-4 mx-auto text-center"
            style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }}
          >
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h2 style={{ fontFamily: 'Kanit, sans-serif' }}>
                  <i className="fa fa-users me-2 text-success"></i>Seminar Room
                </h2>
                <div
                  className="mx-auto mb-4"
                  style={{ width: '80px', height: '4px', backgroundColor: '#28a745', borderRadius: '5px' }}
                ></div>
              </div>
            </div>

            {/* Image Carousel */}
            <div id="seminarCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
              <div className="carousel-inner rounded-3 shadow-sm text-center">
                <div className="carousel-item active">
                  <img
                    src={seminar1}
                    className="img-fluid mx-auto d-block"
                    style={{ maxHeight: '500px', width: '85%', objectFit: 'cover' }}
                    alt="Seminar Room 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={seminar2}
                    className="img-fluid mx-auto d-block"
                    style={{ maxHeight: '500px', width: '85%', objectFit: 'cover' }}
                    alt="Seminar Room 2"
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
      </div>
    </div>
  );
}

export default SeminarRoom;
