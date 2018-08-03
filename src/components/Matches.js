import React from "react";

const API_KEY = "RGAPI-07219149-a191-4091-8889-6170ac935361";

class Matches extends React.Component {
  getGameId = async e => {
    e.preventDefault();
    const account = this.props.accountId;
    const api_call_match = await fetch(
      `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${account}?beginIndex=0&endIndex=19&api_key=${API_KEY}`
    );
    const data = await api_call_match.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Matches</h1>
      </div>
    );
  }
}

export default Matches;
