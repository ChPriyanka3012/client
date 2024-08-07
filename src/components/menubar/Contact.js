import React from 'react'
import './Contact.css';
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className='contact-container'>
        <div class="help-desk">
            <h2>Help Desk</h2>
            <hr></hr>

        </div>
        <div class="contact-us">
            <h2>Contact Us</h2>
            <hr></hr>
            <Link to="" className='menu-contact-item'>
        
            <IoIosMail />      hr@lyrostech.com<br></br><br></br>
            <IoCall />        +91 91334 56915
            </Link>
        </div>
    </div>
  )
}

export default Contact