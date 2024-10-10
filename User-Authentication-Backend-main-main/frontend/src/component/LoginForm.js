import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './LoginForm.css'; // Import the CSS file for additional styling

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Login failed');
      }
    })
    .then(data => {
      const { user } = data;
      localStorage.setItem('user', JSON.stringify(user)); // Save user data
      navigate('/home');
    })
    .catch(error => {
      console.error('Error logging in:', error);
      alert("Login failed. Please check your username and password.");
    });
  };

  return (
    <div className="login-page">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link className="navbar-brand" >Billing System</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
      <div className="login-container">
        <h1 className="text-center">Login Form</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <div className="login-links">
          <Link to='/register'>Haven't Registered Yet? Click here</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
