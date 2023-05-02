import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {

  const [chefs,setChefs]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/chefs')
    .then((res)=>res.json())
    .then((data)=>setChefs(data))
  },[])

  console.log(chefs)

  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 m-auto p-2 '>
      {
        chefs.map((chef)=><ChefCard key={chef.chefId} chef={chef}></ChefCard>)
      }
    </div>
  );
};

export default Chef;