import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Chef from '../Chef/Chef';
import SpecialWeek from '../SpecialWeek/SpecialWeek';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Chef></Chef>
      <SpecialWeek></SpecialWeek>
    </div>
  );
};

export default Home;