import React from "react";

class Summoner extends React.Component {
  render() {
    return (
      <div>
        {this.props.name && <p>Summoner: {this.props.name}</p>}
        {this.props.summonerLevel && (
          <p>Current Level: {this.props.summonerLevel}</p>
        )}
        {/* {this.props.accountId && <p>Account Id: {this.props.accountId}</p>} */}
        {this.props.profileIconId && <p>Icon: {this.props.profileIconId}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Summoner;
