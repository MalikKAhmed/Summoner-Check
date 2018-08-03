import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getSummoner}>
        <input type="text" name="summoner" placeholder="Summoner." />
        <button>Get Summoner</button>
      </form>
    );
  }
}

export default Form;
