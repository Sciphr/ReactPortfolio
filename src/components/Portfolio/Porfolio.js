import React from 'react';
import './Portfolio.css';
import PortfolioImage from '../../assets/images/Portfolio Project Picture.png';
import ResumeImage from '../../assets/images/Resume Website Picture.png';
import SingleUpload from '../../assets/images/MERN Single Upload Picture.png';
import SeparateImage from '../../assets/images/Separate MERN Picture.png';
import BackendImage from '../../assets/images/Backend Upload.png';
import ReduxImage from '../../assets/images/ReduxTestProject.png';
import CommentQuotePic from '../../assets/images/Comment and Quote Pic.png';
import FoodAppPic from '../../assets/images/Foodapp.png';
import BerryTokPic from '../../assets/images/berrytok.png';
import EcommercePic from '../../assets/images/ecommercesity.png';

const projectData = [
  {
    id: 1,
    image: PortfolioImage,
    title: 'Porfolio Website',
    github: 'https://github.com/Sciphr/ReactPortfolio',
  },
  {
    id: 8,
    image: ResumeImage,
    title: 'Resume Website',
    github: 'https://github.com/Sciphr/ResumeWebsite',
    demo: 'https://sciphr.github.io/ResumeWebsite/',
  },
  {
    id: 5,
    image: SingleUpload,
    title: 'MERN Project - Single Server Version',
    github: 'https://github.com/Sciphr/MERN-Single-Server',
    demo: 'https://single-upload-mern-sciphr.herokuapp.com/',
  },
  {
    id: 6,
    image: ReduxImage,
    title: 'React Redux Store Test Project',
    github: 'https://github.com/Sciphr/React-Redux-Test-Project',
    demo: 'https://react-redux-test-project-8f263.web.app/',
  },
  {
    id: 7,
    image: CommentQuotePic,
    title: 'React Comment and Quote Tracker - Test Project',
    github: 'https://github.com/Sciphr/Quote-and-Comment-Tracker',
    demo: 'https://react-http-33f1d.firebaseapp.com/',
  },
  {
    id: 4,
    image: FoodAppPic,
    title: 'React Test Food App',
    github: 'https://github.com/Sciphr/React-Test-Food-App',
    demo: 'https://quote-and-comment-tracker.web.app/',
  },
  {
    id: 2,
    image: EcommercePic,
    title: 'React ECommerce Site',
    github: 'https://github.com/Sciphr/MERN-Ecommerce-Test-App',
    demo: 'https://berryshopapp.herokuapp.com/',
  },
  {
    id: 3,
    image: BerryTokPic,
    title: 'React Tik Tok Clone',
    github: 'https://github.com/Sciphr/Tik-Tok-clone',
    demo: 'https://berry-tok.vercel.app/',
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
            <a
              href={demo}
              target="__blank"
              key={id}
              className="portfolio__item"
            >
              <div className="portfolio__item-image">
                <img src={image} alt="Project" className="projectImage" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="__blank">
                    Github
                  </a>
                )}
                {demo && (
                  <a href={demo} className="btn btn-primary" target="__blank">
                    Live Demo
                  </a>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Porfolio;
