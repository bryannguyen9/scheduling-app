// App.js
import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirebaseTest from './tests/FirebaseTest.js';
import { auth } from '../src/firebase.js'; // Import auth instead of firebase

function App() {
  useEffect(() => {
    // Log the Firebase auth object for testing
    console.log('Firebase Auth Object:', auth);
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Routes>
          {/* Other routes */}
          <Route path="/firebase-test" element={<FirebaseTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
