import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { tempFeaturedData } from "../data";
import { GiBathtub } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserPosts } from "../features/homes/homeSlice";
import { useState } from "react";

const UserPosts = () => {
  const user = useSelector(state => state.auth.user)
  const userPosts = useSelector(state => state.homeReducer.userPosts)

  const [id,setId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserPosts(user?.user._id))
  },[dispatch,user])

  return (
    <div>
      <div className="px-2 grid gap-6">
        {userPosts? userPosts?.map((forsell, indx) => (
          <div
            key={indx}
            className="w-[100%] mb-2 border rounded-md border-gray-200"
          >
            <div>
              <img
                className="h-[30vh] w-full object-cover rounded-t-md "
                src={forsell.image[0]?.url}
                alt=""
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl mb-3">{forsell.price} birr/month</h1>
              <p className="mb-4">
                {forsell.subcity},{forsell.street},{forsell.city}, Ethiopia
              </p>
              <hr />
              <div className="flex justify-between mt-5">
               <div className="flex">
               <div className="flex flex-col justify-center mr-10">
                  <p className="flex items-center">
                    <IoBedOutline className="text-green-600" size={20} />{" "}
                    <span className="ml-3">{forsell.bedrooms}</span>,
                  </p>
                  <p className="text-xs">Bedrooms</p>
                </div>
                <div className="flex flex-col justify-center mr-6">
                  <p className="flex items-center">
                    <GiBathtub className="text-green-600" size={20} />{" "}
                    <span className="ml-3">{forsell.bathrooms}</span>
                  </p>
                  <p  className="text-xs">Bathrooms</p>
                </div>
               </div>
                <div className="flex ">
                  <button className="p-2 w-[5rem] bg-blue-600 text-white rounded-md">edit </button>
                  <button className="ml-6 p-2 w-[5rem] bg-red-600 text-white rounded-md">delete</button>
                </div>
              </div>
            </div>
          </div>
        )):

         <div className="h-full flex justify-center bg-red-600">
          <h1>you have no posts yet</h1>
         </div>
        }
      </div>
    </div>
  );
};

export default UserPosts;
