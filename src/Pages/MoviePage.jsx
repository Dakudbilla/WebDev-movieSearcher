import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import MoviePageNavBar from "../components/MoviePageComponents/MoviePageNavBar";
import MovieCast from "../components/MoviePageComponents/MovieCast";

import { usePalette } from "react-palette";
import Search from "../components/search";
import MovieDetails from "../components/MoviePageComponents/MovieDetails";

const key = "da061aea68de1ab70547833e12285d32";
const baseUrl = `https://api.themoviedb.org/3/movie/`;
// const MoviePage = ()=> {
//   state = {
//     movie: null,
//     bgColor: {
//       variant: "white"
//     }
//   };

//   fetchData = movieID => {
//     axios
//       .get(`${baseUrl}${movieID}?api_key=${key}&append_to_response=credits`)
//       .then(data => this.setState({ movie: data.data }));
//   };

//   componentDidMount() {
//     const { data, loading, error } = usePalette(
//       `http://image.tmdb.org/t/p/w1066_and_h600_bestv2/${this.state.movie.backdrop_path}`
//     );

//     const { movieID } = this.props.match.params;
//     this.fetchData(movieID);
//     this.setState({
//       bgColor: data
//     });
//   }

//   render() {
//     if (this.state.movie !== null) {
//       /// console.log(this.state.movie);
//       return (
//         <div style={{ backgroundColor: this.state.bgColor.variant }}>
//           <MoviePageNavBar />
//           <h1>movieID: {this.state.movie.title}</h1>
//           <figure>
//             <img
//               src={`http://image.tmdb.org/t/p/w1066_and_h600_bestv2/${this.state.movie.backdrop_path}`}
//               alt=""
//             />
//           </figure>
//           <MovieCast cast={this.state.movie.credits.cast} />
//         </div>
//       );
//     } else {
//       return <h1>Loading....</h1>;
//     }
//   }
// }

// export default MoviePage;

const MoviePage = props => {
  const [movie, setmovie] = useState(null);

  const { data, loading, error } = usePalette(
    movie ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : ""
  );
  const fetchData = movieID => {
    axios
      .get(`${baseUrl}${movieID}?api_key=${key}&append_to_response=credits`)
      .then(data => setmovie(data.data));
  };

  useEffect(() => {
    const { movieID } = props.match.params;
    fetchData(movieID);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(movie);
  return (
    <div>
      {movie ? (
        <div>
          <MoviePageNavBar />

          <div
            style={{
              position: "relative",
              height: "45em"
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                opacity: "0.9",
                backgroundColor: !loading ? data.darkVibrant : "white"
              }}
            />

            <div
              style={{
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(http://image.tmdb.org/t/p/w1066_and_h600_bestv2/${movie.backdrop_path})`
              }}
            >
              <MovieDetails movie={movie} />
            </div>
          </div>

          <MovieCast cast={movie.credits.cast} />
        </div>
      ) : (
        <div className="spinner-grow align-items-center" role="status">
          <span className="sr-only ">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
