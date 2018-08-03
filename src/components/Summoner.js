import React from "react";

class Summoner extends React.Component {
  render() {
    return (
      <div className="summoner__info">
        {this.props.name && (
          <p className="summoner__key">
            Summoner: <span>{this.props.name}</span>
          </p>
        )}
        {this.props.summonerLevel && (
          <p className="summoner__key">
            Current Level: <span>{this.props.summonerLevel}</span>
          </p>
        )}
        {/* {this.props.accountId && <p>Account Id: {this.props.accountId}</p>}
        {this.props.profileIconId && <p>Icon: {this.props.profileIconId}</p>} */}
        {this.props.error && (
          <p className="summoner__key">{this.props.error}</p>
        )}
      </div>
    );
  }
}

export default Summoner;
