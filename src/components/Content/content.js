import React, { useState } from "react";
import "./content.css";

const API_KEY = "7c27de76-1ce1-4d43-900e-d451e8f5f06b";

function getRandomUrl() {
  const randInt = Math.floor(Math.random() * 12) + 1;
  return `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${randInt}`;
}

function getRandomIndex() {
  return Math.floor(Math.random() * 20);
}

// let i = 0;
// const resetCounter = () => {
//   i = 0;
// };

function Main() {
  const [movie, setMovie] = useState({});

  async function getRandomMovie() {
      const response = await fetch(getRandomUrl(), {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      setMovie(responseData.films[getRandomIndex()])

    // if (i < 20) {
    //   setTimeout(() => {
    //     setMovie(movies[i]);
    //     i += 1;
    //   }, 50);
    // } else {
    //   setMovie(movies[getRandomIndex()]);
    // }
  }

  // useEffect(() => {
  //   if (i != 0) {
  //     getRandomMovie();
  //   }
  // }, [i]);

  return (
    <main className="main">
      <button
        onClick={getRandomMovie} className="randomize-btn">
        подобрать фильм
      </button>
      <img className="movie-poster" src={movie.posterUrl}></img>
      <p className="movie-title">{movie.nameRu}</p>
    </main>
  );
}

export default Main;
