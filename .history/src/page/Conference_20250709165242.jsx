import React from 'react';
import conferenceroom1 from '../asset/conferenceroom1.jpeg';
import seminarroom2 from '../asset/seminarroom2.jpg';

const Conference = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Conference Room</h2>

      {/* First Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={conferenceroom1}
            alt="Modern Conference Room"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p className="fs-5">
            Our state-of-the-art conference room is well-equipped to conduct webinars,
            guest lectures, and collaborative academic sessions. It features a smart
            display, conferencing tools, and high-speed internet connectivity.
          </p>
          <p className="fs-6 text-muted">
            The environment encourages dynamic discussions and idea exchange among
            faculty, students, and external participants.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={seminarroom2}
            alt="Interactive Seminar Session"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p className="fs-5">
            The seminar hall supports hybrid learning with tools like Zoom, Google Meet,
            and Teams. It frequently hosts faculty development programs and interactive
            student events.
          </p>
          <p className="fs-6 text-muted">
            Spacious and tech-friendly, the room is ideal for knowledge sharing and
            academic enrichment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conference;
