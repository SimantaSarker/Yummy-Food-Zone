import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

const BlogLayout = () => {
  return (
    <div  className='p-5'>
      <Header></Header>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
      
    </div>
  );
};

export default BlogLayout;