import React, { useState } from "react";
import "./content.css";

const API_KEY = "5c2b8622-1dcc-4e99-92eb-c04e98120af5";

function getRandomUrl() {
  const randInt = Math.floor(Math.random() * 12) + 1;
  return `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${randInt}`;
}

function getRandomMovieIndex() {
  return Math.floor(Math.random() * 20);
}

function Main() {
  const [movie, setMovie] = useState([]);

  async function getRandomMovie() {
    const response = await fetch(getRandomUrl(), {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    setMovie(responseData.films[getRandomMovieIndex()]);
  }

  return (
    <main className="main">
      <button onClick={getRandomMovie} className="randomize-btn">
        подобрать фильм
      </button>
      <img className="movie-poster" src={movie.posterUrl}></img>
      <p className="movie-title">{movie.nameRu}</p>
    </main>
  );
}

export default Main;
