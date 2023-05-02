import React from "react";

const ChefCard = ({ chef }) => {
  const { chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience,chefId } =
    chef;
  return (
    <div className="card  bg-base-100 shadow-xl about">
      <figure className="h-4/5">
        <img src={chefPicture} alt="Shoes" className="h-full rounded " />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-3xl">
          {chefName}
          <div className="badge badge-secondary">Likes: {likes}</div>
        </h2>
        <p className="text-xl font-semibold">Years Of Experience: {yearsOfExperience}</p>
        <div className="card-actions items-center justify-between mt-4">
          <div className="badge badge-primary badge-outline badge-lg cursor-pointer text-xl p-3">
            Number of Recipes : {numberOfRecipes}
          </div>
          <div className="badge badge-primary badge-outline badge-lg cursor-pointer text-xl p-4">
            Likes:{likes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
