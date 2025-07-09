import React from 'react';
import conference1 from '../asset/conference1.jpeg';
import conference2 from '../asset/conference2.jpg';

function Conference() {
  return (
    <div className="container mt-4">
      <div className="card p-3 shadow">

        {/* Image-Only Carousel with smaller height */}
        <div id="conferenceCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img
                src={conference1}
                className="d-block w-100"
                style={{ height: '300px', objectFit: 'cover' }}
                alt="Conference Room 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={conference2}
                className="d-block w-100"
                style={{ height: '300px', objectFit: 'cover' }}
                alt="Conference Room 2"
              />
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#conferenceCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#conferenceCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        {/* Static Text Below */}
        <h4><u>Conference Room</u></h4>
        <p>
          The Conference Room at SJMC is a state-of-the-art facility dedicated to supporting academic excellence and institutional collaboration. 
          It is equipped with modern audio-visual technology, including high-definition projectors, built-in speakers, video conferencing tools, 
          and seamless internet access, enabling high-level interactions in both offline and hybrid formats.
        </p>
        <p>
          This room serves as a hub for important academic and administrative activities such as faculty board meetings, 
          curriculum development discussions, research presentations, policy reviews, and external audits. The professionally 
          arranged seating fosters a formal yet collaborative environment conducive to effective decision-making.
        </p>
        <p>
          With its acoustic design, ambient lighting, and digital support systems, the Conference Room exemplifies SJMC’s commitment 
          to fostering communication, innovation, and academic leadership in a modern setting.
        </p>
      </div>
    </div>
  );
}

export default Conference;
