// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../../src/packages/firebase'; // Adjust the import path based on your project structure
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import specific functions

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
        setSuccessMessage('Login successful!'); // Set success message
        setErrorMessage(''); // Clear any previous error message
    } catch (error) {
        setErrorMessage(`Login Error: ${error.message}`);
        setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
