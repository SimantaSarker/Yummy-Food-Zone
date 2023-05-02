import React from "react";

const ChefCard = ({ chef }) => {
  const { chefName, chefPicture, likes, numberOfRecipes } = chef;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={chefPicture}
          alt="Shoes" className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
