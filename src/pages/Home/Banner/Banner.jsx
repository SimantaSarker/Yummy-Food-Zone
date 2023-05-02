import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="flex items-center justify-center  banner  bg-gray-50 text-center">
      <div className=" w-full flex items-center flex-wrap">
        <div className="w-1/2 h-56 flex items-center">
          <h1 className="text-white font-semibold text-3xl  ms-10">
            <span className="text-5xl text-cyan-200 cursor-pointer hover:text-purple-700  ">Welcome To Yummy Food Zone</span> 
         
             <p className="mt-3">Find Your Best Food with Reasonable Rrice</p>
          </h1>
      
        </div>
        <div className="w-1/2 ">
        <button className="bg-white  btn btn-outline btn-primary border-none">See Chef</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;


