import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
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
      <main className="main-content">
        <h1>Welcome to our Doctor's Website</h1>
        <p>This is the home page content...</p>
        <Link to="/appointment" className="btn-primary1">Book Appointment</Link>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Doctor's Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
