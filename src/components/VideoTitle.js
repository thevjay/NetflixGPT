import React from 'react'
import { IoPlay } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";



const VideoTitle = ({Title,overview}) => {
  return (
    <div className='w-screen aspect-video px-24 pt-[20%] absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{Title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='flex space-x-2'>
        <button className='bg-white text-black p-4 px-12 text-xl flex items-center rounded-sm hover:bg-opacity-80'>
            <IoPlay />
            Play
        </button>
        <button className='bg-gray-600 text-white p-4 px-12 text-xl flex items-center opacity-50 rounded-sm hover:bg-opacity-80'>
            <IoMdInformationCircleOutline />
            More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
