import React from "react";
import "./hero.scss";

import heroClock from "../../assets/hero/clock.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__info">
          <h1 className="hero__info__title">
            Discover <br /> Most Suitable Watches
          </h1>
          <p className="hero__info__text">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <div className="hero__info__inp">
            <input type="text" placeholder="Find the best brands" />
            <button>Search</button>
          </div>
        </div>
        <div className="hero__img">
          <img src={heroClock} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
