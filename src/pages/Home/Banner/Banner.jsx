import React from "react";
import banner from "../../../../public/burger.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="flex items-center justify-center  banner  bg-gray-50 text-center">
      <div className=" w-full flex items-center flex-wrap">
        <div className="w-1/2 h-56 flex items-center">
          <h1 className="text-white font-semibold text-3xl  ms-10">
            <span className="text-5xl text-cyan-200 cursor-pointer hover:text-purple-700  ">Welcome To Yummy Food Zone</span> 
            <br />
             Find Your Best Food with Reasonable Rrice
          </h1>
      
        </div>
        <div className="w-1/2 text-white">
        <button className="btn w-36  transition duration-300 delay-150 hover:delay-300">See Chef</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// <div  className='max-w-screen-xl mx-auto md:flex  justify-between   md:px-10 h-3/4 bg-gray-50'>
// <div className='w-1/2 mt-32 mx-auto'>
// <h1 className='text-6xl font-bold'>One Step Closer To Your <br />
// <span className='text-sky-700'>Dream Job</span> </h1>
// <p className='mt-12 text-gray-400 text-sm font-medium '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
// <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 mt-8">Get Started</button>

// </div>
// <div className='w-1/2 mx-auto'>
// <img src='' alt=""  className='object-cover' />
// </div>
// , Find Your Best Food with Reasonable Rrice
// </div>
