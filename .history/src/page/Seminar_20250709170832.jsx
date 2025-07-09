import React from 'react';
import seminar1 from '../asset/seminar1.jpg';
import seminar2 from '../asset/seminar2.jpg';

function SeminarRoom() {
  return (
    <div className="container mt-4">
      <div className="card p-3 shadow">
        <h4><u>Seminar Room</u></h4>
        <img src={seminar1} alt="Seminar Room 1" className="img-fluid rounded mb-3" />
        <img src={seminar2} alt="Seminar Room 2" className="img-fluid rounded mb-3" />
        <p>
          The Seminar Room hosts lectures, workshops, and academic presentations.
          It offers comfortable seating, multimedia support, and a quiet learning environment
          for student and faculty engagement beyond regular classrooms.
        </p>
      </div>
    </div>
  );
}

export default SeminarRoom;
