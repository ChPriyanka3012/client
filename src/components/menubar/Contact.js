import React from 'react';
import './Contact.css';
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { BsPersonRolodex } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="help-desk">
                <h2>Help Desk</h2>
                <hr />
                <p>If you're facing any issues, please contact our support team.</p>
                <Link to="/live-chat" className='menu-contact-item'>
                   <BsPersonRolodex/>   Talk to a Representative
                </Link>
            </div>
            <div className="contact-us">
                <h2>Contact Us</h2>
                <hr />
                <Link to="" className='menu-contact-item'>
                    <IoIosMail /> hr@lyrostech.com<br /><br />
                    <IoCall /> +91 91334 56915
                </Link>
            </div>
        </div>
    );
};

export default Contact;
