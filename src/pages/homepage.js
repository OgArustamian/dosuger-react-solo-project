import React from "react";
import moviesPosters from "../movies-posters.jpeg";
import tvShowsPosters from "../tvshows.webp";

const Home = () => {
  return (
    <div className="home-container">
      <div className="poster">
        <p className="poster-text">Найти фильм</p>
        <a className="poster-link" href="/movies">
          <img className="poster-image" src={moviesPosters} />
        </a>
      </div>

      <div className="poster">
        <p className="poster-text">Найти ТВ-шоу</p>
        <a className="poster-link" href="/tvshows">
          <img className="poster-image" src={tvShowsPosters} />
        </a>
      </div>
    </div>
  );
};

export default Home;
