import React from 'react';
import smartclass1 from '../asset/smartclass1.jpeg';
import smartclass2 from '../asset/smartclass2.jpeg';

function SmartClass() {
  return (
    <div className="container mt-4">
      <div className="card p-3 shadow">
        <h4><u>Smart Class</u></h4>
        <img src={smartclass1} alt="Smart Class 1" className="img-fluid rounded mb-3" />
        <img src={smartclass2} alt="Smart Class 2" className="img-fluid rounded mb-3" />
        <p>
          SJMC's Smart Class is a digitally enhanced classroom equipped with smart boards, projectors,
          and internet access to ensure interactive and effective teaching.
        </p>
      </div>
    </div>
  );
}

export default SmartClass;
