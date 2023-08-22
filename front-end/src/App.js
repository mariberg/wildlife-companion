import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChatBot from './components/chatbot/ChatBot';
import NavBar from './components/navbar/NavBar';
import BirdMap from './components/pages/map/Map';
import Home from './components/pages/home/Home';
import Profile from './components/pages/profile/Profile';
import Notify from './components/pages/Notify';

const App = () => {
 


  
  return (
    <div className="App" style={{display:'flex', flexDirection:"row"}}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<BirdMap />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notfiy" element={<Notify />} />

        </Routes>
    </div>
  );
};



export default App;


