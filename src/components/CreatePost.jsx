import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createHome,
  getHomes,
  getUserPosts,
  homeAcrions,
  updateHome,
} from "../features/homes/homeSlice";

const CreatePost = () => {
  const user = useSelector((state) => state.auth.user);
  const currentId = useSelector((state) => state.homeReducer.currentUpdateId);
  const post = useSelector((state) =>
    state.homeReducer.userPosts.find((home) => home._id === currentId)
  );
  const { error, message } = useSelector((state) => state.homeReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [homeData, setHomeData] = useState({
    city: "",
    subcity: "",
    street: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    phoneNumber: "",
    type: "",
    desc: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setHomeData(post);
    }
  }, [currentId, post, dispatch]);


  let images = [];
  const handleChange = (e) => {
    e.preventDefault();
    setHomeData({ ...homeData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    e.preventDefault();
    const files = e.target.files;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      TransformFileData(files[i]);
    }
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        images.push(reader.result);
      };
    }
  };

  const clear = () => {
    setHomeData({ city: "",subcity: "",street: "",price: "",bedrooms: "",bathrooms: "",phoneNumber: "",type: "",desc: "",})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      if (currentId) {
        await dispatch(updateHome({currentId, homeData}));
        dispatch(homeAcrions.setUpdateid(null))
      } else {
        await dispatch(createHome({ ...homeData, creator: user.user._id, images }));
      }
      clear()
      dispatch(getUserPosts(user.user._id))
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  };

  return (
    <div className=" w-full border border-slate-300 rounded-md p-5 md:w-[50vh] sticky top-[5rem]">
      <h1 className="text-2xl text-center my-2">Create your post here</h1>
      <form className="px-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="city"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            placeholder="city"
            required
            value={homeData.city}
            onChange={handleChange}
          />
          <input
            name="subcity"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            placeholder="subcity"
            required
            value={homeData.subcity}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="street"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            placeholder="street"
            required
            value={homeData.street}
            onChange={handleChange}
          />
          <input
            name="price"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            type="number"
            placeholder="price"
            required
            value={homeData.price}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="bedrooms"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            type="number"
            placeholder="bedrooms"
            required
            value={homeData.bedrooms}
            onChange={handleChange}
          />
          <input
            name="bathrooms"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            type="number"
            placeholder="bathrooms"
            required
            value={homeData.bathrooms}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="phoneNumber"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            type="number"
            placeholder="phone number"
            required
            value={homeData.phoneNumber}
            onChange={handleChange}
          />
          <select
            name="type"
            className="bg-white border focus:outline-green-600 h-10 items-center my-3 px-2"
            onChange={handleChange}
            required
            value={homeData.type}
          >
            <option>select</option>
            <option value="forRent">for rent</option>
            <option value="forSell">for sell</option>
          </select>
        </div>
        <textarea
          name="desc"
          className="border p-2 rounded-md w-full focus:outline-green-600 my-2"
          placeholder="description"
          onChange={handleChange}
          value={homeData.desc}
        ></textarea>
        <input
          name="image"
          className="border p-2 rounded-md w-full focus:outline-green-600 mb-2"
          type="file"
          placeholder="choose file"
          multiple
          // value={homeData.image.map((img) => img.public_id)}
          onChange={handleImage}
        />
        <p className={`${error ? "text-red-600 my-3" : "text-green-600"}`}>
          {message && message}
        </p>
        <button
          className="bg-green-600 py-2 my-2 rounded-md w-full text-white text-center text-xl"
          type="submit"
        >
          {isLoading ? "submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
