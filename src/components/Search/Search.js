import React, { Component } from "react";
// import axios from "axios";

class Search extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: "",
  //       summonerLevel: 0,
  //       accountId: 0
  //     };
  //   }

  //   handleSearchInput(e) {
  //     var summonerInput = e.target.value;
  //   }
  //   handleSearchSubmit(e) {}

  //   componentDidMount() {
  //     var api_key = "RGAPI-c2803147-5d63-4739-a85a-9181c1a7a66a";
  //     axios
  //       .get(
  //         `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Senpai%20My%20Guy?api_key=${api_key}`
  //       )
  //       .then(response => {
  //         console.log(response.data.name);
  //         console.log(response.data.accountId);
  //         console.log(response.data.summonerLevel);

  //         this.setState({
  //           name: response.data.name
  //           //   summonerLevel: response.data.summonerLevel
  //           //   accountId: response.data.accountId
  //         });
  //       });
  //   }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSearchSubmit(e)}>
          <textarea onChange={e => this.handleSearchInput(e)} />
          <input type="submit" value="check" />
        </form>
      </div>
    );
  }
}

export default Search;
