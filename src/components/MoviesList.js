import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <h3><Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link></h3>
  );

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;