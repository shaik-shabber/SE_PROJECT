// src/components/Signup.js
import React, { useState } from 'react';

function Signup({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., making API request to create new user)
    console.log('Signup clicked');
  };

  return (
    <div>
      <div className="switch-container">
        <h2 className="inactive" onClick={() => onSwitch(true)}>Sign In</h2>
        <h2 onClick={() => onSwitch(false)}>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
