import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    < Header/>
    <Router>
      
      <Routes>
        <Route path="" element={<h1>home page</h1>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
