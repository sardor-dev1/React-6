import React from "react";
import "./about.scss";
import aboutImg from "../../assets/about/apple.png";

const About = () => {
  return (
    <section className="container about">
      <div className="about__card">
        <div className="about__card__img">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about__card__info">
          <h3>Apple</h3>
          <p>
            Apple is one of the most famous smart watches providing company.
          </p>
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__img">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about__card__info">
          <h3>Apple</h3>
          <p>
            Apple is one of the most famous smart watches providing company.
          </p>
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__img">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about__card__info">
          <h3>Apple</h3>
          <p>
            Apple is one of the most famous smart watches providing company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
