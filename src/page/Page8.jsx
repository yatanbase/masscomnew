import React, { useState } from 'react';
import './page8.css';
import Home from '../components/HomeButton'

import Image39 from '../asset/media_center/2024/6 October 2024/image (1).jpg'
import Image40 from '../asset/media_center/2024/6 October 2024/image (2).jpg'

import Image37 from '../asset/media_center/2024/22 september/DAINIK BHASKAR 22.09.2024.jpeg'
import Image38 from '../asset/media_center/2024/22 september/PRABHAT KHABAR 22.09.2024.jpeg'

import Image35 from '../asset/media_center/2024/15 september/AAJ 15.09.2024.jpeg'
import Image36 from '../asset/media_center/2024/15 september/NEWS CLIP.jpeg'



import Image34 from '../asset/media_center/2024/14 september/image.jpeg'
import Image33 from '../asset/media_center/2024/13 september/DAINIK BHASKAR 1309.2024.jpeg'

import Image32 from '../asset/media_center/2024/9 September 2024/image (6).jpeg'
import Image31 from '../asset/media_center/2024/9 September 2024/image (5).jpeg'
import Image30 from '../asset/media_center/2024/9 September 2024/image (4).jpeg'
import Image29 from '../asset/media_center/2024/9 September 2024/image (3).jpeg'
import Image28 from '../asset/media_center/2024/9 September 2024/image (2).jpeg'
import Image27 from '../asset/media_center/2024/9 September 2024/image (1).jpeg'


import Image23 from '../asset/media_center/2024/8 september/HINDUSTAN 08.09.2024.jpeg'
import Image24 from '../asset/media_center/2024/8 september/PRABHAT KHABAR 08.09.2024.jpeg'
import Image25 from '../asset/media_center/2024/8 september/दैनिक जागरण 8 SEPT 24 PG 4.jpeg'
import Image26 from '../asset/media_center/2024/8 september/दैनिक भास्कर 08.09.2024 p.04.jpeg'

import Image22 from '../asset/media_center/2024/20 August 2024/Image.jpeg'
import Image21 from '../asset/media_center//2024/18 August/image (5).jpeg'
import Image20 from '../asset/media_center//2024/18 August/image (1).jpeg'
import Image17 from '../asset/media_center//2024/18 August/image (2).jpeg'
import Image18 from '../asset/media_center//2024/18 August/image (3).jpeg'
import Image19 from '../asset/media_center//2024/18 August/image (4).jpeg'
import Image16 from '../asset/media_center//2024/11 August 2024/11__Aug_2024(2).jpeg'
import Image15 from '../asset/media_center/2024/11 August 2024/11_Aug_2024.jpeg';
import Image14 from '../asset/media_center/2024/2 August 2024/2_august_2024 (2).jpeg';
import Image13 from '../asset/media_center/2024/2 August 2024/2_august_2024 (1).jpeg';
import Image12 from '../asset/media_center/2024/21 July 2024/21July.jpeg';
import Image11 from '../asset/media_center/2024/19 july 2024/image (1).jpeg';
import Image10 from '../asset/media_center/2024/19 july 2024/image (2).jpeg';
import Image9 from '../asset/media_center/2024/10 july 2024/i2.jpg';
import Image8 from '../asset/media_center/2024/10 july 2024/i1.jpg';
import Image7 from '../asset/media_center/2024/30 May 2024/30 may.jpg'
import Image6 from '../asset/media_center/2024/2 April 2024/2_April (1).jpg'
import Image1 from '../asset/media_center/2024/2 April 2024/2_April (2).jpg'
import Image2 from '../asset/media_center/2024/2 April 2024/2_April (3).jpg'
import Image3 from '../asset/media_center/2024/29 January 2024/29_Jan.jpg'
import Image4 from '../asset/media_center/2024/4 April 2024/4_april (1).jpg'
import Image5 from '../asset/media_center/2024/4 April 2024/4_april (2).jpg'


