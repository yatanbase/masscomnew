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
    <div style={{width:'98vw', height:'80vh' }}>
        <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',width:'100%', height:'85vh', marginLeft:'8px',marginTop:'20px' }} className="col-md-9 p-4 mx-auto text-center">
          
        <a   href={Pdf}  target='_blank' style={{    textDecoration: 'none'}}>
        <div style={{ width: 'calc(33.33% - 120px)', marginBottom: '20px', marginLeft:'30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src={Image1} alt="Gallery Image 2" style={{ width: '450px', height: '330px', objectFit: 'fill', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
        <p style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif',marginBottom:'none',fontSize:'1.1rem',color:'black' }}> Date : 11 to 30 september 2024 <br></br><span style={{position:'relative',bottom:'10px',color:'darkred',fontSize:'1rem'      }}>know more &gt;</span></p>
        </div></a>



        </div>
  </div>    

  {/* <div style={{width:'26vw', height:'80vh'}}>
        <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',width:'23vw', height:'85vh', marginRight:'8px',marginTop:'20px' }} className="col-md-9 p-4 mx-auto text-center">
      <div style={{width:'100%',height:'5vh', borderBottom:'3px dotted darkred',display:'flex',overflow:'hidden'}}>
        {/* <div style={{height:'50px',width:'20px',backgroundColor:'darkred',position:'relative',right:'13px'}}></div> */}
      {/* <p style={{fontSize:'1.5rem',fontWeight:'bold',position:'relative',bottom:'8px'}}> News at BOOK<span style={{color:'darkred'}}>ISTAN</span></p> */}
      {/* </div>  */}

      {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' , borderBottom: '1px solid lightgray',height:'4.2rem'}}>
  <a href={Bookistan_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position: 'relative', left: '10px', color: 'black', fontSize: '1rem', padding: '.5rem',textAlign: 'right' }}>
    Literary discussion on Harishankar Parsai
    <div style={{ backgroundColor: 'darkred',color: 'white', borderRadius: '5px', width: '50%', textAlign: 'center', position: 'absolute', right: '.3rem', top: '2.2rem' }}>
      <p style={{ margin: '0' }}>PR 8 August</p>
    </div>
  </a>
</div> */}







{/* </div>
</div>*/}

</div> 
    </>

  );
}

export default Page31