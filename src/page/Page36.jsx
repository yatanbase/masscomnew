import React from 'react'
import Flipbook from '../components/Flipbook';


  

const Page36 = () => {

    const pages = [
        'Page 1 Content',
        'Page 2 Content',
        'Page 3 Content',
        'Page 4 Content',
        // Add more pages as needed
      ];

  return (
    <div className="App">
      <h1>3D Flipbook</h1>
      <Flipbook pages={pages} />
    </div>
  )
}

export default Page36