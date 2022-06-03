import React, { useState } from "react";
import "./content.css";

const API_KEY = "1c345559-c203-450f-b42e-db640f453da2";

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
  const [isLoading, setLoading] = useState(true)

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
      setLoading(false)
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
