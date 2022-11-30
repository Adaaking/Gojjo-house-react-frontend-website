import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import forsell from '../images/hero2.jpeg'

const ForsellHero = () => {
  return (
    <div className="text-white w-full h-[500px] flex flex-col justify-center items-center mb-10">
      <div className="w-full bg-black/60 absolute h-[85%]">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={forsell}
          alt=""
        />
      </div>
      {/* <div className="w-full text-white relative flex flex-col"> */}
        <div className="flex flex-col justify-center items-center text-white relative">
          <h1 className="ml-0 text-center text-3xl  sm:text-left   md:text-5xl mb-5 ">
          Find Your Dream Home
          </h1>
        </div>
      {/* </div> */}
      <form className="w-[100%] sm:w-[80%] md:w-[45%] flex justify-between items-center rounded-md shadow-md bg-white px-2 py-2 text-white relative bottom-[-17rem]">
        <div>
          <AiOutlineSearch className="text-black"  size={30}/>
        </div>
        <input placeholder="City,Address,Zip" className="w-full mx-2 focus:outline-none focus:text-black"/>
        <button className="text-white bg-green-600 p-2 rounded-md w-[6rem]" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default ForsellHero;
