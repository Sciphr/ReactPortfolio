import React from 'react';
import './Portfolio.css';
import PortfolioImage from '../../assets/images/Portfolio Project Picture.png';
import ResumeImage from '../../assets/images/Resume Website Picture.png';
import TicketTrackerImage from '../../assets/images/ticket-tracker-screenshot.png';
import HouseListingsImage from '../../assets/images/house-listings-screenshot.png';
import GithubImage from '../../assets/images/github-search-screenshot.png';
import FoodAppPic from '../../assets/images/Foodapp.png';
import BerryTokPic from '../../assets/images/berrytok.png';
import EcommercePic from '../../assets/images/ecommercesity.png';
import EcommercePic2 from '../../assets/images/second-ecommerce-screenshot.png';
import JobTrackerPic from '../../assets/images/job-tracker-screenshot.png';
import WeatherAppPic from '../../assets/images/weather-app-screenshot.png';

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
    image: TicketTrackerImage,
    title: 'Support Desk/Ticket Tracker - MERN',
    github: 'https://github.com/Sciphr/Berry-Ticket-Tracker-app',
    demo: 'https://berry-ticket-tracker.netlify.app/',
  },
  {
    id: 6,
    image: HouseListingsImage,
    title: 'House Listings - Firestore App',
    github: 'https://github.com/Sciphr/Berry-House-Listings-App',
    demo: 'https://berry-house-listings.netlify.app/',
  },
  {
    id: 7,
    image: GithubImage,
    title: 'Github Profile Search',
    github: 'https://github.com/Sciphr/Berry-Github-Finder',
    demo: 'https://berry-github-finder.netlify.app/',
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
  {
    id: 9,
    image: EcommercePic2,
    title: 'Ecommerce Shop 2',
    github: 'https://github.com/Sciphr/Berry-Shop-2',
    demo: 'https://berry-shop-two.vercel.app/',
  },
  {
    id: 10,
    image: JobTrackerPic,
    title: 'Job Tracker',
    github: 'https://github.com/Sciphr/Job-Tracker',
    demo: 'https://berry-job-tracker.up.railway.app/',
  },
  {
    id: 11,
    image: WeatherAppPic,
    title: 'Check Weather (Cities of 1 mil pop. only)',
    github: 'https://github.com/Sciphr/React-Test-Weather-App',
    demo: 'https://react-weather-app-test-project.web.app/',
  },
];

const Portfolio = () => {
  projectData.sort((a, b) => {
    return a.id - b.id;
  });

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

export default Portfolio;
