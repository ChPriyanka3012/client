import React, { useState, useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Mainboard.css';
import Navbar from '../../navbar/Navbar';
import { NotificationContext } from '../../../context/NotificationContext';
import Notification from './Notification';
import Dashboard from '../../menubar/Dashboard';
import Attendance from '../../menubar/Attendance';
import Meetings from '../../menubar/Meetings';
import Chat from '../../menubar/Chat';
import About from '../../menubar/About';
import Contact from '../../menubar/Contact';
import RaT from '../../menubar/RaT';

import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaCalendarCheck } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";

const Mainboard = () => {
  const { showContent } = useContext(NotificationContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Navbar />
      <div className='container1'>
        <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? '←' : '→'}
          </button>
          <Link to="dashboard" className='menu-item'>
            <RiDashboardHorizontalFill />
            {menuOpen && <span>Dashboard</span>}
          </Link>
          <Link to="attendance" className='menu-item'>
            <FaCalendarCheck />
            {menuOpen && <span>Attendance</span>}
          </Link>
          <Link to="chat" className='menu-item'>
            <IoChatbox />
            {menuOpen && <span>Chat</span>}
          </Link>
          <Link to="meetings" className='menu-item'>
            <MdConnectWithoutContact />
            {menuOpen && <span>Meet-In</span>}
          </Link>
          <Link to="about" className='menu-item'>
            <RiDashboardHorizontalFill />
            {menuOpen && <span>About</span>}
          </Link>
          <Link to="contact" className='menu-item'>
            <MdOutlineContactPhone />
            {menuOpen && <span>Contact</span>}
          </Link>
          <Link to="raise-ticket" className='menu-item'>
            <IoTicketOutline />
            {menuOpen && <span>Raise a Ticket</span>}
          </Link>
        </div>
        <div className='main-container'>
          {showContent && <Notification />}
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="chat" element={<Chat />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="raise-ticket" element={<RaT />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Mainboard;
