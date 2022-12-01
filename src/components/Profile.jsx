import React from "react";
import Chat from "./Chat";
import Conversation from "./Conversation";
import CreatePost from './CreatePost'
import UserPosts from "./UserPosts";

const Profile = () => {
  return (
    <div className=" max-w-[1000px] m-auto ">
      
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-2  gap-6">
        <div className="mt-[6rem] overflow-hidden h-[100vh] overflow-y-scroll scroll-smooth  ">
          <UserPosts/>
        </div>
        <div className="mt-[6rem] py-3 grid-column-start">
          <CreatePost/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
