import React from 'react'
import Home from '../components/HomeButton'
import myImage from '../asset/img2.jpeg';

function About() {
  return (
    <div> <Home/><div  className="container" style={{marginTop:'20px'}}>
    <div className="row justify-content-center align-items-center">
      <div style={{ backgroundColor:'#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}} className="col-md-9 p-4 mx-auto ">


    <div> <div className="mu-latest-course-single" style={{margin: '50px'}}>
    <figure className="mu-latest-course-img">
      <a href="#" style={{width: '100%',display: 'flex' , justifyContent: 'center'}}><img src={myImage} alt="img" style={{width: '50%' , boxShadow: ' 0 0 25px black' , borderRadius: '10px'}}/></a>
    </figure>
    <div className="mu-latest-course-single-content">
      <h2 style={{textAlign: 'center', borderBottom: '1px solid black'}}><a href="#" style={{color: 'black' , textDecoration: 'none'}}>About SJMC</a></h2>
      <br />
      <p className="text-justify">School of Journalism and Mass Communication (SJMC) was established by Bihar government vide Cabinet decision 15/ पी 5- 09/ 2016-629 dated April 12, 2017. The then Rajya Sabha MP Shri Pavan K Verma contributed approximately Rs. nine crores from his MPLADs funds to set up the said institute, the DPR for which was prepared by Aryabhatta Knowledge University.</p>
      <p className="text-justify">The Bihar government has proposed to develop SJMC as the potential Centre of Excellence. SJMC will work with other national as well as international Centres to harmonize its journalism curricula in order to promote quality journalism education in the state.</p>
      <p className="text-justify">Journalism & Mass Communication has emerged as a major area of interest and has immensely contributed to the development & empowerment of society. As an academic discipline, it has rapidly acquired importance and has become a major attraction for students. SJMC will run a number of specialized degree and short term courses to meet the manpower requirements of the rapidly expanding media and communication industry.</p>
      <p className="text-justify">The information technology revolution has significantly contributed to the expansion of mass media. It has also posed major challenges for students, teachers and practitioners of mass media. It is a challenge which we accept as an essential part of life at SJMC.</p>
      <p className="text-justify">Mass Communication is not limited to journalism alone. To a great extent mass media is a modern reality which covers all aspects of human life. Moreover, a great change can be observed in the concept of people working in mass media. Careers in Mass Communication are not only high paying but also bring in a great deal of job satisfaction and expression of creativity.</p>
      <p className="text-justify">Generating a cadre of trained human resources specialized in understanding and addressing issues related to mass communication is one of the critical needs of the hour, and educational institutions have to play a crucial role in this regard. The institute would ensure tailored programmes to meet the needs of developing societies. This will make SJMC different from other institutes of Journalism & Mass Communication training in this state and elsewhere. This will also give a different identity and character to our alumni.</p>
      <p className="text-justify">The history of communication stretches from prehistoric forms of art and writing through modern communication methods such as the Internet.  Mass communication began when humans could transmit messages from a single source to multiple receivers.</p>
      <p className="text-justify">The society we live in has been dependent on media for information dissemination and communication. The benefits of media cannot be overemphasized in a pluralist society, with so many ethnic groups, religious cultures, traditions, beliefs and people from different diverse group. Pluralistic societies exist around the world. Pluralism typically contains four components, which at the simplest level are diversity, tolerance, commitment and communication. SJMC considers communication as an imperative for development for a pluralistic society and is committed to serving society by providing world class teaching, training and research, thus preparing students to take on the challenges of a highly competitive world.</p>
      <p className="text-justify">The world has witnessed a phenomenal and unprecedented explosion in communication technology and media. All boundaries have been transcended, and the entire global community seems to have been brought together into one unified whole. And it is here that mass-communication, as a stream of study, and as a career, becomes so important and enviable.</p>
      <p className="text-justify">The study of mass communication is chiefly concerned with how the content of mass communication persuades or otherwise affects the behavior, attitude, opinion, or emotion of the person or people receiving the information.</p>
      <p className="text-justify">With this view, the School of Journalism & Mass Communication may come up with courses specifically aimed at teaching and research on Communication & Information system. The institute is one of its kind in the region aimed at constantly innovating its programmes in order to meet the challenges thrown up by developments in the industry by reviewing the syllabi every year to make changes and suitable modifications to make them relevant to the needs of the industry and society.</p>
      <p className="text-justify">Establishment of this institute was essential because of the current trend of proliferation of media institutions in Bihar without appropriate curricula. Media scholars and professionals have over the years debated the benchmark for journalism curriculum of developing countries since the curricula differ structurally and pedagogically from one another.</p>
    </div>
  </div></div></div></div></div></div>
  )
}

export default About
