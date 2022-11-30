import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../images/home.gif";
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const initialUser = {email:'',password:''}
const Login = () => {

  const [user, setUser] = useState(initialUser);
  const dispatch = useDispatch()
  const navigate =useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(login(user))
  }
  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const googleSuccess = async (res) =>{
      const result = res?.profileObj;
      const token = res?.tokenId;

      try{

      }catch{

      }
    }
  const googleFailure = () =>{
    console.log("Google sign in is Unsuccessful")
  }


  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="w-full h-[100vh] -[5rem]  z-10 flex flex-col items-center justify-center"
    >
      <div className="bg-white flex flex-col items-center justify-center h-[70%] md:w-[50vh] rounded-md px-10 mx-5 mt-[5rem]">
        <h1 className="text-2xl mb-3 ">Sign in</h1>
        <form  onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">
          <input
            type="text"
            className="border-b border-slate-400 my-3 w-full p-2 focus:outline-green-600"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="border-b border-slate-400 my-3 w-full p-2 focus:outline-green-600"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 w-full py-2 text-white rounded-md my-5"
          >
            Login
          </button>
        </form>
        {/* <div className='w-full mb-5'>
              <button className='bg-orange-600 w-full py-2 rounded-md text-white '>Sign In with Google</button>
            </div> */}

          <div className="w-full">
          <GoogleLogin
          // render={(renderProps) => (
          //   <div className="w-full mb-5">
          //     <button className="bg-orange-600 w-full py-2 rounded-md cursor-pointer text-white" onClick={renderProps.onClick} disabled={renderProps.disabled}>
          //       Sign In with Google
          //     </button>
          //   </div>
          // )}

          onSuccess={googleSuccess}
          onError={googleFailure}
          cookiePolicy="single_host_origin"
        />
          </div>
        <div className="w-full flex items-center justify-between gap-2 mt-3">
          <p>don't you have an account?</p>
          <Link
            to="/signup"
            className="bg-blue-600 py-3 rounded-md text-white w-[6rem] text-center"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
