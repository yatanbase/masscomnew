import React from 'react'
import Image1 from '../asset/MOU/1.jpg';
import Image2 from '../asset/MOU/2.jpg';
import Image3 from '../asset/MOU/3.jpg';
import Image4 from '../asset/MOU/4.jpg';

export default function Page27() {
  return (
    <div>
      
      <div style={{ margin: '50px' }}>
      
     
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h4>MOU Between BSMEC & SJMC(AKU)</h4>
                <h6>Bihar State Minorities Financial Corporation Limited (BSMEC) and School of Journalism and Mass Communication of Aryabhatta Knowledge University joined hands and signed a MOU .</h6>
                <br></br>
                 </div>
              
            </div>
            <div className="row justify-content-around">
              {/* Adjust image size and display */}
              <div className="col-md-4 text-center mb-3">
                <img src={Image1} alt="Staff 1" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image2} alt="Staff 2" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image4} alt="Staff 3" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image3} alt="Staff 4" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' }} />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
