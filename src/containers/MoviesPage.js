// .src/containers/MoviesPage.js
import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import MovieShow from "../components/MovieShow";

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Choose a movie from the list above plz</h3>}
    />
    <Route
      path={`${match.url}/:movieID`}
      render={(routerProps) => <MovieShow {...routerProps} movies={movies} />}
    />
  </div>
);

export default MoviesPage;
