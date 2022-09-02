import React from 'react';
import './TechStack.css';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';

const TechStack = () => {
  return (
    <section id="techstack">
      <h5>My Skills</h5>
      <h2>Tech Stack</h2>

      <div className="container techstack__container">
        <div className="techstack__frontend">
          <h3>Frontend Development</h3>
          <div className="techstack__content">
            <article className="techstack__details">
              <IoCheckmarkDoneCircleSharp className="techstack__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="techstack__details">
              <IoCheckmarkDoneCircleSharp className="techstack__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="techstack__details">
              <IoCheckmarkDoneCircleSharp className="techstack__details-icon" />
              <div>
                <h4>JavaScript ES6</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="techstack__details">
              <IoCheckmarkDoneCircleSharp className="techstack__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="techstack__details">
              <IoCheckmarkDoneCircleSharp className="techstack__details-icon" />
              <div>
                <h4>Redux/Router Toolset</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="techstack__backend">
          <h3>Backend Development</h3>
          <div className="techstack__content">
            <article className="techstack__details">
              <IoCheckmarkDoneCircleSharp className="techstack__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="techstack__details">
              <IoCheckmarkDoneCircleSharp className="techstack__details-icon" />
              <div>
                <h4>NoSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="techstack__details">
              <IoCheckmarkDoneCircleSharp className="techstack__details-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="techstack__details">
              <IoCheckmarkDoneCircleSharp className="techstack__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="techstack__details">
              <IoCheckmarkDoneCircleSharp className="techstack__details-icon" />
              <div>
                <h4>Mongoose</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
