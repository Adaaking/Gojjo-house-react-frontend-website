import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { tempFeaturedData } from "../data";
import { GiBathtub } from "react-icons/gi";

const UserPosts = () => {
  return (
    <div>
      <div className="px-2 grid grid-cols-2 gap-6 max-w-[1200px]">
        {tempFeaturedData.map((forsell, indx) => (
          <div
            key={indx}
            className="w-[100%] mb-2 border rounded-md border-gray-200"
          >
            <div>
              <img
                className="h-[40vh] w-full object-cover rounded-md"
                src={forsell.image}
                alt=""
              />
            </div>
            <div className="p-4">
              <h1 className="text-2xl mb-3">{forsell.price} birr/month</h1>
              <p className="mb-4">
                {forsell.subcity},{forsell.street},{forsell.city}, Ethiopia
              </p>
              <hr />
              <div className="flex mt-5">
                <div className="flex flex-col justify-center mr-10">
                  <p className="flex items-center">
                    <IoBedOutline className="text-green-600" size={30} />{" "}
                    <span className="ml-3 text-xl">{forsell.bedrooms}</span>,
                  </p>
                  <p>Bedrooms</p>
                </div>
                <div className="flex flex-col justify-center mr-6">
                  <p className="flex items-center">
                    <GiBathtub className="text-green-600" size={30} />{" "}
                    <span className="ml-3 text-xl">{forsell.bathrooms}</span>
                  </p>
                  <p>Bathrooms</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
