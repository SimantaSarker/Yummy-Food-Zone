import React,{Suspense,lazy} from 'react';

import './Home.css'
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
// import Chef from '../Chef/Chef';
import SpecialWeek from '../SpecialWeek/SpecialWeek';
const Chef=lazy(()=>import('../Chef/Chef'))
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
     <Suspense fallback={<div><progress className="progress w-56"></progress></div>}> <Chef></Chef></Suspense>
      <SpecialWeek></SpecialWeek>
    </div>
  );
};

export default Home;