import Image2_1 from '../asset/media_center/2023/10 December 2023/10_dec (1).jpg'
import Image2_2 from '../asset/media_center/2023/10 December 2023/10_dec (2).jpg'
import Image2_3 from '../asset/media_center/2023/10 December 2023/10_dec (3).jpg'
import Image2_4 from '../asset/media_center/2023/14 September 2023/14_sep (2).jpg'
import Image2_5 from '../asset/media_center/2023/14 September 2023/14_sep (3).jpg'
import Image2_6 from '../asset/media_center/2023/14 September 2023/14_sep (4).jpg'
import Image2_7 from '../asset/media_center/2023/15 September 2023/15_sep (1).jpg'
import Image2_8 from '../asset/media_center/2023/15 September 2023/15_sep (2).jpg'
import Image2_9 from '../asset/media_center/2023/15 September 2023/15_sep (3).jpg'
import Image2_10 from '../asset/media_center/2023/21 July 2023/21_july (1).jpg'
import Image2_11 from '../asset/media_center/2023/21 July 2023/21_july (2).jpg'
import Image2_12 from '../asset/media_center/2023/21 July 2023/21_july (3).jpg'
import Image2_13 from '../asset/media_center/2023/21 July 2023/21_july (4).jpg'
import Image2_14 from '../asset/media_center/2023/21 July 2023/21_july (5).jpg'
import Image2_15 from '../asset/media_center/2023/24 July 2023/24_july.jpg'
import Image2_16 from '../asset/media_center/2023/27 July 2023/27_july.jpg'
import Image2_17 from '../asset/media_center/2023/29 November 2023/29_july (1).jpg'
import Image2_18 from '../asset/media_center/2023/29 November 2023/29_july (2).jpg'
import Image2_19 from '../asset/media_center/2023/29 November 2023/29_july (3).jpg'
import Image2_20 from '../asset/media_center/2023/29 November 2023/29_july (4).jpg'
import Image2_21 from '../asset/media_center/2023/14 September 2023/14_sep (1).jpg'




function Page8() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (src) => {
    setModalImage(src);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
   
    <div className='slidecontainer' style={{ margin: '40px' }}>
      <Home/>
     <h2 style={{fontWeight:'bold'}}>Media Center</h2>
     
     <div className="flexx" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="rectangle" style={{ width: '150px', height: '50px', backgroundColor: '#780000', overflow: 'hidden', color: 'white', fontSize: '35px', textAlign: 'left',paddingLeft:'25px',paddingBottom:'18px' }}>2024</div>
      <div className="triangle" style={{ width: 0, height: 0, borderTop: '50px solid transparent', borderLeft: '50px solid #780000' ,paddingBottom:'1px'}}></div>
    </div>
     
     <div className="autoslider">
      <div className="slide-track">

{/* 
      <div className="aslide" onClick={()=> handleImageClick(Image29)}>
  <img src={Image39} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 14/09/2024</p>
  </div> */}

<div className="aslide" onClick={()=> handleImageClick(Image40)}>
  <img src={Image40} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 06/10/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image39)}>
  <img src={Image39} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 06/10/2024</p>
  </div>

      <div className="aslide" onClick={()=> handleImageClick(Image38)}>
  <img src={Image38} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 22/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image37)}>
  <img src={Image37} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 22/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image36)}>
  <img src={Image36} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 15/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image35)}>
  <img src={Image35} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 15/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image34)}>
  <img src={Image34} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 14/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image33)}>
  <img src={Image33} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 13/09/2024</p>
  </div>


  <div className="aslide" onClick={()=> handleImageClick(Image32)}>
  <img src={Image32} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image31)}>
  <img src={Image31} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image30)}>
  <img src={Image30} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
  </div>

      <div className="aslide" onClick={()=> handleImageClick(Image29)}>
  <img src={Image29} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
  </div>
  <div className="aslide" onClick={()=> handleImageClick(Image28)}>
  <img src={Image28} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
</div>

<div className="aslide" onClick={()=> handleImageClick(Image27)}>
  <img src={Image27} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
</div>

<div className="aslide" onClick={()=> handleImageClick(Image26)}>
  <img src={Image26} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 08/09/2024</p>
