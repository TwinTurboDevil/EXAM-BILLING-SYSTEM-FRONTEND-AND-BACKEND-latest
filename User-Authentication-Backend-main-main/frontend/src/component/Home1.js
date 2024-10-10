import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home1 = () => {
  return (
    <div className="container-fluid">
      {/* Background image */}
      <div className="row">
        <div className="background-image"></div>
      </div>
      
      {/* Navbar */}
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link className="navbar-brand" >Billing System</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" >Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login">Log In</Link></li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="row line">
        <div className="col-md-6 offset-md-3 text-center mt-5">
          <h1>Welcome to the Billing System  </h1>
          
          {/* Add other content here */}
        </div>
      </div>
    </div>
  );
};

export default Home1;
