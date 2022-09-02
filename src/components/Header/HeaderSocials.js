import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="__blank">
        <SiLinkedin />
      </a>
      <a href="https://github.com" target="__blank">
        <SiGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
