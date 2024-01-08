// Inside Home.js

import React from 'react';

import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
import Footer from './Footer';
import Nav from './Nav';
import FeatureProducts from './FeatureProducts';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const location = useLocation();

  // Access the message from the state
  const message = location.state && location.state.message;
  return (<>
      <Nav/>
      <HeroSection />
      <FeatureProducts />
      <Services />
      <Trusted />
      <Footer />
      </>
    
  );
};

export default Home;
