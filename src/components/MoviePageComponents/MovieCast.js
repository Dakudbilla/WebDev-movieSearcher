import React, { Component } from "react";

class MovieCast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: this.props.cast
    };
  }

  renderCast = () => {
    const cardList = [];
    const { cast } = this.state;
    cast.forEach(element => {
      cardList.push(
        <div className="col-md-6 col-lg-2 shadow p-1 mb-5 bg-white rounded m-2">
          <img
            className="card-img-top"
            src={`http://image.tmdb.org/t/p/w500/${element.profile_path}`}
            alt=""
          />

          <div className="card-body">
            <h4 className="card-title font-weight-bold">{element.name}</h4>
            <div className="card-text">{element.character}</div>
          </div>
        </div>
      );
    });
    return cardList;
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row h1 font-weight-bold">CAST</div>
        <div className="row">
          <div className="col-8">
            <div className="row">{this.renderCast()}</div>
          </div>
          <div className="col-4 bg-info"></div>
        </div>
      </div>
    );
  }
}

export default MovieCast;
