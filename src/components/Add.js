import React, { useState } from "react";
import ResultCard from './ResultCard'

function Add() {
  const [query, setQuery] = useState("");
  const [results , setResults] = useState([])

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d719cc77251f24ad6ea170bd0f8002b9&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          if(!data.errors){
              setResults(data.results)
              console.log(data)
          } else
          setResults([])
        })
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="search for a movie"
              value={query}
              onChange={onChange}
            />
           
          </div>
          {results.length > 0 && (
                <ul>
                    {results.map(movie => {
                      return <li key={movie.id}>
                           <ResultCard movie={movie} />
                       </li>
                    })}
                </ul>
            )}
        </div>
      </div>
    </div>
  );
}

export default Add;
