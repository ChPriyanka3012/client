import React from 'react'
import './EmpLogin.css'
// import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'


const EmpLogin = () => {
  const navigate=useNavigate();

  const anchorClick=()=>{

    navigate("/");
  }
  const handleLogin=()=>{
  
    navigate("/mainboard");
  }
  return (
  
    <div className='main-cont'>
          <h2><marquee>Welcome to Employee Panel Login</marquee></h2>
         <input type='text' placeholder='Enter your email' title='Please enter your email' /> <br /> <br/>
         <input type='text' placeholder='Enter your password' title='Please enter your password'  /><br /> <br />
          <center><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">Forgot Password</a></center><br /> <br /><br />
          <span>
            <button className='login-button' onClick={handleLogin}>Login</button>
            <button className='back-button' onClick={anchorClick}><u>Back to home page</u></button>
          </span>
         
    </div>
          
  
     
  )
}

export default EmpLogin