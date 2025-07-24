import React, { useState } from 'react';
import './page8.css';
import Home from '../components/HomeButton'

import Image48 from '../asset/media_center/2024/26 October 2024/image (4).jpg'
import Image47 from '../asset/media_center/2024/26 October 2024/image (3).jpg'
import Image46 from '../asset/media_center/2024/26 October 2024/image (2).jpg'
import Image45 from '../asset/media_center/2024/26 October 2024/image (1).jpg'

import Image44 from '../asset/media_center/2024/24 October 2024/image (4).jpg'
import Image43 from '../asset/media_center/2024/24 October 2024/image (3).jpg'
import Image42 from '../asset/media_center/2024/24 October 2024/image (2).jpg'
import Image41 from '../asset/media_center/2024/24 October 2024/image (1).jpg'


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

//2025

import Image3_1 from '../asset/media_center/2025/10-02-2025/image (1).jpeg'
import Image3_2 from '../asset/media_center/2025/10-02-2025/image (2).jpeg'
import Image3_3 from '../asset/media_center/2025/10-02-2025/image (3).jpeg'
import Image3_4 from '../asset/media_center/2025/10-02-2025/image (4).jpeg'
import Image3_5 from '../asset/media_center/2025/23 march/image.jpg'

import Image3_6 from '../asset/media_center/2025/march/13 march.jpg'
import Image3_7 from '../asset/media_center/2025/march/26 march.jpg'
import Image3_8 from '../asset/media_center/2025/march/26 march.png'
import Image3_9 from '../asset/media_center/2025/march/27 march (1).jpg'
import Image3_10 from '../asset/media_center/2025/march/27 march (1).png'
import Image3_11 from '../asset/media_center/2025/march/27 march (2).jpg'
import Image3_12 from '../asset/media_center/2025/march/27 march (3).jpg'
import Image3_13 from '../asset/media_center/2025/march/28 march.jpg'
import Image3_14 from '../asset/media_center/2025/march/28 march.png'
import Image3_15 from '../asset/media_center/2025/march/30 march (1).jpg'
import Image3_16 from '../asset/media_center/2025/march/30 march (2).jpg'
import ImageJune1 from '../asset/media_center/2025/June/dainik_jagran_28_06_2025_pg04.jpeg';
import ImageJuly1 from '../asset/media_center/2025/July/hindustan_02_07_2025_pg04.jpeg';
import ImageJuly2 from '../asset/media_center/2025/July/hin22-07-25.jpeg';
import ImageJuly3 from '../asset/media_center/2025/July/dani22-07-25.jpeg';
import ImageJuly4 from '../asset/media_center/2025/July/prabhat22-07-25.jpeg';

 




