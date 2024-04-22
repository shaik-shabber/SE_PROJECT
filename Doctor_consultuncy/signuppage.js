import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signuppage.css';
import backgroundImg from './image1.jpeg';

const SignUpPage = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('doctor');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSignUp = () => {
        // Add your sign-up logic here
        console.log("Sign-up clicked");
    };

    return (
        <div className="signup-container">
            <div className="left-container2">
                <h2>Create Account</h2>
                <div className="toggle-bar2">
                    <button className={userType === 'doctor' ? 'active' : ''} onClick={() => setUserType('doctor')}>Doctor</button>
                    <button className={userType === 'patient' ? 'active' : ''} onClick={() => setUserType('patient')}>Patient</button>
                </div>
                <input type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} className="input-field" />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input-field" />
                <div className="checkbox-container">
                    <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                    <label>Remember Me</label>
                </div>
                <button onClick={handleSignUp} className="btn-primary4">Sign Up</button>
                <button className="btn-secondary4">Sign Up with Google</button>
                <p>Already have an Account? <Link to="/signin" className="link">Sign In</Link></p>
            </div>
            <div className="right-container2">
                <img id= 'image' src={backgroundImg} alt="Sign Up"/>
            </div>
        </div>
    );
};

export default SignUpPage;
