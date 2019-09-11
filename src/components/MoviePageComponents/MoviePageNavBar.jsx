import React, { Component } from "react";
import logo from "../../img/logo.png";

class MoviePageNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand" href=" ">
          <img
            src={logo}
            width="81px"
            height="72px"
            className="d-inline-block align-top"
            alt=""
          />
          <span className="text-success h4"> The Movies DataBase</span>
        </a>
      </nav>
    );
  }
}

export default MoviePageNavBar;
