import React from 'react'
import {MdOutlineRealEstateAgent,MdRealEstateAgent} from 'react-icons/md'
import {SiMeetup} from 'react-icons/si'
import {FaIdeal} from 'react-icons/fa'

const HowItWorks = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='m-10 flex flex-col items-center'>
            <div className='mb-10 text-center px-4 '>
                <h1 className='text-3xl mb-4'>How It Works</h1>
                <p className='text-center'>A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
            </div>
            <div className='h-full grid md:grid-cols-3 gap-10 max-w-[1000px]'>
                <div className='text-center px-6 py-6'>
                    <div className='flex justify-center'>
                    <MdRealEstateAgent className='text-green-600' size={50}/>
                    </div>
                    <h1 className='text-2xl my-5'>Evaluate Property</h1>
                    <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                </div>
                <div className='text-center px-6 py-6'>
                    <div className='flex justify-center'>
                       <SiMeetup className='text-green-600' size={50}/>
                    </div>
                    <h1 className='text-2xl my-5'>Meeting With Agents</h1>
                    <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                </div>
                <div className='text-center px-6 py-6'>
                   <div className='flex justify-center'>  
                       <FaIdeal className='text-green-600' size={50}/>
                    </div>
                    <h1 className='text-2xl my-5'>Close Deal</h1>
                    <p>If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks