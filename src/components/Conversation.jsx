import React from 'react'
import { Link } from "react-router-dom";
import proImage from '../images/proImage.jpg'
const Conversation = () => {
  return (
    <div className=' border flex flex-col items-center justify-center p-4 m-auto w-[50vh]'>
        <div>
            <div className='flex justify-center'>
            <img className='w-[5rem] h-[5rem] object-cover rounded-[50%]' src={proImage} alt=""/>
            </div>
            <Link className=''>
               <h1 className='w-[30%] text-center my-5 text-blue-600 border-b-2  border-blue-600 mx-auto'>Addisu Motora</h1>
            </Link>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. quia, rem recusandae unde optio cupiditate possimus enim? Sint, fuga inventore.</p>
            <div className='my-5 flex flex-col items-center'>
              <h1 className='mb-2 text-2xl'>Conversations</h1>
              <div className='flex items-center my-3 border-b-2  w-[80%] p-1 hover:bg-slate-200 cursor-pointer rounded-md'>
                <img className='w-[3rem] h-[3rem] object-cover rounded-[50%] mr-4'  src={proImage} />
                <h1>abebe kefeni</h1>
              </div>
              <div className='flex items-center my-3 border-b-2 w-[80%] p-1 hover:bg-slate-200 cursor-pointer rounded-md'>
                <img className='w-[3rem] h-[3rem] object-cover rounded-[50%] mr-4'  src={proImage} />
                <h1>abebe kefeni</h1>
              </div>
              <div className='flex items-center my-3 border-b-2  w-[80%] p-1 hover:bg-slate-200 cursor-pointer rounded-md'>
                <img className='w-[3rem] h-[3rem] object-cover rounded-[50%] mr-4'  src={proImage} />
                <h1>abebe kefeni</h1>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Conversation