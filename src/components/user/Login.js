import React, { useState } from 'react';
import './Login.css';
import { BsPersonCircle } from "react-icons/bs";
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [logoShifted, setLogoShifted] = useState(false);
  const navigate=useNavigate();

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setLogoShifted(!logoShifted);
  };
  const handleAdminLogin=()=>{
    navigate('/admin');
  };
  const handleUserLogin=()=>{
    navigate('/emp');
  };


  return (
    <div className='main-container1'>
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
          <button className='admin-button' onClick={handleAdminLogin}>ADMIN</button>
          <button className='user-button' onClick={handleUserLogin}>USER</button>
        </span>
      </div>
    </div>
  )
}

export default Login;