</div>

<div className="aslide" onClick={()=> handleImageClick(Image25)}>
  <img src={Image25} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 08/09/2024</p>
</div>

<div className="aslide" onClick={()=> handleImageClick(Image24)}>
  <img src={Image24} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 08/09/2024</p>
</div>

<div className="aslide" onClick={()=> handleImageClick(Image23)}>
  <img src={Image23} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 08/09/2024</p>
</div>


      <div className="aslide" onClick={()=> handleImageClick(Image22)}>
  <img src={Image22} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 20/08/2024</p>
  </div>
      <div className="aslide" onClick={()=> handleImageClick(Image21)}>
  <img src={Image21} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 18/08/2024</p>
  </div>
      <div className="aslide" onClick={()=> handleImageClick(Image17)}>
  <img src={Image17} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 18/08/2024</p>
  </div>
   <div className="aslide" onClick={()=> handleImageClick(Image18)}>
  <img src={Image18} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 18/08/2024</p>
  </div>
  <div className="aslide" onClick={()=> handleImageClick(Image19)}>
  <img src={Image19} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 18/08/2024</p>
  </div>
  <div className="aslide" onClick={()=> handleImageClick(Image20)}>
  <img src={Image20} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 18/08/2024</p>
  </div>

      <div className="aslide" onClick={()=> handleImageClick(Image16)}>
  <img src={Image16} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 11/08/2024</p>
  </div>     
  {/*<div className="aslide" onClick={()=> handleImageClick(Image15)}>
  <img src={Image15} alt ='Image15'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 11/08/2024</p>
  </div>*/}
  <div className="aslide" onClick={()=> handleImageClick(Image15)}>
  <img src={Image15} alt ='Image15'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 11/08/2024</p>
  </div>    
      <div className="aslide" onClick={()=> handleImageClick(Image14)}>
  <img src={Image14} alt ='Image13'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 02/08/2024</p>
  </div>      
<div className="aslide" onClick={()=> handleImageClick(Image13)}>
  <img src={Image13} alt ='Image13'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 02/08/2024</p>
  </div>      
<div className="aslide" onClick={() => handleImageClick(Image12)}>
  <img src={Image12} alt="Image12" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2024</p>
</div>      
<div className="aslide" onClick={() => handleImageClick(Image10)}>
  <img src={Image10} alt="Image10" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 19/07/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image11)}>
  <img src={Image11} alt="Image11" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 19/07/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image8)}>
  <img src={Image8} alt="Image8" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 10/07/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image9)}>
  <img src={Image9} alt="Image9" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 10/07/2024</p>
</div>
      <div className="aslide" onClick={() => handleImageClick(Image7)}>
  <img src={Image7} alt="Image7" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 30/05/2024</p>
</div>
      <div className="aslide" onClick={() => handleImageClick(Image1)}>
  <img src={Image1} alt="Image1" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2)}>
  <img src={Image2} alt="Image2" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image3)}>
  <img src={Image3} alt="Image3" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/01/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image4)}>
  <img src={Image4} alt="Image4" />
<p style={{textAlign:'left' , color:'gray'}}>Date : 04/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image5)}>
  <img src={Image5} alt="Image5" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 04/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image6)}>
  <img src={Image6} alt="Image6" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>

 

<div className="aslide" onClick={()=> handleImageClick(Image40)}>
  <img src={Image40} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 06/10/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image39)}>
  <img src={Image39} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 06/10/2024</p>
  </div>

      <div className="aslide" onClick={()=> handleImageClick(Image38)}>
  <img src={Image38} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 22/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image37)}>
  <img src={Image37} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 22/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image36)}>
  <img src={Image36} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 15/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image35)}>
  <img src={Image35} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 15/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image34)}>
  <img src={Image34} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 14/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image33)}>
  <img src={Image33} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 13/09/2024</p>
  </div>


  <div className="aslide" onClick={()=> handleImageClick(Image32)}>
  <img src={Image32} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image31)}>
  <img src={Image31} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
  </div>

  <div className="aslide" onClick={()=> handleImageClick(Image30)}>
  <img src={Image30} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
  </div>

      <div className="aslide" onClick={()=> handleImageClick(Image29)}>
  <img src={Image29} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
  </div>
  <div className="aslide" onClick={()=> handleImageClick(Image28)}>
  <img src={Image28} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
