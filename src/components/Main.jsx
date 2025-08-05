import React, { useState, useEffect } from 'react';
import ImageSlider from '../components/Slider'
import BlinkingNews from '../components/Blink'
import './styles/styles.css'
import imgAbout from '../asset/about.jpg'
import { NavLink } from 'react-router-dom';
import Toolbar from './Toolbar';
import Header from './Header';
import myImage from '../asset/myImage.jpeg';
import Book from '../asset/events.png'
import g1 from '../asset/slide1.jpeg';
import g2 from '../asset/slide2.jpeg';
import g3 from '../asset/slide3.jpeg';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom/dist';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

import Image1 from '../asset/home_slider_1.jpg';
import Image2 from '../asset/home_slider_2.jpg';
import Image3 from '../asset/home_slider_3.jpg';
import Course1 from '../asset/c1.pdf'
import Course2 from '../asset/c2.pdf'
import Course3 from '../asset/c3.pdf'
import Course4 from '../asset/c4.pdf'
import Course5 from '../asset/c5.pdf'
import Certificates from '../asset/certificate.pdf'
import DisasterImage from '../asset/disaster_management.jpg'
import AnnualReport1 from '../asset/annual_report_1.pdf'
import AnnualReport2 from '../asset/annual_report_2.pdf'
import course1 from '../asset/c1.pdf'
import course2 from '../asset/c2.pdf'
import course3 from '../asset/c3.pdf'
import course4 from '../asset/c4.pdf'
import Gif from '../asset/newicon.gif'
import course5 from '../asset/c5.pdf'
import './main.css'
import ScriptWritingDay from '../asset/Script seminar/scriptSeminar1.jpg'
import DigitalEd from '../asset/Digital Education/digitaled (9).jpeg'
import Refresher from '../asset/refresher/Refresher (7).jpeg'
import Film from '../asset/film screening/film (3).jpeg'
import Students from '../asset/Student activities/students (2).jpeg'
import Hindi_divas from '../asset/Our gallery/Hindi Diwas/image (2).jpg'
import Wetland from '../asset/Our gallery/wetlands_Workshop/poster.png'
import MOU from '../asset/MOU/2.jpg';
import Youth_cover from '../asset/Our gallery/youth as co creators/banner for gallery title.jpeg'
import Tvbroadcasting_cover from '../asset/Our gallery/Bhartiye tv prasaran -14-09-24/BANNER for title only.jpeg'
import Wetland_pdf from '../asset/Our gallery/wetlands_Workshop/1.pdf'
import Orientation from '../asset/Our gallery/Orientation/orientation (4).jpeg'
import Orientation_pdf from '../asset/News/orientation_sjmc.pdf'
import Space_day from '../asset/Our gallery/space_day/space_day (3).jpeg'
import Free_Course from '../asset/Our gallery/Course/banner.jpg'
import Screen_writing from '../asset/Our gallery/screen writing/image (1).jpg'
import Resurgent_bharat from '../asset/Our gallery/resurgent bharat/image (2).jpg'
import BBC_talk from '../asset/Our gallery/talk with bbc/image (4).jpeg'
import Prabhat_akhbar from '../asset/Our gallery/prabhat akhbar/image (1).jpeg'
import Univ from '../asset/Our gallery/univ/image (1).jpg'
import Unicef from '../asset/Our gallery/unicef/banner.jpg'
import Film_class from '../asset/Our gallery/FILM MASTERCLASS/image (2).jpg'
import March25 from '../asset/Our gallery/25 march/IMG-20250330-WA0042.jpg'
import March26 from '../asset/Our gallery/26 march/IMG-20250330-WA0058.jpg'
import March27 from '../asset/Our gallery/Guru Dakshata program/IMG-20250330-WA0031.jpg'


import MOOC_Training4 from '../asset/News/28 march.pdf'
import MOOC_Training3 from '../asset/News/27 march.pdf'
import MOOC_Training2 from '../asset/News/26 march.pdf'
import MOOC_Training1 from '../asset/News/25 march.pdf'
import Film_masterclass from '../asset/News/PRmarch23.docx'
import Women_Collab from '../asset/News/Women_Incubation.docx'
import Space_day_pdf from '../asset/News/PR (August 8, 2024).pdf'
import Bookistan from '../asset/Our gallery/Bookistan/image (2).jpeg'
import aryabhatta_cover from '../asset/Our gallery/aryabhatta on space day/image (1).jpeg'
import Aryabhatta_times from '../asset/Our gallery/aryabhatta times/image (4).jpg'
import PRO_img from '../asset/Our gallery/PRO/banner.jpg'
import PRO1_img from '../asset/Our gallery/PRO1/img1.jpeg'
import PKAHANI_img from '../asset/Our gallery/PKAHANI/k1.jpg'
import Aids_img from '../asset/Our gallery/aids/banner.jpeg'
import Bookistan_club from '../asset/News/Bookistan club.pdf'
import Bookistan_pdf from '../asset/News/Parsai (PR 17 August).pdf'
import space_day_pr_pdf from '../asset/News/PR_National_Space_Day.pdf'
import BroadcastingLecture from '../asset/News/PR (14 Sep).pdf'
import aryabhattaTimes from '../asset/News/Aryabhatta_time_launch.pdf'
import Youth_pdf from '../asset/News/youth as co creators pr final.pdf'
import Pro_pdf from '../asset/News/PRO_PR (Sep 28).pdf'
import Free_Course_pdf from '../asset/News/PR (October 22).pdf'


