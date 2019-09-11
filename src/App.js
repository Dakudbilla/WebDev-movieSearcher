import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import axios from "axios";
import HomPage from "./Pages/HomPage";
import MoviePage from "./Pages/MoviePage";

const key = "da061aea68de1ab70547833e12285d32";
const baseUrlWithKey = `https://api.themoviedb.org/3/search/movie?api_key=${key}`;

class App extends Component {
  state = {
    movies: []
  };

  fetchData = searchTerm => {
    axios
      .get(`${baseUrlWithKey}&query=${searchTerm}`)
      .then(data => this.setState({ movies: data.data.results }));
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => (
            <HomPage movies={this.state.movies} fetchData={this.fetchData} />
          )}
        />
        <Route path="/:movieID" component={MoviePage} />
      </BrowserRouter>
    );
  }
}

export default App;
