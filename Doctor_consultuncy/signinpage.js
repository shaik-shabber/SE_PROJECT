import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signinpage.css';
import backgroundImg from "./image1.jpeg";
import axios from 'axios';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('doctor');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        try {
          const response = await axios.post('http://localhost:3000/api/signin', { email, password, userType });
          const token = response.headers.authorization.split(' ')[1];
          // Store the token in local storage or as a cookie
          localStorage.setItem('token', token);
          console.log(response.data); // Handle success, redirect user or do something else
          if (response.status === 200) {
            // Successful authentication, redirect to temp.js
            window.location.href = '/temp'; // Redirect to temp.js
          }
        } catch (error) {
          setError('Invalid email or password'); // Handle error, display error message
        }
      };

    return (
        <div className="signin-container">
            <div className="left-container1">
                <div className="toggle-bar1">
                    <button className={userType === 'doctor' ? 'active' : ''} onClick={() => setUserType('doctor')}>Doctor</button>
                    <button className={userType === 'patient' ? 'active' : ''} onClick={() => setUserType('patient')}>Patient</button>
                </div>
                <h2>{userType === 'doctor' ? 'Doctor Login' : 'Patient Login'}</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
                {error && <div className="error">{error}</div>}
                <div className="form-bottom">
                    <div className="checkbox-container">
                        <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                        <label>Remember Me</label>
                    </div>
                    <Link to="/forgot-password" className="link">Forgot Password?</Link>
                </div>
                <div className="button-container1">
                    <button onClick={handleSignIn} className="btn-primary3">Sign In</button>
                </div>
                <button id="bg" className="btn-secondary3">Continue with Google</button>
                <p>Don't have an account? <Link to="/signup" className="link">Sign Up</Link></p>
            </div>
            <div className="right-container1">
                <img id='image' src={backgroundImg} alt="Background"/>
            </div>
        </div>
    );
};

export default SignInPage;
