import React from "react";
import first from "../../../../public/first.jpg";
import third from "../../../../public/third.jpg";
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-2 p-12 gap-7 about ">
      <div className="gap-4 flex">
        <div className="w-1/2">
          <img src={first} alt="" className="h-full object-cover rounded" />
        </div>
        <div className="w-1/2  flex flex-col gap-3">
          <div>
            <img src={third} alt="" className="object-cover rounded" />
          </div>
          <div>
            <img src={third} alt="" className=" object-cover  rounded" />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center text-xl">
        <div>
          <h1 className="text-black">About Us</h1>
          <hr className="border-4 border-black mt-4 mb-4 " />
          <p>
            Our expert chef has years of experience and a passion for creating
            delectable dishes that are sure to satisfy your cravings. We take
            pride in using only the freshest and highest quality ingredients to
            ensure that our recipes are not only delicious but also healthy.
            From classic comfort food to exotic international cuisine, our chef
            has created an extensive collection of recipes that cater to every
            palate and occasion. Our recipes are carefully crafted to be easy to
            follow, with clear instructions and helpful tips to ensure that even
            novice cooks can whip up impressive dishes.
          </p>
          <div className="text-start mt-4">
          <button className="btn btn-outline btn-secondary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
