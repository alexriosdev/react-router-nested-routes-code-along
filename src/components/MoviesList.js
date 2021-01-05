import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map((movieID) => (
    <Link key={movieID} to={`/movies/${movieID}`}>
      <h3>{movies[movieID].title}</h3>
    </Link>
  ));
  return <div>{renderMovies}</div>;
};
export default MoviesList;
