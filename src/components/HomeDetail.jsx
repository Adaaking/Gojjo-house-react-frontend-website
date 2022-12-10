import React from "react";
import { useEffect } from "react";
import { MdOutlineBathtub } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findById } from "../features/homes/homeSlice";
import avatar from "../images/avatar1.png";

const HomeDetail = () => {
  const params = useParams();
  const home = useSelector((state) => state.homeReducer.home);
  const owner = useSelector((state) => state.homeReducer.homeOwner);
  console.log(owner);
  const dispatch = useDispatch();
  const id = params.id;

  useEffect(() => {
    dispatch(findById(id));
  }, [id,dispatch]);
  return (
    <div className="mx-2">
      {home ? (
        <div>
          <div className="pt-[5rem] grid md:grid-cols-2 gap-2">
            <img
              className="h-[100%] w-full rounded-md hidden sm:block"
              src={home.image.length > 0 ? home.image[0].url : ""}
              alt="home"
            />
            <div className="grid sm:grid-cols-2 gap-2">
              {home.image?.map((image, indx) => (
                <img
                  key={indx}
                  className="w-full h-[100%] object-cover rounded-md"
                  src={image?.url}
                  alt="home"
                />
              ))}
            </div>
          </div>
          <div className="block xl:flex justify-between gap-10 max-w-[1200px] my-[5rem] mx-auto">
            <div className="">
              <h1 className="text-2xl">
                {home.city}, {home.street},{home.subcity},Ethiopia
              </h1>
              <div className="grid grid-cols-3 py-5 md:w-[60%]">
                <div>
                  <h1 className="text-xl">
                    price:{" "}
                    <span className="text-green-600"> {home.price} </span>birr
                  </h1>
                </div>
                <div className="flex justify-center items-center">
                  <IoBedOutline className="text-green-600 mr-3" size={30} />
                  <h1 className="text-xl">{home.bedrooms} beds</h1>
                </div>
                <div className="flex justify-center items-center">
                  <MdOutlineBathtub className="text-green-600 mr-3" size={30} />
                  <h1 className="text-xl bold">{home.bathrooms} baths</h1>
                </div>
              </div>
              <p className="my-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                earum voluptatem, doloremque quis reprehenderit ratione quos
                enim corporis ipsa ullam id dolorum explicabo est quaerat
                adipisci repudiandae non consequuntur? Ut! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Rerum earum voluptatem,
                doloremque quis reprehenderit ratione quos enim corporis ipsa
                ullam id dolorum explicabo est quaerat adipisci repudiandae non
                consequuntur? Ut!
              </p>
              <p className="my-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                earum voluptatem, doloremque quis reprehenderit ratione quos
                enim corporis ipsa ullam id dolorum explicabo est quaerat
                adipisci repudiandae non consequuntur? Ut!
              </p>
            </div>
            <div className=" w-[100%] p-3 bg-slate-200 h-[20rem] rounded-md">
              <div className="flex justify-between items-center gap-2">
                <img
                  className="w-[5rem] h-[5rem] object-cover rounded-[50%]"
                  src={avatar}
                  alt="avatar"
                />
                <div className="mr-2 w-[100%]">
                  <p>name: {owner?.name}</p>
                  <p>email:{owner?.email}</p>
                </div>
              </div>
              <div className="my-5">
                <h1 className="text-3xl mb-2">Address</h1>
                <h1 className="text-xl">city: {home.city}</h1>
                <h1 className="text-xl">subcity: {home.subcity} </h1>
                <h1 className="text-xl">street: {home.street} </h1>
              </div>
              <div className="flex justify-between items-center">
                <button className="p-2 bg-green-600 w-[8rem] text-xl text-center rounded-md  text-white">
                  call
                </button>
                <button className="p-2 bg-green-600 w-[8rem] text-xl text-center rounded-md  text-white">
                  chat
                </button>
              </div>
            </div>
          </div>
          <div className="text-center p-2 mb-10">
            <h1 className="text-3xl mb-4">Have Question ? Get in touch!</h1>
            <p className="mb-6">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
            <button className="bg-green-600 text-white py-2 px-5 rounded-md">
              contact us
            </button>
          </div>
        </div>
      ) : (
        <div className="pt-[5rem]">
          <h1>not found</h1>
        </div>
      )}
    </div>
  );
};

export default HomeDetail;
