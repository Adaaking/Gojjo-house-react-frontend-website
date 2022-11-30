import React, { useState } from "react";
import logo from "../images/gojjo-logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import avatar from "../images/avatar1.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const dispatch = useDispatch()

  return (
    <div className="border-b shadow w-full fixed bg-white h-[5rem]  md:border-none md:shadow-none z-10">
      <div className="flex h-full justify-between max-w-[1000px] m-auto items-center">
        <img className="h-[100%]" src={logo} alt="logo" />
        <div className="hidden md:flex px-2 justify-between">
          <ul className="flex justify-between items-center px-2 ">
            <li className=" ml-10 hover:text-green-500">
              <a href="/">Home</a>
            </li>
            <li className=" ml-10 hover:text-green-500">
              <a href="/buy">Buy</a>
            </li>
            <li className=" ml-10 hover:text-green-500">
              <a href="/sell">Sell</a>
            </li>
            <li className=" ml-10 hover:text-green-500">
              <a href="/features">Features</a>
            </li>
            <li className=" ml-10 hover:text-green-500">
              <a href="/contact">Contact</a>
            </li>
          </ul>
          {!user ? (
            <div className="flex p-2 ml-4">
              <Link
                to="/login"
                className="ml-4 p-2 border-none rounded-md bg-green-600 text-white w-[4rem] text-center"
              >
                Signin
              </Link>
              <Link
                to="signup"
                className="ml-4 p-2 border-none rounded-md bg-green-600 text-white w-[4rem] text-center"
              >
                Signup
              </Link>
            </div>
          ) : (
            <div className="ml-5 grid grid-cols-2">
              <Link to='/profile'><img className="object-cover w-[2rem] h-[2rem] rounded-[60%]" src={avatar} alt="" /></Link>
              <button className="ml-2" onClick={() => dispatch(logout())}>logout</button>
            </div>
          )}
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {nav ? (
            <AiOutlineClose className="w-12 text-4xl cursor-pointer" />
          ) : (
            <AiOutlineMenu className="w-12 text-4xl cursor-pointer" />
          )}
        </div>
        <div
          className={`bg-slate-100 absolute top-[5rem]  w-full h-[22.5rem] border-t ${
            !nav && "top-[-100vw]"
          } py-4 px-6 ease-in-out duration-500 md:hidden`}
        >
          <ul className="flex flex-col justify-between px-2">
            <li className=" mb-4 hover:text-green-500">
              <a href="/">Home</a>
            </li>
            <li className=" mb-4 hover:text-green-500">
              <a href="/buy">Buy</a>
            </li>
            <li className=" mb-4 hover:text-green-500">
              <a href="/sell">Sell</a>
            </li>
            <li className=" mb-4 hover:text-green-500">
              <a href="/features">Features</a>
            </li>
            <li className=" mb-4 hover:text-green-500">
              <a href="/contact">Contact</a>
            </li>
          </ul>
          {!user ? (
            <div className="flex flex-col">
              <button className=" mt-4 p-2 border-none rounded-md bg-green-600 text-white w-full sm:w-[50%]">
                Signin
              </button>
              <button className="mt-4 p-2 border-none rounded-md bg-green-600 text-white w-full sm:w-[50%]">
                Signup
              </button>
            </div>
          ) : (
            <div>
              <img src={avatar} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
