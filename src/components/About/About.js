import React from 'react';
import './About.css';
import SidePortrait from '../../assets/images/sideportrait.jpeg';
import { FaHandSpock, FaHandshake } from 'react-icons/fa';
import { IoMdCodeWorking } from 'react-icons/io';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={SidePortrait} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaHandSpock className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <FaHandshake className="about__icon" />
              <h5>Clients</h5>
              <small>5 and Counting</small>
            </article>
            <article className="about__card">
              <IoMdCodeWorking className="about__icon" />
              <h5>Projects</h5>
              <small>6+</small>
            </article>
          </div>
          <p>
            Lots of stuff Lots of stuff Lots of stuff Lots of stuff Lots of
            stuff Lots of stuff Lots of stuff Lots of stuff Lots of stuff Lots
            of stuff
          </p>
          <a href="#contact" className="btn btn-primary">
            Send Me A Message!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
