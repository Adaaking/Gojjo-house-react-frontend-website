import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteHome, getHomes,homeAcrions } from "../features/homes/homeSlice";
import Loading from "./Loading";

const UserPosts = () => {
  const user = useSelector(state => state.auth.user)
  const isLoading = useSelector(state=> state.homeReducer.isLoading)
  const homes = useSelector(state => state.homeReducer.homes.filter(home => home.creator === user.user?._id))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomes())
  },[dispatch])

  
  return (
    <div>
      {isLoading && <Loading/>}
      <div className="px-2 grid gap-6">
        {homes && homes.map((home, indx) => (
          <div
            key={indx}
            className="w-[100%] mb-2 border rounded-md border-gray-200"
          >
            <div>
              <img
                className="h-[30vh] w-full object-cover rounded-t-md "
                src={home.image[0]?.url}
                alt=""
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl mb-3">{home.price} birr/month</h1>
              <p className="mb-4">
                {home.subcity},{home.street},{home.city}, Ethiopia
              </p>
              <hr />
              <div className="flex justify-between mt-5">
               <div className="flex">
               <div className="flex flex-col justify-center mr-10">
                  <p className="flex items-center">
                    <IoBedOutline className="text-green-600" size={20} />
                    <span className="ml-3">{home.bedrooms}</span>,
                  </p>
                  <p className="text-xs">Bedrooms</p>
                </div>
                <div className="flex flex-col justify-center mr-6">
                  <p className="flex items-center">
                    <GiBathtub className="text-green-600" size={20} />
                    <span className="ml-3">{home.bathrooms}</span>
                  </p>
                  <p  className="text-xs">Bathrooms</p>
                </div>
               </div>
                <div className="flex ">
                  <button className="p-2 w-[5rem] bg-blue-600 text-white rounded-md" onClick={() => dispatch(homeAcrions.setUpdateId(home._id))}>edit </button>
                  <button className="ml-6 p-2 w-[5rem] bg-red-600 text-white rounded-md"

                  onClick={() => dispatch(deleteHome(home._id))}
                  >delete</button>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </div>
      {homes.length===0&&<div className="flex mt-[5rem] justify-center h-screen">
        <h1 className="text-3xl">you don't have posts yet</h1>
      </div>}
    </div>
  );
};

export default UserPosts;
