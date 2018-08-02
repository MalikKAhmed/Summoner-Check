import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Search from "../Search/Search.js";
// import Results from "../Results/Results.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      summonerLevel: "",
      accountId: "",
      matchHistory: []
    };
  }

  componentDidMount() {
    var api_key = "RGAPI-c2803147-5d63-4739-a85a-9181c1a7a66a";

    axios
      .get(
        `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Senpai%20My%20Guy?api_key=${api_key}`
      )
      .then(response => {
        var { name, summonerLevel, accountId } = response.data;

        this.setState({ name, summonerLevel, accountId });
        console.log(this.state);

        axios
          .get(
            `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${accountId}?api_key=${api_key}`
          )
          .then(response => {
            var matchHistory = response.data.matches;
            this.setState({ matchHistory });
            // console.log(response.data.matches);
            console.log(matchHistory);
            console.log(this.state);
          })
          .catch(err => {
            console.log(err);
          });
      });
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
              <Route path="/search" component={Search} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
