import React, { useState } from 'react';
import ImageSlider from '../components/Slider'
import BlinkingNews from '../components/Blink'
import './styles/styles.css'
import imgAbout from '../asset/about.jpg'
import { NavLink } from 'react-router-dom';
import Toolbar from './Toolbar';
import Header from './Header';
import myImage from '../asset/myImage.jpeg';
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
import Announcement1 from '../News/Announcement1.pdf'
import Announcement2 from '../News/Announcement2.pdf'
import Announcement3 from '../News/Announcement3.pdf'
import Announcement4 from '../News/Announcement4.pdf'


import { useEffect } from 'react';

const MainContent = () => {
    
    const latestNews = "Important announcement: Classes will be canceled tomorrow due to inclement weather.";
    const images = [
        { url: '', caption: 'Slide 1' },
        { url: Image2, caption: 'Slide 2' },
        { url: Image3, caption: 'Slide 3' },
    ];
    const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
    const [facultyDropdownOpen, setFacultyDropdownOpen] = useState(false);
    const [pgDiplomaDropdownOpen, setPgDiplomaDropdownOpen] = useState(false);

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
        
        <Toolbar />
      <Header />
        <main className="container py-4">
            <ul className="nav nav-pills nav-fill nav-list-style">
                 
                <li className="nav-item" role="presentation">
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
        <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>About Department</a>
        <ul className="dropdown-menu" aria-labelledby="contact-tab">
            <li><NavLink to={"/page3"} className="dropdown-item">About us</NavLink></li>
            <li><NavLink to={"/page11"} className="dropdown-item">Vision & Mission</NavLink></li>
            <li><NavLink to={"/page7"} className="dropdown-item">Role Of SJMC</NavLink></li>
            <li><NavLink to={"/page8"} className="dropdown-item">Our Gallery</NavLink></li>
            <li><NavLink to={"/page9"} className="dropdown-item">Founder Director</NavLink></li>
            <li><NavLink to={"/page10"} className="dropdown-item">Careers</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
        </ul>
    </div>
</li>
 
                <li className="nav-item" role="presentation">
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
        <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Infrastructure</a>
        <ul className="dropdown-menu" aria-labelledby="contact-tab">
            <li><NavLink to={"/page12"} className="dropdown-item">Studio</NavLink></li>
            <li><NavLink to={"/page13"} className="dropdown-item">Media Lab</NavLink></li>
            <li><NavLink to={"/page14"} className="dropdown-item">Library</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
        </ul>
    </div>
</li>
<li className="nav-item" role="presentation">
            <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Academic Program</a>
                <ul className="dropdown-menu" aria-labelledby="contact-tab">
                    <li><a href="/page1" className="dropdown-item">M.A. in Journalism and Mass communication</a></li>
                    <li><a href="/page2" className="dropdown-item">Ph.D. in Mass communication</a></li>
                    <li><a href={Certificates} className="dropdown-item" target="_blank">Certificate Courses for Writing in Media</a></li>
                    <li  onClick={togglePgdDropdown}>
                        <a className="dropdown-item dropdown-toggle" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">PG Courses</a>
                        <ul className={`dropdown-menu ${pgDiplomaDropdownOpen ? 'show' : ''}`}>
                            <li><a href={Course5} target='_blank' className="dropdown-item">Development Communication</a></li>
                            <li><a href={Course1} target='_blank' className="dropdown-item">Online and digital journalism</a></li>
                            <li><a href={Course3} target='_blank' className="dropdown-item">Photography</a></li>
                            <li><a href={Course2} target='_blank' className="dropdown-item">Science Communication</a></li>
                            <li><a href={Course4} target='_blank' className="dropdown-item">Film Making</a></li>
                        </ul>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                </ul>
            </div>
        </li>
                <li className="nav-item" role="presentation">
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
        <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>People</a>
        <ul className="dropdown-menu" aria-labelledby="contact-tab">
            <li><NavLink to={"/page5"} className="dropdown-item">Faculty In-Charge</NavLink></li>
            <li><NavLink to={"/page4"} className="dropdown-item">Staff</NavLink></li>
            <li><NavLink to='{' className="dropdown-item">Consultant</NavLink></li>
           
            <li><hr className="dropdown-divider" /></li>
        </ul>
    </div>
</li>

                
                <li className="nav-item" role="presentation">
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
        <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Annual Report</a>
        <ul className="dropdown-menu" aria-labelledby="contact-tab">
        <li><NavLink to={AnnualReport1} target='_blank' className="dropdown-item">Annual Report 2022-23</NavLink></li>
            <li><NavLink to={AnnualReport2} target='_blank'  className="dropdown-item">Annual Report 2021-22</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
        </ul>
    </div>
</li>
                 
               
                 
                <li className="nav-item" role="presentation">
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
        <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>eResource</a>
        <ul className="dropdown-menu" aria-labelledby="contact-tab">
            <li><a   href="https://www.ugc.gov.in/" className="dropdown-item"> UGC </a></li>
            <li><a   href="https://www.nda.gov.in/" className="dropdown-item"> NDA </a></li>
            <li><a   href="https://www.nptel.ac.in/" className="dropdown-item"> NPTEL </a></li>
            <li><a   href="https://www.swayam.gov.in/" className="dropdown-item"> SWAYAM </a></li>
            <li><a   href="https://www.swayamprabhay.gov.in/" className="dropdown-item"> SWAYAM PRABHA </a></li>
            <li><a   href="https://egyankosh.ac.in/" className="dropdown-item"> EGYANKOSH </a></li>
            <li><a   href="https://www.inflibnet.ac.in/ " className="dropdown-item"> INFLIBNET </a></li>
            <li><a   href="https://epathshala.nic.in/ " className="dropdown-item"> EPATHSHALA </a></li>
            <li><a   href="https://www.isro.gov.in/" className="dropdown-item"> ISRO </a></li>
             
            <li><NavLink to={"/page2"} className="dropdown-item"> </NavLink></li>
            <li><hr className="dropdown-divider" /></li>
        </ul>
    </div>
</li>
<li className="nav-item" role="presentation">
            <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                <a style={{fontWeight:'bold',color: "inherit"}} className="nav-link dropdown-toggle dropdown-item text-reset text-decoration-none" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Contact</a>
                <ul className="dropdown-menu" aria-labelledby="contact-tab">
                    <li><button className="dropdown-item" style={{ textAlign: 'center', border: 'none', background: 'none', cursor: 'pointer' }} onClick={() => copyToClipboard('0612-2952742')}>Phone : 0612-2952742</button></li>
                    <li><button className="dropdown-item" style={{ textAlign: 'center', border: 'none', background: 'none', cursor: 'pointer' }} onClick={() => copyToClipboard('sjmcpatna@gmail.com')}>Mail : sjmcpatna@gmail.com</button></li>
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
        <div className='Box-About-2' style={{ marginTop:"10px", padding: "10px",width:'400px', height: "1333px",textAlign:'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <div style={{ width: '100%', height: '550px',marginTop:"10px",   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",padding:"10px 10px" , backgroundColor:"#F0F0F0",marginBottom:"10px" ,textAlign:'center'}}>
        <h4 className='heading-news'>News and Announcements</h4>
        <br />
\
<a href="/News6" className='text-decoration-none' style={{ display: 'block',marginTop:'-30px', marginBottom: '20px' }}>Student Film Recognised.</a>

        <a href="/News4" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Open Mic on "Youth Icon of Bihar" </a>
        
        <a href="/News7" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Discussion on Journalism at PBF  </a>
        
        <a href="/News3" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Training Workshop for Media.</a>
        
        <a href="/News2" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Human Rights Awareness</a>
        
        <a href="/News1" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Street Play and Script Writing Contest </a>
        
        <a href="/News5" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Screening of Seven Films </a>
        


    </div>



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
                        <p>Bachelor’s degree in any discipline with a minimum of 55% marks for General/OBC/SC/ST candidates.
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
<div style={{ width: '100%', margin: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2 style={{ width: '100%', textAlign: 'center',  borderRadius: '10px', textShadow: '0 3px 10px rgba(0, 0, 0, 0.7)' }}>Our Gallery</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>

        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <NavLink to={"/page20"}>
                <img src={Film} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
            </NavLink>
            <h4 style={{ textAlign: 'center' , fontFamily: 'Times New Roman, serif'}}>Film Screening of Student Films (2021-2023)</h4>
        </div>

        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <NavLink to={"/page21"}>
                <img src={Refresher} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
            </NavLink>
            <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>Refresher Training Programme for IPRD Officials</h4>
        </div>

        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:'-25px' }}>
            <NavLink to={"/page19"}>
                <img src={DigitalEd} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
            </NavLink>
            <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>National Workshop on Digital Education</h4>
        </div>

        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:'-25px' }}>
            <NavLink to={"/page18"}>
                <img src={ScriptWritingDay} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
            </NavLink>
            <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>Script Writing Workshop</h4>
        </div>

        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', top: '1px' }}>
            <NavLink to={"/page17"}>
                <img src={DisasterImage} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'cover', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
            </NavLink>
            <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>Disaster Management Seminar for Media Persons</h4>
        </div>

        <div style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <NavLink to={"/page22"} style={{ width: '100%', height: '100%' }}>
        <img src={Students} alt="Gallery Image 2" style={{ width: '100%', height: '300px', objectFit: 'fill', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} />
    </NavLink>
    <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif',position:'relative',bottom:'25px' }}>Student Activities</h4>
</div>



    </div>
</div>

        </main>
        <Footer/>
        </>
    );
};

export default MainContent;