</div>

<div className="aslide" onClick={()=> handleImageClick(Image27)}>
  <img src={Image27} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 09/09/2024</p>
</div>

<div className="aslide" onClick={()=> handleImageClick(Image26)}>
  <img src={Image26} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 08/09/2024</p>
</div>

<div className="aslide" onClick={()=> handleImageClick(Image25)}>
  <img src={Image25} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 08/09/2024</p>
</div>

<div className="aslide" onClick={()=> handleImageClick(Image24)}>
  <img src={Image24} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 08/09/2024</p>
</div>

<div className="aslide" onClick={()=> handleImageClick(Image23)}>
  <img src={Image23} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 08/09/2024</p>
</div>


      <div className="aslide" onClick={()=> handleImageClick(Image22)}>
  <img src={Image22} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 20/08/2024</p>
  </div>
      <div className="aslide" onClick={()=> handleImageClick(Image21)}>
  <img src={Image21} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 18/08/2024</p>
  </div>
      <div className="aslide" onClick={()=> handleImageClick(Image17)}>
  <img src={Image17} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 18/08/2024</p>
  </div>
   <div className="aslide" onClick={()=> handleImageClick(Image18)}>
  <img src={Image18} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 18/08/2024</p>
  </div>
  <div className="aslide" onClick={()=> handleImageClick(Image19)}>
  <img src={Image19} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 18/08/2024</p>
  </div>
  <div className="aslide" onClick={()=> handleImageClick(Image20)}>
  <img src={Image20} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 18/08/2024</p>
  </div>

      <div className="aslide" onClick={()=> handleImageClick(Image16)}>
  <img src={Image16} alt ='Image16'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 11/08/2024</p>
  </div>     
  {/*<div className="aslide" onClick={()=> handleImageClick(Image15)}>
  <img src={Image15} alt ='Image15'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 11/08/2024</p>
  </div>*/}
  <div className="aslide" onClick={()=> handleImageClick(Image15)}>
  <img src={Image15} alt ='Image15'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 11/08/2024</p>
  </div>    
      <div className="aslide" onClick={()=> handleImageClick(Image14)}>
  <img src={Image14} alt ='Image13'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 02/08/2024</p>
  </div>      
<div className="aslide" onClick={()=> handleImageClick(Image13)}>
  <img src={Image13} alt ='Image13'/>
  <p style={{textAlign:'left', color:'gray'}}>Date : 02/08/2024</p>
  </div>      
<div className="aslide" onClick={() => handleImageClick(Image12)}>
  <img src={Image12} alt="Image12" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2024</p>
</div>      
<div className="aslide" onClick={() => handleImageClick(Image10)}>
  <img src={Image10} alt="Image10" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 19/07/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image11)}>
  <img src={Image11} alt="Image11" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 19/07/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image8)}>
  <img src={Image8} alt="Image8" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 10/07/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image9)}>
  <img src={Image9} alt="Image9" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 10/07/2024</p>
</div>
      <div className="aslide" onClick={() => handleImageClick(Image7)}>
  <img src={Image7} alt="Image7" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 30/05/2024</p>
</div>
      <div className="aslide" onClick={() => handleImageClick(Image1)}>
  <img src={Image1} alt="Image1" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2)}>
  <img src={Image2} alt="Image2" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image3)}>
  <img src={Image3} alt="Image3" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/01/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image4)}>
  <img src={Image4} alt="Image4" />
