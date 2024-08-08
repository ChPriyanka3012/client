import React from 'react'
import './Notification.css';
import { IoPersonSharp } from "react-icons/io5";
const Notification = () => {
  return (
    <div className='not-class'>
      <div className='notifications'>
        <h2>Notifications</h2>
        <IoPersonSharp />   <span>Sandy San</span><br></br>
                            <span>Hi. I am writing this ......</span><hr></hr>
        <IoPersonSharp />   <span>Dhulquer</span><br></br>
                            <span>Can you please check the form ......</span><hr></hr>
        <IoPersonSharp />   <span>Surya</span><br></br>
                            <span>Good Evening ......</span><hr></hr>
      </div>
    </div>
  )
}

export default Notification