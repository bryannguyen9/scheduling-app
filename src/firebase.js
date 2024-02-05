// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCE7HlCjZMupgJO29qC0chwDZtI7hAg4yQ",
  authDomain: "scheduling-app-ab823.firebaseapp.com",
  projectId: "scheduling-app-ab823",
  storageBucket: "scheduling-app-ab823.appspot.com",
  messagingSenderId: "620305427497",
  appId: "1:620305427497:web:875dcee2b33615a1f74038",
  measurementId: "G-Q9Z5XWFP3N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };  // Export auth directly
