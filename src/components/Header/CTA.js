import React from 'react';
import Resume from '../../assets/Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Send me a message!
      </a>
    </div>
  );
};

export default CTA;
