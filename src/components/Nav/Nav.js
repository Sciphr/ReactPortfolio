import React, { useState } from 'react';
import './Nav.css';
import { ImHome3, ImUser } from 'react-icons/im';
import { RiComputerFill } from 'react-icons/ri';
import { AiFillProject } from 'react-icons/ai';
import { MdContactMail } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <ImHome3 />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <ImUser />
      </a>
      <a
        href="#techstack"
        onClick={() => setActiveNav('#techstack')}
        className={activeNav === '#techstack' ? 'active' : ''}
      >
        <RiComputerFill />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <AiFillProject />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdContactMail />
      </a>
    </nav>
  );
};

export default Nav;
