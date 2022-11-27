import React from "react";
import proImage from '../images/proImage.jpg'
const Chat = () => {
  return (
    <div className="border h-[80vh] overflow-y-scroll flex flex-col justify-between">
      <div className="flex items-center my-3 bg-slate-300  p-1 hover:bg-slate-200 cursor-pointer rounded-md">
        <img
          className="w-[3rem] h-[3rem] object-cover rounded-[50%] mr-4"
          src={proImage}
        />
        <h1>abebe kefeni</h1>
      </div>
      <div className="flex flex-col it h-full">
        <div className="w-auto flex-start">
        <div className="p-2 bg-blue-500 w-auto">
            <h1>hello</h1>
        </div>
        <div className="flex ">
            <h1>hello</h1>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
