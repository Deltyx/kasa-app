import Home from './views/home/home.js'
import About from './views/about/about.js'
import NotFound from './views/notfound/notfound.js';
import Location from './views/location/location.js';

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
   <Location />
  );
}

    {/* 
    <Router>
      <Switch>
        <Route exact path="/a_propos">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/locations/:id">
          
        </Route>
        <Route render={() => <NotFound/>}/>
    </Switch>
  </Router>
  */}