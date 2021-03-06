import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/home.component';
import AboutPage from './components/about.component';
import NavBar from './components/nav.component';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
        </div>
      </Router>
    );
  }
}
