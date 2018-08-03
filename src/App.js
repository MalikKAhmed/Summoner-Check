import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Summoner from "./components/Summoner";
// import Matches from "./components/Matches";

import "./App.css";

const API_KEY = "RGAPI-c90f2009-037e-492f-8feb-9fc5133ad371";

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
    if (summoner) {
      console.log(data);
      this.setState({
        name: data.name,
        summonerLevel: data.summonerLevel,
        accountId: data.accountId,
        profileIconId: data.profileIconId,
        error: ""
      });
      const matchlist = await fetch(
        `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${
          data.accountId
        }?beginIndex=0&endIndex=19&api_key=${API_KEY}`
      );
      const mdata = await matchlist.json();
      console.log(mdata.matches);
      const gameIds = [];
      for (let i = 0; i < mdata.matches.length; i++) {
        // console.log(mdata.matches[i].gameId);
        gameIds.push(mdata.matches[i].gameId);
      }
      console.log(gameIds);
      const matchDetail = await fetch(
        `https://na1.api.riotgames.com/lol/match/v3/matches/${
          gameIds[1]
        }?api_key=${API_KEY}`
      );
      const gdata = await matchDetail.json();
      console.log(gdata);
      for (let i = 0; i < gdata.participants.length; i++) {
        console.log(gdata.participants[i].stats.win);
      }
      for (let i = 0; i < gdata.participantIdentities.length; i++) {
        console.log(gdata.participantIdentities[i].player.accountId);
      }
      //possibly an if statement to match the summoner name with the key
    } else {
      this.setState({
        name: undefined,
        summonerLevel: undefined,
        accountId: undefined,
        profileIconId: undefined,
        error: "Please enter a summoner name"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getSummoner={this.getSummoner} />
                  <Summoner
                    name={this.state.name}
                    summonerLevel={this.state.summonerLevel}
                    accountId={this.state.accountId}
                    profileIconId={this.state.profileIconId}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <Matches getSummoner={this.getSummoner} /> */
}

export default App;
