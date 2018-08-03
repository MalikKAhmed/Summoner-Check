import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    console.log(this.state.name);
    event.preventDefault();
  }

  componentDidMount() {
    var api_key = "RGAPI-c2803147-5d63-4739-a85a-9181c1a7a66a";
    var input = this.state.name;

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
            // console.log(matchHistory[0].champion);

            var championsPlayed = [];

            for (let i = 0; i < matchHistory.length; i++) {
              // console.log(matchHistory[i].champion);
              championsPlayed.push(matchHistory[i].champion);
            }
            console.log(championsPlayed);
            //got the array of champids
            //now to do another loop that takes the champions and finds another
          })

          .catch(err => {
            console.log(err);
          });
      });
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Summoner Check</h1>
          {/* <Link to="/search">Search</Link> */}
          {/* <Link to="/results">Results</Link> */}
        </nav>
        <main>
          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.name} onChange={this.handleChange} />
            <input type="submit" value="check" />
          </form>
        </main>
      </div>
    );
  }
}

export default App;
