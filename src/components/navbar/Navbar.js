import React, { useContext, useState } from 'react';
import './Navbar.css';
import notification from "./notification.png";
import logo from "./logo.png";
import { NotificationContext } from '../../context/NotificationContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { toggleContent } = useContext(NotificationContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='profile1'>
        <div className='profile'>
          <span>
            <img src={notification} onClick={toggleContent} alt="Notification" />
          </span>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpIqOZzl_vWEsypDWJKbqR_ba6dCR2MY2JF8bGcvKpazzdNoViViVbxtkYw&s'
            alt='Profile'
            onClick={toggleDropdown}
            className='profile-image'
          />
          {dropdownOpen && (
            <div className='dropdown'>
              <div className='dropdown-content'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpIqOZzl_vWEsypDWJKbqR_ba6dCR2MY2JF8bGcvKpazzdNoViViVbxtkYw&s'
                  alt='Profile'
                  className='dropdown-image'
                />
                <p className='dropdown-name'>Username</p>
                <p className='dropdown-email'>user@example.com</p>
                <a href='/terms'>Terms & Conditions</a>
                <button className='sign-out-button'>Sign Out</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
