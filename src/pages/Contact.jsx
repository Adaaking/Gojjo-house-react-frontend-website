import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import contactImg from '../images/contact.svg'
const Contact = () => {
  return (
    <div className="pt-[5rem]">
      <div className="grid sm:grid-cols-2 max-w-[1200px] gap-20 p-3  m-auto">
        <div className="h-full w-full">
          <img className="w-full h-full object-cover" src={contactImg} alt="" />
        </div>
        <div className="border border-slate-400 h-auto  p-6 flex flex-col justify-center rounded md:max-w-[60vh]">
          <h1 className="text-3xl my-3">Get in touch!</h1>
          <form className="w-full h-full ">
            <div className="grid grid-cols-2 gap-4">
              <div className="my-2">
                <label htmlFor="name" className='mb-2'>Your Name:</label>
                <input className="border border-slate-400 p-2 w-full rounded-sm my-3 focus:outline-green-600" id="email" placeholder="Name:"  />
              </div>
              <div className="my-2">
                <label htmlFor="email" className='my-2'>Your Email:</label>
                <input className="border border-slate-400 p-2 w-full rounded-sm my-3 focus:outline-green-600" id="email" placeholder="Name:" />
              </div>
            </div>
            <div className="my-2">
            <label htmlFor="subject" className='my-2'>Your Subject:</label>
            <input className="border border-slate-400 p-2 w-full rounded-sm my-3 focus:outline-green-600" id="subject" placeholder="Subject:" />
            </div>
            <div className="my-2">
              <label htmlFor="message" className='my-2'>Your comment:</label>
              <textarea className="border border-slate-400 p-2 w-full rounded-sm my-3 focus:outline-green-600" id="message"placeholder="Message"  rows="4"></textarea>
            </div>
            <button type="submit" className="bg-green-600 p-3 rounded-md text-white w-[10rem]">Send Message</button>
          </form>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 max-w-[1000px] m-auto my-20">
        <div className="flex flex-col items-center p-3">
            <BsTelephone className="text-green-600 mb-5" size={40}/>
            <h1 className="text-2xl">Phone</h1>
            <p className="text-center my-6">The phrasal sequence of the is now so that many campaign and benefit</p>
            <p className="text-green-700 hover:border-b border-green-600">+251 961 43 91 85</p>
        </div>
        <div className="flex flex-col items-center p-3">
            <AiOutlineMail className="text-green-600 mb-5" size={40}/>
            <h1 className="text-2xl ">Email</h1>
            <p className="text-center my-6">The phrasal sequence of the is now so that many campaign and benefit</p>
            <p style={{ 
            }} className="text-green-700 hover:border-b border-green-600">addisumotora3@gmail.com</p>
        </div>
        <div className="flex flex-col items-center p-3">
            <GoLocation className="text-green-600 mb-5" size={40}/>
            <h1 className="text-2xl">Location</h1>
            <p className="text-center my-6"> Addis Ababa University, 5 kilo Campus , Addis Ababa, Ethiopia</p>
            <p className="text-green-700 hover:border-b border-green-600">+251 961 43 91 85</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
