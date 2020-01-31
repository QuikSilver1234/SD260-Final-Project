import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav">
        <h1>eSports Hub</h1>
        <button onClick={this.props.sortLikes}>Sort by likes</button>
        <p>Select User:</p>
        <select onChange={e => this.props.getUser(e.target.value)}>
          {this.props.people.map(person => {
            return <option>{person}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Header;
