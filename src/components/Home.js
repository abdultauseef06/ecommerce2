// Inside Home.js

import React from 'react';

import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
import Footer from './Footer';
import Nav from './Nav';
import FeatureProducts from './FeatureProducts';



const Home = () => {


  // Access the message from the state
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
