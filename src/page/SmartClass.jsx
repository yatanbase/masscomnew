import React from 'react';
import smartClass1 from '../assets/smartclass1.jpg';
import smartClass2 from '../assets/smartclass2.jpg';

function SmartClass() {
  return (
    <div className="container mt-4">
      <div className="card p-3 shadow">
        <h4><u>Smart Class</u></h4>
        <img src={smartClass1} alt="Smart Class 1" className="img-fluid rounded mb-3" />
        <img src={smartClass2} alt="Smart Class 2" className="img-fluid rounded mb-3" />
        <p>
          SJMC's Smart Class is equipped with digital infrastructure such as smart boards,
          projectors, and high-speed internet to enhance teaching efficiency. It enables
          real-time interactive learning and visual demonstrations that go beyond textbooks.
        </p>
      </div>
    </div>
  );
}

export default SmartClass;
