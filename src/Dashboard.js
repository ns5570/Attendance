import React, { useState } from "react";
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [department, setDepartment] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [hour, setHour] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can handle the attendance marking logic
    // For now, let's just log the values to the console
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Department:", department);
    console.log("Registration Number:", registrationNumber);
    console.log("Hour:", hour);

    // Open a new window with the pop-up message
    const popupWindow = window.open("", "_attence", "height:100%; width:100%; ");
    const popupContent = `
      <html>
        <head>
          <style>
            .popup-window {
              background-color: black;
              text-align: center;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
            }
            .popup-content {
              background-color: rgba(0, 0, 0, 0.8);
              padding: 20px;
              border-radius: 10px;
              max-width: 400px;
            }
            .popup-message {
              font-size: 18px;
              margin-bottom: 10px;
            }
            .popup-emoji {
              font-size: 24px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="popup-window">
            <div class="popup-content">
              <h1 class="popup-message">Attendance marked successfully for ${firstName} ${lastName}</h1>
              <p class="popup-message">Department: ${department}</p>
              <p class="popup-message">Hour:  ${hour}st</p>
              <div class="popup-emoji">You can leave this page ✅</div>
            </div>
          </div>
        </body>
      </html>
    `;
    popupWindow.document.write(popupContent);

    // You can perform further actions, such as sending data to a server
    // to mark attendance or updating a state to reflect attendance status
  };

  

  return (
    <div className="attendance-form">
      <h2>Mark Attendance</h2>
   
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Reg Number:</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <select value={department} onChange={handleDepartmentChange} required>
            <option value="">Select Department</option>
            <option value="mechanical">IT</option>
            <option value="mechanical">CSE with spec</option>
            <option value="mechanical">Mechanical</option>
            <option value="electrical">Electrical</option>
            <option value="cs">Computer Science</option>
            <option value="civil">Civil</option>
          </select>
        </div>

        <div className="form-group">
          <label>SelectHour:</label>
          <select value={hour} onChange={handleHourChange} required>
            <option value="">Select Hour</option>
            {[...Array(8).keys()].map((hourValue) => (
              <option key={hourValue + 1} value={hourValue + 1}>
                {hourValue + 1}
              </option>
            ))}
          </select>
        </div>
       
        <button type="submit">Mark Attendance</button>
      </form>
      <br/>
      <Link to="/signup" className="bttn btn-default border w-80 bg-light rounded-10 text-decoration-none">
        Log Out
        </Link>
    </div>
    
  );
};

export default Dashboard;
