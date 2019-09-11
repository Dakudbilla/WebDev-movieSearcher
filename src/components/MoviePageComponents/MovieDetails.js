import React, { Component } from "react";

const ImageBaseUrl = `http://image.tmdb.org/t/p/w500/`;
class MovieDetails extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div
        className="container-fluid text-white"
        style={{ position: "absolute", height: "20em" }}
      >
        <div className="row">
          <div className="col-4 ">
            <img
              src={`${ImageBaseUrl}${movie.poster_path}`}
              className="shadow-lg mt-5"
              alt=""
              style={{ height: "40em" }}
            />
          </div>
          <div className="col-4 mt-5">
            <div className="h1 mb-3">{movie.title}</div>
            User Rating
            <div class="progress mb-3">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow={movie.vote_average}
                aria-valuemin="0"
                aria-valuemax="10"
                style={{ width: "75%" }}
              >
                {`${movie.vote_average * 10}%`}
              </div>
            </div>
            <h2>Overview</h2>
            <div>{movie.overview}</div>
          </div>
          <div className="col-4 mt-5 font-weight-bold">
            <div>
              Budget<div className="text-warning">${movie.budget}</div>
            </div>
            <div>
              Revenue<div className="text-warning">${movie.revenue}</div>
            </div>
            <div>
              Runtime<div className="text-warning">{movie.runtime} minutes</div>
            </div>
            <div>
              Release Date
              <div className="text-warning">{movie.release_date}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
