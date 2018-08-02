import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import axios from "axios";
import Search from "../Search/Search.js";
import Results from "../Results/Results.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      summonerDetails: null
    };
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>Summoner Check</h1>
            <Link to="/search">Search</Link>
            <Link to="/results">Results</Link>
          </nav>
          <main>
            <Switch>
              <Route
                path="/search"
                component={Search}
                // render={() => {
                //   return <Redirect to="/search" />;
                // }}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
