import React from 'react';
import './About.css'; 
import { GiSkills } from "react-icons/gi";
import { FaUsersViewfinder, FaFileContract, FaPeopleGroup } from "react-icons/fa6";
import { TbUserScreen } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";



const About = () => {
  return (
    <div className="container">
      <marquee><img src="https://lyrostech.com/wp-content/uploads/2021/08/Lyros-testlogo.png"/></marquee>
      <div className="section">
        <h2>Our Current projects</h2>
        <div className="content">
          <p>
          <h3>IT and Technical Support</h3>
            At Lyros, we are at the forefront of several impactful IT and Technical Support projects focused on client support resolutions. These initiatives include deploying sophisticated ticketing systems for rapid issue resolution, strengthening measures to safeguard client data, and leveraging AI-driven tools for proactive support. By enhancing our IT operations and providing exceptional technical assistance, we aim to elevate client satisfaction and ensure seamless, reliable service for all our organizational partners.
          </p>
          <p>
          <h3>Full Stack Web Development</h3>
          Lyros offers comprehensive Full Stack Web Development services, providing end-to-end solutions for your digital needs. Our expert team creates dynamic, user-friendly websites and applications, integrating both front-end and back-end technologies to deliver seamless online experiences that drive success for your business. We leverage the latest industry standards to ensure your digital presence is not only robust but also scalable. Partner with us to transform your vision into reality with innovative and efficient web solutions.
          </p>
        </div>
      </div>
        <div className="container1">
          <div className="box">
            <div className="icon"><FaUsersViewfinder /></div>
            <div className="text"> Talent Sourcing and Acquisition</div>  
          </div>
          <div className="box">
            <div className="icon"><TbUserScreen /></div>
            <div className="text"> Candidate Screening and Assessment</div>
          </div>
          <div className="box">
            <div className="icon">< GiSkills/></div>
            <div className="text"> Skill-specific Staffing solutions</div>
          </div>
        </div>
        <div className="container2">
          <div className="box">
            <div className="icon"><AiOutlineGlobal /></div>
            <div className="text"> Global Technology Solutions</div>
          </div>
          <div className="box">
            <div className="icon"><FaFileContract /></div>
            <div className="text"> Permanent and Contractual Staffing </div>
          </div>
          <div className="box">
            <div className="icon"><FaPeopleGroup /></div>
            <div className="text">Staff Augmentation</div>
          </div>
        </div>
      
      <div className="vision">
      <div className="vision-content">
      <img src="https://thumbs.dreamstime.com/b/collage-photos-businessman-179077194.jpg" alt="Vision" className="image1" /> </div>
        <p>
        <h2>Vision</h2>
          Our vision is to be the global leader in our industry, setting new standards of excellence and creating innovative solutions that enhance the lives of our customers. At the core of our vision is the ambition to become a leading force on a global scale within our industry. This means not just participating in the market but excelling and influencing it profoundly. We aim to establish ourselves as a benchmark for others by setting exceptionally high standards in everything we do. Our commitment to innovation drives us to continuously seek and develop cutting-edge solutions that address the evolving needs and challenges of our customers. We believe that by staying ahead of industry trends and adopting a forward-thinking approach, we can deliver solutions that not only meet but exceed expectations.
        </p>
      </div>
      
      <div className="mission">
      <div className="vision-content">
      <img src="https://th.bing.com/th/id/OIP.Bu3mlcedEGcuutnrs8St2wHaE_?w=282&h=190&c=7&r=0&o=5&pid=1.7" alt="Vision" className="image2" /> </div>
       <p>
        <h2>Mission</h2>
        At Lyros, we strive for excellence when it comes to talent acquisition and Client satisfaction. Our goal is to provide our clients with Skilled professionals who are equipped to handle whatever challenges they may face in a landscape that is constantly evolving..
        </p>
      
      </div>
      
      <div className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>Awarded Best Company of the Year 2023 in stream of IT & Non-IT support Roles</li>
          <li>Launched a groundbreaking new product called "HRMS" and "URBAN-COMFORT"</li>
        </ul>
      </div>
      <div className='footer'>
        <div><img src="https://lyrostech.com/wp-content/uploads/2021/08/Lyros-testlogo.png"/></div>
        <div>
          <h3>Our Services</h3>
          Software Development<br></br>
          Talent Acquisition<br></br>
          Staff Augmentation<br></br>
          IT Consulting<br></br>
        </div>
        <div>
          <h3>Company</h3>
          About us<br></br>
          Business Verticals<br></br>
          Industries<br></br>
          Careers<br></br>
        </div>
        <div>
          <h3>Legal</h3>
          Terms and Conditions<br></br>
          Privacy Policy<br></br>
          Disclaimer<br></br>
        </div>
        <div>
          <h3>Social Media</h3>
          Facebook<br></br>
          Twitter<br></br>
          Instagram
        </div>
        
      </div>
      <div className="Footer-bottom">
        <div> © 2024 Lyros Technologies Private Limited. All rights reserved.</div> 
      </div>
  
    </div>
    
  );
}

export default About;