function Page8() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Organize images by year and dates
  const images2025 = [
    { src: ImageJuly1, date: '22/07/2025' },
     { src: ImageJuly2, date: '22/07/2025' },
      { src: ImageJuly3, date: '22/07/2025' },
       { src: ImageJuly4, date: '02/07/2025' },
    { src: ImageJune1, date: '28/06/2025' },
    { src: Image3_6, date: '13/03/2025' },
    { src: Image3_7, date: '26/03/2025' },
    { src: Image3_8, date: '26/03/2025' },
    { src: Image3_9, date: '27/03/2025' },
    { src: Image3_10, date: '27/03/2025' },
    { src: Image3_11, date: '27/03/2025' },
    { src: Image3_12, date: '27/03/2025' },
    { src: Image3_13, date: '28/03/2025' },
    { src: Image3_14, date: '28/03/2025' },
    { src: Image3_15, date: '30/03/2025' },
    { src: Image3_16, date: '30/03/2025' },
    { src: Image3_5, date: '21/03/2025' },
    { src: Image3_1, date: '10/02/2025' },
    { src: Image3_2, date: '10/02/2025' },
    { src: Image3_3, date: '10/02/2025' },
    { src: Image3_4, date: '10/02/2025' },
  ];

  const images2024 = [
    { src: Image48, date: '26/10/2024' },
    { src: Image47, date: '26/10/2024' },
    { src: Image46, date: '26/10/2024' },
    { src: Image45, date: '26/10/2024' },
    { src: Image44, date: '24/10/2024' },
    { src: Image43, date: '24/10/2024' },
    { src: Image42, date: '24/10/2024' },
    { src: Image41, date: '24/10/2024' },
    { src: Image40, date: '06/10/2024' },
    { src: Image39, date: '06/10/2024' },
    { src: Image38, date: '22/09/2024' },
    { src: Image37, date: '22/09/2024' },
    { src: Image36, date: '15/09/2024' },
    { src: Image35, date: '15/09/2024' },
    { src: Image34, date: '14/09/2024' },
    { src: Image33, date: '13/09/2024' },
    { src: Image32, date: '09/09/2024' },
    { src: Image31, date: '09/09/2024' },
    { src: Image30, date: '09/09/2024' },
    { src: Image29, date: '09/09/2024' },
    { src: Image28, date: '09/09/2024' },
    { src: Image27, date: '09/09/2024' },
    { src: Image26, date: '08/09/2024' },
    { src: Image25, date: '08/09/2024' },
    { src: Image24, date: '08/09/2024' },
    { src: Image23, date: '08/09/2024' },
    { src: Image22, date: '20/08/2024' },
    { src: Image21, date: '18/08/2024' },
    { src: Image20, date: '18/08/2024' },
    { src: Image19, date: '18/08/2024' },
    { src: Image18, date: '18/08/2024' },
    { src: Image17, date: '18/08/2024' },
    { src: Image16, date: '11/08/2024' },
    { src: Image15, date: '11/08/2024' },
    { src: Image14, date: '02/08/2024' },
    { src: Image13, date: '02/08/2024' },
    { src: Image12, date: '21/07/2024' },
    { src: Image11, date: '19/07/2024' },
    { src: Image10, date: '19/07/2024' },
    { src: Image9, date: '10/07/2024' },
    { src: Image8, date: '10/07/2024' },
    { src: Image7, date: '30/05/2024' },
    { src: Image6, date: '02/04/2024' },
    { src: Image1, date: '02/04/2024' },
    { src: Image2, date: '02/04/2024' },
    { src: Image3, date: '29/01/2024' },
    { src: Image4, date: '04/04/2024' },
    { src: Image5, date: '04/04/2024' }
  ];

  const images2023 = [
    { src: Image2_1, date: '10/12/2023' },
    { src: Image2_2, date: '10/12/2023' },
    { src: Image2_3, date: '10/12/2023' },
    { src: Image2_4, date: '14/09/2023' },
    { src: Image2_5, date: '14/09/2023' },
    { src: Image2_6, date: '14/09/2023' },
    { src: Image2_7, date: '15/09/2023' },
    { src: Image2_8, date: '15/09/2023' },
    { src: Image2_9, date: '15/09/2023' },
    { src: Image2_10, date: '21/07/2023' },
    { src: Image2_11, date: '21/07/2023' },
    { src: Image2_12, date: '21/07/2023' },
    { src: Image2_13, date: '21/07/2023' },
    { src: Image2_14, date: '21/07/2023' },
    { src: Image2_15, date: '24/07/2023' },
    { src: Image2_16, date: '27/07/2023' },
    { src: Image2_17, date: '29/07/2023' },
    { src: Image2_18, date: '29/07/2023' },
    { src: Image2_19, date: '29/07/2023' },
    { src: Image2_20, date: '29/07/2023' },
    { src: Image2_21, date: '14/09/2023' }
  ];

  const handleImageClick = (src) => {
    setModalImage(src);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderYearSection = (year, images) => (
    <>
      <div className="flexx" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="rectangle" style={{ 
          width: '150px', 
          height: '50px', 
          backgroundColor: '#780000', 
          overflow: 'hidden', 
          color: 'white', 
          fontSize: '35px', 
          textAlign: 'left',
          paddingLeft: '25px',
          paddingBottom: '18px' 
        }}>
          {year}
        </div>
        <div className="triangle" style={{ 
          width: 0, 
          height: 0, 
          borderTop: '50px solid transparent', 
          borderLeft: '50px solid #780000',
          paddingBottom: '1px'
        }}></div>
      </div>
      
      <div className="autoslider">
        <div className={`slide-track${year === '2023' ? '2' : year === '2025' ? '3' : ''}`}>
          {images.length === 0 ? (
            <div className="aslide">
              <p style={{textAlign:'center', color:'gray'}}>No media content yet</p>
            </div>
          ) : (
            <>
              {[...images, ...images].map((image, index) => (
                <div className="aslide" key={index} onClick={() => handleImageClick(image.src)}>
                  <img src={image.src} alt={`Image ${index + 1}`} />
                  <p style={{textAlign:'left', color:'gray'}}>Date : {image.date}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className='slidecontainer' style={{ margin: '40px' }}>
      <Home/>
      <h2 style={{fontWeight:'bold'}}>Media Center</h2>
      
      {renderYearSection('2025', images2025)}
      {renderYearSection('2024', images2024)}
      {renderYearSection('2023', images2023)}

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
