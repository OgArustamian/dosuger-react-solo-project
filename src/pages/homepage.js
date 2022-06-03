import React from "react";
import moviesPosters from "../movies-posters.jpeg";
import tvShowsPosters from "../tvshows.webp";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="poster">
        <p className="poster-text">Найти фильм</p>
        <Link className="poster-link" to="/movies">
          <img className="poster-image" src={moviesPosters} />
        </Link>
      </div>

      <div className="poster">
        <p className="poster-text">Найти ТВ-шоу</p>
        <Link className="poster-link" to="/tvshows">
          <img className="poster-image" src={tvShowsPosters} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
