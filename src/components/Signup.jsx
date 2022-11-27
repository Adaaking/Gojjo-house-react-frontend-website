import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import bgImage from '../images/home.gif'
import { signUp } from "../redux/features/authSlice";

const initialState = { firstName:'',lastName:'', email:'',password:''}
const Signup = () => {
  const [formData,setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(signUp(formData))
      navigate('/')
    } catch (error) {
      navigate('/contact')
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]:e.target.value})
  }
  return (
    <div style={{backgroundImage: `url(${bgImage})`}} className="w-full h-[100vh] -[5rem] bg-black/70 z-10 flex flex-col items-center justify-center">
      <div className="bg-white flex flex-col items-center justify-center h-[70%] md:w-[50vh] rounded-md px-10 mx-5 mt-[5rem]">
        <h1 className="text-2xl mb-3 ">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-2 gap-3">
            <input
              name="firstName"
              className="border-b border-slate-400 my-3 w-full p-2 focus:outline-green-600"
              placeholder="first name"
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              className="border-b border-slate-400 my-3 w-full p-2 focus:outline-green-600"
              placeholder="last name"
              onChange={handleChange}
              required
            />
          </div>

          <input
            name="email"
            className="border-b border-slate-400 my-3 w-full p-2 focus:outline-green-600"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            className="border-b border-slate-400 my-3 w-full p-2 focus:outline-green-600"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 w-full py-2 text-white rounded-md my-5"
          >
            Regiter
          </button>
        </form>
        <div className="w-full flex items-center justify-between gap-2 mt-3">
            <p>do you have an account?</p>
          <Link to="/login" className="bg-orange-600 py-3 rounded-md text-white w-[6rem] text-center">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
