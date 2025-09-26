import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
    </>
  );
};

export default Home;