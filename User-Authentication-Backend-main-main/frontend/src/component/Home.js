import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve user's name from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const navigate = useNavigate();

    const handleDeleteProfile = () => {
        fetch('http://127.0.0.1:8000/api/delete_profile/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`, // Send token for authentication
            },
        })
        .then(response => {
            if (response.ok) {
                // If profile deleted successfully, log out and navigate to the login page
                localStorage.clear();
                navigate('/');
            } else {
                throw new Error('Failed to delete profile');
            }
        })
        .catch(error => {
            console.error('Error deleting profile:', error);
            alert("Failed to delete profile. Please try again later.");
        });
    };
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
                <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/billing">Course Info</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Log out</Link></li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="row line">
        <div className="col-md-6 offset-md-3 text-center mt-5">
          <h1>Welcome to the Billing System    {username && <p>Hello, {username}</p>}</h1>
          
          {/* Add other content here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
