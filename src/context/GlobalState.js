import React, { createContext, useReducer, useEffect } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovie = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const addMovieToWatched = movie =>{
    dispatch({type:"ADD_MOVIE_TO_WATCHED" , payload:movie})
  }

  const moveToWatch = movie => {
    dispatch({type:"MOVE_TO_WATCHLIST", payload:movie})
  }
  const removeFromWatched = movie => {
    dispatch({type:"REMOVE_FROM_WATCHED", payload:movie})
  }

  const removeMovie = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovie,
        removeMovie,
        addMovieToWatched,
        moveToWatch,
        removeFromWatched
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
