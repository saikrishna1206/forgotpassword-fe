import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component';
import SignUp from './components/signup.component';
import UserDetails from './components/userDetails';
import Reset from './components/reset';

function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route 
              exact 
              path="/"
               element={isLoggedIn == "true" ? <UserDetails /> : <Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails/" element={<UserDetails />} />
              <Route path="/reset" element={<Reset />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;