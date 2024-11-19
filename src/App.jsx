import React from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';

import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Error404 from './Components/Error404/Error404';
import AssistantsSpace from './Components/Pages/AssistantsSpace/AssistantsSpace';
import Subscriptions from './Components/Pages/Subscriptions/Subscriptions';




function App() {

  const location = useLocation(); // Access the current route
  
  // Routes where Header and Footer should NOT appear
    const noHeaderOrFooter = ['/login', '/signup'];
  return (

    <>
      {/* Conditionally render Header and Footer */}
      {!noHeaderOrFooter.includes(location.pathname) && <Header />}

      
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/assistantsspace" element={<AssistantsSpace/>} />
        <Route path="/subscriptions" element={<Subscriptions/>} />
        <Route path="*" element={<Error404/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {!noHeaderOrFooter.includes(location.pathname) && <Footer />}

    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}