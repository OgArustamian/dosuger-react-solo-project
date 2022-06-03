import BurgerMenu from '../Burger-Menu/BurgerMenu';
import './header.css';
import movieLogo from './img/clapperboard-svgrepo-com.svg';
import chillLogo from './img/man-lying-and-watching-tv-svgrepo-com.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <BurgerMenu />
      <div className="navbar navbar-dark shadow-sm">
        <div className="container">
          <div className="navbar-brand d-flex align-items-center">
            <img className="header-logo" src={chillLogo} alt="logo" />
            <img className="header-logo" src={movieLogo} alt="logo" />
          </div>
          <Link className="header-title" to="/">Досугер</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