import Announcement1 from '../News/Announcement1.pdf'
import Announcement2 from '../News/Announcement2.pdf'
import Announcement3 from '../News/Announcement3.pdf'
import Announcement4 from '../News/Announcement4.pdf'
import Aids_reel_pdf from '../asset/News/एसजेएमसी में एड्स जागरूकता पर व्याख्यान का हुआ आयोजन.pdf'
import Syllabus from '../News/SJMC Prospectus 2025.pdf'
import Home from '../components/HomeButton'
import Clubs from '../components/ClubsButton'
import SocialMediaPopup from '../components/ClubsButton'
import MCLogo from '../asset/media_center_logo.png'
import AryabhattaTimes_Logo from '../asset/AryabhattaTimes_logo.png'
import Form from '../components/Form'
import Advertisement from '../components/Admission_popup'
import Track from '../components/traffic'

const galleryItems = [
    {
            id: 54,
            image: PRO1_img,
        title: "Masterclass in Scene Creation: A Collaboration Between Actor & Director",
        link: "/Page54"
    },

    {
            id: 55,
            image: PKAHANI_img,
        title: "Kahani Radio Ki: Chronicles of Indian Broadcasting"
,
        link: "/PKAHANI"
    },
   
    {
        id: 28,
        image: March27,
        title: "MOOC Training Program Day 3",
        link: "/Page51"
    },
    {
        id: 27,
        image: March26,
        title: "MOOC Training Program Day 2",
        link: "/Page50"
    },
    {
        id: 26,
        image: March25,
        title: "MOOC Training Program Day 1",
        link: "/Page49"
    },
    {
        id: 1,
        image: Film_class,
        title: "Film Acting Masterclass by AKU & BSFD & FC",
        link: "/Page48"
    },
    {
        id: 2,
        image: Unicef,
        title: "Communication For Social and Behavior Change",
        link: "/Page47"
    },
    {
        id: 3,
        image: Univ,
        title: "Collaboration with association of Indian University",
        link: "/Page46"
    },
    {
        id: 4,
        image: Prabhat_akhbar,
        title: "Visit To Prabhat Khabar",
        link: "/Page45"
    },
    {
        id: 5,
        image: BBC_talk,
        title: "Talk with BBC ( 29-01-2025)",
        link: "/Page44"
    },
    {
        id: 6,
        image: Resurgent_bharat,
        title: "Resurgent Bharat",
        link: "/Page43"
    },
    {
        id: 7,
        image: Screen_writing,
        title: "Screen Writing and its Technical Aspects",
        link: "/Page42"
    },
    {
        id: 8,
        image: Free_Course,
        title: "Free Photography and Film Making Training Course",
        link: "/Page40"
        },
        {
            id: 9,
            image: Aids_img,
            title: "Role of Youth in Combating AIDS",
            link: "/Page39"
        },
        {
            id: 10,
            image: PRO_img,
        title: "Rules and Responsiblities of PRO",
        link: "/Page37"
    },
    {
        id: 11,
        image: Aryabhatta_times,
        title: "Aryabhatta times",
        link: "/Page33"
    },
    {
        id: 12,
        image: Tvbroadcasting_cover,
        title: "Indian TV Broadcasting and Hindi",
        link: "/Page35"
    },
    {
        id: 13,
        image: Youth_cover,
        title: "Youth as Co-Creators",
        link: "/Page34"
    },
    {
        id: 14,
        image: aryabhatta_cover,
        title: "The Great Aryabhatta Rememberance",
        link: "/Page32"
    },
    {
        id: 15,
        image: Space_day,
        title: "National Space Day 2024",
        link: "/Page30"
    },
    {
        id: 16,
        image: Orientation,
        title: "Orientation at SJMC 2024",
        link: "/Page29"
    },
    {
        id: 17,
        image: Wetland,
        title: "Wetlands For Life Training Workshop",
        link: "/Page28"
    },
    {
        id: 18,
        image: MOU,
        title: "MOU Between BSMFC & SJMC (AKU)",
        link: "/Page27"
    },
    {
        id: 19,
        image: Hindi_divas,
        title: "Hindi Patrakarita Divas",
        link: "/Page26"
    },
    {
        id: 20,
        image: Film,
        title: "Film Screening of Student Films (2021-2023)",
        link: "/Film_Screening"
    },
    {
        id: 21,
        image: Refresher,
        title: "Refresher Training Programme for IPRD Officials",
        link: "/Refresher_training"
    },
    {
        id: 22,
        image: DigitalEd,
        title: "National Workshop on Digital Education",
        link: "/Digital_education"
    },
    {
        id: 23,
        image: ScriptWritingDay,
        title: "Script Writing Workshop",
        link: "/Scipt_writing"
    },
    {
        id: 24,
        image: DisasterImage,
        title: "Disaster Management Seminar for Media Persons",
        link: "/Disaster_management"
    },
    {
        id: 25,
        image: Students,
        title: "Student Activities",
        link: "/Student_activities"
    },
    
 
];

