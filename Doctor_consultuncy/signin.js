// src/components/Signin.js
import React, { useState } from 'react';

function Signin({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signin logic here (e.g., making API request to authenticate user)
    console.log('Signin clicked');
  };

  return (
    <div>
      <div className="switch-container">
        <h2 onClick={() => onSwitch(true)}>Sign In</h2>
        <h2 className="inactive" onClick={() => onSwitch(false)}>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
