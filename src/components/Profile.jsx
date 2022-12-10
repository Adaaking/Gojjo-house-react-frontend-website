import React from "react";
import Chat from "./Chat";
import Conversation from "./Conversation";
import CreatePost from './CreatePost'
import UserPosts from "./UserPosts";

const Profile = () => {
  return (
    <div className=" max-w-[1000px] m-auto ">
      <div className="flex flex-col-reverse fle sm:grid sm:grid-cols-2  gap-6">
        <div className="mt-[6rem] mb-8">
          <UserPosts/>
        </div>
        <div className="mt-[6rem] py-3 flex justify-end flex-grow-0 items-start mb-10">
          <CreatePost/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
