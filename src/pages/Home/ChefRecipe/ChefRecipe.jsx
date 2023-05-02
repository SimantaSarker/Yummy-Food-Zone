import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecipe = () => {
  const chefRecipes = useLoaderData();
  const { id } = useParams();
  const {
    chefPicture,
    chefName,
    description,
    likes,
    numberOfRecipes,
    yearsOfExperience,
  } = chefRecipes;
  console.log(chefRecipes);
  return (
    <div className="hero min-h-screen bg-base-200 about">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img
            src={chefPicture}
            className="max-w-sm rounded-lg shadow-2xl w-full"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">{chefName}</h1>
          <p className="py-6">
            <span className="text-indigo-800 text-2xl font-semibold">
              About Chef :
            </span>{" "}
            {description}
          </p>
          {/* <p className="mb-2 text-xl">
            <span className="text-indigo-800 text-xl font-semibold ">
              Number of Recipes :
            </span>{" "}
            {numberOfRecipes}
          </p> */}

          <div className="alert  shadow-lg w-[60%] font-semibold text-xl my-3">
            <div>
              <span>Number of Recipes: {numberOfRecipes}</span>
            </div>
          </div>

          <div className="alert  shadow-lg w-[60%] font-semibold text-xl my-3">
            <div>
              <span>Years Of Experience: {yearsOfExperience}</span>
            </div>
          </div>
          <div className="alert  shadow-lg w-[60%] font-semibold text-xl">
            <div>
              <span>Likes: {likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
