import React from 'react'
import logo from '../images/gojjo-logo.png'
import {SlSocialFacebook} from 'react-icons/sl'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'
import {FiLinkedin} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='bg-[#000316] p-10 text-white'>
        <div className='w-full lg:w-[80%] grid lg:grid-cols-2 gap-6 m-auto'>
            <div>
                <img className='w-[5rem] h-[5rem] object-fit rounded-[50%] mb-3' src={logo} alt=""/>
                <p className=''>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
            </div>
            <div className='grid sm:grid-cols-3 gap-4'>
                <div>
                    <h1 className="mb-2 text-xl">company</h1>
                    <ul>
                        <li className='py-1'>About us</li>
                        <li className='py-1'>Services</li>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Login</li>
                        <li className='py-1'>Signup</li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-2 text-xl">Usefull Links</h1>
                    <ul>
                        <li  className='py-1'>Terms of Services</li>
                        <li  className='py-1'>Privacy of Services</li>
                        <li  className='py-1'>Listing</li>
                        <li  className='py-1'>Contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-2 text-xl">Contact Details</h1>
                    <ul>
                        <li  className='py-1'>Terms of Services</li>
                        <li  className='py-1'>Privacy of Services</li>
                        <li  className='py-1'>Listing</li>
                        <li  className='py-1'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className='m-6'/>
        <div className='flex justify-around'>
            <div>
                <p>© 2022 Gojjo. developed by Addisu Motora.</p>
            </div>
            <div className='flex'>
                <div className='hover:bg-green-600 rounded-sm flex items-center p-2 border border-slate-600 mr-2'>
                   <SlSocialFacebook className='' size={20}/>
                </div>
                <div className='hover:bg-green-600 rounded-sm flex items-center p-2 border border-slate-600 mr-2'>
                   <AiOutlineInstagram className='' size={20}/>
                </div>
               <div className='hover:bg-green-600 rounded-sm flex items-center p-2 border border-slate-600 mr-2'>
                 <CiTwitter  className='' size={20}/>
               </div>
                <div className='hover:bg-green-600 rounded-sm flex items-center p-2 border border-slate-600 mr-2'>
                  <FiLinkedin className='' size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer