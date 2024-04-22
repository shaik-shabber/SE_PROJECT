import React from 'react';
import { Link } from 'react-router-dom';
import './doctorspage.css'; // Import the CSS file

const DoctorsPage = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      image: 'doctor1.jpg',
      degree: 'MBBS, MD',
      speciality: 'Cardiology',
      facebook: 'https://www.facebook.com',
      instagram: 'https://www.instagram.com',
      twitter: 'https://www.twitter.com'
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      image: 'doctor2.jpg',
      degree: 'MBBS, MS',
      speciality: 'Dermatology',
      facebook: 'https://www.facebook.com',
      instagram: 'https://www.instagram.com',
      twitter: 'https://www.twitter.com'
    },
    {
      id: 3,
      name: 'Dr. Michael Johnson',
      image: 'doctor3.jpg',
      degree: 'MBBS, DNB',
      speciality: 'Orthopedics',
      facebook: 'https://www.facebook.com',
      instagram: 'https://www.instagram.com',
      twitter: 'https://www.twitter.com'
    }
  ];

  return (
    <div>
      <header className="header">
        <nav>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/find-doctors">Find Doctors</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/signin">Login</Link></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>Our Doctors</h1>
        {doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            {/* <img src={require(`../images/${doctor.image}`).default} alt={doctor.name} /> */}
            <h2>{doctor.name}</h2>
            <p>Degree: {doctor.degree}</p>
            <p>Speciality: {doctor.speciality}</p>
            <div className="social-icons">
              <a href={doctor.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href={doctor.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href={doctor.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsPage;
