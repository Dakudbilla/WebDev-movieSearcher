import React, { Component } from "react";
import "../css/header.css";

import Search from "./search";

class Header extends Component {
  render() {
    return (
      <div className="header-container jumbotron d-flex align-items-center ">
        <Search fetchData={this.props.fetchData} />
      </div>
    );
  }
}

export default Header;
