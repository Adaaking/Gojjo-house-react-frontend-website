import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createHome } from "../features/homes/homeSlice";
const inintialData = {
  city: "",
  subcity: "",
  street: "",
  price: "",
  bedrooms:'',
  bathrooms:'',
  phoneNumber: "",
  type:'',
  desc:''
};
const CreatePost = () => {
  const user = useSelector((state) => state.auth.user);
  const {isSuccess,message} = useSelector(state=> state.homeReducer)
  const [homeData, setHomeData] = useState(inintialData);

  let images = []
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setHomeData({ ...homeData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    e.preventDefault()
    const files = e.target.files
    console.log(files)
    for(let i=0; i < files.length; i++){
      console.log(files[i])
       TransformFileData(files[i])
    }
  };

  const TransformFileData = (file) => {
    const reader = new FileReader()
    if(file){
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        images.push(reader.result)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createHome({ ...homeData, creator: user.user._id, images }));
  };

  return (
    <div className=" w-full border border-slate-300 rounded-md p-5 md:w-[50vh]">
      <h1 className="text-2xl text-center my-2">Create your post here</h1>
      <form className="px-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="city"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            placeholder="city"
            required
            onChange={handleChange}
          />
          <input
            name="subcity"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            placeholder="subcity"
            required
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="street"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            placeholder="street"
            required
            onChange={handleChange}
          />
          <input
            name="price"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            type="number"
            placeholder="price"
            required
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
            onChange={handleChange}
          />
          <input
            name="bathrooms"
            className="border p-2 rounded-md w-full focus:outline-green-600  my-3"
            type="number"
            placeholder="bathrooms"
            required
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
          onChange={handleChange}
        />
        <select name="type" className="bg-white border focus:outline-green-600 h-10 items-center my-3 px-2" onChange={handleChange} required>
          <option >select</option>
          <option value='forRent'>for rent</option>
          <option value="forSell">for sell</option>
        </select>
        </div>
        <textarea name="desc" className="border p-2 rounded-md w-full focus:outline-green-600 my-2" placeholder="description" onChange={handleChange}></textarea>
        <input
          name="image"
          className="border p-2 rounded-md w-full focus:outline-green-600 mb-2"
          type="file"
          placeholder="choose file"
          required
          multiple
          onChange={handleImage}
        />
        <button
          className="bg-green-600 py-2 my-2 rounded-md w-full text-white text-center text-xl"
          type="submit"
        >
          submit
        </button>
        <p className="text-red-600">{message&& message}</p>
      </form>
    </div>
  );
};
export default CreatePost;
