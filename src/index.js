import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import Footer from './components/footer/footer';

import App from './App';

const base = (
  <Router>
    <section>
      <App />
      <Footer />
    </section>
  </Router> 
)

ReactDOM.render(
  base, document.getElementById("root")
)

