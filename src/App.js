import React, { Component } from 'react';
import Navigation from './Components/Navigation.js';
import './App.css';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About.js';
import Work from './Components/Work.js';
import Contact from './Components/Contact.js';
import PastelBank from './Components/PastelBank.js';
import PizzaNova from './Components/PizzaNova.js';
import Fincity from './Components/Fincity.js';
import UIDesigns from './Components/UIDesigns.js';
import Footer from './Components/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navigation />

        <div >
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/pastelbank">
                <PastelBank />
              </Route>
              <Route path="/pizzanova">
                <PizzaNova />
              </Route>
              <Route path="/fincity">
                <Fincity />
              </Route>
              <Route path="/uidesigns">
                <UIDesigns />
              </Route>
              <Route path="/">
                <Work />
              </Route>
            </Switch>
            <Footer/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
