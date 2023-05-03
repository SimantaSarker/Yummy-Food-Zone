import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    chefName,
    chefPicture,
    likes,
    numberOfRecipes,
    yearsOfExperience,
    chefId,
  } = chef;
  return (
    <div className="card  bg-base-100 shadow-xl about">
      <figure className="h-4/5">
        <img src={chefPicture} alt="Shoes" className="h-full rounded " />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-3xl">
          {chefName}
          <div className="badge badge-secondary p-4">Likes: {likes}</div>
        </h2>
        {/* <p className="text-xl font-semibold"> Experience: {yearsOfExperience}</p> */}
        <div className="card-actions  mt-4 flex-wrap">
          <div className="badge  badge-outline badge-lg cursor-pointer text-xl p-3 text-center">
            Number of Recipes : {numberOfRecipes}
          </div>
          <div className="badge  badge-outline badge-lg cursor-pointer text-xl p-3">
            Experience: {yearsOfExperience}
          </div>
          <div className="text-start mt-4 ">
            <Link to={`/chefRecipe/${chefId}`}>
              <button className="btn btn-outline btn-primary  ">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
