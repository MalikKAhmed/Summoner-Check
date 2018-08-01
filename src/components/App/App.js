import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Search from "../Search/Search.js";
import Results from "../Results/Results.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <h1>Summoner Check</h1>
          <Link to="/search">Search</Link>
          <Link to="/results">Results</Link>
        </nav>
      </Router>
    );
  }
}

export default App;
