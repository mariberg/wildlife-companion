import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChatBot from './components/ChatBot';
import NavBar from './components/NavBar';
import BirdMap from './components/Map';
import Home from './components/Home';
import Profile from './components/Profile';


const App = () => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    // Fetch coordinates from API
    fetch('https://qnildvwtq7.execute-api.eu-west-2.amazonaws.com/dev')
      .then(response => response.json())
      .then(data => {
        setCoordinates(data);
      })
      .catch(error => console.error('Error fetching coordinates:', error));
  }, []);
  
  return (
    <div className="App" style={{display:'flex', flexDirection:"row"}}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<BirdMap />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
};



export default App;


