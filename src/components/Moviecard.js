import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";

class MovieCard extends Component {
  render() {
    const movieLink = `/${this.props.movie.id}`;
    return (
      <div className="col col-md-3 shadow p-1 mb-5 bg-white rounded m-2">
        <Link to={movieLink}>
          <img className="card-img-top" src={this.props.imageUrl} alt="" />
        </Link>

        <div className="card-body">
          <h4 className="card-title">{this.props.movie.title}</h4>
          <div className="card-text">
            <ReadMore overview={this.props.movie.overview} />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
