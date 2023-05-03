import React from "react";
import { toast } from "react-toastify";

const SingleRecipe = ({ recipe }) => {
  const { cooking_method, rating, recipeName, ingredients,recipe_id } = recipe;


  const handleFavorite=(id)=>{
    toast("Added to your favorite")

  }

  return (
    <div className="card w-9/12  bg-gray-600 text-primary-content mx-auto about">
      <div className="card-body">
        <h2 className="card-title text-2xl">Recipe Name: {recipeName}</h2>
        <hr className="border-2 border-black mt-4 mb-4 rounded " />
        <p>{cooking_method}</p>
        <hr className="border-2 border-black mt-4 mb-4 rounded " />
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-slate-300 font-semibold text-2xl">
              INGREDIENTS:
            </h1>
            <ul className="mt-5">
              <li>1. {ingredients.ingredients_1}</li>
              <li>2. {ingredients.ingredients_2}</li>
              <li>3. {ingredients.ingredients_3}</li>
            </ul>
          </div>
          <div>
            <p>Ratings: {rating}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-success" onClick={()=>handleFavorite(recipe_id)}>Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
