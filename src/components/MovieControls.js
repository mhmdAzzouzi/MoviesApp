import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ type, movie }) => {
  const { removeMovie,addMovieToWatched, moveToWatch,removeFromWatched } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie) }>
            <i class="fa-fw far fa-eye"></i>
          </button>

          <button className="ctrl-btn" onClick={() => removeMovie(movie.id)}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

        {type === 'watched' && (
          <>
          <button className="ctrl-btn" onClick={() => moveToWatch(movie) }>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>


          <button className="ctrl-btn" onClick={() => removeFromWatched(movie.id) }>
            <i className="fa-fw fa fa-times"></i>
          </button>
          </>
        )}

    </div>
  );
};

export default MovieControls;
