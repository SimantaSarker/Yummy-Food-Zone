import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
  const chefRecipes=useLoaderData();
  const {id}=useParams();
  console.log(id)
  console.log(chefRecipes)
  return (
    <div>
      <h1>Chef Recipe id {id}
      </h1>
    </div>
  );
};

export default ChefRecipe;