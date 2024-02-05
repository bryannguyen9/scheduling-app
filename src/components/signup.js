// src/components/Signup.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import specific functions

const auth = getAuth(); // Initialize auth separately

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use createUserWithEmailAndPassword function
        setSuccessMessage('Signup successful!'); // Set success message
        setErrorMessage(''); // Clear any previous error message
    } catch (error) {
        setErrorMessage(`Signup Error: ${error.message}`); // Set error message
        setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Signup;
