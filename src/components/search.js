import React, { Component } from "react";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  onButtonClick = () => {
    if (this.state.searchTerm.trim().length > 1) {
      this.props.fetchData(this.state.searchTerm);
    }
  };
  render() {
    return (
      <div className="container">
        <input
          type="text"
          className="form-control input-lg p-9"
          id="term"
          onChange={event => this.setState({ searchTerm: event.target.value })}
        />

        <div>
          <button
            type="button"
            className="btn btn-primary mt-2 "
            onClick={this.onButtonClick}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
