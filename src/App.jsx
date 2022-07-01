import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Header2 from './Header2';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './Footer';
import './App.css';


function App() {
  return (
      <Router>
        <div className="app">
        <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/" element={<><Header /><Header2 /><Home /><Footer /></>}>
          </Route>
        </Routes>
        </div>
      </Router>
    );
}

export default App;
