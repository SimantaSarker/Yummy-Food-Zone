import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import './Chef.css'
const Chef = () => {

  const [chefs,setChefs]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/chefs')
    .then((res)=>res.json())
    .then((data)=>setChefs(data))
  },[])


  return (
  <div>
    <div className='chef text-center'>
      <p className='text-2xl mt-3 mb-4 text-blue-600'>Our Team Of Professionals </p>
    <h1 className='text-5xl'>Meet Our Expert Chefs,We Love Our Chefs</h1>

    </div>
    <hr className='border-4 border-blue-200 w-1/2 mx-auto mb-9 mt-6' />
      <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 m-auto p-2 '>
      {
        chefs.map((chef)=><ChefCard key={chef.chefId} chef={chef}></ChefCard>)
      }
    </div>
  </div>
  );
};

export default Chef;