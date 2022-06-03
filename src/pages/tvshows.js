import React, { useState } from "react";

const API_KEY = "7c27de76-1ce1-4d43-900e-d451e8f5f06b";

function getRandomUrl() {
  const randInt = Math.floor(Math.random() * 10) + 1;
  return `https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=1&order=RATING&type=TV_SERIES&ratingFrom=8&ratingTo=10&yearFrom=1995&yearTo=3000&page=${randInt}`;
}

function getRandomIndex() {
  return Math.floor(Math.random() * 20);
}

function TvShows() {
  const [show, setShow] = useState([]);

  async function getRandomShow() {
    const response = await fetch(getRandomUrl(), {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    setShow(responseData.items[getRandomIndex()]);
  }

  return (
    <main className="main">
      <button onClick={getRandomShow} className="randomize-btn">
        подобрать телешоу
      </button>
      <img className="movie-poster" src={show.posterUrl}></img>
      <p className="movie-title">{show.nameRu}</p>
    </main>
  );
}

export default TvShows;