<p style={{textAlign:'left' , color:'gray'}}>Date : 04/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image5)}>
  <img src={Image5} alt="Image5" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 04/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image6)}>
  <img src={Image6} alt="Image6" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>

 
        {/* Add more aslides here */}
      </div>
    </div>
            


            <br></br>
            <div className="flexx" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="rectangle" style={{ width: '150px', height: '50px', backgroundColor: '#780000', overflow: 'hidden', color: 'white', fontSize: '35px', textAlign: 'left',paddingLeft:'25px',paddingBottom:'18px' }}>2023</div>
      <div className="triangle" style={{ width: 0, height: 0, borderTop: '50px solid transparent', borderLeft: '50px solid #780000' }}></div>
    </div>
    
    <div className="autoslider">
      <div className="slide-track2">
       
      <div className="aslide" onClick={() => handleImageClick(Image2_1)}>
  <img src={Image2_1} alt="Image 2_1" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 10/12/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_2)}>
  <img src={Image2_2} alt="Image 2_2" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 10/12/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_3)}>
  <img src={Image2_3} alt="Image 2_3" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 10/12/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_4)}>
  <img src={Image2_4} alt="Image 2_4" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 14/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_5)}>
  <img src={Image2_5} alt="Image 2_5" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 14/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_6)}>
  <img src={Image2_6} alt="Image 2_6" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 14/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_7)}>
  <img src={Image2_7} alt="Image 2_7" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 15/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_8)}>
  <img src={Image2_8} alt="Image 2_8" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 15/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_9)}>
  <img src={Image2_9} alt="Image 2_9" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 15/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_10)}>
  <img src={Image2_10} alt="Image 2_10" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_11)}>
  <img src={Image2_11} alt="Image 2_11" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_12)}>
  <img src={Image2_12} alt="Image 2_12" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_13)}>
  <img src={Image2_13} alt="Image 2_13" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_14)}>
  <img src={Image2_14} alt="Image 2_14" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_15)}>
  <img src={Image2_15} alt="Image 2_15" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 24/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_16)}>
  <img src={Image2_16} alt="Image 2_16" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 27/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_17)}>
  <img src={Image2_17} alt="Image 2_17" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_18)}>
  <img src={Image2_18} alt="Image 2_18" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_19)}>
  <img src={Image2_19} alt="Image 2_19" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_20)}>
  <img src={Image2_20} alt="Image 2_20" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_21)}>
  <img src={Image2_21} alt="Image 2_21" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 14/09/2023</p>
</div>

<div className="aslide" onClick={() => handleImageClick(Image2_1)}>
  <img src={Image2_1} alt="Image 2_1" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 10/12/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_2)}>
  <img src={Image2_2} alt="Image 2_2" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 10/12/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_3)}>
  <img src={Image2_3} alt="Image 2_3" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 10/12/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_4)}>
  <img src={Image2_4} alt="Image 2_4" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 14/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_5)}>
  <img src={Image2_5} alt="Image 2_5" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 14/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_6)}>
  <img src={Image2_6} alt="Image 2_6" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 14/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_7)}>
  <img src={Image2_7} alt="Image 2_7" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 15/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_8)}>
  <img src={Image2_8} alt="Image 2_8" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 15/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_9)}>
  <img src={Image2_9} alt="Image 2_9" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 15/09/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_10)}>
  <img src={Image2_10} alt="Image 2_10" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_11)}>
  <img src={Image2_11} alt="Image 2_11" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_12)}>
  <img src={Image2_12} alt="Image 2_12" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_13)}>
  <img src={Image2_13} alt="Image 2_13" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_14)}>
  <img src={Image2_14} alt="Image 2_14" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 21/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_15)}>
  <img src={Image2_15} alt="Image 2_15" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 24/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_16)}>
  <img src={Image2_16} alt="Image 2_16" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 27/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_17)}>
  <img src={Image2_17} alt="Image 2_17" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_18)}>
  <img src={Image2_18} alt="Image 2_18" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_19)}>
  <img src={Image2_19} alt="Image 2_19" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_20)}>
  <img src={Image2_20} alt="Image 2_20" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/07/2023</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2_21)}>
  <img src={Image2_21} alt="Image 2_21" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 14/09/2023</p>
</div>






      
      
    </div>
    </div>
    {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Modal" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Page8;
