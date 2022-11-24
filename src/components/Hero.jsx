import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { heroImages } from "../data";
import hero from '../images/hero2.jpeg'
const Hero = () => {
  const [index,setIndex] = useState(0)
  
  useEffect(() => {
      let slider = setInterval(() => {
        if (index < heroImages.length - 1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }, 5000);
      return () => clearInterval(slider);
  },[index])
  return (
    <div className="text-white w-full h-[800px] flex flex-col justify-center items-center">
      <div className="w-[98%] bg-black/60 absolute h-[85%] rounded-2xl">
        <img
          className="w-full h-full object-cover mix-blend-overlay border rounded-2xl"
          src={heroImages[index]}
          alt=""
        />
      </div>
      <div className="w-[98%] text-white relative flex flex-col justify-start">
        <div className="flex flex-col justify-between">
          <h1 className="ml-0 text-center text-3xl  sm:text-left  sm:ml-[15%] md:text-5xl mb-5">
            We will help you find
          </h1>
          <h1 className="ml-0 text-center text-3xl sm:text-left  sm:ml-[15%]  md:text-5xl mb-5">
            your <span className="text-green-600">Wonderful</span> home
          </h1>
          <p className=" ml-0 px-2 text-center mb-10 sm:text-left sm:ml-[15%] sm:px-0">
            A great plateform to buy, sell and rent your properties without any
            agent or commisions.
          </p>
        </div>
      </div>
      {/* <form className="w-[100%] sm:w-[80%] md:w-[50%] flex justify-between items-center rounded-md shadow-md bg-white px-2 py-2 text-white relative bottom-[-12rem]">
        <div>
          <AiOutlineSearch className="text-black"  size={30}/>
        </div>
        <input placeholder="City,Address,Zip" className="w-full mx-2 focus:outline-none focus:text-black"/>
        <button className="text-white bg-green-600 p-2 rounded-md w-[6rem]" type="submit">
          Search
        </button>
      </form> */}
    </div>
  );
};

export default Hero;
