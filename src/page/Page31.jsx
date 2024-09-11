import React from 'react';
import Image1 from '../asset/upcoming events/Image1.jpeg';
import Pdf from '../asset/upcoming events/first.pdf';
import Gif from '../asset/newicon.gif';
import Book from '../asset/events.png';

const Page31 = () => {
  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          backgroundColor: 'darkred',
          padding: '10px',
        }}
      >
        <img
          src={Book}
          style={{
            height: '4rem',
            width: 'auto',
            paddingLeft: '2rem',
            opacity: '87%',
          }}
          alt="Book"
        />
        <div
          style={{
            width: '55%',
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '5px',
            color: 'white',
            backgroundColor: 'darkred',
          }}
        >
          <h2
            style={{
              fontFamily: 'Nova Square,arial',
              fontWeight: '900',
              fontSize: '3em',
              textAlign: 'right',
            }}
          >
            Upcoming Events
          </h2>
        </div>
        <div style={{ width: '45%', color: 'white', height: '100%' }}>
          <p style={{ fontFamily: 'Kanit, sans', marginTop: '10px' }}>at SJMC</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
        <div style={{ width: '98vw', height: '98vh', display: 'flex', justifyContent: 'flex-start' }}>
          <div
            style={{
              backgroundColor: '#f0f0f0',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              width: '100%',
              height: 'auto',
              marginTop: '20px',
              padding: '20px',
            }}
            className="col-md-9 p-4 text-center"
          >
            <a href={Pdf} target="_blank" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  width: '100%',
                  marginBottom: '20px',
                  marginLeft: '20px', // Add margin from the left
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start', // Align to the start
                  justifyContent: 'flex-start',
                }}
              >
                <img
                  src={Image1}
                  alt="Gallery Image 2"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    height: 'auto',
                    objectFit: 'cover',
                    boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)',
                    borderRadius: '20px',
                  }}
                />
                <p
                  style={{
                    textAlign: 'left', // Align text to start
                    fontFamily: 'Times New Roman, serif',
                    fontSize: '1.1rem',
                    color: 'black',
                    marginTop: '10px',
                  }}
                >
                  Date : 11 to 30 September 2024
                  <br />
                  <span style={{ color: 'darkred', fontSize: '1rem' }}>know more &gt;</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Media Queries */}
      <style>
        {`
        @media (max-width: 768px) {
          div {
            flex-direction: column !important;
          }
          img {
            width: 100% !important;
            height: auto !important;
          }
          h2 {
            font-size: 2em !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
        `}
      </style>
    </>
  );
};

export default Page31;
