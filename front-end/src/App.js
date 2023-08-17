import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChatBot from './components/ChatBot';
import NavBar from './components/NavBar';

const App =()=> {
  return (
    //DEMO
    <div className="App">
      <h1>Wild Life</h1>
      <h2>Wild Life is a website that helps you to learn about the wild life.</h2>
      <h3>Click on the chat bot to start learning.</h3>
    </div>
  );
  
}
const AppWithRouter = () => {
  return (
  
    <Router>
       <NavBar/>
      <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="/chatbot" element={<ChatBot/>} />
      </Routes>
    
    </Router>
  );
}

export default AppWithRouter;
