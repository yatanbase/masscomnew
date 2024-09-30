import React, { useState } from 'react';
import './page8.css';
import Home from '../components/HomeButton'
import { Link } from 'react-router-dom';
import Image from '../asset/Aryabhatta Times/vol1 issue 1.jpg'




function Page38() {
  
  return (
   
    <div className='slidecontainer' style={{ margin: '40px' }}>
      <Home/>
     {/* <h2 style={{fontWeight:'bold'}}>Media Center</h2> */}
     
     <div className="flexx" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="rectangle" style={{ width: '310px', height: '50px', backgroundColor: '#780000', overflow: 'hidden', color: 'white', fontSize: '35px', textAlign: 'left',paddingLeft:'25px',paddingBottom:'18px' }}>2024 Publications</div>
      <div className="triangle" style={{ width: 0, height: 0, borderTop: '50px solid transparent', borderLeft: '50px solid #780000' ,paddingBottom:'1px'}}></div>
    </div>
     
    

    <Link to="/page36" style={{ textDecoration: 'none' }}>
<div className="aslide">
  <img src={Image} alt="Image6" style={{padding:'5px',backgroundColor:'white',border:'1px solid gray'}} />
  <p style={{textAlign:'center' , color:'black',marginBottom:'none',padding:'none'}}>Vol. 1 <br></br><span style={{color:'gray'}}>Issue : 1</span>   </p>
</div>
</Link>

 
            


        

    </div>
  );
}

export default Page38;
