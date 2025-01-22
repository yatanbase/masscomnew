import React from 'react'
import Image2 from '../asset/Consultant_2.jpg'

function Page25() {
  return (
    <div>

     <div  className="container">
  <div className="row justify-content-center align-items-center">
    <div style={{ backgroundColor:'#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}} className="col-md-9 p-4 mx-auto text-center ">
    <h2 style={{display: 'block', textAlign:'center',fontWeight:'bold',margin:'20px',marginBottom:'40px', textShadow: '1px 1px 2px #000000'}}>SJMC Consultants</h2>



             <div className="Consultant" style={{marginBottom:'50px'}}>
      <img style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} src={Image2} alt="Your Image" className="img-fluid" />
            <h2 style={{ position: 'relative', top: '-5px', transform: 'translateY(50%)' }} className="text-left">Dr. Sandeep Kumar Dubey</h2>
            <hr/>
            <h4 style={{ position: 'relative', top: '-3px', transform: 'translateY(-50%)',fontWeight: 'normal' }}>Consultant (Film & TV)</h4>
             <p className="mt-4 mx-auto text-left" style={{textAlign:'left'}}>
             Ph.D. in Mass Communication (2023), Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha, Maharashtra. Earlier was Assistant Professor, Department of Journalism & Mass Communication, Invertis University, Bareilly (Uttar Pradesh). Authored four book chapters, two research papers in UGC Care listed and peer-reviewed journals, One Book Review, book chapters and numerous research articles in peer-reviewed journals and magazines. Over 100 articles and features published in newspapers like Dainik Jagran, Amar Ujala, and Jansandesh Times.
             </p></div>


      
    </div>
  </div>
</div></div>
  )
}

export default Page25