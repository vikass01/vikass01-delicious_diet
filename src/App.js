import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './dd.png';
import './App.css';

// Splash screen component
function SplashScreen() {

  useEffect(() => {
    const timer = setTimeout(() => {
      // window.location.href = process.env.PUBLIC_URL + '/delicious_diet.pdf';
      window.location.href = "https://www.triomm.com/delicious-diet";
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p className="loading-text">Delicious Diet</p> */}
      </header>
    </div>
  );
}

// Home page component
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Delicious Diet!</h1>
        <p>This is the home page.</p>
      </header>
    </div>
  );
}

// Main App with routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
