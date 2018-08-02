import React, { Component } from "react";
// import axios from "axios";

class Search extends Component {
  handleSearchInput(e) {
    // var summonerInput = e.target.value;
  }
  handleSearchSubmit(e) {}

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
