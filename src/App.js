import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Portfolio from './components/Portfolio/Porfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = () => {
    let heightToHideFrom = 3500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  });

  return (
    <React.Fragment>
      <Header />
      {isVisible && <Nav />}
      <About />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
