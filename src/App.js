import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Summoner from "./components/Summoner";

import "./App.css";

const API_KEY = "RGAPI-07219149-a191-4091-8889-6170ac935361";

class App extends React.Component {
  state = {
    name: undefined,
    summonerLevel: undefined,
    accountId: undefined,
    profileIconId: undefined,
    error: undefined
  };

  getSummoner = async e => {
    e.preventDefault();
    const summoner = e.target.elements.summoner.value;
    const api_call = await fetch(
      `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summoner}?api_key=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      name: data.name,
      summonerLevel: data.summonerLevel,
      accountId: data.accountId,
      profileIconId: data.profileIconId,
      error: ""
    });
  };
  render() {
    return (
      <div>
        <Titles />
        <Form getSummoner={this.getSummoner} />
        <Summoner
          name={this.state.name}
          summonerLevel={this.state.summonerLevel}
          accountId={this.state.accountId}
          profileIconId={this.state.profileIconId}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;