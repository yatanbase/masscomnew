import React from 'react';
import AtishImage from '../asset/atish.jpg';
import HODImage from '../asset/DrManishaPrakash.jpeg';
import SandeepImage from '../asset/sandeep.jpg';
import Home from '../components/HomeButton';

const Page53 = () => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    background: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '30px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '150px',
    height: 'auto',
    borderRadius: '10px',
    marginRight: '20px',
    objectFit: 'cover',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  };

  const textStyle = {
    textAlign: 'left',
    lineHeight: '1.7',
  };

  return (
    <div style={{ padding: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Home />
      </div>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '50px', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
        Board of Studies
      </h2>
      <div style={cardStyle}>
        <img src={AtishImage} alt="Prof. Atish Prashar" style={imageStyle} />
        <div style={textStyle}>
          <h3 style={{ fontWeight: 'bold' }}>Prof. Atish Prashar</h3>
          <p>
            Professor, Dept. of Mass Communication and Media<br />
            Central University of South Bihar, Gaya<br />
            <strong>Email:</strong> atishprashar@cusb.ac.in<br />
            <strong>Phone:</strong> 9810490789
          </p>
        </div>
      </div>

      <div style={cardStyle}>
        <img src={HODImage} alt="Dr. Manisha Prakash" style={imageStyle} />
        <div style={textStyle}>
          <h3 style={{ fontWeight: 'bold' }}>Dr. Manisha Prakash</h3>
          <p>
            Head of Department, Dept. of Journalism and Mass Communication<br />
            Aryabhatta Knowledge University, Patna<br />
            <strong>Email:</strong> hod@akubihar.ac.in<br />
            <strong>Phone:</strong> +91 9241027682
          </p>
        </div>
      </div>

      <div style={cardStyle}>
        <img src={SandeepImage} alt="Dr. Sandeep Kumar Dubey" style={imageStyle} />
        <div style={textStyle}>
          <h3 style={{ fontWeight: 'bold' }}>Dr. Sandeep Kumar Dubey</h3>
          <p>
            Assistant Professor , Aryabhatta Knowledge University, Patna<br />
            Former Head of Department, Journalism & Mass Communication, Invertis University, Bareilly<br />
            <strong>Email:</strong> drskdjmc@gmail.com<br />
            <strong>Phone:</strong> 9935131246
          </p>
        </div>
      </div>

    </div>
  );
};

export default Page53;
