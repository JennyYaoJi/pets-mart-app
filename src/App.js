import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "../src/components/home.component";
import AboutPage from "../src/components/about.component"
import NavBar from "../src/components/nav.component";

class App extends Component {
  render(){
    return (
      <Router>
        <div className="container">
          <NavBar></NavBar>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
        </div>
      </Router>
    )
  }
}
export default App;