const MainContent = () => {
    

    const [showAd, setShowAd] = useState(true);         //for popup admission ad

    const handleCloseAd = () => {
      setShowAd(false);
    };


    const latestNews = "Important announcement: Classes will be canceled tomorrow due to inclement weather.";
    const images = [
        { url: '', caption: 'Slide 1' },
        { url: Image2, caption: 'Slide 2' },
        { url: Image3, caption: 'Slide 3' },
    ];
    const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
    const [facultyDropdownOpen, setFacultyDropdownOpen] = useState(false);
    const [pgDiplomaDropdownOpen, setPgDiplomaDropdownOpen] = useState(false);
    const [annualDropdownOpen, setannualDropdownOpen] = useState(false);
    const [ResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    

    const toggleFacultyDropdown = () => {
        if (pgDiplomaDropdownOpen) {
            setPgDiplomaDropdownOpen(false);
        }
        setFacultyDropdownOpen(!facultyDropdownOpen);
    };

    const togglePgdDropdown = (e) => {
        e.stopPropagation(); // Stop event propagation
        setPgDiplomaDropdownOpen(!pgDiplomaDropdownOpen);
    };
    const toggleannualdDropdown = (e) => {
        e.stopPropagation(); // Stop event propagation
        setannualDropdownOpen(!annualDropdownOpen);
    };
    const toggleResourcesdDropdown = (e) => {
        e.stopPropagation(); // Stop event propagation
        setResourcesDropdownOpen(!ResourcesDropdownOpen);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
                // You can optionally show a notification or provide feedback to the user here
            })
            .catch((error) => {
                console.error('Error copying text to clipboard:', error);
                // Handle error, if any
            });
    };

    const [announcements, setAnnouncements] = useState([
        { id: 1, message: 'Important update regarding our new product launch!' },
        { id: 2, message: 'Limited time offer! Get 20% off your next purchase.' },
      ]);
    
      
    
      useEffect(() => {
        const announcementInterval = setInterval(() => {
          setCurrentAnnouncementIndex((prevIndex) =>
            (prevIndex + 1) % announcements.length
          );
        }, 3000); // Change the interval time as needed (in milliseconds)
    
        return () => clearInterval(announcementInterval);
      }, [announcements]);
    
      const currentAnnouncement = announcements[currentAnnouncementIndex];
    

    const navigate = useNavigate();

    const ugc = () => {
        navigate('https://www.ugc.gov.in/');
      };
    

    const nda = useNavigate('https://nad.gov.in/ ');
    
    const nptel = useNavigate('https://nptel.ac.in/ ');

    const swayam = useNavigate('https://swayam.gov.in/ ');

    const swayamprabha = useNavigate('https://swayamprabha.gov.in/  ');

    const egyankosh = useNavigate('https://egyankosh.ac.in/ ');

    const inflibnet = useNavigate('https://www.inflibnet.ac.in/  ');

    const epathshala = useNavigate('https://epathshala.nic.in/');

    const isro = useNavigate('https://www.isro.gov.in/ ');

    return (
        <>

{showAd && <Advertisement onClose={handleCloseAd} />}
       
        {/* <Toolbar /> */}
      <Header />
      
      <Track/>
        <main className="container py-4">
            <ul className="nav nav-pills nav-fill nav-list-style">
                 
                <li className="nav-item" role="presentation">
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
        <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>About Department</a>
        <ul className="dropdown-menu" aria-labelledby="contact-tab">
            <li><NavLink to={"/About"} className="dropdown-item">About us</NavLink></li>
            <li><NavLink to={"/Vision_and_mission"} className="dropdown-item">Vision & Mission</NavLink></li>
            <li><NavLink to={"/RoleOfSJMC"} className="dropdown-item">Role of SJMC</NavLink></li>
            <li><NavLink to={"/Some_Moments"} className="dropdown-item">Our Gallery</NavLink></li>
            <li><NavLink to={"/Founder_Director"} className="dropdown-item">Founder Director</NavLink></li>
            <li><NavLink to={"/Careers"} className="dropdown-item">Careers</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
        </ul>
    </div>
</li>
 
                <li className="nav-item" role="presentation">
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
        <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Infrastructure</a>
        <ul className="dropdown-menu" aria-labelledby="contact-tab">
            <li><NavLink to={"/Studio"} className="dropdown-item">Audio/Visual/Virtual Studio</NavLink></li>
            <li><NavLink to={"/Media_lab"} className="dropdown-item">Print/Digital Media Lab</NavLink></li>
            <li><NavLink to={"/Library"} className="dropdown-item">Library</NavLink></li>

           <li><NavLink to="/SmartClass" className="dropdown-item">Smart Class</NavLink></li>
           <li><NavLink to="/Conference" className="dropdown-item">Conference Room</NavLink></li>
            <li><NavLink to="/Seminar" className="dropdown-item">Seminar Hall</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
        </ul>
    </div>
</li>
<li className="nav-item" role="presentation">
            <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Academic Program</a>
                <ul className="dropdown-menu" aria-labelledby="contact-tab">
                    <li><a href="/PhD" className="dropdown-item">Ph.D. in Mass communication</a></li>
                    <li><a href="/MA" className="dropdown-item">M.A. in Journalism and Mass communication</a></li>
                    <li  onClick={togglePgdDropdown}>
                        <a className="dropdown-item dropdown-toggle" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">PG Courses</a>
                        <ul className={`dropdown-menu ${pgDiplomaDropdownOpen ? 'show' : ''}`}>
                            <li><a href={Course5} target='_blank' className="dropdown-item">Development Communication</a></li>
                            <li><a href={Course4} target='_blank' className="dropdown-item">Film Making</a></li>
                            <li><a href={Course1} target='_blank' className="dropdown-item"> Digital and Online journalism</a></li>
                            <li><a href={Course3} target='_blank' className="dropdown-item">Photography</a></li>
                            <li><a href={Course2} target='_blank' className="dropdown-item">Science Communication</a></li>
                        </ul>
                    <li><a href={Certificates} className="dropdown-item" target="_blank">Certificate Courses for Writing in Media</a></li>

                    </li>
                    <li><hr className="dropdown-divider" /></li>
                </ul>
            </div>
        </li>
<li className="nav-item" role="presentation">
  <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
    <a style={{ fontWeight: 'bold' }}className="nav-link dropdown-toggle text-reset" 
    id="faculty-tab"data-bs-toggle="dropdown"href="#Faculty"role="tab"aria-controls="faculty"aria-selected="false"onClick={toggleFacultyDropdown}>
      Faculty/Staff
    </a>
<ul className="dropdown-menu" aria-labelledby="faculty-tab">
<li><NavLink to="/AdvisoryCommittee" className="dropdown-item"> Academic Advisory Committee </NavLink></li>
<li> <NavLink to="/board-of-studies" className="dropdown-item"> Board of Studies</NavLink></li>

<li> <NavLink to="/Faculty" className="dropdown-item"> Head of Department</NavLink></li>


<li className="dropdown-submenu">
<a className="dropdown-item dropdown-toggle" href="#" onClick={togglePgdDropdown} > Faculty </a>
<ul className={`dropdown-menu ${pgDiplomaDropdownOpen ? 'show' : ''}`}> <li> <NavLink to="/Consultant" className="dropdown-item"> Regular Faculty </NavLink></li>
<li> <NavLink to="/GuestFaculty" className="dropdown-item"> Guest Faculty </NavLink></li>
</ul>
</li>
<li><NavLink to="/Staff" className="dropdown-item"> Staff</NavLink> </li><li> <hr className="dropdown-divider" /> </li>
</ul>
  </div>
</li>

          <li className="nav-item" role="presentation"> 
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
    <a style={{ fontWeight: 'bold' }}  className="nav-link dropdown-toggle text-reset"  id="annual-report-tab"  data-bs-toggle="dropdown"  href="#AnnualReport"  role="tab"
    aria-controls="annual-report"  aria-selected="false"  onClick={toggleFacultyDropdown}>Resources</a>

    <ul className="dropdown-menu" aria-labelledby="annual-report-tab">
     
      <li  onClick={toggleannualdDropdown}>
                        <a className="dropdown-item dropdown-toggle" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">Annual Report</a>
                            <ul className={`dropdown-menu ${pgDiplomaDropdownOpen ? 'show' : ''}`}>
                             {/* Annual Reports */}
                         <li><NavLink to={AnnualReport1} target='_blank' className="dropdown-item">Annual Report 2022-23</NavLink></li>
                          <li><NavLink to={AnnualReport2} target='_blank' className="dropdown-item">Annual Report 2021-22</NavLink></li>
                        <li><hr className="dropdown-divider" /></li>
                        </ul>
                           </li>
      <li  onClick={toggleResourcesdDropdown}>
                        <a className="dropdown-item dropdown-toggle" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">eResources</a>
                        <ul className={`dropdown-menu ${pgDiplomaDropdownOpen ? 'show' : ''}`}>
                            <li><a href="https://www.ugc.gov.in/" className="dropdown-item">UGC</a></li>
                            <li><a href="https://www.nda.gov.in/" className="dropdown-item">NDA</a></li>
                            <li><a href="https://www.nptel.ac.in/" className="dropdown-item">NPTEL</a></li>
                            <li><a href="https://www.swayam.gov.in/" className="dropdown-item">SWAYAM</a></li>
                            <li><a href="https://www.swayamprabhay.gov.in/" className="dropdown-item">SWAYAM PRABHA</a></li>
                            <li><a href="https://egyankosh.ac.in/" className="dropdown-item">EGYANKOSH</a></li>
                            <li><a href="https://www.inflibnet.ac.in/" className="dropdown-item">INFLIBNET</a></li>
                            <li><a href="https://epathshala.nic.in/" className="dropdown-item">EPATHSHALA</a></li>
                            <li><a href="https://www.isro.gov.in/" className="dropdown-item">ISRO</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        </ul>
                         </li>
</ul>
  </div>
</li>

<li className="nav-item" role="presentation">
            <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                <a style={{fontWeight:'bold',color: "inherit"}} className="nav-link dropdown-toggle dropdown-item text-reset text-decoration-none" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Contact</a>
                <ul className="dropdown-menu" aria-labelledby="contact-tab">
                    <li><button className="dropdown-item" style={{ textAlign: 'center', border: 'none', background: 'none', cursor: 'pointer' }} onClick={() => copyToClipboard('+919241027682')}>Phone : 📱 +919241027682</button></li>
                    <li><button className="dropdown-item" style={{ textAlign: 'center', border: 'none', background: 'none', cursor: 'pointer' }} onClick={() => copyToClipboard('sjmcpatna@gmail.com')}>Landline : ☎️  0612-2351919</button></li>
                    <li><button className="dropdown-item" style={{ textAlign: 'center', border: 'none', background: 'none', cursor: 'pointer' }} onClick={() => copyToClipboard('sjmcpatna@gmail.com')}>Mail :  📧 sjmcpatna@gmail.com</button></li>
                    <li><a  style={{ textAlign: 'center', border: 'none', background: 'none', cursor: 'pointer' }} className="dropdown-item" href="https://www.google.com/maps/place/Aryabhatta+Knowledge+University/@25.5923023,85.1323539,17z/data=!4m10!1m2!2m1!1sAryabhatta+Knowledge+University,+Gyan+Parisar,Mithapur,+Patna-800+001+India!3m6!1s0x39ed58702e5ae787:0x6c55883d32ec4db4!8m2!3d25.5923023!4d85.1349288!15sCktBcnlhYmhhdHRhIEtub3dsZWRnZSBVbml2ZXJzaXR5LCBHeWFuIFBhcmlzYXIsTWl0aGFwdXIsIFBhdG5hLTgwMCAwMDEgSW5kaWGSAQp1bml2ZXJzaXR54AEA!16s%2Fm%2F0cpbfy3?entry=ttu" target="_blank">ADDRESS INFO<br />Aryabhatta Knowledge University,<br></br> Gyan Parisar,Mithapur, Patna-800 001 (Bihar) India</a></li>
                    <li><hr className="dropdown-divider" /></li>
                </ul>
            </div>
        </li>
            </ul>
            
            <div className="tab-content" id="myTabContent">
                
<div className="tab-pane fade show tab-border active" id="home" role="tabpanel" aria-labelledby="home-tab" style={{margin:'10px', border:'none'}}>

    <div className='partent' style={{}}>
        <div className='Box-About-1' style={{marginLeft:'-10px',width:'900px'}}>
            <div style={{position:'relative', top:'13px'}}>
        <ImageSlider images={images} />     

        </div>

            <div>
                <p style={{ paddingTop: "20px", textAlign:"justify", fontWeight:'bold'}}>
                School of Journalism and Mass Communication (SJMC) was established by Bihar government vide Cabinet decision 15/ पी 5- 09/ 2016-629 dated April 12, 2017. The then Rajya Sabha MP Shri Pavan K Verma contributed approximately Rs. nine crores from his MPLADs funds to set up the said institute, The DPR for which was prepared by Aryabhatta Knowledge University.The Bihar government has proposed to develop SJMC as the potential Centre of Excellence. SJMC will work with other national as well as international Centres to harmonize its journalism curricula in order to promote quality journalism education in the state Careers in Mass Communication are not only high paying but also bring in a great deal of job satisfaction and expression of creativity. </p>
                <p style={{ paddingTop: "20px", textAlign:"justify", fontWeight:'bold'}}>
                Journalism & Mass Communication has emerged as a major area of interest and has immensely contributed to the development & empowerment of society.
                </p>

                <p className="text-justify" style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>The information technology revolution has significantly contributed to the expansion of mass media. It has also posed major challenges for students, teachers and practitioners of mass media. It is a challenge which we accept as an essential part of life at SJMC.</p>
      <p className="text-justify" style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>Mass Communication is not limited to journalism alone. To a great extent mass media is a modern reality which covers all aspects of human life. Moreover, a great change can be observed in the concept of people working in mass media. Careers in Mass Communication are not only high paying but also bring in a great deal of job satisfaction and expression of creativity.</p>
      <p className="text-justify" style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>Generating a cadre of trained human resources specialized in understanding and addressing issues related to mass communication is one of the critical needs of the hour, and educational institutions have to play a crucial role in this regard. The institute would ensure tailored programmes to meet the needs of developing societies. This will make SJMC different from other institutes of Journalism &Mass Communication training in this state and elsewhere. This will also give a different identity and character to our alumni.</p>
      <p style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>
                With this view, the School of Journalism &Mass Communication may come up with courses specifically aimed at teaching and research on Communication & Information system Establishment of this institute was essential because of the current trend of proliferation of media institutions in Bihar without appropriate curricula. Media scholars and professionals have over the years debated the benchmark for journalism curriculum of developing countries since the curricula differ structurally and pedagogically from one another.
                </p>
                <br></br>
                {/* <h5>Department Overview</h5>
                <table className="table table-bordered" style={{border:'2px' , margin:'3px'} }>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold'  }}>Established in</td>
                        <td>2017 (School of Journalism and Mass Communication </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold'  }}>Employee Strength</td>
                        <td>Faculty- 01 Staffs - 04</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold' }}>Student Strength</td>
                        <td>• M.A. in Journalism and Mass communication & Ph.D. in Mass   communication-51 <br></br>• PG-Students - 65 <br></br>• Certificate  Course in Writing for Media -20</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold'  }}>Placement 2021</td>
                        <td>x (tentative)</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white' , fontWeight:'bold' }}>Publications, Books & Patent (Last 4-Years)</td>
                        <td>Publications- Books -</td>
                    </tr>
                </table> */}

            </div>
        </div>
        <div  style={{ marginTop:"10px", padding: "10px",width:'400px', height: "1333px",textAlign:'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <div className='news-box' style={{ width: '100%', height: '550px',marginTop:"10px",   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",padding:"10px 10px" , backgroundColor:"#F0F0F0",marginBottom:"10px" ,textAlign:'center',overflow:'auto',marginTop:'0px'}}>
        <h4 className='heading-news' style={{position:'sticky',top:'-8px',zIndex:'1'}}>News and Announcements</h4>
        <br />

        <div style={{marginTop:'-40px' , marginBottom:'10px'}}>

        {/* <a href="https://adms.akubihar.ac.in/" target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', marginTop:'25px' ,fontWeight:'bold',position:'relative',left:'10px'}}>    Admission 2025<img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} /> </a> */}

        <a href="https://adms.akubihar.ac.in/" target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', marginTop:'25px' ,fontWeight:'bold',position:'relative',left:'10px'}}>    Admission 2025 </a>
        <a href={Syllabus} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', fontWeight:'bold',position:'relative',left:'10px' }}>SJMC Prospectus 2025  </a>
        {/* /* <a href={MOOC_Training4} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Mastering MOOC Creation with Studio Shooting and AI-Powered Content at AKU <img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} />  </a> */ }
        <a href={MOOC_Training4} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Mastering MOOC Creation with Studio Shooting and AI-Powered Content at AKU   </a>
        {/* <a href={MOOC_Training3} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}> MOOC Training Day 3: Focus on Engaging Content for Students <img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} />  </a> */}
        <a href={MOOC_Training3} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}> MOOC Training Day 3: Focus on Engaging Content for Students </a>
        {/* <a href={MOOC_Training2} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>AKU's MOOC Training Program Day 2  <img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} />  </a> */}
         <a href={MOOC_Training2} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>AKU's MOOC Training Program Day 2  </a>
        {/* <a href={MOOC_Training1} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>MOOC Training Program Begins at AKU <img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} />  </a> */}
        <a href={MOOC_Training1} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>MOOC Training Program Begins at AKU</a>
        <a href={Film_masterclass} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Film Acting Masterclass by AKU & BSFD & FC </a>
        {/* <a href={Women_Collab} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>AKU  Incubation Center Women Entrepreneur Collaboration with NSE <img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} />  </a> */}
        <a href={Women_Collab} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>AKU  Incubation Center Women Entrepreneur Collaboration with NSE  </a>
        <a href={Free_Course_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Photography and Film Making Free Training Course 2024</a>
        <a href={Aids_reel_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>S.J.M.C. Hosts Lecture and Reels Competition on AIDS Awareness </a>
        <a href={Pro_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Lecture on Rules and Responsiblities of Public Relation Officer </a>
        <a href={aryabhattaTimes} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>'Aryabhatta Times' was launched at the SJMC </a>
        <a href={BroadcastingLecture} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Lecture on Indian TV Broadcasting and Hindi Celebrated on Hindi Day at AKU  </a>
        <a href={Youth_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Youth as Co-creators 2024  </a>
        <a href={space_day_pr_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>Great astronomer Aryabhatta remembered on National space day     </a>
        <a href={Bookistan_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>Literary discussion on Harishankar Parsai     </a>
        <a href={Space_day_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>National Space Day Quiz & Speech Competition 2024      </a>
        <a href={Bookistan_club} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>Bookistan Club at SJMC 2024     </a>
        <a href={Orientation_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>Orientation at SJMC 2024      </a>
        <a href={Wetland_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>Wetlands For Life - Training Workshop      </a>
        <a href="/News6" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Student Film Recognised.</a>

        <a href="/News4" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Open Mic on "Youth Icon of Bihar" </a>
        
        <a href="/News7" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Discussion on Journalism at PBF  </a>
        
        <a href="/News3" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Training Workshop for Media.</a>
        
        <a href="/News2" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Human Rights Awareness</a>
        
        <a href="/News1" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Street Play and Script Writing Contest </a>
        
        <a href="/News5" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Screening of Seven Films </a>
        
        </div>

    </div>

                <a href='/Media_Center' style={{width:'100%',position:'relative',right:'8px',textDecoration:'none'}}>
    <div style={{ width: '100%', height: '70px',boxShadow:'0 4px 8px rgb(0,0,0,0.5)', padding:"10px 10px"  , backgroundColor:"#F0F0F0",margin:'10px', position:'relative',bottom:'5px' ,display:'flex'    }}>
    <div style={{ backgroundColor:'#780000',borderRadius:'50%',width:'50px', height:'98%'}}>
        <img src={MCLogo} style={{ width:'100%',height:'auto'}}></img>
        
        </div>
    <div style={{marginLeft:'15px',marginTop:'10px'}}>    <h4 >Media Center</h4>
    </div>
    </div>
    </a>

    <a href='/upcomingEvents' style={{width:'100%',position:'relative',right:'8px',textDecoration:'none'}}>
    <div style={{ width: '100%', height: '70px',boxShadow:'0 4px 8px rgb(0,0,0,0.5)', padding:"10px 10px"  , backgroundColor:"#F0F0F0",margin:'10px', position:'relative',bottom:'5px' ,display:'flex'    }}>
    <div style={{ backgroundColor:'#780000',borderRadius:'50%',width:'50px', height:'98%'}}>
        <img src={Book} style={{ width:'75%',height:'75%',position:'relative',top:'.2rem'}}></img>
        
        </div>
    <div style={{marginLeft:'15px',marginTop:'10px'}}>    <h4 >Upcoming Events</h4>
    </div>
    </div>
    </a>

    <a href='/page38' style={{width:'100%',position:'relative',right:'8px',textDecoration:'none'}}>
    <div style={{ width: '100%', height: '70px',boxShadow:'0 4px 8px rgb(0,0,0,0.5)', padding:"10px 10px"  , backgroundColor:"#F0F0F0",margin:'10px', position:'relative',bottom:'5px' ,display:'flex'    }}>
    <div style={{ backgroundColor:'#780000',borderRadius:'50%',width:'50px', height:'98%'}}>
        <img src={AryabhattaTimes_Logo} style={{ width:'75%',height:'75%',position:'relative',top:'.2rem'}}></img>
        
        </div>
    <div style={{marginLeft:'15px',marginTop:'10px'}}>    <h4 >Aryabhatta Times</h4>
    </div>
    </div>
    </a>
   





            <div style={{ width: '100%', height: '750px',boxShadow:'0 4px 8px rgb(0,0,0,0.5)', padding:"10px 10px"  , backgroundColor:"#F0F0F0" }}>
                <h4 className='heading-news'>Important Links</h4>

               
                <a href={Announcement1} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', marginTop:'25px' }}>Notice About Academic Advisory Committee </a>
        
        <a href={Announcement2} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Board Of Studies  </a>
        
        <a href={Announcement3} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Approved Syllabus Of Courses Offered By SJMC  </a>
        
        <a href={Announcement4} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>MoU between SJMC & BIPARD  </a>





















            </div>
        </div>
    </div>

</div>
<div className="tab-pane fade tab-border" id="profile" role="tabpanel" aria-labelledby="contact-tab">
    <br />
    <h6>VISION:</h6>
    <p>Department of School Of Journalism and Mass communication is to nurture, produce and create innovative young minds of  global standards for media education, research, extension and training, using state-of-the-art technology for building a knowledge driven information society, contributing to human development, empowerment and participatory democracy, anchored in pluralism, universal values & ethics and to attain and remain a centre of excellence.</p>

    <h6>Mission:</h6>
    <p>To create a dynamic learning and working environment which nurtures new ideas, creativity, research and scholarship and develops leaders and innovators in the domain of media and mass communication. anc become a leading national institution by offering the young aspiring media professionals an interdisciplinary and dynamic milieu where they can develop comprehensive and critical awareness of diverse communication, information and media.</p>
</div>
<div className="tab-pane fade tab-border" id="Program" role="tabpanel" aria-labelledby="contact-tab">
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    M.A. in Journalism and Mass Communication
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <h5>a. Objectives of the Program:</h5>
                    <p>b. The ever converging world of Mass Media has fuelled the need for multi-tasking and multi-talented media professionals. While SJMC always aims at high academic standards, The extra-curricular activities and innovative research, seminars, etc. Department of School of Journalism and Mass Communication enable the students to develop hands-on-pre-requisite skills, interact with industry experts and exchange ideas with students from other institutes and backgrounds. All this all together at SJMC makes an amalgamation of brilliant ideas, top class academic standards and best in class facilities. School of Journalism and Mass Communication is accustomed to experiment with various innovative academic activities to enhance the media understanding among students.</p>

                    <ul>
                        <li>Program Outcomes:
                            <p>Program will develop the understanding of Journalism responsibility and how to report for serve the society. The concept of communication process and theories will provide the vital learning and understanding of the problems for better solution. Media course is also attached with technical knowledge, the essential and professional software, tools, equipment, production and others many skills will help to become a trained students for media industries. Newspaper/Magazine Designing, Film Production, Radio programmes, Photography, Video Editing, Camera Operation, Audio Mixer, Video Switcher, Graphics Designing, Website Designing, Anchoring and more others skill based understanding will be developed for media students.</p>
                        </li>
                        <li>Eligibility:</li> 
                        <p>Bachelor's degree in any discipline with a minimum of 55% marks for General/OBC/SC/ST candidates.
                        </p>
                        <li>Intake:
                        </li>
                        <p>45</p>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Ph. D. in Mass Communication
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <h5>a. Objectives of the Program:
                    </h5>
                    <p>Media Research provides an overview of the concepts, methods, and tools by which communication research is designed, conducted interpreted and critical evaluation. The primary goal of this course are to help you become a knowledgeable consumer and a limited producer of communication research as you develop skill in gathering, organising, interpreting and presenting research information. The major thrust of the curriculum is to impart theoretical and practical knowledge of various aspects of media. The course is designed in such a way that it gives students an overall understanding of Media with specialization in electronic journalism, electronic media production, online journalism and Print media.</p>


                    <h5>b. Program Outcomes:</h5>
                    <p>The program will develop understanding among scholars to different research methods and familiar them with various data collection tools. It will enhance the data analysis and preparation of research report and thesis writing ability in researcher. Comprehend the relationship between theory and research methods in study of communication as a social science.</p>

                    <h5>c. Eligibility:</h5>
                    <p>M.A.in Media stream with 55% Marks.</p>
                    <h5>Intake:</h5>
                    <p>As per vacant seat</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    PG. Dimploma Courses in Development Communication/Online and Digital Journalism/ Photography/Science Communication/Film Making
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <h5>a. Objectives of the Program:
                    </h5>
                    <p>To equip students with the essential skills required to excel in various roles within the field of journalism and mass communication, including reporting, writing, editing, interviewing, and media production. The course is designed in such a way that it gives students an overall understanding of Media with specialization in electronic journalism, electronic media production, online journalism and Print media.</p>


                    <h5>b. Program Outcomes:</h5>
                    <p>Graduates will demonstrate a comprehensive understanding of key concepts, theories, and principles in journalism, mass communication, and related fields. Professional Skills Development: Graduates will possess the necessary skills for effective.</p>
                    <h5>c. Eligibility:</h5>
                    <p>M.A.in Media stream with 55% Marks.</p>
                    <h5>Intake:</h5>
                    <p>As per vacant seat</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="tab-pane fade tab-border" id="Facilites" role="tabpanel" aria-labelledby="contact-tab">...</div>
<div className="tab-pane fade tab-border" id="Student" role="tabpanel" aria-labelledby="contact-tab">
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    PG Toppers
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Post Doc. Fellow Ph D Reserch Scholar & Project Staff
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Post Graducate Students
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Department Alumni
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                </div>
            </div>
        </div>
    </div>
</div>
<div className="tab-pane fade tab-border" id="Research" role="tabpanel" aria-labelledby="contact-tab">...</div>
<div className="tab-pane fade tab-border" id="eResearch" role="tabpanel" aria-labelledby="contact-tab">...</div>
<div className="tab-pane fade tab-border" id="Contact" role="tabpanel" aria-labelledby="contact-tab">
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Head
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Contact
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div className='gallery' style={{ width: '100%', margin: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',position:'relative', right:'36px' }}>
    <h2 style={{ width: '100%', textAlign: 'center',  borderRadius: '10px', textShadow: '0 3px 10px rgba(0, 0, 0, 0.7)' }}>Our Gallery</h2>

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' , height:'780px', overflow:'auto'}}>
        {galleryItems.map((item) => (
            <div key={item.id} style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <NavLink to={item.link} style={{ width: '100%', height: '100%' }}>
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        style={{ width: '100%', height: '300px', objectFit: 'fill', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} 
                    />
                </NavLink>
                <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>{item.title}</h4>
            </div>
        ))}
    </div>
</div>

        </main>
        
        <Footer/>
        <Home/>
        <Clubs/>
        </>
    );
};

export default MainContent;



