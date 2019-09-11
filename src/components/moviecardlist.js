import React, { Component } from "react";
import MovieCard from "./Moviecard";
const moviePosterBaseUrl = "http://image.tmdb.org/t/p/w500";

class MovieCardList extends Component {
  renderCardList = () => {
    const cardList = [];

    this.props.movies.forEach(movie => {
      cardList.push(
        <MovieCard
          key={movie.id}
          movie={movie}
          imageUrl={`${moviePosterBaseUrl}${movie.poster_path}`}
        />
      );
    });
    return cardList;
  };
  render() {
    return <div className="row">{this.renderCardList()}</div>;
  }
}

export default MovieCardList;
