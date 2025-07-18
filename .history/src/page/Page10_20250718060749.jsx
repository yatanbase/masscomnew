import React, { useEffect } from 'react';
import Home from '../components/HomeButton';

function Page10() {
  useEffect(() => {
    // Auto-redirect user to the recruitment page
    window.location.href = "https://akubihar.ac.in/Administration/Recruitments.aspx";
  }, []);

  return (
    <div style={{ margin: '50px' }}>
      <div className="container text-center">
        <Home />
        <h4>Redirecting to Career Page...</h4>
        <p>If you are not redirected automatically, <a href="https://akubihar.ac.in/Administration/Recruitments.aspx">click here</a>.</p>
      </div>
    </div>
  );
}

export default Page10;
