import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import 'useState' and 'useEffect'
import ChatBot from './components/ChatBot';
import NavBar from './components/NavBar';
import Map from './components/Map';
import Home from './components/Home';

const App = () => {
  const [birdCoordinates, setBirdCoordinates] = useState([]);


// TO-DO: Fetch bird coordinates from the lamda function
  useEffect(() => {
    var hardCodedCoordinates = [
      { latitude: 27.069580867783454, longitude: 66.9296330248051 },
      { latitude: 28.119724666488132, longitude: 66.97977819035029 },
      { latitude: 27.143845747618183, longitude: 67.04312546945734 },
      { latitude: 37.208083920780947, longitude: 57.11214889143658 },
      { latitude: 27.299128946015312, longitude: 67.18777779297999 }
    ];

    setBirdCoordinates(hardCodedCoordinates);
  }, [birdCoordinates]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map coordinates={birdCoordinates} />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </Router>
    </div>
  );
};



export default App;


