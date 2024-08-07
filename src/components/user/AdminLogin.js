import React from 'react'
import './AdminLogin.css'
// import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'




const AdminLogin = () => {
  const navigate=useNavigate();

  const anchorClick=()=>{

    navigate("/");
  }
  const handleLogin=()=>{
    navigate("/admindashboard")
  }
  return (
    <div>
    <div className='main-cont'>
          <h2><marquee>Welcome to Admin Panel Login</marquee></h2>
         <input type='text' placeholder='Enter your email' title='Please enter your email' /> <br /> <br/>
         <input type='text' placeholder='Enter your password' title='Please enter your password'  /><br /> <br />
          <center><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">Forgot Password</a></center><br /> <br /><br />
          <span>
            <button className='login-button' onClick={handleLogin}>Login</button>
            <button  className='back-button' onClick={anchorClick}>Back to home page</button>
          </span>
    </div>
          <div className='anchor'>
             
          </div>
    </div>
     
  )
}

export default AdminLogin