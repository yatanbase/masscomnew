import React from 'react';
import conference1 from '../asset/conference1.jpg';
import conference2 from '../asset/conference2.jpg';

function Conference() {
  return (
    <div className="container mt-4">
      <div className="card p-3 shadow">
        <h4><u>Conference Room</u></h4>
        <img src={conference1} alt="Conference Room 1" className="img-fluid rounded mb-3" />
        <img src={conference2} alt="Conference Room 2" className="img-fluid rounded mb-3" />
        <p>
          SJMC's Conference Room is designed for academic and administrative meetings,
          equipped with modern AV systems and professional seating. It provides a collaborative
          space for faculty discussions, curriculum planning, and official proceedings.
        </p>
      </div>
    </div>
  );
}

export default Conference;
