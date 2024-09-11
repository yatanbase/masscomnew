import React from 'react'
import Image1 from '../asset/upcoming events/Image1.jpeg'
import Pdf from '../asset/upcoming events/first.pdf'
import Gif from '../asset/newicon.gif'
import Book from '../asset/events.png'
const Page31 = () => {
  return (
    <>    
    <div style={{width:'100vw',height:'100%',display:'flex',alignItems:'center',justifyContent:'start',backgroundColor:'darkred'}}>
      <img src={Book} style={{height:'4rem',width:'auto',paddingLeft:'2rem',opacity:'87%'}} alt="" />
      <div className="" style={{width:'55%',display:'flex',justifyContent:'end',paddingRight:'5px',color:'white',backgroundColor:'darkred'}}>
      <h2 style={{fontFamily:'Nova Square,arial',fontWeight:'900',fontSize:'3em'}}>Upcoming Events</h2>
      </div>

      <div className="" style={{width:'45%',color:'white',height:'100%'}}>
      <p style={{fontFamily:'Kanit, sans',position:'relative',bottom:'15px'}}>at SJMC</p>
      </div>
    </div>


<div style={{display:'flex', justifyContent:'center'}}>
    <div style={{width:'98vw', height:'80vh' , display:'flex', alignItems:'start'}}>
        <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',width:'100%', height:'85vh', marginLeft:'50px',marginTop:'20px' }} className="col-md-9 p-4 mx-auto text-center">
          
        <a   href={Pdf}  target='_blank' style={{    textDecoration: 'none'}}>
        <div style={{ width: 'calc(33.33% - 120px)', marginBottom: '20px', marginLeft:'70px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src={Image1} alt="Gallery Image 2" style={{ width: '450px', height: '330px', objectFit: 'fill', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
        <p style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif',marginBottom:'none',fontSize:'1.1rem',color:'black' }}> Date : 11 to 30 september 2024 <br></br><span style={{position:'relative',bottom:'10px',color:'darkred',fontSize:'1rem'      }}>know more &gt;</span></p>
        </div></a>



        </div>
  </div>    


</div> 

<style>
  {`
    @media (max-width: 768px) {
      .image-container {
        width: 80vw; /* Image container takes 80% of the viewport width */
        display: flex;
        justify-content: center; /* Center align the image inside the container */
        margin: 0 auto; /* Center the container itself */
      }

      .image-container img {
        width: 100%; /* Image will take full width of the container */
        height: auto; /* Maintain the aspect ratio */
        object-fit: cover; /* Ensures the image fills the container without distortion */
      }
    }
  `}
</style>

    </>

  );
}

export default Page31