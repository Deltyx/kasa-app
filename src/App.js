import Home from './views/home/home.js'
import About from './views/about/about.js'
import NotFound from './views/notfound/notfound.js';
import Location from './views/location/location.js';
import Navbar from './components/navbar/navbar.js';

import React from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/a_propos" element={<About />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/locations/:id" element={<Location />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}