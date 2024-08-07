import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
    <div className="top-row">
        <div className="employee-directory">
            <h2>Employee Directory</h2>
            <hr></hr>
            <p><b>Employee Name</b></p>
            <select>
                <option value="Select one">Select One</option>
                <option value="priyanka">Priyanka</option>
                <option value="saieesh">Saieesh</option>
                <option value="harisudheer">Hari Sudheer</option>
                <option value="krishnakarthik">Krishna Karthik</option>
                <option value="fayaz">Fayaz</option>
            </select>
            <p><b>Department</b></p>
            <select>
                <option value="Select one">Select One</option>
                <option value="it">IT</option>
                <option value="management">Management</option>
                <option value="networking">Networking</option>
                <option value="non-it">Non-IT</option>
                <option value="hr">HR</option>
            </select>
           
        </div>
    </div>
    <div className="bottom-row">
        <div className="current-projects">
           
            <h2>Current Projects</h2>
            <hr></hr>
            <a href="http://localhost:3000/">Lyros HRM</a>
            <a href="">Urban Comfort</a>

           
        </div>
        <div className="services">
            <h2>Services</h2>
            <hr></hr>
            <a>MERN STACK</a>
            <a>JAVA</a>
            <a>NETWORKING</a>
            <a>API TESTING</a>
            <a>NON - IT</a>
           
        </div>
        {/* <div className="sidebar">
            <h2>Services</h2>
           
        </div> */}
    </div>
</div>

  );
};

export default Dashboard;
