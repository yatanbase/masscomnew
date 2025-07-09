import React from 'react';
import conference1 from '../asset/conference1.jpeg';
import conference2 from '../asset/conference2.jpg';

function Conference() {
  return (
    <div className="container mt-4">
      <div className="card p-3 shadow">

        {/* Bootstrap Carousel */}
        <div id="conferenceCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img src={conference1} className="d-block w-100" alt="Conference Room 1" />
            </div>
            <div className="carousel-item">
              <img src={conference2} className="d-block w-100" alt="Conference Room 2" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#conferenceCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#conferenceCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Title and Professional Content */}
        <h4><u>Conference Room</u></h4>
        <p>
          The Conference Room at SJMC has been thoughtfully designed to support high-level academic and administrative interactions.
          Equipped with cutting-edge audio-visual facilities, including high-definition projection systems, ceiling-mounted speakers, and
          video conferencing capabilities, the room facilitates seamless communication for in-person as well as hybrid meetings.
        </p>
        <p>
          It serves as a central venue for faculty board meetings, curriculum development discussions, academic audits, policy deliberations,
          and collaborative sessions with industry experts or external reviewers. The seating arrangement promotes a formal yet collaborative atmosphere,
          encouraging meaningful dialogue and informed decision-making.
        </p>
        <p>
          With ambient lighting, acoustic optimization, and high-speed internet access, the Conference Room reflects the institution’s
          commitment to academic excellence, governance, and modern infrastructure.
        </p>
      </div>
    </div>
  );
}

export default Conference;
