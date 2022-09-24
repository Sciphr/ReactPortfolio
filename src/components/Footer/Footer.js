import React from 'react';
import './Footer.css';
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#about" className="footer__logo">
        Jacob Berry
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#techstack">Techstack</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://github.com">
          <BsGithub />
        </a>
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jacob Berry. All Right Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
