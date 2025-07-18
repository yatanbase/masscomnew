import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import MainContent from './components/Main';
import Page1 from './page/page1';
import Page2 from './page/page2';
import About from './page/About';
import Page4 from './page/Page4';
import Page5 from './page/Page5';
import Page6 from './page/Page6';
import Page7 from './page/Page7';
import Page8 from './page/Page8';
import Page9 from './page/Page9';
import Page10 from './page/Page10';
import Conference from './page/Conference';
import Seminar from './page/Seminar';
import SmartClass from './page/SmartClass';

import News1 from './News/News1';
import News2 from './News/News2';
import News3 from './News/News3';
import News4 from './News/News4';
import News5 from './News/News5';
import News6 from './News/News6';
import News7 from './News/News7';

import SocialMediaPopup from './components/SocialMediaPopup';
import ClubsButton from './components/ClubsButton';

// 🔽 Custom wrapper to check if current route is "/"
const ShowOnlyOnHome = ({ children }) => {
  const location = useLocation();
  return location.pathname === '/' ? children : null;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/MA" element={<Page1 />} />
        <Route path="/PhD" element={<Page2 />} />
        <Route path="/About" element={<About />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Page5" element={<Page5 />} />
        <Route path="/Page6" element={<Page6 />} />
        <Route path="/Page7" element={<Page7 />} />
        <Route path="/Page8" element={<Page8 />} />
        <Route path="/Page9" element={<Page9 />} />
        <Route path="/Page10" element={<Page10 />} />
        <Route path="/Conference" element={<Conference />} />
        <Route path="/Seminar" element={<Seminar />} />
        <Route path="/SmartClass" element={<SmartClass />} />
        <Route path="/News1" element={<News1 />} />
        <Route path="/News2" element={<News2 />} />
        <Route path="/News3" element={<News3 />} />
        <Route path="/News4" element={<News4 />} />
        <Route path="/News5" element={<News5 />} />
        <Route path="/News6" element={<News6 />} />
        <Route path="/News7" element={<News7 />} />
      </Routes>

      {/* ✅ Show these only on Home Page */}
      <ShowOnlyOnHome>
        <SocialMediaPopup />
        <ClubsButton />
      </ShowOnlyOnHome>
    </BrowserRouter>
  );
}

export default App;
