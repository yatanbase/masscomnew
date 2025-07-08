import React from 'react'
import Image1 from '../asset/Our gallery/Guru Dakshata program/IMG-20250330-WA0031.jpg'
import Image2 from '../asset/Our gallery/Guru Dakshata program/IMG-20250330-WA0032.jpg'
import Image3 from '../asset/Our gallery/Guru Dakshata program/IMG-20250330-WA0033.jpg'
import Image5 from '../asset/Our gallery/Guru Dakshata program/IMG-20250330-WA0035.jpg'
import Image6 from '../asset/Our gallery/Guru Dakshata program/IMG-20250330-WA0036.jpg'
import Image7 from '../asset/Our gallery/Guru Dakshata program/IMG-20250330-WA0037.jpg'


import Home from '../components/HomeButton'

const images = [
  { id: 1, src: Image1, alt: "Image 1" },
  { id: 2, src: Image2, alt: "Image 2" },
  { id: 3, src: Image3, alt: "Image 3" },
  { id: 5, src: Image5, alt: "Image 5" },
  { id: 6, src: Image6, alt: "Image 6" },
  { id: 7, src: Image7, alt: "Image 7" },
];

const Page51 = () => {
  return (
    <div style={{ margin: '50px' }}>
      <Home/>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h2>Guru Dakshata program</h2>
              </div>
            </div>
            <div className="row justify-content-around">
              {images.map((image) => (
                <div key={image.id} className="col-md-4 text-center mb-3">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="img-fluid rounded border p-3" 
                    style={{ maxHeight: '300px', maxWidth: '100%', height: '210px' }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page51 