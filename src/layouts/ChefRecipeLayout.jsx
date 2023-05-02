import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';

const ChefRecipeLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default ChefRecipeLayout;