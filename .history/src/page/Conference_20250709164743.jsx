import React from 'react';
import Conference from '../asset/conference1.jpeg';
import Conference from '../asset/conference2.jpeg';

const Conference = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Conference Room</h2>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={confImg1}
            alt="Conference Room 1"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p className="fs-5">
            Our modern conference room is designed to host official meetings,
            webinars, expert lectures, and interactive sessions with external
            guests. It is equipped with high-quality audio-video systems and
            fast internet connectivity.
          </p>
          <p className="fs-6 text-muted">
            With comfortable seating and smart display setup, it promotes
            productivity and collaboration. Frequently used for interdisciplinary
            discussions, training programs, and academic deliberations.
          </p>
        </div>
      </div>

      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={confImg2}
            alt="Conference Room 2"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p className="fs-5">
            The room supports hybrid meetings with seamless integration of Zoom,
            Google Meet, and Microsoft Teams. It provides a formal atmosphere for
            high-level planning and discussions.
          </p>
          <p className="fs-6 text-muted">
            Faculty, students, and guests frequently utilize this space for
            knowledge exchange and institutional activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conference;
