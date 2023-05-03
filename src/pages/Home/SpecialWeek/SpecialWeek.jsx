import React, { useEffect, useState } from "react";
import './Special.css'
const SpecialWeek = () => {
  const [specialData, setAllSpecialData] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-simantasarker.vercel.app/special")
      .then((res) => res.json())
      .then((data) => setAllSpecialData(data));
  }, []);
  return (
    <>
    <h1 className="text-center week text-5xl text-red-600">This Week Special</h1>
    <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mt-4 p-10 about">

      {specialData.map((singleData) => (
        <div className="" key={singleData.id}>
          <div className="overflow-hidden relative  hover:translate-y-2 transition duration-200">
            <img
              src={singleData.image}
              alt="book cover"
              className="object-cover"
            />
            <div className="bg-black bg-opacity-75 opacity-0 hover:opacity-100 cursor-pointer  transition-opacity duration-200  text-white h-full w-full absolute top-0 flex flex-col items-center justify-center rounded">
              <p className="p-2 text-3xl">For a Sweet Treat</p>
              <br />
              <p className="p-2">A sweet treat is a delightful indulgence that can satisfy your cravings for something sugary and delicious. It can come in a variety of forms, such as a pastry, a cookie, a cake, or a candy. Sweet treats are often made with a combination of sugar, flour, butter, eggs, and other ingredients that give them their unique flavor and texture..</p>
              <br />
              <p className="p-2">
              <button className="btn btn-outline btn-success">Read More</button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default SpecialWeek;
