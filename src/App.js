import Home from './views/home/home.js'
import About from './views/about/about.js'
import NotFound from './views/notfound/notfound.js';
import Location from './views/location/location.js';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/a_propos" element={<About />}/>
        <Route  path="/" element={<Home />}/>
        <Route  path="/locations/:id" element={<Location />}/>
        <Route render={() => <NotFound/>}/>
      </Routes>
    </Router>
  );
}