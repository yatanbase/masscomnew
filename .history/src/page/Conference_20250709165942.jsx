import React from 'react';
import confImg1 from '../asset/conferenceroom1.jpeg';
import confImg2 from '../asset/seminarroom2.jpg';

const Conference = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Conference Room</h2>

      {/* First Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={confImg1}
            alt="Conference Room with Faculty"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p className="fs-5">
            Our modern conference room is ideal for faculty meetings, expert talks,
            and interactive sessions. It features a smart display, professional seating
            arrangement, and air conditioning for comfort.
          </p>
          <p className="text-muted">
            The environment is suitable for meaningful discussions and formal presentations.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={confImg2}
            alt="Conference or Seminar in Progress"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p className="fs-5">
            The room supports hybrid meetings using Zoom, Google Meet, and other
            conferencing tools. It is frequently used for seminars, academic planning,
            and administrative purposes.
          </p>
          <p className="text-muted">
            Faculty and students engage here for capacity building and collaborative events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conference;
