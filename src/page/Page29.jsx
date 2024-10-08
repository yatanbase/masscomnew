import React from 'react'
import Image1 from '../asset/Our gallery/Orientation/orientation (1).jpeg'
import Image2 from '../asset/Our gallery/Orientation/orientation (2).jpeg'
import Image3 from '../asset/Our gallery/Orientation/orientation (3).jpeg'
import Image4 from '../asset/Our gallery/Orientation/orientation (4).jpeg'
import Image5 from '../asset/Our gallery/Orientation/orientation (5).jpeg'
import Image6 from '../asset/Our gallery/Orientation/orientation (6).jpeg'
import Image7 from '../asset/Our gallery/Orientation/orientation (7).jpeg'
import Image8 from '../asset/Our gallery/Orientation/orientation (8).jpeg'
import pdf from '../asset/News/orientation_sjmc.pdf'

const Page29 = () => {
  return (
    <div>
      
      <div style={{ margin: '50px' }}>
      
     
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
            <div className="row justify-content-center">

              <a href={pdf} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="col-md-12 text-center" >
                <h4>Orientation at SJMC 2024</h4>

               
                <div className="col-md-12 text-center" style={{display:'flex' , justifyContent:'center'}}>
                <div style={{width:'40%', height:'30px', backgroundColor:'orange', display:'flex',justifyContent:'center'}}>
                <div style={{width:'90%', height:'30px', backgroundColor:'black'}}>   <h5 style={{color:'white'}}>DOWNLOAD ATTACHMENT <span style={{ marginLeft: '3px', fontWeight:'bolder' }}>&#x2B07;</span></h5>   </div>
                </div>
                </div>
               
                
                <br></br>
                 </div>
                 </a> 
              
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

              <div className="col-md-4 text-center mb-3">
                <img src={Image5} alt="Staff 4" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image6} alt="Staff 4" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image7} alt="Staff 4" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' ,marginLeft:'20px',position:'relative',left:'60px'}} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image8} alt="Staff 4" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100',position:'relative',right:'60px' }} />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Page29