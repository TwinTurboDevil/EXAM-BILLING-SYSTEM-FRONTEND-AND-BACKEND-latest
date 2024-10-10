import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './RegisterForm.css'; // Import the CSS file for additional styling

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adress, setAdress] = useState('');
    const [dept, setDept] = useState('');
    const [designation, setDesignation] = useState('');
    const [phone, setPhone] = useState('');
    const [bankaccno, setBankaccno] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('name', name);
        formData.append('adress', adress);
        formData.append('dept', dept);
        formData.append('designation', designation);
        formData.append('phone', phone);
        formData.append('bankaccno', bankaccno);
        if (profilePhoto) {
            formData.append('profile_photo', profilePhoto);
        }

        fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                console.log('User registered successfully');
                alert("Registration Successful!!!")
                navigate('/login')
                // Redirect or perform other actions upon successful registration
            } else {
                console.error('Registration failed');
            }
        })
        .catch(error => console.error('Error registering user:', error));
    };
    const navigate = useNavigate();
    const handleFileChange = (e) => {
        setProfilePhoto(e.target.files[0]);
    };

    return (
        <div className='register-page'>
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
                                <li className="nav-item"><Link className="nav-link" to="/login">Log In</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='register-container'>
                <h1 className="text-center">Register</h1>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Address" value={adress} onChange={(e) => setAdress(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Dept" value={dept} onChange={(e) => setDept(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Bank Account Number" value={bankaccno} onChange={(e) => setBankaccno(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="file" className="form-control" onChange={handleFileChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
