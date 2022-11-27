import React from "react";

const CreatePost = () => {


  return (
    <div className="bg-white w-full border border-slate-300 rounded-md m-auto p-5 md:w-[50vh] ">
      <h1 className="text-2xl text-center my-2">Create your post here</h1>
      <form className="px-2">
        <input  className="border p-2 rounded-md w-full focus:outline-green-600  my-3" placeholder="city"  required/>
        <input className="border p-2 rounded-md w-full focus:outline-green-600  my-3"  placeholder="subcity"  required/>
        <input className="border p-2 rounded-md w-full focus:outline-green-600  my-3"  placeholder="street" required />
        <input className="border p-2 rounded-md w-full focus:outline-green-600  my-3"  type="number" placeholder="price" required />
        <input className="border p-2 rounded-md w-full focus:outline-green-600  my-3"  type="number" placeholder="phone number"  required/>
        <input className="border p-2 rounded-md w-full focus:outline-green-600  my-3"  type="file" placeholder="choose file" required />
        <button className="bg-green-600 py-2 my-2 rounded-md w-full text-white text-center text-xl" type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
