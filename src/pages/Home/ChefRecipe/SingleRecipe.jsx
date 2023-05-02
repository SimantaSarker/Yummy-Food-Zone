import React from "react";

const SingleRecipe = ({ recipe }) => {
  console.log(recipe);
const {cookingMethod,rating,recipeName,ingredients}=recipe;
console.log(cookingMethod,rating,recipeName,ingredients);
  return (
    <div className="card w-9/12  bg-gray-600 text-primary-content mx-auto">
      <div className="card-body">
        <h2 className="card-title">Recipe Name: {recipeName}</h2>
        <p>{cookingMethod}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success">Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
