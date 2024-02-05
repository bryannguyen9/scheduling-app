// import logo from '../src/images/logo.svg';
import './App.css';
import React /* { useEffect } */ from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './routes/Routes.js';
// import FirebaseTest from './tests/FirebaseTest.js';
import firebase from '../src/packages/firebase.js'; 

function App() {
  // useEffect(() => {
  //   // Log the Firebase auth object for testing
  //   console.log('Firebase Auth Object:', auth);
  // }, []);

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes />
    </div>
  </Router>
  );
}

export default App;
