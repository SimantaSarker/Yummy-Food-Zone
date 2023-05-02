import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Chef from '../Chef/Chef';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Chef></Chef>
    </div>
  );
};

export default Home;