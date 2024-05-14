import React, { useState } from 'react';
import Home from '../components/HomeButton'
import Image6 from '../asset/media_center/2024/2 April 2024/2_April (1).jpg'
import Image1 from '../asset/media_center/2024/2 April 2024/2_April (2).jpg'
import Image2 from '../asset/media_center/2024/2 April 2024/2_April (3).jpg'
import Image3 from '../asset/media_center/2024/29 January 2024/29_Jan.jpg'
import Image4 from '../asset/media_center/2024/4 April 2024/4_april (1).jpg'
import Image5 from '../asset/media_center/2024/4 April 2024/4_april (2).jpg'
import './page8.css';
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
       
      <div className="aslide" onClick={() => handleImageClick(Image1)}>
  <img src={Image1} alt="Image 1" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2)}>
  <img src={Image2} alt="Image 2" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image3)}>
  <img src={Image3} alt="Image 3" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/01/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image4)}>
  <img src={Image4} alt="Image 4" />
<p style={{textAlign:'left' , color:'gray'}}>Date : 04/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image5)}>
  <img src={Image5} alt="Image 5" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 04/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image6)}>
  <img src={Image6} alt="Image 6" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>

<div className="aslide" onClick={() => handleImageClick(Image1)}>
  <img src={Image1} alt="Image 1" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image2)}>
  <img src={Image2} alt="Image 2" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 02/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image3)}>
  <img src={Image3} alt="Image 3" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 29/01/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image4)}>
  <img src={Image4} alt="Image 4" />
<p style={{textAlign:'left' , color:'gray'}}>Date : 04/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image5)}>
  <img src={Image5} alt="Image 5" />
  <p style={{textAlign:'left' , color:'gray'}}>Date : 04/04/2024</p>
</div>
<div className="aslide" onClick={() => handleImageClick(Image6)}>
  <img src={Image6} alt="Image 6" />
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
