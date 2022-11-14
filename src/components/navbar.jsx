import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mx-4 h1">
          Counter{" "}
          <span className="bg-warning rounded px-2 pb-1">
            {this.props.totalCounters}
          </span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
