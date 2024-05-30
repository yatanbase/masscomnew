import React from 'react'
import Image1 from '../asset/Consultant_1.jpg'
import Image2 from '../asset/Consultant_2.jpg'
import Image3 from '../asset/Consultant_3.jpg'

function Page25() {
  return (
    <div>

     <div  className="container">
  <div className="row justify-content-center align-items-center">
    <div style={{ backgroundColor:'#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}} className="col-md-9 p-4 mx-auto text-center ">
    <h2 style={{display: 'block', textAlign:'center',fontWeight:'bold',margin:'20px',marginBottom:'40px', textShadow: '1px 1px 2px #000000'}}>SJMC Consultants</h2>

      <div className="Consultant" style={{marginBottom:'50px'}}>

      <img style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} src={Image1} alt="Your Image" className="img-fluid" />
            <h2 style={{ position: 'relative', top: '-5px', transform: 'translateY(50%)' }} className="text-left">Dr. Snehashish Vardhan</h2>
            <hr/>
            <h4 style={{ position: 'relative', top: '-3px', transform: 'translateY(-50%)',fontWeight: 'normal' }}>Consultant (Journalism)</h4>
             <p className="mt-4 mx-auto text-left" style={{textAlign:'left'}}>
             PhD, M.Phil., NET, MA, BA in Journalism and Mass Communication <br></br>
Has done his PhD. in New Media and Political Communication. He is specialised in Journalism, New Media, Research and Photography having more than two years of teaching experience.<br></br>  
Alumnus of Central University of South Bihar, Devi Ahilya Vishwavidyalaya, Banaras Hindu University and Patna University.

             </p></div>

             <div className="Consultant" style={{marginBottom:'50px'}}>
      <img style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} src={Image2} alt="Your Image" className="img-fluid" />
            <h2 style={{ position: 'relative', top: '-5px', transform: 'translateY(50%)' }} className="text-left">Dr. Sandeep Kumar Dubey</h2>
            <hr/>
            <h4 style={{ position: 'relative', top: '-3px', transform: 'translateY(-50%)',fontWeight: 'normal' }}>Consultant (Film & TV)</h4>
             <p className="mt-4 mx-auto text-left" style={{textAlign:'left'}}>
             Ph.D. in Mass Communication (2023), Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha, Maharashtra. Earlier was Assistant Professor, Department of Journalism & Mass Communication, Invertis University, Bareilly (Uttar Pradesh). Authored four book chapters, two research papers in UGC Care listed and peer-reviewed journals, One Book Review, book chapters and numerous research articles in peer-reviewed journals and magazines. Over 100 articles and features published in newspapers like Dainik Jagran, Amar Ujala, and Jansandesh Times.
             </p></div>


             <div className="Consultant" style={{marginBottom:'50px'}}>
      <img style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} src={Image3} alt="Your Image" className="img-fluid" />
            <h2 style={{ position: 'relative', top: '-5px', transform: 'translateY(50%)' }} className="text-left">Dr. Sandeep Kumar</h2>
            <hr/>
            <h4 style={{ position: 'relative', top: '-3px', transform: 'translateY(-50%)',fontWeight: 'normal' }}>Consultant (Media Research)</h4>
             <p className="mt-4 mx-auto text-left" style={{textAlign:'left'}}>
             Dr. Sandeep Kumar has done his Ph.D. in Journalism and Mass Communication from Central University of South Bihar. His research focuses on New Media and Social Media, with a particular emphasis on the Psychological aspects of the different media platforms. He has proven track record of providing top-notch research and analysis in a timely manner and possess essential skills required for both qualitative and quantitative research such as data collection and analysis, Statistical Software (SPSS, R), report writing and Presentation, etc. His teaching area interest is Print production, Television production, Radio Production, and Media Research. 
             </p></div>

      
    </div>
  </div>
</div></div>
  )
}

export default Page25