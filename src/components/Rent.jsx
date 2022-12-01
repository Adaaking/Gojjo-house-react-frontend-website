import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { tempFeaturedData } from "../data";
import {GiBathtub} from 'react-icons/gi'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomes } from '../features/homes/homeSlice';

const Rent = () => {
  const homes = useSelector(state => state.homeReducer.forRent)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomes())
  },[dispatch])
  return (
    <div className="mb-20">
    <div className="flex flex-col items-center justify-between mt-[5rem]">
      <div className="text-center mb-10">
        <h1 className="text-3xl mb-3 ">Featured Properties</h1>
        <p className="mx-10 my-4">
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>
      </div>
      <div className="px-2 grid md:grid-cols-3 gap-6 max-w-[1200px]">
        {homes.map((forsell, indx) => (
          <div key={indx} className="w-[100%] mb-2 border rounded-md border-gray-200">
            <div>
              <img
                className="h-[40vh] w-full object-cover rounded-md"
                src={forsell.image[0]?.url}
                alt=""
              />
            </div>
            <div className="p-4">
                <h1 className="text-2xl mb-3">{forsell.price} birr/month</h1>
                <p className="mb-4">
                  {forsell.subcity},{forsell.street},{forsell.city}, Ethiopia
                </p>
              <hr/>
              <div className="flex mt-5">
                  <div className="flex flex-col justify-center mr-10">
                      <p className="flex items-center"><IoBedOutline className="text-green-600" size={30}/> <span className="ml-3 text-xl">{forsell.bedrooms}</span>,</p> 
                      <p>Bedrooms</p>
                  </div>
                  <div className="flex flex-col justify-center mr-6">
                    <p className="flex items-center"><GiBathtub className="text-green-600" size={30}/> <span className="ml-3 text-xl">{forsell.bathrooms}</span></p>
                    <p>Bathrooms</p>
                  </div>
              </div>              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Rent