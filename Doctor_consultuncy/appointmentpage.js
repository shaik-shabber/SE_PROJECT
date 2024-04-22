import React, { useState } from 'react';
import './appointmentpage.css';

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSearch = () => {
    // Handle search logic
  };

  return (
    <div className="appointment-container">
      <h1>Book Appointment</h1>
      <div>
        <label htmlFor="date">Select Date:</label>
        <input 
          type="date" 
          id="date" 
          value={selectedDate} 
          onChange={(e) => setSelectedDate(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="doctor">Find Doctor:</label>
        <input 
          type="text" 
          id="doctor" 
          value={selectedDoctor} 
          onChange={(e) => setSelectedDoctor(e.target.value)} 
          placeholder="Search for a doctor"
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input 
          type="text" 
          id="location" 
          value={selectedLocation} 
          onChange={(e) => setSelectedLocation(e.target.value)} 
          placeholder="Enter your location"
        />
      </div>
      <button onClick={handleSearch} className="btn-primary2">Search</button>
    </div>
  );
}

export default AppointmentPage;
