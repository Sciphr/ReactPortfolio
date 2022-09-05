import React, { useState } from 'react';
import './Nav.css';
import { ImHome3, ImUser } from 'react-icons/im';
import { RiComputerFill } from 'react-icons/ri';
import { AiFillProject } from 'react-icons/ai';
import { MdContactMail } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('homePage');

  const navHandler = (event) => {
    let activePage = event.target.id;
    setActiveNav(activePage);
  };

  return (
    <nav>
      <a
        href="#top"
        id="homePage"
        onClick={navHandler}
        className={activeNav === 'homePage' ? 'active' : ''}
      >
        <ImHome3 />
      </a>
      <a
        href="#about"
        id="aboutPage"
        onClick={navHandler}
        className={activeNav === 'aboutPage' ? 'active' : ''}
      >
        <ImUser />
      </a>
      <a
        href="#techstack"
        id="techstackPage"
        onClick={navHandler}
        className={activeNav === 'techstackPage' ? 'active' : ''}
      >
        <RiComputerFill />
      </a>
      <a
        href="#portfolio"
        id="portfolioPage"
        onClick={navHandler}
        className={activeNav === 'portfolioPage' ? 'active' : ''}
      >
        <AiFillProject />
      </a>
      <a
        href="#contact"
        id="contactPage"
        onClick={navHandler}
        className={activeNav === 'contactPage' ? 'active' : ''}
      >
        <MdContactMail />
      </a>
    </nav>
  );
};

export default Nav;
