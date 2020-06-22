import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Home from './components/pages/';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route , Switch} from "react-router-dom";


function App() {



  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <Switch>
    <Route path="/" exact component= {Home} />
    <Route path="/about" component= {About} />
   <Route path="/services" component= {Services} />
   </Switch>
  </>
  </BrowserRouter>
  );
}

export default App;
