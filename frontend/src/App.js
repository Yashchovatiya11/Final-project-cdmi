import React from 'react';

import { Routes, Route } from "react-router-dom";

import Login from './Component/Login';
import Register from './Component/Register';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import ForgetPassword from './Component/ForgetPassword';


function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/forget" element={<ForgetPassword/>} />
      </Routes>


    </>
  );
}

export default App;
