import React, { Component } from "react";
import Header from "../components/header";
import MovieCardList from "../components/moviecardlist";

class HomPage extends Component {
  render() {
    const { fetchData, movies } = this.props;
    if (movies.length > 0) {
      return (
        <div>
          <Header fetchData={fetchData} />
          <div className="container" id="container">
            <MovieCardList movies={movies} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header fetchData={fetchData} />
        </div>
      );
    }
  }
}

export default HomPage;
