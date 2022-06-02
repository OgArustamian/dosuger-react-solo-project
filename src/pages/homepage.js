import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <a className="card-link" href="/movies">
                <div className="card">
                    <img className="card-imamge" src="" />
                    <p className="card-text">Найти фильм</p>
                </div>
            </a>
            <a className="card-link" href="/tvshows">
                <div className="card">
                    <img className="card-imamge" src="" />
                    <p className="card-text">Найти сериал</p>
                </div>
            </a>
        </div>
    )
}

export default Home