import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import MovieCard from "./MovieCard.js";

function WatchList() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">


            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies ... Add movies to view them </h2>
        )}
      </div>
    </div>
  );
}

export default WatchList;
