import React from "react";
import "./navbar.scss";

import navLogo from "../../assets/header/logo.svg";
import searchIcon from "../../assets/header/search.svg";
import personIcon from "../../assets/header/person.svg";
import shopIcon from "../../assets/header/shopping.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="nav container">
        <div className="nav__logo">
          <img src={navLogo} alt="" />
        </div>
        <ul className="nav__list">
          <li className="nav__list__item">
            <a href="#">Home</a>
          </li>
          <li className="nav__list__item">
            <a href="#">Brands</a>
          </li>
          <li className="nav__list__item">
            <a href="#">Recent Products</a>
          </li>
          <li className="nav__list__item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="nav__btns">
          <button>
            <img src={searchIcon} alt="" />
          </button>
          <button>
            <img src={personIcon} alt="" />
          </button>
          <button>
            <img src={shopIcon} alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
