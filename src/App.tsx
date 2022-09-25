import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Home from './components/home/Home';
import Student from './components/students/Student';
import Teacher from './components/teachers/Teacher';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Error from './components/error/Error';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
