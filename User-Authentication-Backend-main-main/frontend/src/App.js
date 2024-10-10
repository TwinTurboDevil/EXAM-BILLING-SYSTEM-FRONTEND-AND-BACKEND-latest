import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import AuthenticatedRoute from './component/AuthenticatedRoute';// Import the AuthenticatedRoute component
import Home from './component/Home';
import FormPage from './component/FormPage';
import DisplayPage from './component/DisplayPage';
import Profile from './component/Profile';
import Home1 from './component/Home1';


function App() {
  const [options, setOptions] = useState({ semester: '', course: '' });
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home1/>} /> 
        <Route path="/login" element={< LoginForm/>} /> 
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path="/billing" element={< FormPage setOptions={setOptions}/>} />
        <Route path="/display" element={<DisplayPage options={options}/>} ></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile/>} /> {/* Define your home page route */}
      </Routes>
    </Router>
  );
}

export default App;
