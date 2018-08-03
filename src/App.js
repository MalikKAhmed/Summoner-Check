import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Summoner from "./components/Summoner";

import "./App.css";

const API_KEY = "RGAPI-07219149-a191-4091-8889-6170ac935361";

class App extends React.Component {
  // state = {
  //   name: "",
  //   summonerLevel: "",
  //   accountId: ""
  // };

  getSummoner = async e => {
    e.preventDefault();
    const summoner = e.target.elements.summoner.value;
    const api_call = await fetch(
      `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summoner}?api_key=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Titles />
        <Form getSummoner={this.getSummoner} />
        <Summoner />
      </div>
    );
  }
}

export default App;
