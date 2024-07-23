import React, { useState } from 'react';
import './Login.css';
import { BsPersonCircle } from "react-icons/bs";
import logo from './logo.png';

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [logoShifted, setLogoShifted] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setLogoShifted(!logoShifted);
  };

  return (
    <div className='main-container'>
      <div className={`image-container ${logoShifted ? '' : 'shifted'}`}>
        <img src={logo} alt="Logo" className='logo-img' />
      </div>
      <button className="toggle-button" onClick={toggleLogin}>
       Login
      </button>
      <div className={`login-container ${showLogin ? 'show' : ''}`}>
        <BsPersonCircle className="person-icon" />
        <h2>Login</h2><br />
        <span>
          <button>ADMIN</button>
          <button>USER</button>
        </span>
      </div>
    </div>
  )
}

export default Login;
