import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Booking from './components/Booking';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Nav/>

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Booking" element={<Booking/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
