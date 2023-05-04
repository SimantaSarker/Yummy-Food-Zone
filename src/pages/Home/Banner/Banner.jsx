import React from "react";
import Marquee from "react-fast-marquee";
import "./Banner.css";
const Banner = () => {
  
  return (
    <div className="flex items-center justify-center  banner text-center">
      <div className="flex items-center flex-col w-full">
        <div className=" h-56 flex w-full">
         
          <Marquee speed={50} direction="right" pauseOnHover="true">
          <h1 className=" font-semibold text-purple-950 ">
            <span className="cursor-pointer text-5xl ">Welcome To Yummy Food Zone</span> 
             <p className=" text-2xl mt-6 ">Find Your Best Food with Reasonable Rrice</p>
          </h1>

        </Marquee>
      
        </div>
        <div className=" ">
        <button className=" btn btn-secondary border-none w-full">See Chef</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;


