import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
    <div className="top-row">
        <div className="employee-directory">
            <h2>Employee Directory</h2>
            <hr></hr>
            <div className='main-box'>
            <div className='d1'>
            <p><b>Employee Name</b></p>
            <select>
                <option value="Select one">Select One</option>
                <option value="priyanka">Priyanka</option>
                <option value="saieesh">Saieesh</option>
                <option value="harisudheer">Hari Sudheer</option>
                <option value="krishnakarthik">Krishna Karthik</option>
                <option value="fayaz">Fayaz</option>
            </select>
            </div>
            <div className='d2'>
            <p><b>Department</b></p>
            <select>
                <option value="Select one">Select One</option>
                <option value="it">IT</option>
                <option value="management">Management</option>
                <option value="networking">Networking</option>
                <option value="non-it">Non-IT</option>
                <option value="hr">HR</option>
            </select>
            </div>
            </div>
        </div>
    </div>
    <div className="bottom-row">
        <div className="current-projects">
           
            <h2>Current Projects</h2>
            <hr></hr>
            <a href="http://localhost:3000/">Lyros HRM</a>
            <a href="https://urbanfurnituregallery.com/">Urban Comfort</a>

           
        </div>
        <div className="services">
            <h2>Services</h2>
            <hr></hr>
            <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_Keyword_Alpha_Prof_la.EN_cc.India&campaigntype=Search&portfolio=India&language=EN&product=Course&test=&audience=Keyword&topic=React_JS&priority=Alpha&utm_content=deal4584&utm_term=_._ag_160270532145_._ad_696237122068_._kw_mern+stack+full+course_._de_c_._dm__._pl__._ti_kwd-981735487897_._li_9181986_._pd__._&matchtype=b&gad_source=1&gclid=Cj0KCQjwtsy1BhD7ARIsAHOi4xbj3dB5Rt-SPJnPZFSVOGfLjqBkZM4bFJF433HhSA4_aGvgvs8S1JAaAgVrEALw_wcB&couponCode=IND21PM">MERN STACK</a>
            <a href="https://www.coursera.org/courses?query=java">JAVA</a>
            <a href="https://www.coursera.org/courses?query=java">NETWORKING</a>
            <a href="https://www.udemy.com/topic/api-testing/">API TESTING</a>
            <a href="https://www.squadstack.com/blog/bpo-voice-and-non-voice-process">NON - IT</a>
           
        </div>
        {/* <div className="sidebar">
            <h2>Services</h2>
           
        </div> */}
    </div>
</div>

  );
};

export default Dashboard;
