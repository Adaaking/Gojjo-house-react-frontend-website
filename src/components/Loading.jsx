import React from 'react'
import { ScaleLoader } from 'react-spinners'
const Loading = () => {
  return (
    <div className='bg-red-500 h-full w-full'>
      <ScaleLoader
      size={200}
      color={"green"}
     />
    </div>
  )
}

export default Loading