import React from 'react'
import { GrPhone } from 'react-icons/gr'
import Slider from './Slider'

const Testimonials = () => {
  return (
    <div className='my-[5rem] py-4'>
      <div className='flex flex-col justify-center items-center lg:w-[80%] m-auto'>
        <div className='text-center p-2'>
          <h1 className='text-3xl mb-4'>What Our Client Say ?</h1>
          <p>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
        </div>
        <Slider/>
        <div className='text-center p-2'>
          <h1 className='text-3xl mb-4'>Have Question ? Get in touch!</h1>
          <p className='mb-6'>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
          <button className='bg-green-600 text-white py-2 px-5 rounded-md'>contact us</button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials