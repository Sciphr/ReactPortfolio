import React from 'react';
import './Portfolio.css';
import Image from '../../assets/images/sample.jpg';

const projectData = [
  {
    id: 1,
    image: Image,
    title: 'Test Project',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: Image,
    title: 'Test Project',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: Image,
    title: 'Test Project',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 4,
    image: Image,
    title: 'Test Project',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 5,
    image: Image,
    title: 'Test Project',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 6,
    image: Image,
    title: 'Test Project',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
];

const Porfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projectData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="Project" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Porfolio;
