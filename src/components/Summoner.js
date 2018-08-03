import React from "react";

class Summoner extends React.Component {
  render() {
    return (
      <div>
        Summoner: {this.props.name}
        Current Level: {this.props.summonerLevel}
        Account Id: {this.props.accountId}
        Icon: {this.props.profileIconId}
      </div>
    );
  }
}

export default Summoner;
